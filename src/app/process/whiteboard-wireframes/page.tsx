export default function WhiteboardWireframesPage() {
  return (
    <div className="space-y-6">
      {/* Intro text */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-neutral-900">Sketches (ChatGPT)</h1>
        <p className="text-neutral-700 leading-relaxed">
          Using the structured plan, I asked ChatGPT to generate rough, whiteboard-style sketches of the flow. These are not designs. They are thinking tools.
        </p>
        <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
          <li>Each sketch took about a minute to generate</li>
          <li>The goal was to externalize the idea quickly so priorities, gaps, and sequencing became obvious</li>
          <li>I need visuals for ideas to settle. This is how I get there fast</li>
        </ul>
      </div>

      {/* Video - larger, below text */}
      <div className="w-full max-w-[560px]">
        <video
          src="/process/3-sketches.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Attachments */}
      <div className="pt-2 space-y-3">
        <p className="text-sm font-medium text-neutral-700">Output:</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/process/whiteboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          >
            <span>📄</span>
            <span>Whiteboard Sketches</span>
          </a>
        </div>
      </div>
    </div>
  );
}
