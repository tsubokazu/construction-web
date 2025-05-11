'use client';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Row, Col, Typography, Card, Space } from 'antd';
import { 
  SafetyCertificateOutlined, 
  GlobalOutlined, 
  ExperimentOutlined, 
  ReconciliationOutlined
} from '@ant-design/icons';
import Image from 'next/image';

const { Paragraph } = Typography;

const CompanyIntroSection: React.FC = () => {
  const theme = useTheme();

  // 企業の特徴データ
  const features = [
    {
      id: 1,
      icon: <SafetyCertificateOutlined />,
      title: '安全性と品質',
      description: '国際規格ISO9001認証取得。厳格な品質管理と安全基準に従った製品開発で、安心と信頼を提供します。',
    },
    {
      id: 2,
      icon: <GlobalOutlined />,
      title: 'グローバル展開',
      description: 'アジア・中東を中心にグローバルに事業を展開。各地域の水環境課題に対応したソリューションを提供します。',
    },
    {
      id: 3,
      icon: <ExperimentOutlined />,
      title: '研究開発力',
      description: '先進の技術研究所を保有し、水処理技術の革新に取り組んでいます。年間研究開発費は売上の8%を投資。',
    },
    {
      id: 4,
      icon: <ReconciliationOutlined />,
      title: '包括的サポート',
      description: '設計・製造から設置、メンテナンスまで一貫したサービス体制。長期的なパートナーシップを大切にしています。',
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
    sectionTitle: css`
      text-align: center;
      margin-bottom: 16px;
      color: ${theme.token?.colorPrimary || '#0057A8'};
      font-size: 32px;
      font-weight: 700;
      
      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,
    sectionSubtitle: css`
      text-align: center;
      font-size: 18px;
      color: ${theme.customColors.textSecondary};
      margin-bottom: 60px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      
      @media (max-width: 576px) {
        font-size: 16px;
        margin-bottom: 40px;
      }
    `,
    companyImage: css`
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    `,
    companyDescription: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      
      h3 {
        font-size: 24px;
        margin-bottom: 24px;
        font-weight: 600;
        color: ${theme.customColors.waterDarkBlue};
        
        @media (max-width: 576px) {
          font-size: 20px;
          margin-top: 24px;
        }
      }
      
      p {
        font-size: 16px;
        line-height: 1.8;
        color: ${theme.customColors.textPrimary};
        margin-bottom: 16px;
      }
    `,
    featureSection: css`
      margin-top: 80px;
      
      @media (max-width: 768px) {
        margin-top: 60px;
      }
    `,
    featureTitle: css`
      text-align: center;
      margin-bottom: 48px;
      font-size: 28px;
      font-weight: 600;
      color: ${theme.customColors.waterDarkBlue};
      
      @media (max-width: 576px) {
        font-size: 24px;
        margin-bottom: 32px;
      }
    `,
    featureCard: css`
      height: 100%;
      border-radius: 8px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      margin: 8px;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
      }
      
      .ant-card-body {
        padding: 32px;
      }
    `,
    featureIcon: css`
      font-size: 40px;
      color: ${theme.token?.colorPrimary || '#0057A8'};
      margin-bottom: 20px;
    `,
    featureCardTitle: css`
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      color: ${theme.customColors.waterDarkBlue};
    `,
    featureCardDescription: css`
      font-size: 15px;
      color: ${theme.customColors.textSecondary};
      line-height: 1.6;
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>
        {/* セクションヘッダー */}
        <h2 css={styles.sectionTitle}>アクアテック株式会社について</h2>
        <p css={styles.sectionSubtitle}>
          1975年の創業以来、水処理技術のリーディングカンパニーとして、安全で持続可能な水環境の実現に貢献してきました。
        </p>
        
        {/* 企業紹介コンテンツ */}
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div css={styles.companyImage}>
              <Image
                src="/images/company-image.jpg"
                alt="アクアテック株式会社の浄水施設"
                width={580}
                height={400}
                layout="responsive"
              />
            </div>
          </Col>
          
          <Col xs={24} md={12}>
            <div css={styles.companyDescription}>
              <h3>先進技術と豊富な経験で、水の課題を解決</h3>
              <Space direction="vertical" size={16}>
                <Paragraph>
                  アクアテック株式会社は、浄水プラントおよび水処理システムの設計・製造・施工を手がける総合水処理エンジニアリング企業です。
                </Paragraph>
                <Paragraph>
                  独自の膜ろ過技術や高度浄水処理システムを中心に、水質改善や再利用システムまで幅広いソリューションを提供しています。
                </Paragraph>
                <Paragraph>
                  「安全な水を、すべての人に」を企業理念に掲げ、国内外の水インフラ整備に貢献。SDGs目標6「安全な水とトイレを世界中に」の実現に向けて積極的に取り組んでいます。
                </Paragraph>
              </Space>
            </div>
          </Col>
        </Row>
        
        {/* 企業の特徴 */}
        <div css={styles.featureSection}>
          <h3 css={styles.featureTitle}>私たちの強み</h3>
          <Row gutter={[24, 24]}>
            {features.map((feature) => (
              <Col xs={24} sm={12} lg={6} key={feature.id}>
                <Card css={styles.featureCard} variant="outlined">
                  <div css={styles.featureIcon}>{feature.icon}</div>
                  <h4 css={styles.featureCardTitle}>{feature.title}</h4>
                  <p css={styles.featureCardDescription}>{feature.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;