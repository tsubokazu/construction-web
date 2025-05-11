'use client';

import React from 'react';
import { createCache, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

// キャッシュオブジェクトのカスタム型定義
// Ant Design CSSinJSの実際のキャッシュ構造に合わせて型定義
interface Entity {
  cache: Map<string, CacheValueType>;
}

// キャッシュ値の型（タプル）
type CacheValueType = [number, string] | undefined;

// Next.js App Router でスタイルを適切に処理するためのレジストリ
// Ant Design の Server Component 対応
const AntdRegistry = ({ children }: { children: React.ReactNode }) => {
  const cache = React.useMemo(() => createCache(), []);
  const isServerInserted = React.useRef<boolean>(false);
  
  useServerInsertedHTML(() => {
    // クライアントサイドでの重複レンダリングを防ぐ
    if (isServerInserted.current) {
      return null;
    }
    isServerInserted.current = true;
    
    return (
      <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />
    );
  });
  
  const extractStyle = (cache: Entity) => {
    // キャッシュからすべてのCSS文字列を抽出
    let styleText = '';
    const keys = Array.from(cache.cache.keys());
    
    keys.forEach((key) => {
      if (typeof key !== 'string') return;
      const cached = cache.cache.get(key);
      // タプル型のキャッシュ値から文字列（CSS）を取得（インデックス1に格納されている）
      if (cached && cached[1]) {
        styleText += cached[1];
      }
    });
    
    return styleText;
  };
  
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

// デフォルトエクスポートを明示的に宣言
export default AntdRegistry;