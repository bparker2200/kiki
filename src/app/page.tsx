import Image from "next/image";
import Link from "next/link";
import { STATES } from "@/data/states";

export default function Home() {
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
