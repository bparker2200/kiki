import Image from "next/image";

export default function SystemPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="mx-auto w-full max-w-[1200px] space-y-6">
        <h1 className="text-3xl font-semibold text-neutral-900">Overview</h1>
        
        <p className="text-neutral-700 leading-relaxed text-lg">
          A high-level view of the experience, showing how pacing and intent connect.
        </p>
        
        <div className="mt-8">
          <Image
            src="/process-map.png"
            alt="Overview"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}

