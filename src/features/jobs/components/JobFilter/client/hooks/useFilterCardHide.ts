import { useState } from "react";
import { useMatchesWidth } from "@/shared/hooks/useDeviceWidth";

export function useFilterCardHide() {
  const [isOpen, setIsOpen] = useState(false);
  const isLarge = useMatchesWidth({ size: "md", comparison: ">" });

  const showLg = isLarge;
  const showSm = !isLarge && isOpen;

  const close = () => setIsOpen(false);
  const open = () => !isLarge && setIsOpen(true);

  return { showLg, showSm, close, open };
}
