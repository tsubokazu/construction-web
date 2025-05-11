"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import StyledCarousel from "@/components/common/styled/StyledCarousel";
import Link from "next/link";
import styled from "@emotion/styled";

// 背景画像用のスタイル付きコンポーネント
const SlideImageBackground = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImage});

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

// スライダーの内容
const slides = [
  {
    id: 1,
    title: "先進の技術で水資源の未来を創る",
    subtitle: "浄水・水処理の総合ソリューションを提供",
    description:
      "最先端の技術と50年にわたる経験を活かし、安全で持続可能な水資源の確保に貢献します。",
    image: "/images/hero-1.jpg",
    buttonText: "詳しくみる",
    buttonLink: "/technology",
  },
  {
    id: 2,
    title: "環境に配慮した水処理システム",
    subtitle: "エコフレンドリーな浄水プラント",
    description:
      "省エネルギー設計とリサイクル技術により、環境負荷を最小限に抑えた水処理ソリューションを提供します。",
    image: "/images/hero-2.jpg",
    buttonText: "サステナビリティへの取り組み",
    buttonLink: "/sustainability",
  },
  {
    id: 3,
    title: "全国の自治体・企業を支える技術力",
    subtitle: "安全な水を、必要な場所へ",
    description:
      "日本全国2,000以上の施設に導入された実績。多様なニーズに対応する柔軟なシステム設計と確かな品質。",
    image: "/images/hero-3.jpg",
    buttonText: "導入事例を見る",
    buttonLink: "/case-studies",
  },
];

const HeroSection: React.FC = () => {
  const theme = useTheme();

  // スタイルの定義
  const styles = {
    heroSection: css`
      position: relative;
      overflow: hidden;
    `, // carouselのスタイルは不要（StyledCarouselコンポーネントに移動）
    slide: css`
      height: 600px;
      position: relative;

      @media (max-width: 768px) {
        height: 500px;
      }

      @media (max-width: 576px) {
        height: 400px;
      }
    `, // slideImage スタイルは SlideImageBackground コンポーネントに移動
    slideContent: css`
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 16px 0;
      color: white;

      @media (max-width: 768px) {
        padding-top: 100px;
      }
    `,
    subtitle: css`
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;
      color: ${theme.customColors?.waterLightBlue || "#D4EDFF"};

      @media (max-width: 576px) {
        font-size: 16px;
      }
    `,
    title: css`
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 24px;
      font-weight: 700;
      max-width: 600px;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

      @media (max-width: 768px) {
        font-size: 36px;
      }

      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,
    description: css`
      font-size: 18px;
      max-width: 500px;
      margin-bottom: 32px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

      @media (max-width: 576px) {
        font-size: 16px;
      }
    `,
    button: css`
      height: 48px;
      padding: 0 24px;
      font-size: 16px;
      border-radius: 4px;

      .anticon {
        transition: transform 0.2s ease;
      }

      &:hover .anticon {
        transform: translateX(4px);
      }
    `,
  };
  return (
    <section css={styles.heroSection}>
      <StyledCarousel autoplay effect="fade" dots>
        {slides.map((slide) => (
          <div key={slide.id}>
            {" "}
            <div css={styles.slide}>
              <SlideImageBackground bgImage={slide.image} />
              <div css={styles.slideContent}>
                <p css={styles.subtitle}>{slide.subtitle}</p>
                <h1 css={styles.title}>{slide.title}</h1>
                <p css={styles.description}>{slide.description}</p>
                <Link href={slide.buttonLink} passHref>
                  <Button
                    type="primary"
                    size="large"
                    css={styles.button}
                    icon={<ArrowRightOutlined />}
                  >
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>{" "}
          </div>
        ))}
      </StyledCarousel>
    </section>
  );
};

export default HeroSection;
