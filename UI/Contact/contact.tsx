'use client';

import React, { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactButton from '../../components/contact_button';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [v3Token, setV3Token] = useState<string | null>(null);
  const [v2Token, setV2Token] = useState<string | null>(null);
  const [requireV2, setRequireV2] = useState(false);

  const siteKeyV3 = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  const siteKeyV2 = process.env.NEXT_PUBLIC_RECAPTCHA_V2_KEY!;

  // Load v3 script and get token
  useEffect(() => {
    const scriptId = 'recaptcha-v3-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKeyV3}`;
      script.async = true;
      script.onload = runRecaptchaV3;
      document.body.appendChild(script);
    } else {
      runRecaptchaV3();
    }
  }, [siteKeyV3]);

  const runRecaptchaV3 = async () => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKeyV3, { action: 'submit' });
          setV3Token(token);
        } catch (error) {
          console.error('v3 reCAPTCHA error:', error);
        }
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#F7F3EB] text-gray-900 px-6 sm:px-12 py-16 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-6 text-sm text-gray-700">Drop us a message, we’ll get back to you soon!</p>

          <form ref={formRef} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <input id="name" name="name" type="text" required className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
              <input id="email" name="email" type="email" required className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Your Phone Number(+91)</label>
              <input id="phone" name="phone" type="tel" pattern="[0-9+ ]{7,15}" className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500" />
            </div>

            {/* v3 by default */}
            <input type="hidden" name="g-recaptcha-response" value={requireV2 ? v2Token || '' : v3Token || ''} />

            {/* v2 fallback box - shown only if v3 fails */}
            <div className={requireV2 ? 'block pt-2' : 'hidden'}>
              <ReCAPTCHA sitekey={siteKeyV2} onChange={(token) => setV2Token(token)} />
            </div>

            <ContactButton
              formRef={formRef}
              overrideToken={requireV2 ? v2Token : v3Token}
              onRequireV2={() => setRequireV2(true)}
            />
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Find Us</h2>
          <p className="mb-4 text-sm text-gray-700">Manipal University Jaipur, Rajasthan, India.</p>
          <iframe
            className="w-full h-[400px] rounded border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772831810866!2d75.5652343!3d26.8438552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1747753749907!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">For more information contact</h3>
        <div className="space-y-2 text-sm text-gray-700"></div>
      </div>
    </section>
  );
}
