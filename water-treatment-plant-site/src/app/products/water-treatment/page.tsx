"use client";

import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { Typography, Row, Col, Card, Space, Tag, List, Button } from "antd";
import {
  CheckCircleFilled,
  DownloadOutlined,
  ExperimentOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  EnvironmentOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";
import { createStyledList } from "@/components/common/styled/StyledList";
import StyledTabs from "@/components/common/styled/StyledTabs";
const { Title, Paragraph, Text } = Typography;
// const { TabPane } = Tabs; // 非推奨のため使用しない

// 浄水処理システム製品データ
const products = [
  {
    id: "aqua-pure-5000",
    name: "アクアピュア 5000",
    category: "大規模向け",
    description:
      "大規模自治体向け浄水処理システム。高い処理能力と省スペース設計を両立。",
    features: [
      "処理能力: 5,000㎥/日",
      "消費電力削減技術搭載",
      "AIによる水質自動調整",
      "リモートモニタリング対応",
    ],
    image: "/images/products/aqua-pure-5000.jpg",
  },
  {
    id: "aqua-pure-1000",
    name: "アクアピュア 1000",
    category: "中規模向け",
    description:
      "中規模施設や小規模自治体向け。コストパフォーマンスに優れた処理システム。",
    features: [
      "処理能力: 1,000㎥/日",
      "コンパクト設計",
      "低ランニングコスト",
      "簡易メンテナンス構造",
    ],
    image: "/images/products/aqua-pure-1000.jpg",
  },
  {
    id: "aqua-pure-compact",
    name: "アクアピュア コンパクト",
    category: "小規模向け",
    description:
      "マンションや小規模施設に最適な浄水システム。狭いスペースにも設置可能。",
    features: [
      "処理能力: 100㎥/日",
      "超コンパクト設計",
      "静音設計",
      "タッチパネル式簡易操作",
    ],
    image: "/images/products/aqua-pure-compact.jpg",
  },
];

// 技術特長データ
const technologies = [
  {
    icon: <ExperimentOutlined style={{ fontSize: 36 }} />,
    title: "多層フィルター技術",
    description:
      "独自開発の5層フィルター構造により、微細な不純物まで効率的に除去します。従来比で約30%の浄化性能向上を実現しました。",
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 36 }} />,
    title: "安全性強化システム",
    description:
      "世界最高水準の安全基準に基づく浄化プロセスにより、有害物質を確実に除去。安心して飲める水質を保証します。",
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: 36 }} />,
    title: "省エネルギー設計",
    description:
      "最適化されたポンプ制御と処理フローにより、従来システムと比較して電力消費を最大40%削減。運用コストの大幅な削減に貢献します。",
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: 36 }} />,
    title: "エコフレンドリー",
    description:
      "廃棄物の最小化と再利用可能な部品の採用により、環境負荷を低減。SDGsの取り組みに貢献します。",
  },
  {
    icon: <DesktopOutlined style={{ fontSize: 36 }} />,
    title: "IoT・監視制御",
    description:
      "クラウドベースの監視システムにより、リアルタイムでの水質モニタリングと遠隔操作が可能。異常の早期発見と迅速な対応を実現します。",
  },
];

// 型付きListコンポーネントを作成
const StringList = createStyledList<string>();
type DownloadItem = {
  title: string;
  size: string;
  type: string;
};
const DownloadItemList = createStyledList<DownloadItem>();

