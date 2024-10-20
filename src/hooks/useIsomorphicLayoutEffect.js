import { useLayoutEffect, useEffect } from "react";

// A hook that chooses `useLayoutEffect` when in the browser (client-side)
// and `useEffect` when server-side rendering is detected.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
