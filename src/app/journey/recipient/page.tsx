import Image from "next/image";

export default function RecipientPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[800px] space-y-8">

        {/* Hero image */}
        <div className="w-full max-w-[600px]">
          <Image
            src="/journey/recipient-journey.png"
            alt="Recipient journey phases"
            width={600}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title + hook */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">Recipient Journey</h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            The recipient has one job: receive. No account, no setup, no response required. Just open, watch, and feel.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Main content section */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-neutral-800">The Phases</h2>
          <div className="space-y-6 text-neutral-700 leading-relaxed">

            <div>
              <p><strong>1. The Summons</strong></p>
              <p>A text arrives from someone they know. A cryptic link. &ldquo;Kiki sent you something.&rdquo;</p>
              <p className="italic text-neutral-500">Curiosity. &ldquo;What is this?&rdquo;</p>
            </div>

            <div>
              <p><strong>2. The Unfolding</strong></p>
              <p>They tap. A quote appears. Then another. Then another. Each from a different person.</p>
              <p className="italic text-neutral-500">Recognition. &ldquo;People wrote these... about me?&rdquo;</p>
            </div>

            <div>
              <p><strong>3. The Voices</strong></p>
              <p>The quotes end. Screen goes dark. Then video—faces they know, speaking directly to them.</p>
              <p className="italic text-neutral-500">Emotional peak. &ldquo;They&apos;re actually talking to me.&rdquo;</p>
            </div>

            <div>
              <p><strong>4. The Stillness</strong></p>
              <p>The video ends. Black screen. Three seconds of silence. Then: &ldquo;They love you. They really, really love you.&rdquo;</p>
              <p className="italic text-neutral-500">Absorption. &ldquo;I need a moment.&rdquo;</p>
            </div>

            <div>
              <p><strong>5. The Keeping</strong></p>
              <p>The experience ends, but it&apos;s theirs. They can return. They can replay. Forever.</p>
              <p className="italic text-neutral-500">Ownership. &ldquo;This is mine now.&rdquo;</p>
            </div>

          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Why This Works */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neutral-800">Why This Works</h2>
          <ul className="space-y-3 text-neutral-700">
            <li><strong>No app download.</strong> Web link opens directly into content. No friction.</li>
            <li><strong>3 seconds of silence.</strong> Mandatory pause before the closing message. The product steps back.</li>
            <li><strong>No homework.</strong> Reply is optional and nearly invisible—a small icon in the corner.</li>
            <li><strong>Not shareable.</strong> The recipient keeps it. No one else can download or forward it.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
