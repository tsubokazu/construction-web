# 水処理技研 コーポレートWebサイト

## 概要

このプロジェクトは、水処理技術に特化した企業のコーポレートWebサイトです。Next.jsとAnt Designを使用し、TypeScriptで実装されています。EmotionベースのCSS-in-JSアプローチによるスタイリングを採用しています。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **UIライブラリ**: [Ant Design v5](https://ant.design/)
- **スタイリング**: [Emotion](https://emotion.sh/) (CSS-in-JS)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **画像最適化**: Next.js Image Optimization
- **フォント**: [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

## 主な機能

- レスポンシブデザイン
- 製品・サービス紹介
- 会社情報ページ
- お知らせ（ニュース）セクション
- お問い合わせフォーム
- 技術・研究開発紹介
- 導入事例の紹介

## 開発環境のセットアップ

### 必須条件

- Node.js 18.17.0以上
- npm 9.6.7以上（または yarn/pnpm）

### インストールと実行

1. リポジトリをクローン:
```bash
git clone https://github.com/your-username/water-treatment-corporate-site.git
cd water-treatment-corporate-site
```

2. 依存パッケージのインストール:
```bash
npm install
# または
yarn install
```

3. 開発サーバーの起動:
```bash
npm run dev
# または
yarn dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## プロジェクト構成

```
src/
├── app/                # Next.js App Router ディレクトリ
├── components/
│   ├── common/         # 共通コンポーネント
│   │   └── styled/     # スタイル付きコンポーネント
│   ├── layout/         # レイアウト関連コンポーネント
│   └── sections/       # ページセクションコンポーネント
│       └── home/       # トップページ用セクション
├── hooks/              # カスタムフック
├── styles/             # グローバルスタイルとテーマ
└── types/              # 型定義
```

## デザインとスタイリングのアプローチ

このプロジェクトでは、以下のアプローチでデザインとスタイリングを実装しています：

1. Ant Designの基本コンポーネントをベースに、日本企業向けのデザインシステムをカスタマイズ
2. Emotionを使用したCSS-in-JSで、コンポーネント単位のスタイリングを実現
3. 型安全性を確保するため、TypeScriptとの統合を徹底
4. モバイルファーストのレスポンシブデザインを実装

### テーマカスタマイズ

Ant Designのテーマは、水処理企業にふさわしい青を基調としたカラーパレットにカスタマイズしています：

- 主要カラー: `#0057A8`（水色）
- アクセントカラー: `#2B9348`（エコカラー）
- 背景色: `#F5F5F5`（ライトグレー）

### スタイル付きコンポーネント

Ant Designコンポーネントを拡張したスタイル付きコンポーネントを多数作成し、一貫したデザインシステムを実現しています：

- `StyledDivider`
- `StyledCarousel`
- `StyledCard`
など

## 実装上の注意点

1. テーマトークンへのアクセスには必ずオプショナルチェーンを使用し、フォールバック値を設定:
```tsx
color: ${theme.token?.colorPrimary || '#0057A8'};
```

2. インラインスタイルを避け、Emotionのスタイル付きコンポーネントを使用:
```tsx
// 推奨
const BackgroundImage = styled.div<{ bgImage: string }>`
  background-image: url(${props => props.bgImage});
  // その他のスタイル
`;
```

3. アクセシビリティを常に考慮:
- 適切なaria属性
- セマンティックなHTMLタグ
- キーボードナビゲーションのサポート

## デプロイ

このプロジェクトは [Vercel](https://vercel.com) でのデプロイを推奨します：

```bash
npm run build
vercel --prod
```

## ドキュメント

詳細な実装ガイドとベストプラクティスについては、以下のドキュメントを参照してください：

- [Next.js + Ant Design 日本企業向けウェブサイト実装ガイド](../docs/nextjs-antd-japanese-corporate-site-guide.md)
- [日本企業向けウェブデザインガイド](../docs/japanese-corporate-web-design-guide.md)

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 謝辞

- [Next.js](https://nextjs.org/) チーム
- [Ant Design](https://ant.design/) チーム
- [Emotion](https://emotion.sh/) チーム
