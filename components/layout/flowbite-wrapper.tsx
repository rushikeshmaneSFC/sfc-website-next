"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

interface FlowbiteWrapperProps {
  children: React.ReactNode;
}

/**
 * FlowbiteWrapper - Simplified wrapper for theme management.
 * In the old app, this used the Flowbite component for theming.
 * For now, we handle theme persistence and apply dark class to html element.
 * This can be enhanced later to use Flowbite's ThemeModeScript if needed.
 */
const FlowbiteWrapper: FC<FlowbiteWrapperProps> = function ({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Handle dark mode based on localStorage
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Avoid hydration mismatch by only rendering after mount
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default FlowbiteWrapper;
