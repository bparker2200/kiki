"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PRODUCT_NAV = [
  { label: "Overview", href: "/system" },
  { label: "Sender Journey", href: "/journey/sender" },
  { label: "Recipient Journey", href: "/journey/recipient" },
];

const PROCESS_NAV = [
  { label: "1. Voice Brainstorm (Grok)", href: "/process/grok-brainstorm" },
  { label: "2. Structure (Claude)", href: "/process/product-blueprint" },
  { label: "3. Sketches (ChatGPT)", href: "/process/whiteboard-wireframes" },
  { label: "4. Audio Recap (NotebookLM)", href: "/process/audio-summary" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-[320px] border-r border-neutral-200 bg-neutral-100 p-6 overflow-y-auto">
      <nav className="flex flex-col gap-1">
        <h2 className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 mt-4">
          LOVEABOUT
        </h2>
        {PRODUCT_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 text-sm transition-colors hover:bg-neutral-200 ${
              isActive(item.href) ? "bg-neutral-200 font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        
        <h2 className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 mt-6">
          How I Built This (For Ben)
        </h2>
        {PROCESS_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 text-sm transition-colors hover:bg-neutral-200 ${
              isActive(item.href) ? "bg-neutral-200 font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
