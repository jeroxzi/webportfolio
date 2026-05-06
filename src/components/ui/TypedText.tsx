"use client";

import { useState, useEffect, useRef } from "react";

interface TypedTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

export function TypedText({ texts, speed = 80, pause = 2000 }: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const state = useRef({ index: 0, charIndex: 0, isDeleting: false });

  // Reset when texts array changes
  useEffect(() => {
    state.current = { index: 0, charIndex: 0, isDeleting: false };
    setDisplayText("");
  }, [texts]);

  useEffect(() => {
    if (!texts.length) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      // Guard: clamp index in case of hot-reload with a shorter texts array
      if (s.index >= texts.length) {
        s.index = 0;
        s.charIndex = 0;
        s.isDeleting = false;
      }
      const current = texts[s.index];

      if (!s.isDeleting) {
        s.charIndex += 1;
        setDisplayText(current.slice(0, s.charIndex));
        if (s.charIndex === current.length) {
          s.isDeleting = true;
          timer = setTimeout(tick, pause);
        } else {
          timer = setTimeout(tick, speed);
        }
      } else {
        s.charIndex -= 1;
        setDisplayText(current.slice(0, s.charIndex));
        if (s.charIndex === 0) {
          s.isDeleting = false;
          s.index = (s.index + 1) % texts.length;
          timer = setTimeout(tick, speed);
        } else {
          timer = setTimeout(tick, speed / 2);
        }
      }
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [texts, speed, pause]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-accent-light ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
