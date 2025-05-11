"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Row, Col, Statistic } from "antd";
import {
  TeamOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const TechnologySection: React.FC = () => {
  const theme = useTheme();

  // 技術実績データ
  const stats = [
    {
      id: 1,
      title: "導入実績",
      value: 2000,
      suffix: "+",
      icon: <EnvironmentOutlined />,
    },
    {
      id: 2,
      title: "技術者数",
      value: 350,
      suffix: "名",
      icon: <TeamOutlined />,
    },
    {
      id: 3,
      title: "特許取得数",
      value: 128,
      suffix: "件",
      icon: <SolutionOutlined />,
    },
    {
      id: 4,
      title: "研究開発プロジェクト",
      value: 24,
      suffix: "件",
      icon: <ExperimentOutlined />,
    },
  ];

  // スタイルの定義
  const styles = {
    section: css`
      padding: 80px 0;
      background-color: white;

      @media (max-width: 768px) {
        padding: 60px 0;
      }
    `,
    container: css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    `,
    sectionHeader: css`
      text-align: center;
      margin-bottom: 60px;

      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    `,
    sectionTitle: css`
      font-size: 32px;
      color: ${theme.customColors?.waterDarkBlue || "#0057A8"};
      margin-bottom: 16px;
      font-weight: 700;

      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,
    sectionSubtitle: css`
      font-size: 18px;
      color: ${theme.customColors?.textSecondary || "#666666"};
      max-width: 800px;
      margin: 0 auto;

      @media (max-width: 576px) {
        font-size: 16px;
      }
    `,
    statsRow: css`
      margin-bottom: 60px;

      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    `,
    statCard: css`
      padding: 24px 16px;
      text-align: center;
      border-radius: 8px;
      height: 100%;
      background: linear-gradient(
        135deg,
        ${theme.customColors?.waterLightBlue || "#D4EDFF"} 0%,
        #f8fdff 100%
      );
      border: 1px solid rgba(0, 119, 189, 0.1);

      .anticon {
        font-size: 32px;
        color: ${theme.token?.colorPrimary || "#0057A8"};
        margin-bottom: 16px;
      }

      .ant-statistic-title {
        color: ${theme.customColors?.waterDarkBlue || "#0057A8"};
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
      }

      .ant-statistic-content {
        color: ${theme.token?.colorPrimary || "#0057A8"};
        font-weight: 700;
      }
    `,
    techContent: css`
      position: relative;
    `,
    techImage: css`
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

      @media (max-width: 768px) {
        margin-bottom: 32px;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    `,
    techDetails: css`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
    techTitle: css`
      font-size: 24px;
      color: ${theme.customColors?.waterDarkBlue || "#0057A8"};
      margin-bottom: 24px;
      font-weight: 600;

      @media (max-width: 576px) {
        font-size: 20px;
        margin-top: 16px;
      }
    `,
    techFeatures: css`
      margin: 0;
      padding: 0;
      list-style-position: inside;
      li {
        color: ${theme.customColors?.textPrimary || "#333333"};
        font-size: 16px;
        margin-bottom: 16px;
        padding-left: 8px;
        position: relative;
        list-style-type: none;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${theme.token?.colorPrimary || "#0057A8"};
        }
      }
    `,
    certifications: css`
      margin-top: 48px;
      padding-top: 32px;
      border-top: 1px solid rgba(0, 0, 0, 0.06);

      @media (max-width: 768px) {
        margin-top: 32px;
        padding-top: 24px;
      }
    `,
    certTitle: css`
      font-size: 20px;
      color: ${theme.customColors?.waterDarkBlue || "#0057A8"};
      margin-bottom: 24px;
      font-weight: 600;
      text-align: center;
    `,
    certLogos: css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;

      @media (max-width: 576px) {
        gap: 24px;
      }

      div {
        flex: 1;
        min-width: 140px;
        max-width: 180px;
        text-align: center;

        @media (max-width: 576px) {
          min-width: 100px;
          max-width: 140px;
        }
      }
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>
        <div css={styles.sectionHeader}>
          <h2 css={styles.sectionTitle}>技術力と実績</h2>
          <p css={styles.sectionSubtitle}>
            長年の経験と研究開発から生まれた独自技術で、水処理の課題を解決します。
            国内外の導入実績と特許取得技術が、私たちの技術力を裏付けています。
          </p>
        </div>

        {/* 実績指標 */}
        <Row gutter={[24, 24]} css={styles.statsRow}>
          {stats.map((stat) => (
            <Col xs={12} md={6} key={stat.id}>
              <div css={styles.statCard}>
                {stat.icon}
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* 技術詳細 */}
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <div css={styles.techImage}>
              <Image
                src="/images/technology.jpg"
                alt="アクアテックの高度浄水技術"
                width={580}
                height={400}
                layout="responsive"
              />
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div css={styles.techDetails}>
              <h3 css={styles.techTitle}>先進の浄水処理技術</h3>
              <ul css={styles.techFeatures}>
                <li>
                  独自開発の「アクアナノフィルター」による微細な不純物の除去（0.001μm以下の微粒子を除去可能）
                </li>
                <li>エネルギー消費を従来比30%削減した省エネルギー設計</li>
                <li>
                  IoT・AIを活用した遠隔監視システムによる24時間365日の安定運用
                </li>
                <li>
                  幅広い水質に対応し、水源の特性に合わせたカスタマイズが可能
                </li>
                <li>
                  コンパクト設計により、限られたスペースにも設置可能な高効率システム
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* 認証・受賞歴 */}
        <div css={styles.certifications}>
          <h4 css={styles.certTitle}>認証・受賞歴</h4>
          <div css={styles.certLogos}>
            <div>
              <Image
                src="/images/cert-iso9001.png"
                alt="ISO 9001認証"
                width={120}
                height={120}
              />
            </div>
            <div>
              <Image
                src="/images/cert-iso14001.png"
                alt="ISO 14001認証"
                width={120}
                height={120}
              />
            </div>
            <div>
              <Image
                src="/images/cert-award1.png"
                alt="環境技術優秀賞"
                width={120}
                height={120}
              />
            </div>
            <div>
              <Image
                src="/images/cert-award2.png"
                alt="イノベーション賞"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
