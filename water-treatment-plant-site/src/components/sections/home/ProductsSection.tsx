'use client';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const ProductsSection: React.FC = () => {
  const theme = useTheme();

  // 製品・サービスデータ
  const products = [
    {
      id: 1,
      title: '膜ろ過浄水システム',
      description: '微細な不純物も除去する高性能膜ろ過技術。大規模浄水場から小規模施設まで対応可能で、安全な飲料水を提供します。',
      image: '/images/product-1.jpg',
      link: '/products/water-treatment',
    },
    {
      id: 2,
      title: '水資源リサイクルシステム',
      description: '使用済み水を浄化・再利用するシステム。工業排水や生活排水の処理・再利用により、水資源の循環利用を実現します。',
      image: '/images/product-2.jpg',
      link: '/products/water-recycling',
    },
    {
      id: 3,
      title: '水質モニタリングシステム',
      description: 'IoT技術を活用した24時間水質監視システム。異常検知と早期対応により、安全で安定した水供給をサポートします。',
      image: '/images/product-3.jpg',
      link: '/products/monitoring',
    },
  ];

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
      text-align: center;
      margin-bottom: 60px;
      
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    `,    sectionTitle: css`
      font-size: 32px;
      color: ${theme.customColors?.waterDarkBlue || '#0057A8'};
      margin-bottom: 16px;
      font-weight: 700;
      
      @media (max-width: 576px) {
        font-size: 28px;
      }
    `,    sectionSubtitle: css`
      font-size: 18px;
      color: ${theme.customColors?.textSecondary || '#666666'};
      max-width: 700px;
      margin: 0 auto;
      
      @media (max-width: 576px) {
        font-size: 16px;
      }
    `,
    productCard: css`
      position: relative;
      height: 100%;
      border-radius: 8px;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
      }
    `,
    productImage: css`
      position: relative;
      width: 100%;
      height: 240px;
      overflow: hidden;
      
      img {
        object-fit: cover;
      }
    `,
    productContent: css`
      padding: 24px;
    `,    productTitle: css`
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
      color: ${theme.customColors?.waterDarkBlue || '#0057A8'};
    `,    productDescription: css`
      font-size: 15px;
      color: ${theme.customColors?.textSecondary || '#666666'};
      line-height: 1.6;
      margin-bottom: 24px;
    `,    productLink: css`
      display: inline-flex;
      align-items: center;
      color: ${theme.token?.colorPrimary || '#0057A8'};
      font-weight: 500;
      
      .anticon {
        margin-left: 4px;
        transition: transform 0.2s ease;
      }
      
      &:hover {
        color: ${theme.token?.colorPrimaryActive || '#003d75'};
        
        .anticon {
          transform: translateX(4px);
        }
      }
    `,
    moreButton: css`
      margin-top: 48px;
      text-align: center;
      
      button {
        height: 48px;
        padding: 0 32px;
        font-size: 16px;
        
        .anticon {
          transition: transform 0.2s ease;
        }
        
        &:hover .anticon {
          transform: translateX(4px);
        }
      }
    `,
  };

  return (
    <section css={styles.section}>
      <div css={styles.container}>
        <div css={styles.sectionHeader}>
          <h2 css={styles.sectionTitle}>製品・サービス</h2>
          <p css={styles.sectionSubtitle}>
            最先端の浄水技術と水処理ソリューションで、多様な水の課題に応えます。
            高品質で信頼性の高いシステムを通じて、持続可能な水環境の構築に貢献します。
          </p>
        </div>
        
        <Row gutter={[32, 32]}>
          {products.map((product) => (
            <Col xs={24} md={8} key={product.id}>
              <div css={styles.productCard}>
                <div css={styles.productImage}>
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <div css={styles.productContent}>
                  <h3 css={styles.productTitle}>{product.title}</h3>
                  <p css={styles.productDescription}>{product.description}</p>
                  <Link href={product.link} css={styles.productLink}>
                    詳しく見る <ArrowRightOutlined />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div css={styles.moreButton}>
          <Link href="/products" passHref>
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              すべての製品・サービスを見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;