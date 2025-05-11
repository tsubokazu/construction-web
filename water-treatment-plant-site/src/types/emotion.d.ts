import '@emotion/react';
import { ThemeConfig } from 'antd';
import { CSSInterpolation } from '@emotion/serialize';

declare module '@emotion/react' {
  export interface Theme {
    token: ThemeConfig['token'];
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    customColors: {
      waterBlue: string;
      waterLightBlue: string;
      waterDarkBlue: string;
      ecoGreen: string;
      ecoLightGreen: string;
      sandBeige: string;
      lightGray: string;
      textPrimary: string;
      textSecondary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}

// これを追加：JSXのすべての要素にcssプロパティを許可する
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: CSSInterpolation;
  }
}

// AntdコンポーネントでもEmotionのcssプロパティを使えるようにする
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSInterpolation;
    }
  }
}