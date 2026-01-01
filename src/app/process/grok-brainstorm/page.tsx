import Image from "next/image";

export default function GrokBrainstormPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-neutral-700 leading-relaxed">
          On the drive home, I opened the Grok app, set it to voice mode, and talked out loud for about 45 minutes. There was no structure, no requirements, no screens. I used it the same way I&apos;d use a thinking partner in the car: fast, messy, exploratory. The goal wasn&apos;t answers, it was momentum.
        </p>
        <ul className="space-y-2 text-neutral-700 list-disc list-inside">
          <li>Voice chat guided thinking instead of just recording it</li>
          <li>Explored what the experience might feel like from both sender and recipient perspectives</li>
          <li>No prompts, no structure—just talking through the idea</li>
          <li>This is where most of the real thinking happened</li>
        </ul>
      </div>

      <div className="rounded-md border border-neutral-200 bg-white/60 p-3">
        <Image
          src="/process/grok-chat.png"
          alt="Grok chat artifact"
          width={1400}
          height={900}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
