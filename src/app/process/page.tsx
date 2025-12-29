export default function ProcessPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <h1 className="text-3xl font-semibold mb-6">Process</h1>
      <div className="space-y-3 text-neutral-600">
        <p>I map the sequence before choosing any tools.</p>
        <p>Each step is written down so the reasoning stays visible.</p>
        <p>Constraints are kept tight to avoid unnecessary drift.</p>
        <p>Small checkpoints keep the work calm and reversible.</p>
      </div>
    </div>
  );
}
