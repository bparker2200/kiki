"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/" && pathname !== "/listen";

  return (
    <>
      {showSidebar && (
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
      )}
      <main className={showSidebar ? "pl-[320px]" : ""}>{children}</main>
    </>
  );
}

