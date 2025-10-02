import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteUrl, siteKeywords, siteDescription, openGraphDescription } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryan Wez - AI Enthusiast & Project Creator",
    template: "%s | Ryan Wez"
  },
  description: siteDescription,
  keywords: siteKeywords,
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
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ryan Wez - AI Enthusiast & Project Creator",
    description: openGraphDescription,
    siteName: "Ryan Wez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RyanWez",
    creator: "@RyanWez",
    title: "Ryan Wez - AI Enthusiast & Project Creator",
    description: openGraphDescription,
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
        {/* Critical performance optimizations - Google Font preconnect is handled automatically by Next.js */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://facebook.com" />

        {/* Primary favicon */}
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#5DADE2" />
        <meta name="color-scheme" content="dark light" />

        {/* Critical resource preloads - only essential ones */}
        <link rel="preload" href="/images/mona.webp" as="image" type="image/webp" fetchPriority="high" />


        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-8320325997835044" />

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
            *,*::before,*::after{box-sizing:border-box}
            html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
            body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-display:swap;line-height:1.6;color:#333;background:#fff}
            .dark body{color:#fff;background:#1a202c}
            .preloader{position:fixed;top:0;left:0;width:100%;height:100%;background:#1a202c;display:flex;justify-content:center;align-items:center;z-index:9999;will-change:opacity}
            .preloader-hidden{opacity:0;pointer-events:none;transition:opacity .3s ease-out}
            .hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative}
            .hero-content{text-align:center;max-width:800px;padding:2rem}
            .hero-title{font-size:clamp(2rem,5vw,4rem);font-weight:700;margin-bottom:1rem;line-height:1.2}
            .hero-subtitle{font-size:clamp(1rem,2.5vw,1.5rem);opacity:0.8;margin-bottom:2rem}
            .navbar{position:fixed;top:0;width:100%;z-index:1000;backdrop-filter:blur(10px);background:rgba(255,255,255,0.8)}
            .dark .navbar{background:rgba(26,32,44,0.8)}
            img{max-width:100%;height:auto;loading:lazy}
            .fade-in-element{opacity:0;transform:translate3d(0,20px,0);transition:opacity .3s ease-out,transform .3s ease-out;will-change:opacity,transform}
            .is-visible{opacity:1;transform:translate3d(0,0,0)}
            @media(max-width:768px){.fade-in-element{transform:translate3d(0,10px,0)}.hero-content{padding:1rem}}
            @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
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