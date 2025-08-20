import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanwez.github.io'),
  title: "RyanWez - AI Enthusiast & Project Creator",
  description: "The personal portfolio of RyanWez, an AI Enthusiast and Project Creator showcasing modern web applications and intelligent chatbots. Explore projects like SayarKaung, Employee-MM, and MiYanMar AI.",
  keywords: ["RyanWez", "AI Enthusiast", "Web Developer", "Project Creator", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "RyanWez" }],
  creator: "RyanWez",
  publisher: "RyanWez",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryanwez.github.io",
    title: "RyanWez - AI Enthusiast & Project Creator",
    description: "The personal portfolio of RyanWez, an AI Enthusiast and Project Creator showcasing modern web applications and intelligent chatbots.",
    siteName: "RyanWez Portfolio",
    images: [
      {
        url: "/mona.webp",
        width: 1200,
        height: 630,
        alt: "RyanWez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RyanWez - AI Enthusiast & Project Creator",
    description: "The personal portfolio of RyanWez, an AI Enthusiast and Project Creator showcasing modern web applications and intelligent chatbots.",
    images: ["/mona.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
