import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnyTools - 发现最好的工具",
  description: "精选 AI、开发、设计、效率工具，帮你找到最适合的工具。收录 100+ 工具，9 大分类。",
  keywords: ["工具导航", "AI工具", "开发工具", "Web3工具", "效率工具", "设计工具"],
  authors: [{ name: "ToolHub" }],
  openGraph: {
    title: "ToolHub - 发现最好的工具",
    description: "精选 AI、开发、设计、效率工具，帮你找到最适合的工具",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyTools - 发现最好的工具",
    description: "精选 AI、开发、设计、效率工具，帮你找到最适合的工具",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
