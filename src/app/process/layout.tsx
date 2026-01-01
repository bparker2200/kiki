"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  process: "How I Built This",
  "grok-brainstorm": "Voice Brainstorm",
  "whiteboard-wireframes": "Whiteboard wireframes",
  "product-blueprint": "Product blueprint",
  "audio-summary": "Audio",
};

function formatPageLabel(segment: string): string {
  if (LABELS[segment]) {
    return LABELS[segment];
  }
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/process";
  const segments = pathname.split("/").filter(Boolean);
  const currentSegment = segments[segments.length - 1] || "process";

  const currentPageLabel = formatPageLabel(currentSegment);

  return (
    <div className="min-h-screen bg-[rgb(249,248,244)] px-8 py-8">
      <div className="mx-auto w-full max-w-[1100px] space-y-6">
        <div className="rounded-md border border-neutral-200 bg-white px-3 py-2">
          <nav aria-label="breadcrumb" className="text-sm text-neutral-500">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/system" className="hover:text-neutral-700">
                  LOVEABOUT
                </Link>
              </li>
              <li className="text-neutral-400">/</li>
              <li>
                <Link href="/process" className="hover:text-neutral-700">
                  How I Built This
                </Link>
              </li>
              {currentSegment !== "process" && (
                <>
                  <li className="text-neutral-400">/</li>
                  <li>
                    <span className="text-neutral-600">{currentPageLabel}</span>
                  </li>
                </>
              )}
            </ol>
          </nav>
        </div>
        {children}
      </div>
    </div>
  );
}
