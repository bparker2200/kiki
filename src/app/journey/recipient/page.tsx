import Image from "next/image";

const phases = [
  {
    image: "/journey/r1-summons.png",
    title: "The Summons",
    description: "A text arrives from someone they know. A cryptic link. \"Kiki sent you something.\"",
    emotion: "Curiosity. \"What is this?\"",
  },
  {
    image: "/journey/r2-unfolding.png",
    title: "The Unfolding",
    description: "They tap. A quote appears. Then another. Then another. Each from a different person.",
    emotion: "Recognition. \"People wrote these... about me?\"",
  },
  {
    image: "/journey/r3-voices.png",
    title: "The Voices",
    description: "The quotes end. Screen goes dark. Then video—faces they know, speaking directly to them.",
    emotion: "Emotional peak. \"They're actually talking to me.\"",
  },
  {
    image: "/journey/r4-stillness.png",
    title: "The Stillness",
    description: "The video ends. Black screen. Three seconds of silence. Then: \"They love you. They really, really love you.\"",
    emotion: "Absorption. \"I need a moment.\"",
  },
  {
    image: "/journey/r5-keeping.png",
    title: "The Keeping",
    description: "The experience ends, but it's theirs. They can return. They can replay. Forever.",
    emotion: "Ownership. \"This is mine now.\"",
  },
];

export default function RecipientJourneyPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[900px] space-y-8">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">Recipient Journey</h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            The recipient has one job: receive. No account, no setup, no response required. Just open, watch, and feel.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Phases */}
        <div className="space-y-10">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="flex gap-8 items-center"
            >
              {/* Image */}
              <div className="w-[120px] h-[100px] flex-shrink-0 flex items-center justify-center">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  width={120}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-medium text-neutral-900">
                  {index + 1}. {phase.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {phase.description}
                </p>
                <p className="text-neutral-500 italic">
                  {phase.emotion}
                </p>
              </div>
            </div>
          ))}
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
