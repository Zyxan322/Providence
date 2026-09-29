import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import ambientMusic from "@/assets/providence-soundtrack.mp3";

const MUSIC_ENABLED_KEY = "providence-background-music-enabled";

export function BackgroundMusic() {
  const ref = useRef<HTMLAudioElement>(null);
  const playRef = useRef<() => void>(() => {});
  const enabledRef = useRef(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.volume = 0.35;
    try {
      enabledRef.current = localStorage.getItem(MUSIC_ENABLED_KEY) !== "off";
    } catch {
      enabledRef.current = true;
    }

    let playbackRequest: Promise<void> | undefined;
    const removeGestureListeners = () => {
      window.removeEventListener("pointerdown", handleUserGesture);
      window.removeEventListener("keydown", handleUserGesture);
    };
    const playAudio = () => {
      if (!enabledRef.current || !audio.paused || playbackRequest) return;
      playbackRequest = audio
        .play()
        .then(removeGestureListeners)
        .catch(() => undefined)
        .finally(() => {
          playbackRequest = undefined;
        });
    };
    const handleUserGesture = (event: Event) => {
      if (event.target instanceof Element && event.target.closest("[data-music-control]")) return;
      playAudio();
    };
    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    playRef.current = playAudio;

    if (enabledRef.current) {
      window.addEventListener("pointerdown", handleUserGesture, { passive: true });
      window.addEventListener("keydown", handleUserGesture);
      playAudio();
    }

    return () => {
      removeGestureListeners();
      playRef.current = () => {};
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
        data-music-control
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
        title={isPlaying ? "Pause background music" : "Play background music"}
        onClick={() => {
          const audio = ref.current;
          if (!audio) return;
          if (audio.paused) {
            enabledRef.current = true;
            try {
              localStorage.setItem(MUSIC_ENABLED_KEY, "on");
            } catch {
              // Playback can still be enabled for this page.
            }
            playRef.current();
          } else {
            enabledRef.current = false;
            try {
              localStorage.setItem(MUSIC_ENABLED_KEY, "off");
            } catch {
              // Playback can still be paused for this page.
            }
            audio.pause();
          }
        }}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
