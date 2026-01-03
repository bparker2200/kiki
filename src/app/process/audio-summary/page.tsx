export default function AudioSummaryPage() {
  return (
    <div className="space-y-6">
      <div className="flex gap-8 items-start">
        {/* Video - left */}
        <div className="w-[280px] flex-shrink-0">
          <video
            src="/process/4-notebook.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-md border border-neutral-200"
          />
        </div>

        {/* Content - right */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-neutral-900">Audio Recap (NotebookLM)</h1>
          <p className="text-neutral-700 leading-relaxed">
            I pasted the same raw chat into NotebookLM and clicked "Audio Summary." It generated a conversational audio recap that sounds like a short podcast episode. This took about 30 seconds.
          </p>
          <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
            <li>This is a shortcut for reflection</li>
            <li>Hearing the ideas spoken back reveals what matters and what doesn't</li>
          </ul>
        </div>
      </div>

      {/* Audio player */}
      <div className="pt-4">
        <p className="text-sm text-neutral-500 mb-2">Listen to the output:</p>
        <audio
          controls
          className="w-full max-w-md"
          src="/process/notebooklm-podcast.mp3"
        >
          Your browser does not support audio.
        </audio>
      </div>
    </div>
  );
}
