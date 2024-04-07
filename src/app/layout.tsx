import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter=Inter({ subsets: ["latin"] });

export const metadata: Metadata={
  title: "I2C2 -Ideate Innovate Code Compete",
  description: "Ideate, Innovate, Code and Compete is an Hackathon. An Hackathon is a short, intensive, workshop-like experience for students to address some of the most pressing challenges of our time. Participants work individually and use design thinking and innovative learning practices to ideate and collaborate on possible solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
