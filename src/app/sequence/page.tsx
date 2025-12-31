import Image from "next/image";
import Link from "next/link";
import { STATES } from "@/data/states";

const SEQUENCE_COPY: Record<string, { what: string; feel: string; essential: string; act?: "act1" | "act2" }> = {
  "inbound-message": {
    what: "A simple message arrives with a quiet link.",
    feel: "Curious, slightly unsure, but safe enough to open.",
    essential: "Trust holds long enough to click.",
    act: "act1",
  },
  "link-open": {
    what: "The link opens without instructions or setup.",
    feel: "Low friction, like being gently carried forward.",
    essential: "No decisions up front.",
    act: "act1",
  },
  "sequential-messages": {
    what: "Words arrive one at a time, spaced with intention.",
    feel: "Slow focus, like attention narrowing without effort.",
    essential: "Pacing does the work, not UI.",
    act: "act1",
  },
  "video-montage": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act1",
  },
  "reflection-pause": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act1",
  },
  "private-replay": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act1",
  },
  "recipient-setup": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act2",
  },
  "primary-message-creation": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act2",
  },
  "contributor-collection": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act2",
  },
  "recipient-view-preview": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act2",
  },
  "delivery-response": {
    what: "Placeholder: describe what happens here in one sentence.",
    feel: "Placeholder: describe how it should feel in one sentence.",
    essential: "Placeholder: describe the essential quality in one sentence.",
    act: "act2",
  },
};

const ACT1_STEPS_1_3 = ["inbound-message", "link-open", "sequential-messages"];
const ACT1_STEPS_4_6 = ["video-montage", "reflection-pause", "private-replay"];

export default function SequencePage() {
  const act1States = STATES.filter((state) => SEQUENCE_COPY[state.slug]?.act === "act1");
  const act2States = STATES.filter((state) => SEQUENCE_COPY[state.slug]?.act === "act2");

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-neutral-700 leading-relaxed">
            This page models the recipient&apos;s experience as pacing, not features. The goal is to make the emotional arc legible, so the system stays restrained. We&apos;re only fully writing the first three beats here.
          </p>
        </div>

        {/* Act 1 */}
        <div className="space-y-12">
          <p className="text-sm font-semibold text-neutral-900">Act 1 — Recipient Experience:</p>

          {act1States
            .filter((state) => ACT1_STEPS_1_3.includes(state.slug))
            .map((state) => {
              const copy = SEQUENCE_COPY[state.slug];
              return (
                <div key={state.id} className="space-y-4">
                  <Link
                    href={`/state/${state.slug}`}
                    className="block hover:underline"
                  >
                    <h2 className="text-2xl font-semibold text-neutral-900">{state.label}</h2>
                  </Link>
                  <p className="text-neutral-700">
                    <span className="font-semibold">What it is:</span> {copy.what}
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-semibold">How it should feel:</span> {copy.feel}
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-semibold">Essential:</span> {copy.essential}
                  </p>
                </div>
              );
            })}

          <div className="border-t border-neutral-200 pt-6 space-y-4">
            <div className="mx-auto w-full max-w-[640px]">
              <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
                <Image
                  src="/sequence/act-1-steps-1-3.png"
                  alt="Steps 1-3 snapshot"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-neutral-400 mt-2">Steps 1–3 snapshot</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-neutral-500 italic">The rest follows the same rhythm.</p>
          </div>

          {act1States
            .filter((state) => ACT1_STEPS_4_6.includes(state.slug))
            .map((state) => {
              const copy = SEQUENCE_COPY[state.slug];
              return (
                <div key={state.id} className="space-y-4">
                  <Link
                    href={`/state/${state.slug}`}
                    className="block hover:underline"
                  >
                    <h2 className="text-2xl font-semibold text-neutral-900">{state.label}</h2>
                  </Link>
                  <p className="text-neutral-700">
                    <span className="font-semibold">What it is:</span> {copy.what}
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-semibold">How it should feel:</span> {copy.feel}
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-semibold">Essential:</span> {copy.essential}
                  </p>
                </div>
              );
            })}
        </div>

        {/* Hinge */}
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500 italic">
            Behind the scenes: how this gets made without turning into a product.
          </p>
        </div>

        {/* Act 2 */}
        <div className="space-y-12">
          <p className="text-sm font-semibold text-neutral-900">Curator Experience:</p>
          
          {act2States.map((state) => {
            const copy = SEQUENCE_COPY[state.slug];
            return (
              <div key={state.id} className="space-y-4">
                <Link
                  href={`/state/${state.slug}`}
                  className="block hover:underline"
                >
                  <h2 className="text-2xl font-semibold text-neutral-900">{state.label}</h2>
                </Link>
                <p className="text-neutral-700">
                  <span className="font-semibold">What it is:</span> {copy.what}
                </p>
                <p className="text-neutral-700">
                  <span className="font-semibold">How it should feel:</span> {copy.feel}
                </p>
                <p className="text-neutral-700">
                  <span className="font-semibold">Essential:</span> {copy.essential}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

