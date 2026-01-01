import TieAudioPlayer from "@/components/TieAudioPlayer";

export default function AudioSummaryPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-neutral-900">
          Audio Recap (NotebookLM)
        </h1>
        <div className="rounded-md border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-700 space-y-2">
          <p>
            <span className="font-medium text-neutral-900">Tool:</span> Google NotebookLM
          </p>
          <p>
            <span className="font-medium text-neutral-900">Input:</span> The raw Grok chat transcript
          </p>
          <p>
            <span className="font-medium text-neutral-900">Action:</span> Clicked &ldquo;Audio Summary&rdquo; — that&apos;s it
          </p>
        </div>
        <p className="text-neutral-600 leading-relaxed">
          NotebookLM generated an 11-minute podcast-style conversation from my raw notes.
          Two AI hosts discuss the product concept as if it were a case study.
          Took about 30 seconds to generate.
        </p>
      </div>

      <div className="flex justify-center">
        <TieAudioPlayer />
      </div>
    </div>
  );
}
