import Link from "next/link";
import { STATES } from "@/data/states";

const SEQUENCE_COPY: Record<string, { what: string; feel: string }> = {
  "inbound-message": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "link-open": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "sequential-messages": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "video-montage": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "reflection-pause": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "private-replay": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "recipient-setup": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "primary-message-creation": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "contributor-collection": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "recipient-view-preview": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
  "delivery-response": {
    what: "Placeholder: explain what happens here in one sentence.",
    feel: "Placeholder: describe the emotional pacing in one sentence.",
  },
};

export default function SequencePage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-12">
        {STATES.map((state) => {
          const copy = SEQUENCE_COPY[state.slug] || {
            what: "Placeholder: explain what happens here in one sentence.",
            feel: "Placeholder: describe the emotional pacing in one sentence.",
          };

          return (
            <div key={state.id} className="space-y-3">
              <Link
                href={`/state/${state.slug}`}
                className="block hover:underline"
              >
                <h2 className="text-2xl font-semibold text-neutral-900">{state.label}</h2>
              </Link>
              <p className="text-neutral-700">
                <span className="font-medium">What it is:</span> {copy.what}
              </p>
              <p className="text-neutral-700">
                <span className="font-medium">How it should feel:</span> {copy.feel}
              </p>
              <p className="text-sm text-neutral-500">
                Complexity: {state.complexity} • Risk: {state.risk}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

