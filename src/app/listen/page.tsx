"use client";

import { useState, useRef } from "react";

export default function ListenPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleHeartClick = () => {
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
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4 py-6"
      style={{ backgroundColor: "rgb(249, 248, 244)" }}
    >
      {/* Sketch image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src="/listen/player.png"
          alt="LOVEABOUT"
          className="w-[80%] max-w-[311px] h-auto"
        />
      </div>

      {/* Heart button */}
      <div className="w-full flex justify-center -mt-16 mb-4">
        <button
          onClick={handleHeartClick}
          className="w-[61px] h-[66px] focus:outline-none transition-transform active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isPlaying ? "#dc2626" : "#991b1b"}
            />
          </svg>
        </button>
      </div>

      {/* Progress bar section */}
      <div className="w-full space-y-2 px-1">
        <div
          onClick={handleSeek}
          className="h-[30px] bg-neutral-200 rounded cursor-pointer overflow-hidden"
        >
          <div
            className="h-full bg-amber-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-neutral-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/process/notebooklm-podcast.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
}
