export default function AudioSummaryPage() {
  return (
    <div className="space-y-6">
      {/* Intro text */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-neutral-900">Audio Recap (NotebookLM)</h1>
        <p className="text-neutral-700 leading-relaxed">
          I pasted the same raw chat into NotebookLM and clicked "Audio Summary." It generated a conversational audio recap that sounds like a short podcast episode. This took about 30 seconds.
        </p>
        <ul className="space-y-2 text-neutral-600 text-sm list-disc list-inside">
          <li>This is a shortcut for reflection</li>
          <li>Hearing the ideas spoken back reveals what matters and what doesn't</li>
        </ul>
      </div>

      {/* Video - larger, below text */}
      <div className="w-full max-w-[560px]">
        <video
          src="/process/4-notebook.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Audio player */}
      <div className="pt-2 space-y-3">
        <p className="text-sm font-medium text-neutral-700">Listen to the output:</p>
        <audio
          controls
          className="w-full max-w-md"
          src="/process/notebooklm-podcast.mp3"
        >
          Your browser does not support audio.
        </audio>
      </div>

      {/* Attachments */}
      <div className="pt-2 space-y-3">
        <p className="text-sm font-medium text-neutral-700">Source:</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/process/notebooklm.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
          >
            <span>📄</span>
            <span>NotebookLM Output</span>
          </a>
        </div>
      </div>
    </div>
  );
}
