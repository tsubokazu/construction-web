"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Typography } from "antd";
import BreadcrumbNav, { BreadcrumbItem } from "./BreadcrumbNav";

const { Title, Paragraph } = Typography;

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
  size?: 'small' | 'medium' | 'large';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumbItems,
  backgroundImage,
  size = 'medium',
}) => {
  const theme = useTheme();

  // パディングサイズのマップ
  const paddingSizeMap = {
    small: { desktop: '40px', tablet: '30px', mobile: '24px' },
    medium: { desktop: '60px', tablet: '50px', mobile: '40px' },
    large: { desktop: '80px', tablet: '60px', mobile: '50px' },
  };

  const styles = {
    header: css`
      background-color: ${backgroundImage
        ? "transparent"
        : theme.customColors.waterLightBlue};
      background-image: ${backgroundImage ? `url(${backgroundImage})` : "none"};
      background-size: cover;
      background-position: center;
      padding-top: ${paddingSizeMap[size].desktop};
      padding-bottom: ${paddingSizeMap[size].desktop};
      position: relative;
      width: 100%;
      overflow-x: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${backgroundImage
          ? "rgba(0, 0, 0, 0.4)"
          : "transparent"};
        z-index: 1;
      }

      @media (max-width: ${theme.breakpoints?.lg}) {
        padding-top: ${paddingSizeMap[size].tablet};
        padding-bottom: ${paddingSizeMap[size].tablet};
      }
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        padding-top: ${paddingSizeMap[size].mobile};
        padding-bottom: ${paddingSizeMap[size].mobile};
      }
    `,
    container: css`
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      position: relative;
      z-index: 2;
      width: 100%;
      box-sizing: border-box;
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        padding-left: 16px;
        padding-right: 16px;
      }
    `,
    title: css`
      color: ${backgroundImage ? "white" : theme.customColors.waterDarkBlue};
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 16px;
      line-height: 1.2;

      @media (max-width: ${theme.breakpoints?.md}) {
        font-size: 32px;
      }
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        font-size: 28px;
      }
    `,
    description: css`
      font-size: 18px;
      max-width: 800px;
      margin-bottom: 0;
      line-height: 1.6;
      color: ${backgroundImage ? "rgba(255, 255, 255, 0.9)" : theme.customColors.textSecondary};
      
      @media (max-width: ${theme.breakpoints?.sm}) {
        font-size: 16px;
      }
    `,
  };

  return (
    <section css={styles.header}>
      <div css={styles.container}>
        <BreadcrumbNav items={breadcrumbItems} />
        <Title level={1} css={styles.title}>
          {title}
        </Title>
        {description && (
          <Paragraph css={styles.description}>{description}</Paragraph>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
