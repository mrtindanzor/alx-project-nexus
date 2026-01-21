import { useLayoutEffect, useState } from "react";
import type { UseDeviceWidthProps } from "./useDeviceWidth.types";

const sizes = {
  MOBILE_SCREEN_SIZE: 640,
  TABLET_SCREEN_SIZE: 768,
  LARGE_SCREEN_SIZE: 1024,
};

const getSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return sizes.MOBILE_SCREEN_SIZE;

    case "md":
      return sizes.TABLET_SCREEN_SIZE;

    case "lg":
      return sizes.LARGE_SCREEN_SIZE;
  }
};

export function useMatchesWidth({
  size = "sm",
  comparison = "<",
  customSize,
}: UseDeviceWidthProps = {}) {
  const [matchesDeviceWidth, setMatchesDeviceWidth] = useState<boolean>(false);

  useLayoutEffect(() => {
    const query =
      comparison === "<"
        ? `(max-width: ${customSize || getSize(size)}px)`
        : `(min-width: ${customSize || getSize(size)}px)`;

    const media = window.matchMedia(query);

    const handleChangle = (e: MediaQueryListEvent) =>
      setMatchesDeviceWidth(e.matches);

    setMatchesDeviceWidth(media.matches);

    media.addEventListener("change", handleChangle);

    return () => media.removeEventListener("change", handleChangle);
  }, [size, comparison, customSize]);

  return matchesDeviceWidth;
}