export default function WaterTreatmentPage() {
  const theme = useTheme();

  // スタイルの定義
  const styles = {
    sectionTitle: css`
      font-size: 28px;
      color: ${theme.customColors.waterDarkBlue};
      position: relative;
      padding-bottom: 12px;
      margin-bottom: 32px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: ${theme.customColors.waterBlue};
      }
    `,
    productCard: css`
      height: 100%;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      overflow: hidden;
      margin: 8px 8px 32px 8px;
    `,
    productImage: css`
      position: relative;
      height: 240px;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
    `,
    productContent: css`
      padding: 36px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,
    productTitle: css`
      font-size: 22px;
      margin-bottom: 16px;
    `,
    categoryTag: css`
      margin-bottom: 20px;
      padding: 4px 12px;
      font-size: 14px;
    `,
    technologyCard: css`
      text-align: center;
      padding: 32px;
      height: 100%;
      transition: transform 0.3s ease;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      margin: 8px 8px 32px 8px;
      border-radius: 8px;

      &:hover {
        transform: translateY(-5px);
      }

      .anticon {
        color: ${theme.customColors.waterBlue};
        margin-bottom: 20px;
        display: block;
      }
    `,
    technologyTitle: css`
      font-size: 18px;
      margin-bottom: 16px;
    `,
    caseStudySection: css`
      background-color: ${theme.customColors.waterLightBlue};
      padding: 32px;
      border-radius: 8px;
      margin-top: 48px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    `,
    caseStudyImage: css`
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      height: 220px;

      @media (max-width: 768px) {
        margin-bottom: 24px;
      }
    `,
  };

  // パンくずリストの項目
  const breadcrumbItems = [
    { title: "ホーム", href: "/" },
    { title: "製品・サービス", href: "/products" },
    { title: "浄水処理システム" },
  ];

  return (
    <MainLayout>
      {/* ページヘッダー */}
      <PageHeader
        title="浄水処理システム"
        description="安全で美味しい水を届けるための最先端浄水処理システム。厳しい水質基準をクリアする高性能フィルターと省エネ設計で、持続可能な水インフラの構築に貢献します。"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/images/backgrounds/water-treatment-hero.jpg"
      />

      {/* 製品ラインナップセクション */}
      <PageContainer paddingY="medium">
        <Title level={2} css={styles.sectionTitle}>
          製品ラインナップ
        </Title>

        <Row gutter={[36, 36]}>
          {products.map((product) => (
            <Col xs={24} md={8} key={product.id}>
              <Card css={styles.productCard} hoverable variant="outlined">
                <div css={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div css={styles.productContent}>
                  <Title level={3} css={styles.productTitle}>
                    {product.name}
                  </Title>
                  <Tag
                    color={theme.customColors.waterBlue}
                    css={styles.categoryTag}
                  >
                    {product.category}
                  </Tag>
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      marginBottom: "28px",
                      lineHeight: "1.6",
                    }}
                  >
                    {product.description}
                  </Paragraph>

                  <StringList
                    itemLayout="horizontal"
                    dataSource={product.features}
                    style={{ marginBottom: "32px" }}
                    renderItem={(item) => (
                      <List.Item style={{ padding: "10px 0" }}>
                        <Space size={12}>
                          <CheckCircleFilled
                            style={{
                              color: theme.customColors.waterBlue,
                              fontSize: "16px",
                            }}
                          />
                          <Text style={{ fontSize: "15px" }}>
                            {item as string}
                          </Text>
                        </Space>
                      </List.Item>
                    )}
                  />

                  <Button
                    type="primary"
                    size="large"
                    style={{ marginTop: 24, padding: "0 24px", height: "44px" }}
                    onClick={() => window.alert("製品詳細ページは準備中です")}
                  >
                    詳細を見る
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </PageContainer>

      {/* 技術特長セクション */}
      <PageContainer background="light" paddingY="medium">
        <Title level={2} css={styles.sectionTitle}>
          アクアテックの技術特長
        </Title>

        <Row gutter={[36, 36]}>
          {technologies.map((tech, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card css={styles.technologyCard} variant="outlined">
                {tech.icon}
                <Title level={4} css={styles.technologyTitle}>
                  {tech.title}
                </Title>
                <Paragraph>{tech.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </PageContainer>

      {/* 仕様・資料セクション */}
      <PageContainer paddingY="medium">
        <Title level={2} css={styles.sectionTitle}>
          仕様・資料
        </Title>

        <StyledTabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "仕様表",
              children: (
                <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                            backgroundColor: theme.customColors.waterLightBlue,
                            textAlign: "left",
                            fontWeight: 600,
                            color: theme.customColors.waterDarkBlue,
                          }}
                        >
                          モデル
                        </th>
                        <th
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                            backgroundColor: theme.customColors.waterLightBlue,
                            textAlign: "left",
                            fontWeight: 600,
                            color: theme.customColors.waterDarkBlue,
                          }}
                        >
                          処理能力
                        </th>
                        <th
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                            backgroundColor: theme.customColors.waterLightBlue,
                            textAlign: "left",
                            fontWeight: 600,
                            color: theme.customColors.waterDarkBlue,
                          }}
                        >
                          サイズ (W×D×H)
                        </th>
                        <th
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                            backgroundColor: theme.customColors.waterLightBlue,
                            textAlign: "left",
                            fontWeight: 600,
                            color: theme.customColors.waterDarkBlue,
                          }}
                        >
                          消費電力
                        </th>
                        <th
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                            backgroundColor: theme.customColors.waterLightBlue,
                            textAlign: "left",
                            fontWeight: 600,
                            color: theme.customColors.waterDarkBlue,
                          }}
                        >
                          フィルター寿命
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          アクアピュア 5000
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          5,000㎥/日
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          12m × 8m × 4m
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          180kW
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          2年
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          アクアピュア 1000
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          1,000㎥/日
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          5m × 4m × 3m
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          45kW
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          1.5年
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          アクアピュア コンパクト
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          100㎥/日
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          2m × 1.5m × 2m
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          8kW
                        </td>
                        <td
                          style={{
                            border: "1px solid #e8e8e8",
                            padding: "14px 16px",
                          }}
                        >
                          1年
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ),
            },
            {
              key: "2",
              label: "ダウンロード資料",
              children: (
                <DownloadItemList
                  itemLayout="horizontal"
                  dataSource={[
                    {
                      title: "製品カタログ（全製品）",
                      size: "2.5MB",
                      type: "PDF",
                    },
                    {
                      title: "アクアピュア 5000 技術仕様書",
                      size: "1.8MB",
                      type: "PDF",
                    },
                    {
                      title: "アクアピュア 1000 技術仕様書",
                      size: "1.6MB",
                      type: "PDF",
                    },
                    {
                      title: "アクアピュア コンパクト 技術仕様書",
                      size: "1.2MB",
                      type: "PDF",
                    },
                    {
                      title: "浄水処理システム 導入事例集",
                      size: "3.0MB",
                      type: "PDF",
                    },
                    { title: "メンテナンスガイド", size: "4.2MB", type: "PDF" },
                  ]}
                  renderItem={(item) => (
                    <List.Item
                      actions={[
                        <Button
                          key="download"
                          type="primary"
                          ghost
                          icon={<DownloadOutlined />}
                          onClick={() =>
                            window.alert("資料ダウンロード機能は準備中です")
                          }
                        >
                          ダウンロード
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={(item as DownloadItem).title}
                        description={`${(item as DownloadItem).type} / ${
                          (item as DownloadItem).size
                        }`}
                      />
                    </List.Item>
                  )}
                />
              ),
            },
          ]}
        />

        {/* 導入事例 */}
        <div css={styles.caseStudySection}>
          <Title level={3} style={{ marginBottom: 24 }}>
            導入事例紹介: 山田市水道局
          </Title>

          <Row gutter={36}>
            <Col xs={24} md={8}>
              <div css={styles.caseStudyImage}>
                <Image
                  src="/images/case-studies/water-plant.jpg"
                  alt="山田市浄水場"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph>
                人口10万人の山田市では、老朽化した浄水場の更新に際し、当社のアクアピュア5000を導入。
                導入後は水質の向上だけでなく、運用コストが年間約30%削減され、省エネルギー化にも成功しました。
                また、リモートモニタリングシステムの活用により、24時間体制だった管理体制を効率化。
                職員の働き方改革にも貢献しています。
              </Paragraph>

              <Link href="/case-studies/yamada-city">
                <Button type="link" style={{ padding: 0 }}>
                  詳細を読む
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </PageContainer>
    </MainLayout>
  );
}
