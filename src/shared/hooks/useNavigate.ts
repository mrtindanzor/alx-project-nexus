"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { syncTryCatch } from "../utils/tryCatch";

export function useNavigate() {
  const updatedRef = useRef(false);
  const [pathname, setPathname] = useState("");
  const [origin, setOrigin] = useState("");

  useLayoutEffect(() => {
    if (updatedRef.current) {
      updatedRef.current = false;
      return;
    }

    const [location] = syncTryCatch(() => window.location);
    if (!location) return;

    setPathname(location.pathname);
    setOrigin(location.origin);
    updatedRef.current = true;
  });

  return { pathname, origin };
}
