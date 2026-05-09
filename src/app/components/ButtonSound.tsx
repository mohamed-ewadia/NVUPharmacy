import { useEffect, useRef } from "react";
import { playButtonTone } from "../utils/audio";

function isDisabledButton(element: Element) {
  return (
    element instanceof HTMLButtonElement &&
    (element.disabled || element.getAttribute("aria-disabled") === "true")
  );
}

export function ButtonSound() {
  const lastPlayedAtRef = useRef(0);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      if (target.closest("[data-feedback-sound='true']")) return;

      const soundTarget = target.closest("button, [data-sound-click='true']");

      if (!soundTarget || isDisabledButton(soundTarget)) return;

      const now = performance.now();
      if (now - lastPlayedAtRef.current < 60) return;

      lastPlayedAtRef.current = now;
      playButtonTone();
    }

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, []);

  return null;
}
