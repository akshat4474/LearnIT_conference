'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Send, Check } from 'lucide-react';

type ContactButtonProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
  label?: string;
  overrideToken?: string | null;
  onRequireV2?: () => void;
};

const ContactButton: React.FC<ContactButtonProps> = ({
  formRef,
  label = 'Send',
  overrideToken,
  onRequireV2,
}) => {
  const [loading, setLoading] = useState(false);
  const [v2Triggered, setV2Triggered] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (v2Triggered && overrideToken) {
      submitForm();
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
        formRef.current?.reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Reset after 3s
      } else {
        if (result.requireV2 && typeof onRequireV2 === 'function') {
          setV2Triggered(true);
          onRequireV2();
        } else {
          alert(result.error || 'Failed to send message. Try again.');
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
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded font-medium shadow-lg transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed
        ${success ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="sending"
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: 20 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', repeatType: 'reverse' }}
            >
              <Send size={18} />
            </motion.div>
            Sending...
          </motion.div>
        ) : success ? (
          <motion.div
            key="sent"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Check size={18} />
            Sent!
          </motion.div>
        ) : (
          <motion.div
            key="default"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
            <Send size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ContactButton;
