"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getConsent, setConsent } from "@/lib/consent";
import { initGA, initClarity } from "@/lib/analytics";

const COOKIE_PREFERENCES_EVENT = "open-cookie-preferences";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  const closeBanner = useCallback(() => {
    setIsOpen(false);
    previousActiveRef.current?.focus();
  }, []);

  const handleAccept = useCallback(() => {
    setConsent("accepted");
    initGA();
    initClarity();
    closeBanner();
  }, [closeBanner]);

  const handleReject = useCallback(() => {
    setConsent("rejected");
    closeBanner();
  }, [closeBanner]);

  // Show banner when: no consent yet, or user previously rejected (reopen on next visit)
  useEffect(() => {
    setMounted(true);
    const consent = getConsent();
    if (consent === null || consent === "rejected") {
      setIsOpen(true);
    }
  }, []);

  // Listen for Cookie Preferences link click
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener(COOKIE_PREFERENCES_EVENT, handler);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, handler);
  }, []);

  // ESC to close + focus trap
  useEffect(() => {
    if (!isOpen) return;

    previousActiveRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBanner();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = bannerRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBanner]);

  // Focus first focusable on open
  useEffect(() => {
    if (isOpen && bannerRef.current) {
      const focusable = bannerRef.current.querySelector<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={bannerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed z-[9999] rounded-2xl border border-[#1A3F7E]/50 bg-gradient-to-b from-[#0a1628] to-[#060d16] p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(26,63,126,0.25),0_0_20px_-2px_rgba(59,115,204,0.2)] md:max-w-[600px] bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6"
        >
          <h2
            id="cookie-consent-title"
            className="text-base md:text-lg font-semibold text-white mb-1.5"
          >
            We respect your privacy
          </h2>
          <p
            id="cookie-consent-desc"
            className="text-sm text-gray-300 leading-relaxed mb-4"
          >
           We use cookies to improve site functionality and understand how our website is used. This helps us enhance your experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-white font-medium text-sm hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#3B73CC] focus:ring-offset-2 focus:ring-offset-[#060d16]"
              aria-label="Accept analytics cookies"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="px-4 py-2.5 rounded-xl border border-gray-500/60 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-gray-400/60 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#060d16]"
              aria-label="Reject analytics cookies"
            >
              Reject
            </button>
          </div>

          <Link
            href="/privacy-policy"
            className="text-xs text-[#72A7FB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#72A7FB] focus:ring-offset-2 focus:ring-offset-[#060d16] rounded inline-block"
            aria-label="Learn more about our privacy policy"
          >
            Learn more
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
