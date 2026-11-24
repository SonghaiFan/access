import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@cytocausal/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACCESS Explorer | Abstract Causal Events",
  description: "Explore a causal graph of abstract everyday events from the ACCESS benchmark.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
