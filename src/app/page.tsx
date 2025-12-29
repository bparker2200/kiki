import Image from "next/image";
import Link from "next/link";
import { STATES } from "@/data/states";

export default function Home() {
  const debugHotspots = process.env.NEXT_PUBLIC_DEBUG_HOTSPOTS === "1";

  return (
    <div className="flex min-h-screen justify-center p-8">
      <div className="relative w-full max-w-[1200px]">
        <Image
          src="/whiteboard.png"
          alt="Main Wireframe"
          width={1200}
          height={2000}
          priority
          className="w-full h-auto block"
        />
        {STATES.map((state) => (
          <Link
            key={state.slug}
            href={`/state/${state.slug}`}
            className="absolute cursor-pointer group"
            style={{
              left: `${state.hotspot.x}%`,
              top: `${state.hotspot.y}%`,
              width: `${state.hotspot.w}%`,
              height: `${state.hotspot.h}%`,
            }}
          >
            {debugHotspots && (
              <span className="pointer-events-none absolute inset-0 border border-yellow-700/40 bg-yellow-300/10 text-[10px] text-yellow-900/80 flex items-start">
                <span className="m-1 px-1 rounded bg-white/80">{state.label}</span>
              </span>
            )}
            <span
              className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-50 transition-opacity"
              style={{
                borderRadius: "2px",
                transform: "skewX(-1deg) rotate(-0.5deg)",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
