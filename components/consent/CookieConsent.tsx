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
          className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-white text-black border-t border-black/10 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] px-4 py-3 md:px-6 md:py-4 pointer-events-auto"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-consent-title"
                className="text-sm md:text-base font-semibold text-black"
              >
                We respect your privacy
              </h2>
              <p
                id="cookie-consent-desc"
                className="text-xs md:text-sm text-black/70 leading-relaxed mt-0.5"
              >
                We use cookies to improve site functionality and understand how our website is used. This helps us enhance your experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 sm:shrink-0">
              <button
                type="button"
                onClick={handleAccept}
                className="px-4 py-2.5 rounded-lg bg-black text-white font-medium text-sm hover:bg-black/90 transition-colors focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Accept analytics cookies"
              >
                Accept analytics
              </button>
              <button
                type="button"
                onClick={handleReject}
                className="px-4 py-2.5 rounded-lg border border-black/20 text-black font-medium text-sm bg-white hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Reject analytics cookies"
              >
                Reject
              </button>
              <Link
                href="/privacy-policy"
                className="text-xs text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2 focus:ring-offset-white rounded inline-block"
                aria-label="Learn more about our privacy policy"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
