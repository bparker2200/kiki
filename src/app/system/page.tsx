import Image from "next/image";

export default function SystemPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-8">

        {/* Hero image */}
        <div className="w-full max-w-[600px]">
          <Image
            src="/overview/overview-warm.png"
            alt="LOVEABOUT overview"
            width={600}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title + hook */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">What is LOVEABOUT?</h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            A way to give someone the experience of being surrounded by people who love them—without needing everyone in the same room. One person organizes, friends contribute short messages, and the recipient gets a private, paced experience they can keep forever.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Main content section */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-neutral-800">The Core Insight</h2>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>&ldquo;This isn&apos;t a card. It&apos;s not a social post. It&apos;s a ceremony—digitized.&rdquo;</p>
            <p>&ldquo;The design prioritizes emotion over features. The technology hides in plain sight.&rdquo;</p>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Why This Works */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Why This Works</h2>
          <ul className="space-y-3 text-neutral-700">
            <li><strong>No app download.</strong> It&apos;s web-based. The first touchpoint is a text from a friend, not an install prompt.</li>
            <li><strong>Not shareable.</strong> Content can&apos;t be forwarded, screenshotted, or posted. Scarcity is the point.</li>
            <li><strong>No engagement loops.</strong> No likes, no comments, no feed. The recipient&apos;s only job is to feel it.</li>
            <li><strong>The UI disappears.</strong> Pacing, silence, and restraint do the work.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
