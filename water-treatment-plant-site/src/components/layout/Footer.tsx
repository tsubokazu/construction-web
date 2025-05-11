"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Layout, Row, Col, Typography } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import StyledDivider from "../common/styled/StyledDivider";

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

const Footer = () => {
  const theme = useTheme();

  // スタイルの定義
  const styles = {
    footer: css`
      background: ${theme.customColors.waterDarkBlue};
      color: white;
      padding: 48px 0 24px 0;
    `,
    container: css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    `,
    logo: css`
      margin-bottom: 16px;
    `,
    footerTitle: css`
      color: white;
      font-size: 18px;
      margin-bottom: 16px;
      position: relative;
      padding-bottom: 12px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 2px;
        background-color: ${theme.customColors.waterBlue};
      }
    `,
    footerLink: css`
      color: rgba(255, 255, 255, 0.85);
      display: block;
      margin-bottom: 12px;
      transition: all 0.3s ease;

      &:hover {
        color: white;
        margin-left: 3px;
      }
    `,
    contactItem: css`
      margin-bottom: 12px;
      display: flex;
      align-items: flex-start;

      .anticon {
        margin-right: 8px;
        margin-top: 4px;
        color: ${theme.customColors.waterBlue};
      }
    `,
    socialLinks: css`
      display: flex;
      margin-top: 16px;

      a {
        color: white;
        font-size: 20px;
        margin-right: 16px;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-3px);
        }
      }
    `,
    copyright: css`
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 24px;
      font-size: 13px;
    `,
    toTop: css`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: ${theme.customColors.waterBlue};
      color: white;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${theme.customColors.waterDarkBlue};
        transform: translateY(-3px);
      }
    `,
    footerNav: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 16px;

      a {
        color: rgba(255, 255, 255, 0.8);
        font-size: 13px;
        margin: 0 12px;

        &:hover {
          color: white;
        }
      }
    `,
  };

  // ページトップへスクロール
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AntFooter css={styles.footer}>
        <div css={styles.container}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div css={styles.logo}>
                <Image
                  src="/images/logo-white.svg"
                  alt="アクアテック株式会社"
                  width={180}
                  height={45}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <Paragraph
                style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: 24 }}
              >
                アクアテック株式会社は、最新技術を駆使した浄水プラントと水処理システムを提供する日本のリーディングカンパニーです。持続可能な水環境の実現に貢献します。
              </Paragraph>
              <div css={styles.contactItem}>
                <EnvironmentOutlined />
                <div>
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1-1
                  <br />
                  水処理ビル5階
                </div>
              </div>
              <div css={styles.contactItem}>
                <PhoneOutlined />
                <div>0120-00-0000（平日 9:00〜17:00）</div>
              </div>
              <div css={styles.contactItem}>
                <MailOutlined />
                <div>info@aquatech.co.jp</div>
              </div>
              <div css={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook公式ページ"
                  title="Facebook公式ページ"
                >
                  <FacebookOutlined />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter公式アカウント"
                  title="Twitter公式アカウント"
                >
                  <TwitterOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn企業ページ"
                  title="LinkedIn企業ページ"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube公式チャンネル"
                  title="YouTube公式チャンネル"
                >
                  <YoutubeOutlined />
                </a>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8}>
              <Title
                level={5}
                css={styles.footerTitle}
                style={{ color: "white" }}
              >
                主な製品・サービス
              </Title>
              <Link href="/products/water-treatment" css={styles.footerLink}>
                浄水処理システム
              </Link>
              <Link href="/products/water-recycling" css={styles.footerLink}>
                水資源リサイクル
              </Link>
              <Link href="/products/maintenance" css={styles.footerLink}>
                メンテナンスサービス
              </Link>
              <Link href="/products/industrial" css={styles.footerLink}>
                産業用水処理
              </Link>
              <Link href="/products/municipal" css={styles.footerLink}>
                自治体向けソリューション
              </Link>

              <Title
                level={5}
                css={styles.footerTitle}
                style={{ marginTop: 32, color: "white" }}
              >
                技術・研究開発
              </Title>
              <Link href="/technology/filtration" css={styles.footerLink}>
                ろ過技術
              </Link>
              <Link href="/technology/monitoring" css={styles.footerLink}>
                水質モニタリング
              </Link>
              <Link href="/technology/innovation" css={styles.footerLink}>
                研究開発
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8}>
              <Title
                level={5}
                css={styles.footerTitle}
                style={{ color: "white" }}
              >
                企業情報
              </Title>
              <Link href="/company/about" css={styles.footerLink}>
                会社概要
              </Link>
              <Link href="/company/message" css={styles.footerLink}>
                社長メッセージ
              </Link>
              <Link href="/company/history" css={styles.footerLink}>
                沿革
              </Link>
              <Link href="/company/access" css={styles.footerLink}>
                アクセス
              </Link>

              <Title
                level={5}
                css={styles.footerTitle}
                style={{ marginTop: 32, color: "white" }}
              >
                リンク
              </Title>
              <Link href="/sustainability" css={styles.footerLink}>
                サステナビリティ
              </Link>
              <Link href="/news" css={styles.footerLink}>
                ニュース
              </Link>
              <Link href="/contact" css={styles.footerLink}>
                お問い合わせ
              </Link>
              <Link href="/catalog" css={styles.footerLink}>
                資料請求
              </Link>
              <Link href="/career" css={styles.footerLink}>
                採用情報
              </Link>
            </Col>
          </Row>

          <StyledDivider
            backgroundColor="rgba(255, 255, 255, 0.1)"
            margin="32px 0 24px 0"
          />

          <div css={styles.footerNav}>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
            <Link href="/sitemap">サイトマップ</Link>
          </div>

          <div css={styles.copyright}>
            &copy; {new Date().getFullYear()} アクアテック株式会社 All Rights
            Reserved.
          </div>
        </div>
      </AntFooter>

      {/* ページトップへ戻るボタン */}
      <div
        css={styles.toTop}
        onClick={scrollToTop}
        title="トップへ戻る"
        role="button"
        tabIndex={0}
        aria-label="ページの先頭へ戻る"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToTop();
          }
        }}
      >
        <ArrowUpOutlined />
      </div>
    </>
  );
};

export default Footer;
