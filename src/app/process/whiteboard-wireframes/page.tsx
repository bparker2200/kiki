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

export default function WhiteboardWireframesPage() {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[rgb(249,248,244)] px-8 py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] space-y-10 text-neutral-700">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-neutral-900">
              Whiteboard Sketches (Thinking, Not Design)
            </h1>
            <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-800 space-y-1">
              <p>
                <span className="font-semibold text-neutral-900">AI Tool:</span>{" "}
                ChatGPT Images
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Objective:</span>{" "}
                Make the structure visible without getting distracted by visual design.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Prompt Used:</span>{" "}
                Whiteboard wireframe prompt template
              </p>
            </div>
            <div className="space-y-3">
              <p>Using the structured plan, I asked ChatGPT to generate rough, whiteboard-style sketches of the flow.</p>
              <p>These are not designs. They are thinking tools.</p>
              <p>Each sketch took about a minute to generate. The goal was to externalize the idea quickly so priorities, gaps, and sequencing became obvious.</p>
              <p>I need visuals for ideas to settle. This is how I get there fast.</p>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
            <Image
              src="/process/whiteboard-sketches.png"
              alt="Whiteboard sketches"
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
