/**
 * Centralized theme configuration
 *
 * Strategy: Lock to light mode globally. Tailwind uses darkMode: 'class',
 * so dark: variants only apply when .dark exists on <html>. We never add it.
 *
 * To enable dark mode later:
 * 1. Add className="dark" to <html> when THEME_MODE === 'dark'
 * 2. Consider a ThemeProvider that reads user preference / localStorage
 * 3. Remove or conditionally apply the color-scheme: light in globals.css
 */

export const THEME_MODE = "light" as const;
export type ThemeMode = "light" | "dark";

/** Whether dark mode is supported (for future use) */
export const THEME_DARK_ENABLED = false;
