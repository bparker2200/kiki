export default function DesignPrinciplesPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-neutral-900">Design Principles</h1>
        
        {/* Intro */}
        <div className="space-y-3">
          <p className="text-neutral-700 leading-relaxed">
            This system prioritizes pacing and emotional clarity over feature documentation. Artifacts stay restrained and focused on intent, avoiding drift into product specs or UI design patterns. The goal is to make the emotional arc legible so the system remains calm and human.
          </p>
        </div>

        {/* Principles list */}
        <div className="space-y-4">
          <ul className="space-y-3 text-neutral-700 leading-relaxed">
            <li>Pacing does the work, not UI.</li>
            <li>Emotional intent is more important than feature completeness.</li>
            <li>Artifacts should feel like sketches, not polished deliverables.</li>
            <li>Restraint prevents the system from becoming a product.</li>
            <li>Each state should be legible on its own, without explanation.</li>
            <li>Trust holds long enough to click, then the experience carries forward.</li>
            <li>No decisions up front; low friction throughout.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

