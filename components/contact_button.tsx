'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

type ContactButtonProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
  label?: string;
};

const ContactButton: React.FC<ContactButtonProps> = ({
  formRef,
  label = 'Send',
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Check content-type before parsing JSON
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) {
        const raw = await res.text(); // log HTML response for debugging
        console.error('Unexpected non-JSON response:', raw.slice(0, 300));
        alert('Unexpected server response. Please try again later.');
        return;
      }

      const result = await res.json();

      if (result.success) {
        formRef.current?.reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Reset after 3s
      } else {
        alert(result.error || 'Failed to send message. Try again.');
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
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium shadow-2xl transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed
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
              animate={{ x: 15 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut', repeatType: 'reverse' }}
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
