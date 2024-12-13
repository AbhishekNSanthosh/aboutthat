import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";

export const metadata: Metadata = {
  title: "AboutThat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
