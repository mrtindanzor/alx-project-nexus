import { useRouter } from "@tanstack/react-router";
import { useContext } from "react";
import { routes } from "@/shared/routes/routes";
import { RouteChangeContext } from "./RouteChange";

export function useRouteChangeCtx() {
  const ctx = useContext(RouteChangeContext);
  if (!ctx)
    throw Error("Route change must be used inside Route change provider");

  return ctx;
}

export function useRouteChangeListener() {}

export function useRouteChange() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length <= 1) {
      router.navigate({ href: routes.home });
    } else {
      router.history.back();
    }
  };

  return {
    goBack: handleBack,
  };
}
