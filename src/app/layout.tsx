import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebaduzzaman Ebad | Senior Mobile App Developer (Flutter & Dart)",
  description: "Portfolio of Ebaduzzaman Ebad – Senior Mobile Application Architect & Flutter Developer specializing in high-performance iOS & Android apps.",
  keywords: ["Ebaduzzaman Ebad", "Flutter Developer", "Mobile App Developer", "iOS", "Android", "Dart", "BLoC", "Clean Architecture", "Portfolio"],
  authors: [{ name: "Ebaduzzaman Ebad" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
