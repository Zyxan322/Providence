import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import ambientMusic from "@/assets/providence-soundtrack.mp3";

export function BackgroundMusic() {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.volume = 0.35;
    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.play().catch(() => undefined);

    return () => {
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <>
      <audio
        ref={ref}
        src={ambientMusic}
        loop
        preload="auto"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <button
        type="button"
        className="header-cart-btn"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
        title={isPlaying ? "Pause background music" : "Play background music"}
        onClick={() => {
          const audio = ref.current;
          if (!audio) return;
          if (audio.paused) {
            audio.play().catch(() => setIsPlaying(false));
          } else {
            audio.pause();
          }
        }}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
