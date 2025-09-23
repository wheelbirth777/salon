"use client";
import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a media query for screens smaller than 768px
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    // Update the state based on the initial screen size
    setIsMobile(mediaQuery.matches);

    // Handler for screen size changes
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Add listener for screen size changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
};
