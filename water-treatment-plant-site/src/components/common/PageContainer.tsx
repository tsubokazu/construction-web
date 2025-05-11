"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  background?: "white" | "light" | "primary-light";
  paddingY?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

/**
 * 一貫したページコンテナコンポーネント
 * 全てのページセクションで使用して、一貫したマージン、パディング、最大幅を確保します
 */
const PageContainer: React.FC<PageContainerProps> = ({
  children,
  background = "white",
  paddingY = "medium",
  fullWidth = false,
}) => {
  const theme = useTheme();

  // パディングのサイズマップ
  const paddingMap = {
    small: { desktop: "40px", tablet: "30px", mobile: "24px" },
    medium: { desktop: "60px", tablet: "50px", mobile: "40px" },
    large: { desktop: "80px", tablet: "60px", mobile: "50px" },
  };

  // 背景色のマップ
  const backgroundMap = {
    white: "white",
    light: theme.customColors?.lightGray || "#F5F7FA",
    "primary-light": theme.customColors?.waterLightBlue || "#E1F5FE",
  };

  const styles = {
    section: css`
      background-color: ${backgroundMap[background]};
      padding-top: ${paddingMap[paddingY].desktop};
      padding-bottom: ${paddingMap[paddingY].desktop};
      width: 100%;
      overflow-x: hidden;
      
      @media (max-width: ${theme.breakpoints?.lg}) {
        padding-top: ${paddingMap[paddingY].tablet};
        padding-bottom: ${paddingMap[paddingY].tablet};
      }
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        padding-top: ${paddingMap[paddingY].mobile};
        padding-bottom: ${paddingMap[paddingY].mobile};
      }
    `,
    container: css`
      max-width: ${fullWidth ? "100%" : "1200px"};
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      width: 100%;
      box-sizing: border-box;
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        padding-left: 16px;
        padding-right: 16px;
      }
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>{children}</div>
    </section>
  );
};

export default PageContainer;
