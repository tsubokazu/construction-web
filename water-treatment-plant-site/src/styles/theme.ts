import type { ThemeConfig } from 'antd';

// Ant Design のテーマ設定
export const theme: ThemeConfig = {
  token: {
    // カラートークン
    colorPrimary: '#0277BD', // 浄水プラントをイメージした青色
    colorSuccess: '#2B9348', // エコロジーを想起させる緑色
    colorWarning: '#D16E12',
    colorError: '#C13333',
    colorInfo: '#0277BD',
    
    // タイポグラフィ
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: 14,
    lineHeight: 1.7, // 日本語に最適な行間
    
    // 空間とボーダー
    borderRadius: 4,
    padding: 16,
    margin: 16,
  },
  components: {
    Button: {
      paddingInline: 16,
      controlHeight: 36,
    },
    Table: {
      headerBg: '#F0F7FB',
    },
    Card: {
      colorBorderSecondary: 'rgba(0, 0, 0, 0.06)',
    },
  },
};

// Emotion用の拡張テーマ
export const emotionTheme = {
  // Ant Designのトークンを含める
  token: theme.token,
  
  // スペーシング
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  // カスタムカラー
  customColors: {
    // 水をイメージしたカラー
    waterBlue: '#0277BD', 
    waterLightBlue: '#E1F5FE',
    waterDarkBlue: '#01579B',
    
    // エコをイメージしたカラー
    ecoGreen: '#2B9348',
    ecoLightGreen: '#A3F7BF',
    
    // サポートカラー
    sandBeige: '#F5F0E5',
    lightGray: '#F5F7FA',
    
    // テキストカラー
    textPrimary: '#333333',
    textSecondary: '#666666',
  },
  
  // ブレイクポイント
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },
};