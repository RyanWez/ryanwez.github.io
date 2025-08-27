import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true
});

const siteUrl = 'https://ryanwez.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryan Wez - AI Enthusiast & Project Creator",
    template: "%s | Ryan Wez"
  },
  description: "Professional portfolio of Ryan Wez - AI Enthusiast, Web Developer & Project Creator. Specializing in modern web applications, intelligent chatbots, and AI-powered solutions. Explore innovative projects and get in touch for collaborations.",
  keywords: [
    "Ryan Wez", "RyanWez", "AI Enthusiast", "Web Developer", "Project Creator",
    "React Developer", "Next.js", "TypeScript", "JavaScript", "Portfolio",
    "Myanmar AI developer", "Chatbot Developer", "Telegram Bot Developer",
    "Full Stack Developer", "Frontend Developer", "AI Integration", "Machine Learning",
    "Web Applications", "Modern Web Development", "Responsive Design", "SEO Optimization"
  ],
  authors: [{ name: "Ryan Wez", url: siteUrl }],
  creator: "Ryan Wez",
  publisher: "Ryan Wez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ryan Wez - AI Enthusiast & Project Creator",
    description: "Professional portfolio showcasing innovative AI-powered web applications and intelligent solutions. Explore cutting-edge projects and collaborate on your next big idea.",
    siteName: "Ryan Wez Portfolio",
    images: [
      {
        url: `/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ryan Wez - AI Enthusiast & Project Creator Portfolio",
        type: "image/png",
      },
      {
        url: `/images/og-image-square.png`,
        width: 400,
        height: 400,
        alt: "Ryan Wez Profile",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RyanWez",
    creator: "@RyanWez",
    title: "Ryan Wez - AI Enthusiast & Project Creator",
    description: "Professional portfolio showcasing innovative AI-powered web applications and intelligent solutions.",
    images: {
      url: `/images/og-image.png`,
      alt: "Ryan Wez Portfolio",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tUDqk_vr2ti4COAvMzFu4jsw28WjEKWvf55xZtWO798",
    // yandex: "69cf6376aadb1033", // Temporarily disabled - needs proper verification
    // yahoo/bing: Will be added via meta tag method
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'WebSite'],
  name: 'Ryan Wez',
  alternateName: 'RyanWez',
  url: siteUrl,
  image: `${siteUrl}/images/og-image.png`,
  description: 'AI Enthusiast & Project Creator specializing in modern web applications and intelligent solutions',
  sameAs: [
    'https://github.com/RyanWez',
    'https://www.facebook.com/ryanwez0',
    'https://t.me/RyanWez',
  ],
  jobTitle: 'AI Enthusiast & Project Creator',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Web Developer',
    occupationLocation: {
      '@type': 'Country',
      name: 'Myanmar'
    },
    skills: ['React', 'Next.js', 'TypeScript', 'AI Integration', 'Web Development']
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Chatbot Development',
    'Frontend Development',
    'Full Stack Development'
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': siteUrl
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#5DADE2" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ryan Wez" />
        <meta name="application-name" content="Ryan Wez Portfolio" />
        <meta name="msapplication-TileColor" content="#5DADE2" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/og-image.png" as="image" type="image/png" />

        {/* Search Engine Verification */}
        <meta name="msvalidate.01" content="07AB2E07C877344005C6261F81933521" />
        <meta name="yandex-verification" content="69cf6376aadb1033" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="slurp" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="duckduckbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="MM" />
        <meta name="geo.country" content="Myanmar" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        <style dangerouslySetInnerHTML={{
          __html: `
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
            .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #1A202C; display: flex; justify-content: center; align-items: center; z-index: 9999; }
            .fade-in-element { opacity: 0; transform: translate3d(0, 20px, 0); transition: opacity 0.3s ease-out, transform 0.3s ease-out; }
            .is-visible { opacity: 1; transform: translate3d(0, 0, 0); }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ryan Wez Portfolio",
              "url": siteUrl,
              "description": "Professional portfolio of Ryan Wez - AI Enthusiast & Project Creator",
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "creator": {
                "@type": "Person",
                "name": "Ryan Wez"
              },
              "mainEntity": {
                "@type": "Person",
                "name": "Ryan Wez",
                "jobTitle": "AI Enthusiast & Project Creator",
                "url": siteUrl
              }
            })
          }}
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
