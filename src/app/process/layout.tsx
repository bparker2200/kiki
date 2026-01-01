"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatPageLabel(segment: string): string {
  const withSpaces = segment.replace(/-/g, " ");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentSegment = segments[segments.length - 1] || "process";
  
  const currentPageLabel = currentSegment === "process" 
    ? "Behind the Scenes"
    : formatPageLabel(currentSegment);

  return (
    <div className="min-h-screen bg-[rgb(249,248,244)] px-8 py-8">
      <div className="mx-auto w-full max-w-[1100px] space-y-6">
        <div className="rounded-md border border-neutral-200 bg-white px-3 py-2">
          <nav className="text-sm text-neutral-500">
            <Link href="/system" className="hover:text-neutral-700">
              LOVEABOUT
            </Link>
            {" / "}
            <Link href="/process" className="hover:text-neutral-700">
              Behind the Scenes
            </Link>
            {currentSegment !== "process" && (
              <>
                {" / "}
                <span className="text-neutral-600">{currentPageLabel}</span>
              </>
            )}
          </nav>
        </div>
        {children}
      </div>
    </div>
  );
}

