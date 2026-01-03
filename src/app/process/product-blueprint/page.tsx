export default function ProductBlueprintPage() {
  return (
    <div className="space-y-6">
      {/* Intro text */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-neutral-900">Structure (Claude)</h1>
        <p className="text-neutral-700 leading-relaxed">
          I took the raw voice chat transcript and asked Claude to collapse it into a clear product structure — not to improve the ideas, but to identify recurring themes, surface implied steps, and name what was actually happening.
        </p>
        <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
          <li>Be decisive</li>
          <li>Don't invent features</li>
          <li>Prefer clarity over completeness</li>
          <li>This step turns intuition into something inspectable</li>
        </ul>
      </div>

      {/* Video - larger, below text */}
      <div className="w-full max-w-[560px]">
        <video
          src="/process/2-structure.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-md border border-neutral-200"
        />
      </div>

      {/* Attachments */}
      <div className="pt-2 space-y-3">
        <p className="text-sm font-medium text-neutral-700">Outputs:</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/process/product-doc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          >
            <span>📄</span>
            <span>Product Doc</span>
          </a>
          <a
            href="/process/wireframes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          >
            <span>📄</span>
            <span>Wireframes</span>
          </a>
        </div>
      </div>

      {/* Prompt section */}
      <div className="pt-4 space-y-3">
        <p className="text-sm font-medium text-neutral-700">
          The prompt I used <span className="font-normal text-neutral-500">(mainly for Kiki, if she wants to reuse this format for brainstorming)</span>
        </p>
        <div className="bg-neutral-100 border border-neutral-200 rounded-md p-4 text-sm text-neutral-700 font-mono whitespace-pre-wrap">
{`You are a senior product designer. I'm going to give you a transcript of a voice brainstorm about a product idea.

Your job:
- Identify the core concept
- Surface recurring themes
- Name the implied user journeys
- Be decisive — don't hedge
- Don't invent features I didn't mention
- Prefer clarity over completeness

Output a structured product document.`}
        </div>
      </div>
    </div>
  );
}
