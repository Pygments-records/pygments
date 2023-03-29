import { useState, useEffect } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

const DESKTOP_WIDTH = 1024;

export function useResponsive() {
  const { width } = useWindowDimensions();
  const [isMobileSize, setIsMobileSize] = useState<boolean | undefined>(() => {
    return width !== undefined ? width < DESKTOP_WIDTH : undefined;
  });

  useEffect(() => {
    if (width !== undefined) {
      setIsMobileSize(width < DESKTOP_WIDTH);
    }
  }, [width]);

  return { isMobileSize };
}
