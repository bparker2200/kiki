export default function WhiteboardWireframesPage() {
  return (
    <div className="space-y-10 text-neutral-700">
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

      <img
        src="/process/gif-chatgpt-sketches.gif"
        alt="ChatGPT sketches demo"
        className="w-full rounded-md border border-neutral-200"
      />
    </div>
  );
}
