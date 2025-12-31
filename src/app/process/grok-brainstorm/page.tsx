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

export default function GrokBrainstormPage() {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[rgb(249,248,244)] px-8 py-10"
    >
      <div className="mx-auto w-full max-w-[1100px] space-y-10 text-neutral-700">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-neutral-900">
              Audio Chat with Grok (on the drive home from MB)
            </h1>
            <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-800 space-y-1">
              <p>
                <span className="font-semibold text-neutral-900">AI Tool:</span>{" "}
                Grok - Voice Chat (By far the most useful for this phase. It guides thinking instead of just recording it.)
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Objective:</span>{" "}
                Explore what the user experience might feel like for someone receiving a note, from both the sender and recipient perspectives.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Prompt Used:</span>{" "}
                None. I opened the app and started talking.
              </p>
            </div>
            <div className="space-y-3">
              <p>On the drive home, I opened the Grok app, set it to voice mode, and talked out loud for about 45 minutes.</p>
              <p>There was no structure. No requirements. No screens.</p>
              <p>I used it the same way I&apos;d use a thinking partner in the car: fast, messy, exploratory. The goal wasn&apos;t answers, it was momentum.</p>
              <p>This is where most of the real thinking happened.</p>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
            <Image
              src="/process/grok-chat.png"
              alt="Grok chat artifact"
              width={1400}
              height={900}
              className="h-auto w-full"
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
