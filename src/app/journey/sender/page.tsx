import Image from "next/image";

const phases = [
  {
    image: "/journey/s1-ask.png",
    title: "The Ask",
    description: "A text arrives from a friend: \"I'm putting something together for [Name]. Can you add something?\"",
    emotion: "Willingness. \"Of course—but what do I say?\"",
  },
  {
    image: "/journey/s2-blank-page.png",
    title: "The Blank Page",
    description: "They tap the link. They see the recipient's name. They see an empty text field.",
    emotion: "Mild panic. \"I don't want to sound generic.\"",
  },
  {
    image: "/journey/s3-finding.png",
    title: "The Finding",
    description: "They type a few words, or hit shuffle, or edit a suggestion. Something clicks.",
    emotion: "Relief. \"That's actually what I mean.\"",
  },
  {
    image: "/journey/s4-offering.png",
    title: "The Offering",
    description: "Optional: record a short video. Camera on. Face visible. Speaking out loud.",
    emotion: "Vulnerability. \"Do I have to? ...Okay. For them.\"",
  },
  {
    image: "/journey/s5-release.png",
    title: "The Release",
    description: "They hit send. \"You're done.\" No follow-up. No survey.",
    emotion: "Quiet satisfaction. \"I was part of something.\"",
  },
];

export default function SenderJourneyPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[900px] space-y-8">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-900">Sender Journey</h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            The curator starts it. Friends contribute. The whole thing should take under 2 minutes per person—and feel like a gift, not homework.
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
