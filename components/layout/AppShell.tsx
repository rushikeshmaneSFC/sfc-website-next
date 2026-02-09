"use client";

import type { FC, PropsWithChildren } from "react";
import Navbar from "./navbar";
import { MainContent } from "./navbar-sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

interface AppShellProps {
  isFooter?: boolean;
}

/**
 * AppShell - Global layout wrapper for Next.js App Router
 * Mirrors the NavbarSidebarLayout behavior from the old React app.
 * 
 * Usage in app/layout.tsx:
 * <AppShell>{children}</AppShell>
 */
const AppShell: FC<PropsWithChildren<AppShellProps>> = ({
  children,
  isFooter = true,
}) => {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="flex items-start">
        <MainContent isFooter={isFooter}>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
};

export default AppShell;
