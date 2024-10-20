import React, { useState, useEffect } from "react";

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    if (!ref.current) return; // Return early if ref is not yet available
    const observeTarget = ref.current;

    // Check for browser support for ResizeObserver
    if (typeof ResizeObserver === "undefined") {
      console.warn("ResizeObserver is not supported in this browser.");
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0) return; // Ensure there's an entry
      const { contentRect } = entries[0]; // Get the first entry
      setDimensions(contentRect); // Set the dimensions state
    });

    resizeObserver.observe(observeTarget);

    return () => {
      if (observeTarget) resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;
