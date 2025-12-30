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

export default function ProductBlueprintPage() {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[rgb(249,248,244)] px-8 py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] space-y-10 text-neutral-700">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-neutral-900">
            Converting Raw Chat into a Structured Plan
          </h1>
          <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-800 space-y-1">
            <p>
              <span className="font-semibold text-neutral-900">AI Tool:</span>{" "}
              Claude
            </p>
            <p>
              <span className="font-semibold text-neutral-900">Objective:</span>{" "}
              Turn messy thinking into a single, opinionated product shape that a designer could immediately wireframe without follow-up questions.
            </p>
            <p>
              <span className="font-semibold text-neutral-900">Prompt Used:</span>{" "}
              "Senior product designer / UX systems architect" prompt.
            </p>
          </div>
          <div className="space-y-3">
            <p>I took the raw audio chat transcript and asked Claude to collapse it into a clear product structure.</p>
            <p>Not to improve the ideas, but to identify recurring themes, surface implied steps, and name what was actually happening.</p>
            <p>The instruction was simple: be decisive, don't invent features, prefer clarity over completeness.</p>
            <p>This step turns intuition into something inspectable.</p>
          </div>
        </div>

        <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
          <Image
            src="/process/ai-summary.png"
            alt="AI summary artifact"
            width={1400}
            height={900}
            className="h-auto w-full"
            priority
          />
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
