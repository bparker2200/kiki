"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PRODUCT_NAV = [
  { label: "Sender Journey", href: "/sequence" },
  { label: "Recipient Journey", href: "/journey/sender" },
  { label: "Overview", href: "/system" },
  { label: "Design Principles", href: "/design-principles" },
];

const BEHIND_SCENES_NAV = [
  { label: "How I built this", href: "/process/grok-brainstorm" },
  { label: "Audio", href: "/audio" },
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
          Behind the scenes
        </h2>
        {BEHIND_SCENES_NAV.map((item) => (
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
