# Next.jsとAnt Designを活用した日本企業向けウェブサイト構築ガイド

## はじめに

本ドキュメントは、Next.jsとAnt Designを使用して日本企業向けウェブサイトを構築する際のベストプラクティス、実装パターン、および技術的ノウハウをまとめたものです。特に、パフォーマンス、アクセシビリティ、TypeScriptの型安全性に焦点を当てています。

## 目次

1. [技術スタックと構成](#技術スタックと構成)
2. [プロジェクトセットアップ](#プロジェクトセットアップ)
3. [テーマ設定とデザインシステム](#テーマ設定とデザインシステム)
4. [コンポーネント設計](#コンポーネント設計)
5. [型安全性の確保](#型安全性の確保)
6. [CSS実装戦略](#css実装戦略)
7. [パフォーマンス最適化](#パフォーマンス最適化)
8. [アクセシビリティ対応](#アクセシビリティ対応)
9. [レスポンシブデザイン](#レスポンシブデザイン)
10. [国際化対応](#国際化対応)
11. [SEO対策](#seo対策)
12. [デプロイメントと運用](#デプロイメントと運用)
13. [よくある課題と解決策](#よくある課題と解決策)

## 技術スタックと構成

### 主要技術

- **フロントエンドフレームワーク**: Next.js (App Router)
- **UIライブラリ**: Ant Design v5
- **スタイリング**: Emotion (CSS-in-JS)
- **状態管理**: React Context API（必要に応じてRecoilやRedux Toolkitも検討）
- **開発言語**: TypeScript
- **パッケージマネージャ**: npm / yarn / pnpm

### 採用理由

- **Next.js**: SSRとSSG両方をサポートし、SEO対策と初期読み込み速度の向上に寄与
- **Ant Design**: エンタープライズ向けの豊富なコンポーネントセットを提供し、カスタマイズ性も高い
- **TypeScript**: 型安全性を高め、開発時のエラー検知と保守性の向上
- **Emotion**: コンポーネントと密に結合したスタイリングで、メンテナンス性と再利用性を向上

### フォルダ構成の推奨パターン

```
src/
├── app/                  # Next.js App Router
│   ├── (routes)/         # ページルートごとのフォルダ
│   └── layout.tsx        # ルートレイアウト
├── components/
│   ├── common/           # 汎用コンポーネント
│   │   └── styled/       # スタイル付きコンポーネント
│   ├── layout/           # レイアウト関連コンポーネント
│   ├── providers/        # コンテキストプロバイダ
│   └── sections/         # ページセクションコンポーネント
├── hooks/                # カスタムフック
├── styles/               # グローバルスタイルとテーマ
├── types/                # 型定義
└── utils/                # ユーティリティ関数
```

## プロジェクトセットアップ

### 初期構築手順

```bash
# Next.jsプロジェクト作成
npx create-next-app@latest my-corporate-site --typescript --eslint --app --src-dir

# 必要なパッケージのインストール
cd my-corporate-site
npm install antd @ant-design/icons @emotion/react @emotion/styled
```

### Ant DesignとEmotionの統合設定

Next.jsのApp RouterでAnt DesignとEmotionを適切に使用するには、SSRでのスタイル抽出設定が必要です。

```tsx
// src/app/AntdRegistry.tsx
'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createCache(), []);
  
  useServerInsertedHTML(() => {
    const styleText = extractStyle(cache);
    return <style dangerouslySetInnerHTML={{ __html: styleText }} />;
  });
  
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}

// src/app/layout.tsx
import AntdRegistry from './AntdRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
```

### テーマプロバイダーの設定

```tsx
// src/components/providers/ThemeProvider.tsx
'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme.antd}>
      <EmotionThemeProvider theme={theme.emotion}>
        {children}
      </EmotionThemeProvider>
    </ConfigProvider>
  );
}

// src/app/layout.tsx に追加
import ThemeProvider from '@/components/providers/ThemeProvider';

// ...
<AntdRegistry>
  <ThemeProvider>{children}</ThemeProvider>
</AntdRegistry>
```

## テーマ設定とデザインシステム

### デザイントークンの定義

```tsx
// src/styles/theme.ts
import type { ThemeConfig } from 'antd';
import type { Theme } from '@emotion/react';

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0057A8',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1677ff',
    borderRadius: 4,
    fontFamily: '"Noto Sans JP", sans-serif',
  },
  components: {
    Button: {
      // ボタンコンポーネント固有の設定
      controlHeight: 40,
      paddingContentHorizontal: 24,
    },
    // その他のコンポーネント設定
  },
};

// Emotion用のテーマ拡張（Ant Designのトークンも含む）
export const theme = {
  antd: antdTheme,
  emotion: {
    // Ant Designのトークンをそのまま利用可能に
    token: antdTheme.token,
    
    // 独自の拡張トークン
    spacing: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      xxl: '64px',
    },
    mediaQueries: {
      mobile: '@media (max-width: 575px)',
      tablet: '@media (max-width: 991px)',
      desktop: '@media (min-width: 992px)',
      largeDesktop: '@media (min-width: 1200px)',
    },
    // 日本語タイポグラフィに適した設定
    typography: {
      lineHeight: 1.8,
      fontSizes: {
        small: '0.875rem',
        body: '1rem',
        large: '1.125rem',
        h3: '1.375rem',
        h2: '1.75rem',
        h1: '2.25rem',
      },
      fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  } as Theme,
};

// 型定義の拡張
declare module '@emotion/react' {
  export interface Theme {
    token: typeof antdTheme.token;
    spacing: Record<string, string>;
    mediaQueries: Record<string, string>;
    typography: {
      lineHeight: number;
      fontSizes: Record<string, string>;
      fontWeights: Record<string, number>;
    };
  }
}
```

### 型安全なデザイントークンの使用

Ant Designのトークンが未定義の可能性がある問題に対処するため、optional chainingと適切なフォールバック値を使用します。

```tsx
// src/types/emotion.d.ts
import '@emotion/react';
import { theme } from '@/styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Theme {
    token?: typeof theme.emotion.token;
    // 他のテーマプロパティ
  }
}
```

```tsx
// コンポーネント内での使用例
const styles = {
  container: css`
    background-color: ${theme.token?.colorBgContainer || '#ffffff'};
    padding: ${theme.spacing.md};
    border-radius: ${theme.token?.borderRadius || 4}px;
    border: 1px solid ${theme.token?.colorBorder || '#d9d9d9'};
  `,
};
```

## コンポーネント設計

### 共通レイアウトコンポーネント

```tsx
// src/components/layout/MainLayout.tsx
'use client';

import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  
  const styles = {
    layout: css`
      min-height: 100vh;
    `,
    content: css`
      padding-top: 64px;  // ヘッダーの高さ
    `,
  };
  
  return (
    <Layout css={styles.layout}>
      <Header />
      <Content css={styles.content}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
```

### スタイル付きコンポーネントの作成

Ant DesignのコンポーネントをEmotionでスタイリングする際のベストプラクティス：

```tsx
// src/components/common/styled/StyledDivider.tsx
import styled from '@emotion/styled';
import { Divider, DividerProps } from 'antd';

interface StyledDividerProps extends DividerProps {
  marginY?: string;
}

const StyledDivider = styled(Divider)<StyledDividerProps>`
  margin: ${props => props.marginY || '24px'} 0;
  
  &.ant-divider-horizontal.ant-divider-with-text {
    color: ${props => props.theme.token?.colorTextSecondary || 'rgba(0, 0, 0, 0.45)'};
    
    &::before,
    &::after {
      border-top-color: ${props => props.theme.token?.colorSplit || '#f0f0f0'};
    }
  }
`;

export default StyledDivider;
```

### セクションコンポーネント

```tsx
// src/components/sections/home/HeroSection.tsx
'use client';

import React from 'react';
import { Typography, Button, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import StyledCarousel from '@/components/common/styled/StyledCarousel';

const { Title, Paragraph } = Typography;

interface SlideData {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  // スライドデータ
];

const HeroSection: React.FC = () => {
  const theme = useTheme();
  
  const styles = {
    section: css`
      position: relative;
      height: 600px;
      
      ${theme.mediaQueries.mobile} {
        height: 400px;
      }
    `,
    content: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
      max-width: 1200px;
      padding: 0 ${theme.spacing.lg};
      z-index: 1;
      color: #fff;
    `,
    title: css`
      color: #fff;
      margin-bottom: ${theme.spacing.md};
      font-size: ${theme.typography.fontSizes.h1};
      
      ${theme.mediaQueries.mobile} {
        font-size: ${theme.typography.fontSizes.h2};
      }
    `,
    description: css`
      color: #fff;
      font-size: ${theme.typography.fontSizes.large};
      margin-bottom: ${theme.spacing.lg};
      
      ${theme.mediaQueries.mobile} {
        font-size: ${theme.typography.fontSizes.body};
      }
    `,
  };
  
  return (
    <section css={styles.section}>
      <StyledCarousel autoplay effect="fade">
        {slides.map(slide => (
          <SlideContent key={slide.id} slide={slide} styles={styles} />
        ))}
      </StyledCarousel>
    </section>
  );
};

// スライドコンテンツを別コンポーネントに分離
const SlideContent: React.FC<{ slide: SlideData; styles: any }> = ({ slide, styles }) => {
  return (
    <div>
      <SlideImageBackground bgImage={slide.image} />
      <div css={styles.content}>
        <Title level={1} css={styles.title}>{slide.title}</Title>
        <Paragraph css={styles.description}>{slide.description}</Paragraph>
        <Button type="primary" size="large" href={slide.buttonLink}>
          {slide.buttonText} <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

// 背景画像用のスタイル付きコンポーネント
const SlideImageBackground = styled.div<{ bgImage: string }>`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export default HeroSection;
```

## 型安全性の確保

### Emotionの型定義拡張

CSS propをTypeScriptで安全に使用するため、型定義を拡張します。

```tsx
// src/types/emotion.d.ts
import '@emotion/react';
import { theme } from '@/styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Theme {
    token?: typeof theme.emotion.token;
    spacing: Record<string, string>;
    mediaQueries: Record<string, string>;
    typography: {
      lineHeight: number;
      fontSizes: Record<string, string>;
      fontWeights: Record<string, number>;
    };
  }
}

import { CSSInterpolation } from '@emotion/serialize';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: CSSInterpolation;
  }
}
```

### コンポーネントプロップの型定義

```tsx
// interface定義の例
interface NewsItemProps {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
  link: string;
  isNew?: boolean;
}

// 型安全な関数コンポーネント
const NewsItem: React.FC<NewsItemProps> = ({
  id,
  date,
  category,
  title,
  content,
  link,
  isNew = false
}) => {
  // コンポーネント実装
};
```

## CSS実装戦略

### Emotionを使ったコンポーネント内スタイリング

```tsx
'use client';

import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const MyComponent: React.FC = () => {
  const theme = useTheme();
  
  const styles = {
    container: css`
      padding: ${theme.spacing.md};
      background-color: ${theme.token?.colorBgContainer || '#fff'};
      border-radius: ${theme.token?.borderRadius || 4}px;
      
      ${theme.mediaQueries.mobile} {
        padding: ${theme.spacing.sm};
      }
    `,
    title: css`
      color: ${theme.token?.colorTextHeading || '#000'};
      font-size: ${theme.typography.fontSizes.h2};
      margin-bottom: ${theme.spacing.sm};
    `,
  };
  
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>タイトル</h2>
    </div>
  );
};
```

### スタイル付きコンポーネントのパターン

```tsx
import styled from '@emotion/styled';
import { Card, CardProps } from 'antd';

interface StyledCardProps extends CardProps {
  accentColor?: string;
}

const StyledCard = styled(Card)<StyledCardProps>`
  border-top: 3px solid ${props => props.accentColor || props.theme.token?.colorPrimary || '#0057A8'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  .ant-card-head {
    border-bottom-color: ${props => props.theme.token?.colorBorderSecondary || '#f0f0f0'};
  }
  
  .ant-card-head-title {
    font-weight: ${props => props.theme.typography.fontWeights.medium};
  }
`;

// 使用例
<StyledCard 
  title="カードタイトル" 
  accentColor="#52c41a"
>
  カードコンテンツ
</StyledCard>
```

### インラインスタイルの回避

インラインスタイルはTypeScriptの型チェックが弱く、メンテナンス性やパフォーマンスの面でも推奨されません。以下のように、スタイル付きコンポーネントを使用して改善します。

```tsx
// 悪い例（インラインスタイル）
<div style={{ 
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  height: '300px'
}}>
  コンテンツ
</div>

// 良い例（スタイル付きコンポーネント）
const BackgroundImage = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 300px;
`;

<BackgroundImage imageUrl={imageUrl}>
  コンテンツ
</BackgroundImage>
```

## パフォーマンス最適化

### 画像最適化

Next.jsの`Image`コンポーネントを使用して、自動的な画像最適化を行います。

```tsx
import Image from 'next/image';

<Image 
  src="/images/hero.jpg"
  alt="会社の外観"
  width={1200}
  height={600}
  quality={85}
  priority
  className="hero-image"
/>
```

### コンポーネントの遅延ロード（Code Splitting）

```tsx
import dynamic from 'next/dynamic';

// 重いコンポーネントを遅延ロード
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // クライアントサイドのみでレンダリングする場合
});
```

### React.memoによる再レンダリング最適化

```tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

// メモ化によるパフォーマンス最適化
const OptimizedCard = React.memo<CardProps>(({ title, description }) => {
  return (
    <Card title={title}>
      <p>{description}</p>
    </Card>
  );
});

OptimizedCard.displayName = 'OptimizedCard';
```

## アクセシビリティ対応

### セマンティックHTML

```tsx
// 良い例
<section aria-labelledby="section-title">
  <h2 id="section-title">企業理念</h2>
  <p>当社は持続可能な未来に向けた技術開発に取り組んでいます。</p>
</section>
```

### WAI-ARIA属性の活用

```tsx
// アクセシビリティ対応されたタブコンポーネントの例
<div role="tablist">
  <button 
    role="tab" 
    id="tab-1" 
    aria-selected={activeTab === 0} 
    aria-controls="panel-1"
    onClick={() => setActiveTab(0)}
  >
    タブ1
  </button>
  {/* 他のタブ */}
</div>

<div 
  role="tabpanel" 
  id="panel-1" 
  aria-labelledby="tab-1" 
  hidden={activeTab !== 0}
>
  タブ1のコンテンツ
</div>
```

### フォーカス管理

```tsx
// キーボードナビゲーション対応の例
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    // アクション実行
    handleClick();
  }
};

<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  クリッカブルな要素
</div>
```

## レスポンシブデザイン

### メディアクエリの活用

```tsx
const styles = {
  container: css`
    padding: ${theme.spacing.lg};
    
    ${theme.mediaQueries.mobile} {
      padding: ${theme.spacing.md};
    }
    
    ${theme.mediaQueries.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacing.md};
    }
    
    ${theme.mediaQueries.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
};
```

### Ant Designのグリッドシステム

```tsx
import { Row, Col } from 'antd';

<Row gutter={[16, 24]}>
  <Col xs={24} sm={12} md={8} lg={6}>
    <Card title="サービス1">内容</Card>
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    <Card title="サービス2">内容</Card>
  </Col>
  {/* その他のカード */}
</Row>
```

## 国際化対応

### Next.jsの国際化ルーティング

```tsx
// next.config.js
module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
};
```

### Ant Designの多言語サポート

```tsx
import { ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';
import enUS from 'antd/locale/en_US';

const getAntdLocale = (locale: string) => {
  switch (locale) {
    case 'en':
      return enUS;
    default:
      return jaJP;
  }
};

// ConfigProvider内で設定
<ConfigProvider locale={getAntdLocale(locale)}>
  {children}
</ConfigProvider>
```

## SEO対策

### メタデータの設定

```tsx
// src/app/(routes)/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企業情報 | 株式会社水処理技研',
  description: '株式会社水処理技研は、先進的な水処理技術で持続可能な水環境を実現します。',
  openGraph: {
    title: '企業情報 | 株式会社水処理技研',
    description: '株式会社水処理技研は、先進的な水処理技術で持続可能な水環境を実現します。',
    images: ['/images/og-company.jpg'],
  },
};

// ページコンポーネント
export default function AboutPage() {
  return (
    // ページコンテンツ
  );
}
```

### 構造化データ

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "株式会社水処理技研",
              "url": "https://www.water-treatment.example.com",
              "logo": "https://www.water-treatment.example.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+81-3-1234-5678",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## デプロイメントと運用

### Vercelへのデプロイ

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel --prod
```

### パフォーマンスモニタリング

```tsx
// src/app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://www.water-treatment.example.com'),
  // WebVitalsを計測するためのスクリプト
  openGraph: {
    // ...
  }
};

// Analytics関連のスクリプトを適切に配置
```

## よくある課題と解決策

### 1. TypeScriptエラー対応

#### 問題: テーマトークンが未定義の可能性によるエラー

```tsx
// 問題
color: ${theme.token.colorPrimary}; // エラー: オブジェクトが 'undefined' である可能性があります。

// 解決策
color: ${theme.token?.colorPrimary || '#0057A8'};
```

#### 問題: CSR中のサーバーコンポーネントでのクライアントフックエラー

```tsx
// 解決策: クライアントコンポーネントを明示的に分離
'use client';

import { useTheme } from '@emotion/react';

const ClientComponent = () => {
  const theme = useTheme(); // クライアントフックが安全に使用可能
  
  return (
    // ...
  );
};

// サーバーコンポーネント側
import ClientComponent from './ClientComponent';

export default function ServerComponent() {
  return (
    <div>
      <h1>サーバーコンポーネント部分</h1>
      <ClientComponent />
    </div>
  );
}
```

### 2. スタイリング関連の課題

#### 問題: Ant Design v5でのカスタマイズの複雑さ

```tsx
// 解決策: スタイル付きコンポーネントでラッピング
import styled from '@emotion/styled';
import { Carousel, CarouselProps } from 'antd';

const StyledCarousel = styled(Carousel)<CarouselProps>`
  .slick-dots {
    bottom: 24px;
    
    li button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    li.slick-active button {
      width: 12px;
      height: 12px;
      background: #fff;
    }
  }
`;

// 使用
<StyledCarousel autoplay>
  {/* スライドコンテンツ */}
</StyledCarousel>
```

#### 問題: CSS-in-JSのパフォーマンス懸念

```tsx
// 解決策: スタイルを適切にメモ化・最適化
import { useMemo } from 'react';
import { css } from '@emotion/react';

const Component = () => {
  // テーマに依存するスタイルをメモ化
  const styles = useMemo(() => ({
    container: css`/* スタイル */`,
    // 他のスタイル
  }), [theme]);
  
  return <div css={styles.container}>...</div>;
};
```

### 3. Next.js App Routerの対応

#### 問題: クライアントコンポーネントとサーバーコンポーネントの連携

```tsx
// 解決策: 境界を明確に定義
// src/app/page.tsx (サーバーコンポーネント)
import PageContent from '@/components/PageContent';

export default function Home() {
  // サーバーでのデータ取得
  const data = await fetchData();
  
  return <PageContent initialData={data} />;
}

// src/components/PageContent.tsx ('use client')
'use client';

export default function PageContent({ initialData }) {
  // クライアントでの状態管理
  const [data, setData] = useState(initialData);
  
  return (
    // クライアントレンダリング部分
  );
}
```

## 結論

Next.jsとAnt Designを使った日本企業向けウェブサイト開発は、型安全性、パフォーマンス、アクセシビリティに十分配慮することで、高品質な成果物を実現できます。本ガイドで紹介した実装パターンやベストプラクティスは、日本企業特有のニーズに応えるウェブサイト構築の基礎として活用できます。

技術の進化に応じて継続的に改善し、ユーザー体験とコード品質の両面で優れたウェブサイトを提供しましょう。
