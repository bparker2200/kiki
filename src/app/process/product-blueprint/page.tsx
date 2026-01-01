import Image from "next/image";

export default function ProductBlueprintPage() {
  return (
    <div className="space-y-10 text-neutral-700">
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
            &quot;Senior product designer / UX systems architect&quot; prompt.
          </p>
        </div>
        <div className="space-y-3">
          <p>I took the raw audio chat transcript and asked Claude to collapse it into a clear product structure.</p>
          <p>Not to improve the ideas, but to identify recurring themes, surface implied steps, and name what was actually happening.</p>
          <p>The instruction was simple: be decisive, don&apos;t invent features, prefer clarity over completeness.</p>
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
    </div>
  );
}
