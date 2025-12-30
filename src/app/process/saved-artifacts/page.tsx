"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PROCESS_TRAIL = [
  { label: "Grok Chat", href: "/process/grok-brainstorm" },
  { label: "AI Summary", href: "/process/product-blueprint" },
  { label: "Whiteboard Sketches", href: "/process/whiteboard-wireframes" },
  { label: "Audio Summary", href: "/process/audio-summary" },
  { label: "Saved Artifacts", href: "/process/saved-artifacts" },
  { label: "Prototype", href: "/process/ready-to-create-prototype" },
];

export default function SavedArtifactsPage() {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[rgb(249,248,244)] px-8 py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] space-y-10 text-neutral-700">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-neutral-900">
              Saved Artifacts
            </h1>
            <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-800 space-y-1">
              <p>
                <span className="font-semibold text-neutral-900">AI Tool:</span>{" "}
                None - just a single folder on my desktop
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Objective:</span>{" "}
                Everything referenced above produced artifacts. I put them in one place so you could explore them calmly.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Prompt Used:</span>{" "}
                N/A
              </p>
            </div>
            <div className="space-y-3">
              <p>Images, text, notes, and summaries all came out of the earlier steps.</p>
              <p>Rather than reorganizing or polishing them, I simply collected them in one folder. The goal is containment, not presentation.</p>
              <p>This makes the system inspectable without turning it into a performance.</p>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
            <Image
              src="/process/saved-artifacts.png"
              alt="Process artifacts snapshot"
              width={1400}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-700">
          {PROCESS_TRAIL.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <span key={item.href} className="inline-flex items-center">
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "underline underline-offset-4"
                      : "hover:underline hover:underline-offset-4"
                  }
                >
                  {item.label}
                </Link>
                {index < PROCESS_TRAIL.length - 1 && (
                  <span className="mx-3 text-neutral-400">·</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
