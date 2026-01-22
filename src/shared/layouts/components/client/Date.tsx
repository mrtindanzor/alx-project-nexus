"use client";

export function FooterDate() {
  const date = new Date().getFullYear();

  return <>{date}</>;
}
