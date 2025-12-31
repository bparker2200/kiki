"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function StatesFocusHandler() {
  const searchParams = useSearchParams();
  const focus = searchParams.get("focus");
  const lastFocusRef = useRef<string | null>(null);

  useEffect(() => {
    if (focus !== "states") {
      lastFocusRef.current = focus;
      return;
    }

    if (lastFocusRef.current === "states") {
      return;
    }

    lastFocusRef.current = "states";

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    const scrollToStates = () => {
      const statesElement = document.getElementById("states");
      if (statesElement) {
        statesElement.scrollIntoView({ behavior: scrollBehavior, block: "start" });
        statesElement.classList.add("kikiStatesFocusHighlight");

        setTimeout(() => {
          const element = document.getElementById("states");
          if (element) {
            element.classList.remove("kikiStatesFocusHighlight");
          }
        }, 900);
      }
    };

    requestAnimationFrame(() => {
      setTimeout(scrollToStates, 0);
    });
  }, [focus]);

  return null;
}

