import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = 'https://ryanwez.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RyanWez - AI Enthusiast & Project Creator",
  description: "The personal portfolio of RyanWez, an AI Enthusiast and Project Creator showcasing modern web applications and intelligent chatbots. Explore projects like SayarKaung, Employee-MM, and MiYanMar AI.",
  keywords: ["RyanWez", "Ryan Wez", "AI Enthusiast", "Web Developer", "Project Creator", "React", "Next.js", "TypeScript", "Portfolio", "Myanmar AI developer", "Next.js developer in Myanmar", "Telegram Bot Developer"],
  authors: [{ name: "RyanWez", url: siteUrl }],
  creator: "RyanWez",
  publisher: "RyanWez",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "RyanWez - AI Enthusiast & Project Creator",
    description: "The personal portfolio of RyanWez, an AI Enthusiast and Project Creator showcasing modern web applications and intelligent chatbots.",
    siteName: "RyanWez Portfolio",
    images: [
      {
        url: `/favicon.svg`,
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
    images: [`/mona.webp`],
    creator: "@RyanWez",
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'RyanWez',
  url: siteUrl,
  sameAs: [
    'https://github.com/RyanWez',
    'https://www.facebook.com/ryanwez0',
    'https://t.me/RyanWez',
  ],
  jobTitle: 'AI Enthusiast & Project Creator',
  worksFor: {
    '@type': 'Organization',
    name: 'RyanWez',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
