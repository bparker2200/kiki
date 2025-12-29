export default function NextStepsPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <h1 className="text-3xl font-semibold mb-6">Next Steps</h1>
      <div className="space-y-3 text-neutral-600">
        <p>Clarify the handoffs between each state so edges stay smooth.</p>
        <p>Validate the riskiest moments before polishing anything else.</p>
        <p>Keep the open questions visible and resist filling in the gaps.</p>
        <p>Pause when the map stops making sense, then adjust deliberately.</p>
      </div>
    </div>
  );
}
