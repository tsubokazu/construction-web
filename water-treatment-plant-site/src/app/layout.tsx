import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../styles/globals.css";
import AntdRegistry from "./AntdRegistry";
import ThemeProvider from "@/components/providers/ThemeProvider";

// Noto Sans JP フォントを使用（日本語サイト向け）
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "アクアテック株式会社 - 高品質な浄水プラント・水処理システムの開発・製造",
  description: "アクアテック株式会社は、最新技術を駆使した浄水プラントと水処理システムを提供する日本のリーディングカンパニーです。持続可能な水環境の実現に貢献します。",
  keywords: "浄水プラント, 水処理システム, 浄水技術, 水質改善, 環境技術, SDGs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <AntdRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
