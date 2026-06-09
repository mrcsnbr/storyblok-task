import { Geist, Geist_Mono } from "next/font/google";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Storyblok Technical Task",
  description:
    "A Next.js website demonstrating Storyblok draft content, live editing, reusable components, dynamic routing, and the Management API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
      </body>
    </html>
  );
}