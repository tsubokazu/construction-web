'use client';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Row, Col, Button, Tag, Space } from 'antd';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import Link from 'next/link';

// ニュースデータ
const newsItems = [
  {
    id: 1,
    title: '新たな海水淡水化システム「マリンアクア」の販売を開始',
    date: '2025年5月1日',
    category: '製品情報',
    categoryColor: '#0277BD',
    isNew: true,
    link: '/news/1',
  },
  {
    id: 2,
    title: 'タイ・バンコクにおける大規模浄水プラントプロジェクトが稼働開始',
    date: '2025年4月15日',
    category: '事業活動',
    categoryColor: '#00838F',
    isNew: true,
    link: '/news/2',
  },
  {
    id: 3,
    title: '第12回水処理技術展示会に出展します（東京ビッグサイト 6/10-12）',
    date: '2025年4月10日',
    category: 'イベント',
    categoryColor: '#558B2F',
    isNew: false,
    link: '/news/3',
  },
  {
    id: 4,
    title: '2025年度第1四半期決算を発表',
    date: '2025年4月5日',
    category: 'IR情報',
    categoryColor: '#4527A0',
    isNew: false,
    link: '/news/4',
  },
  {
    id: 5,
    title: '「水資源保全活動レポート2025」を公開しました',
    date: '2025年3月30日',
    category: 'CSR活動',
    categoryColor: '#2B9348',
    isNew: false,
    link: '/news/5',
  },
];

const NewsSection: React.FC = () => {
  const theme = useTheme();

  // スタイルの定義
  const styles = {    section: css`
      padding: 80px 0;
      background-color: ${theme.customColors?.lightGray || '#f5f5f5'};
      
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      
      @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }
    `,    sectionTitle: css`
      font-size: 32px;
      color: ${theme.customColors?.waterDarkBlue || '#0057A8'};
      margin: 0;
      font-weight: 700;
      
      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,
    newsItem: css`
      background-color: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease;
      height: 100%;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }
    `,    newsDate: css`
      display: flex;
      align-items: center;
      color: ${theme.customColors?.textSecondary || '#666666'};
      font-size: 14px;
      margin-bottom: 12px;
      
      .anticon {
        margin-right: 6px;
      }
    `,
    newsCategory: css`
      margin-right: 12px;
    `,    newsTitle: css`
      font-size: 18px;
      font-weight: 600;
      color: ${theme.customColors?.textPrimary || '#333333'};
      margin-top: 16px;
      margin-bottom: 0;
      line-height: 1.5;
        a {
        color: ${theme.customColors?.textPrimary || '#333333'};
        transition: color 0.2s ease;
        
        &:hover {
          color: ${theme.token?.colorPrimary || '#0057A8'};
        }
      }
    `,
    newBadge: css`
      background-color: #f5222d;
      color: white;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 8px;
      font-weight: bold;
    `,
    moreButton: css`
      .anticon {
        transition: transform 0.2s ease;
      }
      
      &:hover .anticon {
        transform: translateX(4px);
      }
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>
        <div css={styles.sectionHeader}>
          <h2 css={styles.sectionTitle}>ニュース</h2>
          <Link href="/news" passHref>
            <Button 
              type="link" 
              icon={<ArrowRightOutlined />}
              css={styles.moreButton}
            >
              ニュース一覧へ
            </Button>
          </Link>
        </div>
        
        <Row gutter={[24, 24]}>
          {newsItems.map((item) => (
            <Col xs={24} sm={12} lg={item.id <= 2 ? 12 : 8} key={item.id}>
              <div css={styles.newsItem}>
                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                  <div>
                    <div css={styles.newsDate}>
                      <CalendarOutlined /> {item.date}
                    </div>
                    <Tag color={item.categoryColor} css={styles.newsCategory}>
                      {item.category}
                    </Tag>
                  </div>
                  
                  <h3 css={styles.newsTitle}>
                    <Link href={item.link}>
                      {item.title}
                      {item.isNew && <span css={styles.newBadge}>NEW</span>}
                    </Link>
                  </h3>
                </Space>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default NewsSection;