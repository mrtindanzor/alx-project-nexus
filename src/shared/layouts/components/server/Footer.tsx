import { APP_NAME, BUSINESS_NAME } from "@/shared/contants/app";
import { FooterDate } from "../client/Date";

export function AppFooter() {
  return (
    <footer className="bg-secondary-900 py-8 px-4 border-t border-t-muted-2">
      <p className="grid items-center text-primary/80 text-neutral/80 gap-y-2 font-medium max-w-6xl mx-auto">
        <span className="text-lg text-neutral">{APP_NAME}</span>
        {BUSINESS_NAME} &reg;
        <br />
        <FooterDate /> All rights reserved &copy;
      </p>
    </footer>
  );
}
