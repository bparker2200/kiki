"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useMemo, useEffect } from "react";

/**
 * Narrative affordance for the home page.
 * Not a reusable button. Do not reuse elsewhere.
 */
function HeartAffordance({ onClick }: { onClick: () => void }) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="absolute cursor-pointer focus:outline-none"
      style={{
        left: "68.1%",
        top: "63.5%",
        width: "2.3%",
        transform: "translate(-50%, -50%)",
        background: "none",
        border: "none",
        padding: 0,
      }}
      aria-label="Continue"
    >
      {/* Deep shadow layer - darker, offset more */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 95"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          top: prefersReducedMotion
            ? "12px"
            : isPressed
            ? "8px"
            : isHovered
            ? "11px"
            : "12px",
          left: prefersReducedMotion
            ? "10px"
            : isPressed
            ? "6px"
            : isHovered
            ? "9px"
            : "10px",
          transition: prefersReducedMotion
            ? "none"
            : isPressed
            ? "top 0.1s cubic-bezier(0.4, 0, 0.2, 1), left 0.1s cubic-bezier(0.4, 0, 0.2, 1), fill 0.1s cubic-bezier(0.4, 0, 0.2, 1)"
            : "top 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), left 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), fill 0.2s cubic-bezier(0.34, 1.2, 0.64, 1)",
        }}
      >
        <path
          d="M48 89 C46 87, 21 65, 12 52 C3 39, -2 28, 4 18 C9 9, 19 5, 28 5 C37 5, 44 10, 49 17 C54 10, 61 4, 71 5 C81 6, 91 12, 94 22 C98 32, 93 45, 83 58 C73 71, 52 87, 48 89Z"
          fill={isPressed && !prefersReducedMotion ? "#3a1515" : "#4a1e1e"}
          stroke="none"
        />
      </svg>

      {/* Main heart - wobbly, sketchy, imperfect */}
      <svg
        className="relative w-full h-full"
        viewBox="0 0 100 95"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : isPressed
            ? "translate(4px, 4px)"
            : isHovered
            ? "translate(-0.5px, -0.5px)"
            : "none",
          transition: prefersReducedMotion
            ? "none"
            : isPressed
            ? "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1)",
        }}
      >
        {/* Wobbly fill shape */}
        <path
          d="M48 89 C46 87, 21 65, 12 52 C3 39, -2 28, 4 18 C9 9, 19 5, 28 5 C37 5, 44 10, 49 17 C54 10, 61 4, 71 5 C81 6, 91 12, 94 22 C98 32, 93 45, 83 58 C73 71, 52 87, 48 89Z"
          fill="#c24b4b"
        />

        {/* First sketchy outline - doesn't close perfectly */}
        <path
          d="M49 17 C44 9, 36 4, 27 5 C17 6, 8 12, 5 20 C1 30, 5 42, 14 54 C24 67, 45 85, 48 88"
          fill="none"
          stroke="#8a3232"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Second sketchy line - slightly offset, imperfect */}
        <path
          d="M50 18 C55 9, 63 4, 72 5 C82 7, 90 14, 93 23 C97 34, 91 47, 81 60 C71 73, 51 88, 49 89"
          fill="none"
          stroke="#8a3232"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Extra wobbly sketch marks for that hand-drawn feel */}
        <path
          d="M27 7 C20 8, 12 14, 8 22"
          fill="none"
          stroke="#8a3232"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M73 7 C80 9, 88 16, 91 25"
          fill="none"
          stroke="#8a3232"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Highlight scribbles - messy, cute */}
        <path
          d="M22 26 Q26 21, 31 24"
          fill="none"
          stroke="rgba(255,200,190,0.5)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M26 34 Q29 30, 33 32"
          fill="none"
          stroke="rgba(255,200,190,0.35)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Tiny imperfect dots/marks */}
        <circle cx="24" cy="42" r="1.5" fill="rgba(255,200,190,0.3)" />
      </svg>
    </button>
  );
}

function TwoDoorLanding() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-2">
          LOVEABOUT
        </h1>
        <p className="text-neutral-600">
          A gift that shows someone how much they&apos;re loved
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <Link
          href="/system"
          className="flex-1 rounded-lg border border-neutral-200 bg-white px-6 py-5 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >
          <h2 className="text-lg font-medium text-neutral-800 mb-1">
            See the Product
          </h2>
          <p className="text-sm text-neutral-500">
            The concept, journeys, and emotional design
          </p>
        </Link>

        <Link
          href="/process/grok-brainstorm"
          className="flex-1 rounded-lg border border-neutral-200 bg-white px-6 py-5 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50"
        >
          <h2 className="text-lg font-medium text-neutral-800 mb-1">
            See How I Built This
          </h2>
          <p className="text-sm text-neutral-500">
            My AI workflow from idea to prototype
          </p>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const introContainerRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useMemo(() => {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const introComplete = sessionStorage.getItem("kiki_intro_complete") === "1";
    setShowIntro(!introComplete);
  }, []);

  const handleHeartClick = () => {
    setIsRevealing(true);

    const pauseDuration = prefersReducedMotion ? 100 : 150;
    const animationDuration = prefersReducedMotion ? 300 : 650;

    setTimeout(() => {
      if (introContainerRef.current) {
        introContainerRef.current.style.opacity = "0";
        introContainerRef.current.style.transform = prefersReducedMotion ? "none" : "translateY(-16px)";
        introContainerRef.current.style.transition = prefersReducedMotion
          ? "opacity 0.3s ease-out"
          : "opacity 0.65s ease-out, transform 0.65s ease-out";
      }

      setTimeout(() => {
        sessionStorage.setItem("kiki_intro_complete", "1");
        setShowIntro(false);
      }, animationDuration);
    }, pauseDuration);
  };

  // Still loading sessionStorage check
  if (showIntro === null) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "rgb(249, 248, 244)" }} />
    );
  }

  // Return visit - show two-door landing directly
  if (!showIntro) {
    return <TwoDoorLanding />;
  }

  // First visit - show intro with heart
  return (
    <div className="flex min-h-screen justify-center p-8" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
      <div className="relative w-full max-w-[1200px]" style={{ backgroundColor: "rgb(249, 248, 244)" }}>
        <div
          ref={introContainerRef}
          className="relative"
          style={{
            opacity: 1,
            transform: "none",
            transition: "none",
          }}
        >
          <Image
            src="/home.png"
            alt="LOVEABOUT"
            width={1200}
            height={2000}
            priority
            className="w-full h-auto block"
          />
          {!isRevealing && <HeartAffordance onClick={handleHeartClick} />}
        </div>
      </div>
    </div>
  );
}
