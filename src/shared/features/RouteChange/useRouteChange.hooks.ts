"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { RouteChangeContext } from "./RouteChange";

export function useRouteChangeCtx() {
	const ctx = useContext(RouteChangeContext);
	if (!ctx)
		throw Error("Route change must be used inside Route change provider");

	return ctx;
}

export function useRouteChangeListener() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { routeHistoryRef } = useRouteChangeCtx();

	const url = useMemo(() => {
		const search = searchParams.toString();
		return `${pathname}${search ? `?${search}` : ""}`;
	}, [searchParams, pathname]);

	useEffect(() => {
		routeHistoryRef.current.unshift(url);
	}, [url, routeHistoryRef]);
}

export function useRouteChange() {
	const router = useRouter();
	const { routeHistoryRef } = useRouteChangeCtx();

	const goBack = useCallback(
		(path?: string) => {
			routeHistoryRef.current.shift();
			if (path) return router.push(path);

			const backPage = routeHistoryRef.current[0];
			routeHistoryRef.current.shift();

			return router.push(backPage);
		},
		[router, routeHistoryRef],
	);

	return {
		goBack,
	};
}
