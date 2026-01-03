export default function GrokBrainstormPage() {
  return (
    <div className="space-y-6">
      <div className="flex gap-8 items-start">
        {/* Content - left */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-neutral-900">Voice Brainstorm (Grok)</h1>
          <p className="text-neutral-700 leading-relaxed">
            On the drive home, I opened the Grok app, set it to voice mode, and talked out loud for about 45 minutes. No structure, no requirements, no screens. I used it the same way I'd use a thinking partner in the car: fast, messy, exploratory. The goal wasn't answers — it was momentum.
          </p>
          <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
            <li>Voice chat guided thinking instead of just recording it</li>
            <li>Explored what the experience might feel like from both sides</li>
            <li>No prompts, no structure — just talking through the idea</li>
            <li>This is where most of the real thinking happened</li>
          </ul>
        </div>

        {/* Video - right */}
        <div className="w-[200px] flex-shrink-0">
          <video
            src="/process/1-voice.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-md border border-neutral-200"
          />
        </div>
      </div>

      {/* Attachments */}
      <div className="pt-4 space-y-3">
        <p className="text-sm font-medium text-neutral-700">Source material:</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/process/grok-chat-full.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          >
            <span>📄</span>
            <span>Full chat transcript (PDF)</span>
          </a>
        </div>
        <p className="text-xs text-neutral-500 italic">
          It's long and rambly. Skim if you want context, but don't punish yourself reading every line.
        </p>
      </div>

      {/* Condensed version */}
      <div className="pt-2 space-y-3">
        <p className="text-sm font-medium text-neutral-700">The short version:</p>
        <div className="bg-white border border-neutral-200 rounded-md p-4 text-sm text-neutral-700 space-y-2">
          <p>
            The conversation explored what it would feel like to receive a coordinated message of love from multiple people — sequenced, paced, and private. Key themes that emerged:
          </p>
          <ul className="list-disc list-inside space-y-1 text-neutral-600">
            <li>Distribution via personal text, not app install</li>
            <li>Mandatory silence after the last message</li>
            <li>No social features — no likes, no shares, no comments</li>
            <li>The "Chop Suey edit" — multiple voices stitched into one</li>
            <li>Technology as enabler, not centerpiece</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
