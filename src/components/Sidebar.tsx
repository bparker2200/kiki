"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STATES } from "@/data/states";

const PRIMARY_NAV = [
  { label: "Main Wireframe (Home)", href: "/" },
  { label: "How I Built This / My Process", href: "/process" },
  { label: "NotebookLM Audio Summary", href: "/audio" },
  { label: "Next Steps & Open Questions", href: "/next-steps" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isStatePage = pathname.startsWith("/state/");
  const currentSlug = isStatePage ? pathname.split("/state/")[1] : null;

  return (
    <aside className="fixed right-0 top-0 h-full w-[320px] border-l border-neutral-200 bg-neutral-100 p-6 overflow-y-auto">
      <nav className="flex flex-col gap-1">
        {PRIMARY_NAV.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 text-sm transition-colors hover:bg-neutral-200 ${
                isActive ? "bg-neutral-200 font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {isStatePage && (
        <div className="mt-8">
          <h2 className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            User Experience States
          </h2>
          <nav className="flex flex-col gap-1">
            {STATES.map((state) => {
              const isActive = currentSlug === state.slug;
              return (
                <Link
                  key={state.slug}
                  href={`/state/${state.slug}`}
                  className={`block px-3 py-2 text-sm transition-colors hover:bg-yellow-100 ${
                    isActive ? "bg-yellow-200 font-medium" : ""
                  }`}
                >
                  {state.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </aside>
  );
}
