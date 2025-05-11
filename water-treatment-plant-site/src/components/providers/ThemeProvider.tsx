'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import jaJP from 'antd/locale/ja_JP';
import { theme, emotionTheme } from '@/styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider theme={theme} locale={jaJP}>
      <EmotionThemeProvider theme={emotionTheme}>
        {children}
      </EmotionThemeProvider>
    </ConfigProvider>
  );
};

export default ThemeProvider;