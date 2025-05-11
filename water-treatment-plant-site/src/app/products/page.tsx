"use client";

import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { Typography, Row, Col, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";

const { Title, Paragraph } = Typography;

// 製品カテゴリーデータ
const productCategories = [
  {
    id: "water-treatment",
    title: "浄水処理システム",
    description:
      "最新のフィルター技術と IoT を活用した次世代の浄水処理システムにより、安全で美味しい水を提供します。",
    image: "/images/products/water-treatment.jpg",
    link: "/products/water-treatment",
  },
  {
    id: "water-recycling",
    title: "水資源リサイクル",
    description:
      "限りある水資源を有効活用するための再利用システム。工業用水から農業用水まで、幅広いニーズに対応します。",
    image: "/images/products/water-recycling.jpg",
    link: "/products/water-recycling",
  },
  {
    id: "maintenance",
    title: "メンテナンスサービス",
    description:
      "24時間365日対応の保守サービスで、水処理システムの安定稼働をサポート。予防保全から緊急対応まで。",
    image: "/images/products/maintenance.jpg",
    link: "/products/maintenance",
  },
  {
    id: "industrial",
    title: "産業用水処理",
    description:
      "製造業、食品業、半導体など各産業に特化した水処理ソリューション。品質と効率を両立します。",
    image: "/images/products/industrial.jpg",
    link: "/products/industrial",
  },
  {
    id: "municipal",
    title: "自治体向けソリューション",
    description:
      "人口減少時代の自治体インフラを支える、コンパクトで効率的な上下水道システムを提供します。",
    image: "/images/products/municipal.jpg",
    link: "/products/municipal",
  },
];

export default function ProductsPage() {
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
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      overflow: hidden;
      margin: 8px 8px 32px 8px;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
    `,
    cardImage: css`
      position: relative;
      height: 200px;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
    `,
    cardContent: css`
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,
    cardTitle: css`
      color: ${theme.customColors.waterDarkBlue};
      font-size: 22px;
      margin-bottom: 16px;
    `,
    cardDescription: css`
      color: ${theme.customColors.textSecondary};
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 1.6;
    `,
    viewButton: css`
      display: flex;
      align-items: center;

      .anticon {
        margin-left: 8px;
        transition: transform 0.2s ease;
      }

      &:hover .anticon {
        transform: translateX(4px);
      }
    `,
  };

  // パンくずリストの項目
  const breadcrumbItems = [
    { title: "ホーム", href: "/" },
    { title: "製品・サービス" },
  ];

  return (
    <MainLayout>
      {/* ページヘッダー */}
      <PageHeader
        title="製品・サービス"
        description="アクアテック株式会社は、高品質な浄水処理システムから環境に配慮した水資源リサイクルソリューションまで、水に関する多様なニーズにお応えします。最新技術と50年以上の経験を活かした製品・サービスをご紹介します。"
        breadcrumbItems={breadcrumbItems}
      />

      {/* 製品カテゴリーセクション */}
      <PageContainer paddingY="medium">
        <Title level={2} css={styles.sectionTitle}>
          製品カテゴリー
        </Title>

        <Row gutter={[24, 24]}>
          {productCategories.map((category) => (
            <Col xs={24} sm={12} lg={8} key={category.id}>
              <Card
                hoverable
                css={styles.productCard}
                cover={
                  <div css={styles.cardImage}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                }
              >
                <div css={styles.cardContent}>
                  <Title level={3} css={styles.cardTitle}>
                    {category.title}
                  </Title>
                  <Paragraph css={styles.cardDescription}>
                    {category.description}
                  </Paragraph>

                  <Link href={category.link}>
                    <Button type="link" css={styles.viewButton}>
                      詳細を見る <RightOutlined />
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </PageContainer>

      {/* 導入事例セクション */}
      <PageContainer background="light" paddingY="medium">
        <Title level={2} css={styles.sectionTitle}>
          導入事例
        </Title>

        <Paragraph style={{ marginBottom: 32 }}>
          全国各地の自治体や企業での導入事例をご紹介します。
          アクアテックの製品・サービスがどのように水に関する課題を解決し、
          お客様のビジネスや地域社会に貢献しているかをご覧ください。
        </Paragraph>

        <Row justify="center">
          <Col>
            <Link href="/case-studies">
              <Button type="primary" size="large">
                導入事例一覧へ
              </Button>
            </Link>
          </Col>
        </Row>
      </PageContainer>
    </MainLayout>
  );
}
