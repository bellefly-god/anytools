import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AnyTools - Discover the Best Tools | 676 Tools Across 12 Categories",
    template: "%s | AnyTools",
  },
  description: "AnyTools is a curated tool navigation platform with 676 tools across 12 categories. Discover AI tools, developer tools, Web3 tools, productivity tools, and more. GitHub trending rankings included.",
  keywords: [
    "AnyTools",
    "tool navigation",
    "tool discovery",
    "AI tools",
    "developer tools",
    "Web3 tools",
    "productivity tools",
    "design tools",
    "GitHub trending",
    "tool directory",
    "best tools",
    "工具导航",
    "AI工具",
    "开发工具",
    "效率工具",
    "设计工具",
    "工具推荐",
  ],
  authors: [{ name: "Jack Wang", url: "https://blog.pagecleans.com" }],
  creator: "Jack Wang",
  publisher: "Jack Wang",
  metadataBase: new URL("https://anytools.pagecleans.com"),
  alternates: {
    canonical: "https://anytools.pagecleans.com",
    languages: {
      "en-US": "https://anytools.pagecleans.com",
      "zh-CN": "https://anytools.pagecleans.com",
    },
  },
  openGraph: {
    title: "AnyTools - Discover the Best Tools | 676 Tools Across 12 Categories",
    description: "AnyTools is a curated tool navigation platform with 676 tools across 12 categories. Discover AI tools, developer tools, Web3 tools, productivity tools, and more.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    url: "https://anytools.pagecleans.com",
    siteName: "AnyTools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnyTools - Discover the Best Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyTools - Discover the Best Tools",
    description: "676 curated tools across 12 categories. AI tools, developer tools, Web3 tools, productivity tools, and more.",
    site: "@FairyZhang1214",
    creator: "@FairyZhang1214",
    images: ["/og-image.png"],
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
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LE2K0JPMSD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LE2K0JPMSD');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wpzhir7gnl");
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AnyTools",
              "description": "A curated tool navigation platform with 676 tools across 12 categories",
              "url": "https://anytools.pagecleans.com",
              "author": {
                "@type": "Person",
                "name": "Jack Wang",
                "url": "https://blog.pagecleans.com",
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://anytools.pagecleans.com/?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
