import { useEffect, useRef } from "react";
import ambientMusic from "@/assets/providence-soundtrack.mp3";

/**
 * BackgroundMusic — Completely invisible ambient audio engine
 * Respects browser autoplay policies and silently unlocks on the first user gesture.
 * Contains NO sticky, floating, or visible UI buttons per user requirement.
 */
export function BackgroundMusic() {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.volume = 0.35;

    const playAudio = () => {
      audio.play().catch(() => {
        // Autoplay policy waiting for user interaction
      });
    };

    // Attempt autoplay
    playAudio();

    // Auto-unlock on first user interaction anywhere
    const unlock = () => {
      if (audio.paused) {
        playAudio();
      }
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("click", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  return (
    <audio
      ref={ref}
      src={ambientMusic}
      loop
      preload="auto"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}
