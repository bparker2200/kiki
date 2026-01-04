import Link from "next/link";

export default function SystemPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-10">

        {/* The Hook */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">LOVEABOUT</h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Most people never tell the people they love how they feel. Not because they don't want to — because there's never a moment that makes it easy.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            This is that moment.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Hero image */}
        <img
          src="/overview/overview-warm.png"
          alt="LOVEABOUT overview"
          className="w-full max-w-[560px] h-auto"
        />

        {/* The Concept */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">How It Works</h2>
          <p className="text-neutral-700 leading-relaxed">
            One person organizes. Friends contribute short messages — text, video, or both. The recipient gets a private, paced experience: words from the people who love them, delivered one at a time, ending in silence.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            No app download. No social features. No engagement loops. Just the moment — then it gets out of the way.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* The Two Journeys */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Two Journeys</h2>
          <p className="text-neutral-600">
            The experience is different depending on which side you're on.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/journey/sender"
              className="block p-5 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="font-medium text-neutral-900 mb-1">Sender Journey</h3>
              <p className="text-sm text-neutral-500">
                The organizer and contributors. How they give.
              </p>
            </Link>

            <Link
              href="/journey/recipient"
              className="block p-5 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="font-medium text-neutral-900 mb-1">Recipient Journey</h3>
              <p className="text-sm text-neutral-500">
                The person being celebrated. How they receive.
              </p>
            </Link>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Design Principles - Collapsible feel */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Design Principles</h2>
          <p className="text-sm text-neutral-500">The rules I kept coming back to.</p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-neutral-700">
            <p><strong>Relief, not a task.</strong> If it feels like homework, you've lost.</p>
            <p><strong>Small ask, big payoff.</strong> Tiny input, meaningful moment.</p>
            <p><strong>No cringe.</strong> Help people say real things without feeling like a dork.</p>
            <p><strong>AI stays backstage.</strong> Output reads like the sender, not an app.</p>
            <p><strong>Specificity wins.</strong> "I love how you ___" beats "I love you so much."</p>
            <p><strong>Fast path to send.</strong> Anything that delays sending is the enemy.</p>
            <p><strong>Low-stakes by design.</strong> Impossible to mess up.</p>
            <p><strong>Respect attention.</strong> No feed, no social layer, no surveys.</p>
            <p><strong>Warm, not cute.</strong> Calm and modern, not Hallmark.</p>
            <p><strong>Privacy is a feature.</strong> No public sharing, no contact scraping.</p>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Go Deeper */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Go Deeper</h2>

          <div className="space-y-4">
            <div>
              <p className="text-neutral-600 mb-2">
                11-minute audio walkthrough of the emotional architecture:
              </p>
              <audio
                controls
                className="w-full max-w-md"
                src="/process/notebooklm-podcast.mp3"
              >
                Your browser does not support audio.
              </audio>
            </div>

            <p className="text-neutral-600">
              Want the source material? The messy voice chat, structured doc, and AI tools I used are in{" "}
              <Link href="/process/grok-brainstorm" className="underline hover:text-neutral-900">
                How I Built This
              </Link>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
