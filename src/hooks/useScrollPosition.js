/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const isBrowser = typeof window !== "undefined";

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }

  const target = element?.current || document.body;
  const { left, top } = target.getBoundingClientRect();
  return { x: left, y: top };
}

export function useScrollPosition(
  effect,
  deps = [],
  element = null,
  useWindow = false,
  wait = null
) {
  const positionRef = useRef(getScrollPosition({ element, useWindow }));
  const throttleTimeoutRef = useRef(null);

  const handleScroll = () => {
    const currentPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: positionRef.current, currPos: currentPos });
    positionRef.current = currentPos;

    // Clear the throttle timeout if it exists
    if (throttleTimeoutRef.current) {
      clearTimeout(throttleTimeoutRef.current);
      throttleTimeoutRef.current = null;
    }
  };

  const throttledScrollHandler = () => {
    if (wait) {
      if (!throttleTimeoutRef.current) {
        throttleTimeoutRef.current = setTimeout(handleScroll, wait);
      }
    } else {
      handleScroll();
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;

    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, deps);
}
