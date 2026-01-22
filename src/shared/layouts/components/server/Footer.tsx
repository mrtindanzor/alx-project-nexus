import { BUSINESS_NAME } from "@/shared/contants/app";
import { FooterDate } from "../client/Date";

export function AppFooter() {
  return (
    <footer className="bg-neutral py-8 px-4">
      <p className="flex items-center text-primary/80 font-semibold max-w-6xl mx-auto">
        &copy; <FooterDate /> JobBoard. {BUSINESS_NAME}
        <br /> All rights reserved &reg;
      </p>
    </footer>
  );
}
