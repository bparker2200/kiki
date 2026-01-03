export default function WhiteboardWireframesPage() {
  return (
    <div className="space-y-6">
      <div className="flex gap-8 items-start">
        {/* Video - left */}
        <div className="w-[280px] flex-shrink-0">
          <video
            src="/process/3-sketches.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-md border border-neutral-200"
          />
        </div>

        {/* Content - right */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-neutral-900">Sketches (ChatGPT)</h1>
          <p className="text-neutral-700 leading-relaxed">
            Using the structured plan, I asked ChatGPT to generate rough, whiteboard-style sketches of the flow. These are not designs. They are thinking tools.
          </p>
          <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
            <li>Each sketch took about a minute to generate</li>
            <li>The goal was to externalize the idea quickly so priorities, gaps, and sequencing became obvious</li>
            <li>I need visuals for ideas to settle. This is how I get there fast.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
