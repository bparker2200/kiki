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

export default function AudioSummaryPage() {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[rgb(249,248,244)] px-8 py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] space-y-10 text-neutral-700">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-neutral-900">
              A Fake Podcast from the Chat
            </h1>
            <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-800 space-y-1">
              <p>
                <span className="font-semibold text-neutral-900">AI Tool:</span>{" "}
                Google's NotebookLM
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Objective:</span>{" "}
                Listen back to the ideas as if they were already organized, without rereading everything.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Prompt Used:</span>{" "}
                None. Paste, then click &quot;Audio Summary.&quot;
              </p>
            </div>
            <div className="space-y-3">
              <p>I pasted the same raw chat into NotebookLM and clicked &quot;Audio Summary.&quot;</p>
              <p>It generated a conversational audio recap that sounds like a short podcast episode. This took about 30 seconds.</p>
              <p>This is a shortcut for reflection. Hearing the ideas spoken back reveals what matters and what doesn&apos;t.</p>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
            <Image
              src="/process/audio-summary.png"
              alt="Audio summary snapshot"
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
