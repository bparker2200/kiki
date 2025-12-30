import Image from "next/image";
import Link from "next/link";

const PROCESS_HOTSPOTS = [
  { href: "/process/grok-brainstorm", x: 2.16, y: 34.57, w: 13.36, h: 14.36 },
  { href: "/process/product-blueprint", x: 18.09, y: 34.77, w: 11.73, h: 17.77 },
  { href: "/process/whiteboard-wireframes", x: 31.65, y: 34.57, w: 13.36, h: 19.92 },
  { href: "/process/audio-summary", x: 47.71, y: 34.47, w: 11.14, h: 17.97 },
  { href: "/process/saved-artifacts", x: 76.67, y: 34.67, w: 8.26, h: 12.99 },
  { href: "/process/html-index", x: 62.85, y: 34.57, w: 11.14, h: 17.97 },
  { href: "/process/ready-to-create-prototype", x: 90.78, y: 38.96, w: 8.26, h: 12.99 },
];

export default function ProcessPage() {
  return (
    <div
      className="flex min-h-screen justify-center p-8"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <div className="relative w-full max-w-[1200px]">
        <Image
          src="/process-map.png"
          alt="Process Map"
          width={1536}
          height={1024}
          priority
          className="w-full h-auto block"
        />
        {PROCESS_HOTSPOTS.map((hotspot, index) => (
          <Link
            key={`${hotspot.href}-${index}`}
            href={hotspot.href}
            className="absolute cursor-pointer group"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              width: `${hotspot.w}%`,
              height: `${hotspot.h}%`,
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
