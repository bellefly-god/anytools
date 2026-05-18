import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AnyTools - AI Tools, Prompt Showcases, MCP Servers & GitHub Trends",
    template: "%s | AnyTools",
  },
  description: "AnyTools is a curated AI resource hub for tools, image prompts, video prompts, MCP servers, GitHub trends, and developer AI topics.",
  keywords: [
    "AnyTools",
    "AI tools",
    "AI prompts",
    "video prompts",
    "image prompts",
    "MCP servers",
    "agent skills",
    "AI rules",
    "developer tools",
    "GitHub trending",
    "工具导航",
    "AI工具",
    "提示词",
    "图片提示词",
    "视频提示词",
    "MCP",
    "AI 技能",
    "开发工具",
    "GitHub 热门",
  ],
  authors: [{ name: "Jack Wang", url: "https://blog.pagecleans.com" }],
  creator: "Jack Wang",
  publisher: "Jack Wang",
  metadataBase: new URL("https://anytools.pagecleans.com"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://anytools.pagecleans.com",
    languages: {
      "en-US": "https://anytools.pagecleans.com",
      "zh-CN": "https://anytools.pagecleans.com",
    },
  },
  openGraph: {
    title: "AnyTools - AI Tools, Prompt Showcases, MCP Servers & GitHub Trends",
    description: "Discover AI tools, image prompts, video prompts, MCP servers, GitHub trends, and developer AI topics in one place.",
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
        alt: "AnyTools - AI Tools, Prompt Showcases, MCP Servers & GitHub Trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyTools - AI Tools, Prompt Showcases, MCP Servers & GitHub Trends",
    description: "Discover AI tools, image prompts, video prompts, MCP servers, GitHub trends, and developer AI topics.",
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
              "description": "A curated AI resource hub for tools, prompt showcases, MCP servers, GitHub trends, and developer AI topics",
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
