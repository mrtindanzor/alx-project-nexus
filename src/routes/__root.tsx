import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { BaseProvider } from "@/BaseProvider";
import { generateMetaData } from "@/lib/tanstack";
import { ErrorPage } from "@/screens/Error";
import { APP_NAME } from "@/shared/contants/app";
import { cn } from "@/shared/utils/cn";
import appCss from "./globals.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: () => null,
  errorComponent: ({ reset, error }) => (
    <ErrorPage error={error} reset={reset} />
  ),

  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...generateMetaData({
        title: APP_NAME,
        description: `Your number 1 poll maker`,
        path: "",
      }),
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        className={cn(
          "bg-background overflow-x-hidden text-on-surface font-body antialiased",
          `bg-muted text-neutral`,
        )}
      >
        <BaseProvider>
          <Outlet />
        </BaseProvider>
        <Scripts />
      </body>
    </html>
  );
}
