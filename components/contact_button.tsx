'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type ContactButtonProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
  label?: string;
  overrideToken?: string | null; // Manually passed token (v2)
  onRequireV2?: () => void;      // Trigger to show v2 challenge
};

const ContactButton: React.FC<ContactButtonProps> = ({
  formRef,
  label = 'Send Message',
  overrideToken,
  onRequireV2
}) => {
  const [loading, setLoading] = useState(false);
  const [v2Triggered, setV2Triggered] = useState(false); // Auto-submit after v2 completes

  // Re-run form submission automatically after v2 completes
  useEffect(() => {
    if (v2Triggered && overrideToken) {
      submitForm(); // call inner function
      setV2Triggered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overrideToken, v2Triggered]);

  const submitForm = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    const recaptchaToken = overrideToken ?? payload['g-recaptcha-response'];
    if (!recaptchaToken || typeof recaptchaToken !== 'string' || recaptchaToken.trim() === '') {
      alert('reCAPTCHA verification failed. Please reload or complete the challenge.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, 'g-recaptcha-response': recaptchaToken }),
      });

      const result = await res.json();

      if (result.success) {
        alert('Message sent successfully!');
        formRef.current?.reset();
      } else {
        console.error('API error:', result.error);
        if (result.requireV2 && typeof onRequireV2 === 'function') {
          setV2Triggered(true); // indicate auto-resume after v2
          onRequireV2(); // show v2 challenge
        } else {
          alert('Failed to send message. Try again.');
        }
      }
    } catch (error) {
      console.error('Network or server error:', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={submitForm}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={loading}
      className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white px-6 py-3 rounded font-medium shadow-lg transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Sending...
        </>
      ) : (
        label
      )}
    </motion.button>
  );
};

export default ContactButton;
