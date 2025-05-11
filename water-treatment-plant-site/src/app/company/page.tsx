"use client";

import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import {
  Typography,
  Row,
  Col,
  Card,
  Timeline,
  Statistic,
  Button,
  Divider,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  HistoryOutlined,
  TeamOutlined,
  CompassOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/common/PageHeader";
import PageContainer from "@/components/common/PageContainer";
import StyledTimeline from "@/components/common/styled/StyledTimeline";

const { Title, Paragraph } = Typography;

// 企業概要データ
const companyInfo = {
  name: "アクアテック株式会社",
  established: "1975年4月1日",
  capital: "5億円",
  employees: "485名（連結）",
  ceo: "水野 誠一",
  business:
    "浄水処理システム、水資源リサイクル設備、水質モニタリング機器の開発・製造・販売",
  headquarters: "東京都港区海岸1-2-3 ウォーターフロントビル",
  branches: [
    "大阪支社、名古屋支社、福岡支社、札幌営業所、広島営業所",
    "海外：シンガポール、タイ、ベトナム、インドネシア",
  ],
};

// 沿革データ
const historyItems = [
  {
    year: "1975",
    title: "会社設立",
    description:
      "東京都品川区に「日本浄水工業株式会社」として創業。小規模浄水装置の製造を開始。",
  },
  {
    year: "1982",
    title: "社名変更・事業拡大",
    description:
      "「アクアテック株式会社」に社名変更。大規模浄水プラント事業に参入。",
  },
  {
    year: "1995",
    title: "研究所設立",
    description:
      "茨城県つくば市に研究開発センターを設立。最先端の水処理技術の研究を本格化。",
  },
  {
    year: "2003",
    title: "アジア展開",
    description:
      "シンガポールに初の海外拠点を設立。アジア市場への本格展開を開始。",
  },
  {
    year: "2010",
    title: "環境技術開発",
    description:
      "水資源リサイクル技術の開発に成功。環境配慮型製品の販売を開始。",
  },
  {
    year: "2018",
    title: "IoT技術導入",
    description:
      "クラウドベースの水質モニタリングシステムを開発。スマート水処理ソリューションの提供を開始。",
  },
  {
    year: "2023",
    title: "カーボンニュートラル宣言",
    description:
      "2035年までにカーボンニュートラル達成を目指す長期計画を発表。再生可能エネルギーを活用した水処理システムの開発を強化。",
  },
];

export default function CompanyPage() {
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
    profileImage: css`
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;
      position: relative;
      height: 320px;

      @media (max-width: 768px) {
        height: 240px;
        margin-bottom: 32px;
      }
    `,
    companyTable: css`
      width: 100%;

      tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      th {
        padding: 16px;
        width: 25%;
        text-align: left;
        font-weight: 600;
        color: ${theme.customColors.waterDarkBlue};
        vertical-align: top;

        @media (max-width: 576px) {
          width: 35%;
        }
      }

      td {
        padding: 16px;
        vertical-align: top;
      }
    `,
    messageCard: css`
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      height: 100%;
      margin: 8px;
    `,
    messageImage: css`
      position: relative;
      height: 240px;
    `,
    messageContent: css`
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,
    messageTitle: css`
      font-size: 22px;
      margin-bottom: 16px;
      color: ${theme.customColors.waterDarkBlue};
    `,
    statsCard: css`
      text-align: center;
      padding: 32px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      margin: 8px;

      .ant-statistic-title {
        font-size: 16px;
        margin-bottom: 16px;
      }

      .ant-statistic-content {
        font-size: 36px;
        color: ${theme.customColors.waterDarkBlue};
      }
    `,
    ctaButton: css`
      display: flex;
      align-items: center;
      justify-content: center;

      .anticon {
        margin-left: 8px;
      }
    `,
  };

  // パンくずリストの項目
  const breadcrumbItems = [
    { title: "ホーム", href: "/" },
    { title: "企業情報" },
  ];

  return (
    <MainLayout>
      {/* ページヘッダー */}
      <PageHeader
        title="企業情報"
        description="アクアテック株式会社は、水に関する総合ソリューション企業として、持続可能な水資源の未来に貢献します。1975年の創業以来、浄水処理技術の革新と水環境の保全に取り組んでいます。"
        breadcrumbItems={breadcrumbItems}
      />

      {/* 会社概要セクション */}
      <PageContainer paddingY="medium">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={24} lg={8}>
              <div css={styles.profileImage}>
                <Image
                  src="/images/company/headquarters.jpg"
                  alt="アクアテック株式会社本社"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <Card bordered={false} style={{ marginBottom: 24 }}>
                <Title level={4} style={{ marginBottom: 16 }}>
                  本社所在地
                </Title>
                <Paragraph>
                  <EnvironmentOutlined
                    style={{
                      marginRight: 8,
                      color: theme.customColors.waterBlue,
                    }}
                  />
                  {companyInfo.headquarters}
                </Paragraph>
                <Paragraph>
                  <PhoneOutlined
                    style={{
                      marginRight: 8,
                      color: theme.customColors.waterBlue,
                    }}
                  />
                  03-1234-5678
                </Paragraph>
                <Paragraph style={{ marginBottom: 0 }}>
                  <MailOutlined
                    style={{
                      marginRight: 8,
                      color: theme.customColors.waterBlue,
                    }}
                  />
                  info@aquatech.co.jp
                </Paragraph>
              </Card>

              <Link href="/company/access">
                <Button type="primary" block>
                  アクセス情報
                </Button>
              </Link>
            </Col>

            <Col xs={24} md={24} lg={16}>
              <Title level={2} css={styles.sectionTitle}>
                会社概要
              </Title>

              <table css={styles.companyTable}>
                <tbody>
                  <tr>
                    <th>会社名</th>
                    <td>{companyInfo.name}</td>
                  </tr>
                  <tr>
                    <th>設立</th>
                    <td>{companyInfo.established}</td>
                  </tr>
                  <tr>
                    <th>資本金</th>
                    <td>{companyInfo.capital}</td>
                  </tr>
                  <tr>
                    <th>従業員数</th>
                    <td>{companyInfo.employees}</td>
                  </tr>
                  <tr>
                    <th>代表取締役社長</th>
                    <td>{companyInfo.ceo}</td>
                  </tr>
                  <tr>
                    <th>事業内容</th>
                    <td>{companyInfo.business}</td>
                  </tr>
                  <tr>
                    <th>拠点</th>
                    <td>
                      {companyInfo.branches.map((branch, index) => (
                        <Paragraph
                          key={index}
                          style={{
                            marginBottom:
                              index === companyInfo.branches.length - 1 ? 0 : 8,
                          }}
                        >
                          {branch}
                        </Paragraph>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
      </PageContainer>

      {/* 社長メッセージセクション */}
      <PageContainer background="light" paddingY="medium">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={16}>
              <Card css={styles.messageCard}>
                <div css={styles.messageImage}>
                  <Image
                    src="/images/company/ceo.jpg"
                    alt="代表取締役社長 水野 誠一"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div css={styles.messageContent}>
                  <Title level={3} css={styles.messageTitle}>
                    社長メッセージ
                  </Title>
                  <Paragraph style={{ marginBottom: 16 }}>
                    水は生命の源であり、すべての産業の基盤です。アクアテックは創業以来、「安全な水を、すべての人に」という理念のもと、
                    水処理技術の革新に挑戦してきました。
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 16 }}>
                    地球環境の変化や水資源の不足など、水を取り巻く課題は年々複雑化しています。
                    私たちは最先端の技術と半世紀近い経験を活かし、これらの課題に真摯に向き合い、
                    持続可能な水環境の実現に貢献してまいります。
                  </Paragraph>
                  <div style={{ textAlign: "right" }}>
                    <Paragraph style={{ marginBottom: 0 }}>
                      代表取締役社長 水野 誠一
                    </Paragraph>
                  </div>

                  <Divider />

                  <div style={{ textAlign: "center" }}>
                    <Link href="/company/message">
                      <Button css={styles.ctaButton}>
                        メッセージ全文を読む <RightOutlined />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
      </PageContainer>

      {/* 沿革セクション */}
      <PageContainer paddingY="medium">
          <Title level={2} css={styles.sectionTitle}>
            沿革
          </Title>

          <StyledTimeline>
            {historyItems.map((item, index) => (
              <Timeline.Item key={index}>
                <div>
                  <span className="year">{item.year}</span>
                  <span className="title">{item.title}</span>
                  <div className="description">{item.description}</div>
                </div>
              </Timeline.Item>
            ))}
          </StyledTimeline>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/company/history">
              <Button type="primary" css={styles.ctaButton}>
                詳細な沿革を見る <RightOutlined />
              </Button>
            </Link>
          </div>
      </PageContainer>

      {/* 企業データセクション */}
      <PageContainer background="light" paddingY="medium">
          <Title
            level={2}
            css={styles.sectionTitle}
            style={{ textAlign: "center" }}
          >
            企業データ
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Card css={styles.statsCard}>
                <Statistic
                  title={
                    <>
                      <HistoryOutlined /> 設立からの年数
                    </>
                  }
                  value={50}
                  suffix="年"
                />
                <Paragraph style={{ marginTop: 8 }}>
                  水処理技術における半世紀の実績
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card css={styles.statsCard}>
                <Statistic
                  title={
                    <>
                      <TeamOutlined /> グローバルスタッフ
                    </>
                  }
                  value={485}
                  suffix="名"
                />
                <Paragraph style={{ marginTop: 8 }}>
                  世界12カ国で活躍する専門家集団
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card css={styles.statsCard}>
                <Statistic
                  title={
                    <>
                      <CompassOutlined /> 導入実績
                    </>
                  }
                  value={1250}
                  suffix="件"
                />
                <Paragraph style={{ marginTop: 8 }}>
                  世界各地での浄水システム導入数
                </Paragraph>
              </Card>
            </Col>
          </Row>
      </PageContainer>
    </MainLayout>
  );
}
