'use client';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Row, Col, Button } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined,
  FileTextOutlined,
  ArrowRightOutlined 
} from '@ant-design/icons';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const theme = useTheme();

  // スタイルの定義
  const styles = {
    section: css`
      padding: 80px 0;
      background: linear-gradient(135deg, ${theme.customColors.waterDarkBlue} 0%, ${theme.customColors.waterBlue} 100%);
      color: white;
      
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
      margin-bottom: 48px;
      
      @media (max-width: 768px) {
        margin-bottom: 32px;
      }
    `,
    sectionTitle: css`
      color: white;
      font-size: 32px;
      margin-bottom: 16px;
      font-weight: 700;
      
      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,
    sectionSubtitle: css`
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
      max-width: 700px;
      margin: 0 auto;
      
      @media (max-width: 576px) {
        font-size: 16px;
      }
    `,
    contactCard: css`
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 32px 24px;
      height: 100%;
      text-align: center;
      transition: transform 0.3s ease, background-color 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        background-color: rgba(255, 255, 255, 0.15);
      }
      
      @media (max-width: 768px) {
        padding: 24px 16px;
      }
    `,
    contactIcon: css`
      font-size: 40px;
      color: white;
      margin-bottom: 24px;
    `,
    contactTitle: css`
      color: white;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
    `,
    contactText: css`
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 24px;
      line-height: 1.6;
    `,
    contactButton: css`
      min-width: 200px;
      height: 48px;
      border-radius: 4px;
      font-size: 16px;
      background-color: ${theme.customColors.ecoGreen};
      border-color: ${theme.customColors.ecoGreen};
      color: white;
      font-weight: 500;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      
      .anticon {
        transition: transform 0.2s ease;
      }
      
      &:hover {
        background-color: ${theme.customColors.ecoLightGreen};
        border-color: ${theme.customColors.ecoLightGreen};
        color: #333;
      }
      
      &:hover .anticon {
        transform: translateX(4px);
      }
    `,
    phoneNumber: css`
      font-size: 24px;
      font-weight: 700;
      color: white;
      margin-bottom: 8px;
    `,
    businessHours: css`
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 24px;
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>
        <div css={styles.sectionHeader}>
          <h2 css={styles.sectionTitle}>お問い合わせ</h2>
          <p css={styles.sectionSubtitle}>
            浄水プラント・水処理システムに関するご質問、お見積り、導入のご相談などお気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div css={styles.contactCard}>
              <PhoneOutlined css={styles.contactIcon} />
              <h3 css={styles.contactTitle}>お電話でのお問い合わせ</h3>
              <p css={styles.contactText}>
                お急ぎの場合はお電話でご連絡ください。担当者が直接ご対応いたします。
              </p>
              <div css={styles.phoneNumber}>0120-00-0000</div>
              <p css={styles.businessHours}>平日 9:00〜17:00（土日祝休）</p>
              <Button 
                type="primary" 
                ghost 
                css={styles.contactButton}
                href="tel:0120000000"
              >
                電話をかける
              </Button>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div css={styles.contactCard}>
              <MailOutlined css={styles.contactIcon} />
              <h3 css={styles.contactTitle}>フォームでのお問い合わせ</h3>
              <p css={styles.contactText}>
                製品・サービスのご相談、技術的なご質問など、詳しい内容をお送りいただけます。
                24時間受付中です。
              </p>
              <Link href="/contact" passHref>
                <Button 
                  type="primary" 
                  css={styles.contactButton}
                  icon={<ArrowRightOutlined />}
                >
                  問い合わせフォームへ
                </Button>
              </Link>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div css={styles.contactCard}>
              <FileTextOutlined css={styles.contactIcon} />
              <h3 css={styles.contactTitle}>資料請求・カタログ</h3>
              <p css={styles.contactText}>
                製品カタログや技術資料をご希望の方は、こちらからご請求いただけます。
                PDFでの即日ダウンロードも可能です。
              </p>
              <Link href="/catalog" passHref>
                <Button 
                  type="default" 
                  css={styles.contactButton}
                  icon={<ArrowRightOutlined />}
                >
                  資料を請求する
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;