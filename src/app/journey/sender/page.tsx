import Image from "next/image";

export default function SenderPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-8">

        {/* Hero image */}
        <div className="w-full max-w-[600px]">
          <Image
            src="/journey/sender-journey.png"
            alt="Sender journey phases"
            width={600}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title + hook */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">Sender Journey</h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            The curator starts it. Friends contribute. The whole thing should take under 2 minutes per person—and feel like a gift, not homework.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Main content section */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-neutral-800">The Phases</h2>
          <div className="space-y-6 text-neutral-700 leading-relaxed">

            <div>
              <p><strong>1. The Ask</strong></p>
              <p>A text arrives from a friend: &ldquo;I&apos;m putting something together for [Name]. Can you add something?&rdquo;</p>
              <p className="italic text-neutral-500">Willingness. &ldquo;Of course—but what do I say?&rdquo;</p>
            </div>

            <div>
              <p><strong>2. The Blank Page</strong></p>
              <p>They tap the link. They see the recipient&apos;s name. They see an empty text field.</p>
              <p className="italic text-neutral-500">Mild panic. &ldquo;I don&apos;t want to sound generic.&rdquo;</p>
            </div>

            <div>
              <p><strong>3. The Finding</strong></p>
              <p>They type a few words, or hit shuffle, or edit a suggestion. Something clicks.</p>
              <p className="italic text-neutral-500">Relief. &ldquo;That&apos;s actually what I mean.&rdquo;</p>
            </div>

            <div>
              <p><strong>4. The Offering</strong></p>
              <p>Optional: record a short video. Camera on. Face visible. Speaking out loud.</p>
              <p className="italic text-neutral-500">Vulnerability. &ldquo;Do I have to? ...Okay. For them.&rdquo;</p>
            </div>

            <div>
              <p><strong>5. The Release</strong></p>
              <p>They hit send. &ldquo;You&apos;re done.&rdquo; No follow-up. No survey.</p>
              <p className="italic text-neutral-500">Quiet satisfaction. &ldquo;I was part of something.&rdquo;</p>
            </div>

          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Why This Works */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Why This Works</h2>
          <ul className="space-y-3 text-neutral-700">
            <li><strong>The product doesn&apos;t send invites.</strong> The curator texts friends personally. High-trust channel.</li>
            <li><strong>Shuffle kills the blank page.</strong> AI-generated options get words on screen in 10 seconds.</li>
            <li><strong>Video is optional.</strong> Always skippable, never forced. But the people who record make the recipient cry.</li>
            <li><strong>No follow-up.</strong> No &ldquo;invite others,&rdquo; no dashboard, no share prompt. The loop closes clean.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
