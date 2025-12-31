export default function CuratorSenderPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <div className="mx-auto w-full max-w-[800px] space-y-6">
        <h1 className="text-3xl font-semibold text-neutral-900">User Journey / Curator + Sender</h1>
        
        <p className="text-neutral-700 leading-relaxed text-lg">
          This page models the curator and sender experience as pacing, not features, focusing on the emotional intent behind how someone creates and shares a message.
        </p>
        
        <div className="space-y-3 text-neutral-700 leading-relaxed">
          <p>
            The recipient journey is fully mapped, but the curator side is still being drafted. The core constraint is clear: creation must feel lightweight and personal, not like product work. The states that exist so far outline the flow from initial message creation through contributor collection, but the emotional beats between them are still being refined.
          </p>
        </div>
      </div>
    </div>
  );
}

