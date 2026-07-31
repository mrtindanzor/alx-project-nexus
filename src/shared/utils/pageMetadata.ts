import { APP_NAME } from "../contants/app";
import { toCapitalized } from "./textFormat";

export function pageTitle(title: string) {
  return `${title} ~ ${toCapitalized(APP_NAME)}`;
}

export function pageDescription(description: string) {
  const descWithBranding = `${toCapitalized(APP_NAME)} - ${description}`;
  return descWithBranding.length > 160
    ? `${descWithBranding.slice(0, 160)}...`
    : descWithBranding;
}
