"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function TieAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(pct);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-[400px]">
      {/* Sketch with tie button overlay */}
      <div className="relative w-full aspect-square">
        {/* Base sketch */}
        <Image
          src="/process/couple-sketch.png"
          alt="Kiki and Ben"
          fill
          className="object-contain"
          priority
        />

        {/* Tie button - positioned over the drawn tie */}
        <button
          onClick={togglePlay}
          className="absolute focus:outline-none"
          style={{
            left: "38%",
            top: "28%",
            width: "12%",
            height: "32%",
            transform: "translateX(-50%)",
          }}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 520"
            className="w-full h-full transition-all duration-100 ease-out hover:-translate-y-0.5 active:translate-y-1"
            style={{
              filter: isPlaying
                ? "drop-shadow(0 2px 2px rgba(0,0,0,0.4)) drop-shadow(0 4px 4px rgba(0,0,0,0.2))"
                : "drop-shadow(0 8px 4px rgba(0,0,0,0.3)) drop-shadow(0 16px 8px rgba(0,0,0,0.2)) drop-shadow(0 24px 16px rgba(0,0,0,0.1))",
            }}
          >
            <defs>
              <linearGradient id="tieDepth" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C41E1E"/>
                <stop offset="35%" stopColor="#FF2A1F"/>
                <stop offset="65%" stopColor="#FF2A1F"/>
                <stop offset="100%" stopColor="#D42A1A"/>
              </linearGradient>
            </defs>
            <g>
              <path d="M103 62 Q106 63 108 67 L111 80 L113 120 L116 200 L122 350 L130 480 Q131 488 125 492 L103 504 Q100 506 100 504 L100 504" fill="rgba(0,0,0,0.2)" stroke="none"/>
              <path d="M100 58 Q104 60 106 65 L108 78 L110 120 L113 200 L119 350 L127 478 Q128 486 122 490 L100 502 Q92 498 78 490 Q72 486 73 478 L81 350 L87 200 L90 120 L92 78 Q94 63 96 60 Q98 58 100 58" fill="url(#tieDepth)" stroke="#8B1A1A" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M92 80 Q91 150 88 250 Q84 350 78 450" fill="none" stroke="#9A1515" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
              <path d="M108 80 Q110 150 113 250 Q117 350 123 450" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M100 75 Q100 200 100 490" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M84 38 Q86 32 92 28 Q96 26 100 26 Q104 26 108 28 Q114 32 116 38 L118 50 Q117 58 112 62 L106 65 Q102 66 100 66 Q98 66 94 65 L88 62 Q83 58 82 50 Z" fill="url(#tieDepth)" stroke="#8B1A1A" strokeWidth="1.5" strokeLinejoin="round"/>
              <ellipse cx="100" cy="48" rx="10" ry="6" fill="rgba(0,0,0,0.15)"/>
              <path d="M94 40 Q98 38 102 42" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M84 38 Q78 32 68 22 Q64 20 62 24 Q60 28 64 34 Q72 44 82 50" fill="url(#tieDepth)" stroke="#8B1A1A" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M116 38 Q122 32 132 22 Q136 20 138 24 Q140 28 136 34 Q128 44 118 50" fill="url(#tieDepth)" stroke="#8B1A1A" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M95 120 L96 125" stroke="#9A1515" strokeWidth="0.8" opacity="0.4"/>
              <path d="M104 180 L105 188" stroke="#9A1515" strokeWidth="0.8" opacity="0.4"/>
              <path d="M93 280 L94 290" stroke="#9A1515" strokeWidth="0.8" opacity="0.4"/>
              <path d="M106 380 L108 392" stroke="#9A1515" strokeWidth="0.8" opacity="0.4"/>
              <path d="M96 440 L94 455" stroke="rgba(255,255,255,0.2)" strokeWidth="1" opacity="0.5"/>
            </g>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div
        onClick={handleSeek}
        className="mt-3 h-2 bg-neutral-200 rounded-full cursor-pointer"
      >
        <div
          className="h-full bg-red-600 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Label */}
      <p className="mt-2 text-sm text-neutral-500 text-center">
        {isPlaying ? "Playing... tap tie to pause" : "Tap the tie to play"}
      </p>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/process/notebooklm-podcast.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
}
