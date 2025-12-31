import Image from "next/image";

export default function SequencePage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[1200px] overflow-x-hidden">
        <Image
          src="/journey/sender-journey.png"
          alt="Sender journey"
          width={1200}
          height={800}
          className="block w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}

