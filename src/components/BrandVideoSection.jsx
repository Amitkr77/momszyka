"use client";

import { useRef, useState, memo } from "react";

function BrandVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    // 🔥 Load video only on first play
    if (!videoRef.current.src) {
      videoRef.current.src = "/brand_video.mp4";
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full bg-[#fdf6ee] py-6 px-2 md:px-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        {/* Top Label */}
        <p className="text-sm uppercase tracking-widest text-orange-400 font-semibold mb-2">
          Our Story
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold leading-snug"
          style={{ color: "#e07b00", fontFamily: "Georgia, serif" }}
        >
          Feel the Momszyka Difference
        </h2>

        {/* NEW: Underline Design */}
        <div className="flex justify-center items-center gap-2 mt-3">
          <div className="h-[3px] w-10 bg-orange-500 rounded-full"></div>
          <div className="h-[3px] w-14 bg-gray-800 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          A peek into the love, warmth, and care that goes into every meal we
          deliver.
        </p>
      </div>

      {/* Vertical Video Container — phone reel style */}
      <div className="flex justify-center">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-black group w-[260px] sm:w-[300px] md:w-[320px]"
          style={{ aspectRatio: "9/16" }}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            poster="/brand_video_thumbnail.jpeg"
            className="w-full h-full object-cover"
            playsInline
            preload="none"
            loop
            controls={false} // ✅ add this
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Play Overlay — shown when paused */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-3 text-white text-sm font-medium tracking-wide opacity-90">
                Watch Our Story
              </p>
            </div>
          )}

          {/* Bottom Controls — visible on hover when playing */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-0"
            }`}
          >
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={toggleMute}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17 19.73L19.73 22.5 21 21.23 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center mt-6 text-gray-400 text-sm italic">
        "Every meal is a memory. Every delivery is a hug." — Team Momszyka
      </p>
    </section>
  );
}

export default memo(BrandVideoSection);
