export default function AudioPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <h1 className="text-3xl font-semibold mb-6">Audio</h1>
      <div className="space-y-3 text-neutral-600">
        <p>NotebookLM holds a brief spoken walkthrough of this system.</p>
        <p>It captures the intent behind the states without extra framing.</p>
        <p>Use it when a quick reset is needed after time away.</p>
        <p>The audio lives alongside the notes, not inside the product.</p>
      </div>
    </div>
  );
}
