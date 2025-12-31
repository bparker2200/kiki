export default function SenderPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-neutral-900">Sender / User Journey</h1>
        
        {/* Intro */}
        <div className="space-y-3">
          <p className="text-neutral-700 leading-relaxed">
            This page models the sender&apos;s experience as pacing, not features, focusing on the emotional intent behind how someone creates and shares a message.
          </p>
        </div>

        {/* Icon row */}
        <div className="flex gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 border border-neutral-200 bg-neutral-50 rounded-sm"
            />
          ))}
        </div>

        <hr className="border-neutral-200" />

        {/* Section 1 */}
        <div className="space-y-3">
          <p className="text-neutral-700 leading-relaxed">
            Creation must feel lightweight and personal, not like product work. The flow from initial message through contributor collection is mapped, but the emotional beats between states are still being refined.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Section 2 */}
        <div className="space-y-3">
          <p className="text-neutral-700 leading-relaxed">
            The core constraint is clear: the sender experience should feel like a natural extension of how someone already communicates, not a new tool to learn or a system to master.
          </p>
        </div>
      </div>
    </div>
  );
}

