"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Layout, Button, Drawer, Space } from "antd";
import {
  MenuOutlined,
  PhoneOutlined,
  MailOutlined,
  DownOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import StyledMenu from "../common/styled/StyledMenu";
import StyledDrawerMenu from "../common/styled/StyledDrawerMenu";

const { Header: AntHeader } = Layout;

// メニュー項目
const menuItems = [
  { key: "home", label: "ホーム", link: "/" },
  {
    key: "products",
    label: "製品・サービス",
    link: "/products",
    children: [
      {
        key: "water-treatment",
        label: "浄水処理システム",
        link: "/products/water-treatment",
      },
      {
        key: "water-recycling",
        label: "水資源リサイクル",
        link: "/products/water-recycling",
      },
      {
        key: "maintenance",
        label: "メンテナンスサービス",
        link: "/products/maintenance",
      },
      {
        key: "industrial",
        label: "産業用水処理",
        link: "/products/industrial",
      },
      {
        key: "municipal",
        label: "自治体向けソリューション",
        link: "/products/municipal",
      },
    ],
  },
  {
    key: "technology",
    label: "技術・研究開発",
    link: "/technology",
    children: [
      { key: "filtration", label: "ろ過技術", link: "/technology/filtration" },
      {
        key: "monitoring",
        label: "水質モニタリング",
        link: "/technology/monitoring",
      },
      { key: "innovation", label: "研究開発", link: "/technology/innovation" },
    ],
  },
  {
    key: "company",
    label: "企業情報",
    link: "/company",
    children: [
      { key: "about", label: "会社概要", link: "/company/about" },
      { key: "message", label: "社長メッセージ", link: "/company/message" },
      { key: "history", label: "沿革", link: "/company/history" },
      { key: "access", label: "アクセス", link: "/company/access" },
    ],
  },
  { key: "sustainability", label: "サステナビリティ", link: "/sustainability" },
  { key: "news", label: "ニュース", link: "/news" },
];

const Header = () => {
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // スタイルの定義
  const styles = {
    header: css`
      background-color: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      padding: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    `,
    headerInner: css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      align-items: center;
      height: 70px;

      @media (max-width: 992px) {
        justify-content: space-between;
      }
    `,
    logo: css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 48px;
      height: 100%;
    `,
    actions: css`
      display: flex;
      align-items: center;
      margin-left: 16px;

      @media (max-width: 992px) {
        display: none;
      }
    `,
    contactButton: css`
      background: ${theme.customColors.ecoGreen};
      border-color: ${theme.customColors.ecoGreen};
    `,
    mobileMenuButton: css`
      display: none;

      @media (max-width: 992px) {
        display: block;
        font-size: 20px;
      }
    `,
    utilityNav: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 36px;
      background-color: ${theme.customColors.waterDarkBlue};
      color: white;
      display: flex;
      justify-content: center;
      font-size: 13px;

      @media (max-width: 768px) {
        display: none;
      }
    `,
    utilityInner: css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
    `,
    utilityLink: css`
      color: rgba(255, 255, 255, 0.85);
      margin-left: 24px;
      font-size: 13px;
      display: flex;
      align-items: center;

      &:hover {
        color: white;
      }

      .anticon {
        margin-right: 6px;
      }
    `,
    drawerActions: css`
      padding: 16px;
      margin-top: 24px;
    `,
    drawerContactLink: css`
      color: rgba(0, 0, 0, 0.65);
    `,
    mobileSpace: css`
      margin-top: 16px;
      display: flex;
      justify-content: center;
    `,
    headerWithMargin: css`
      margin-top: 36px;
    `,
    logoWrapper: css`
      width: 100%;
      text-align: center;
    `,
  };

  return (
    <>
      {/* ユーティリティナビゲーション */}
      <div css={styles.utilityNav}>
        <div css={styles.utilityInner}>
          <Link href="/contact" css={styles.utilityLink}>
            <PhoneOutlined /> 0120-00-0000
          </Link>
          <Link href="/contact" css={styles.utilityLink}>
            <MailOutlined /> お問い合わせ
          </Link>
          <Link href="/en" css={styles.utilityLink}>
            <GlobalOutlined /> English
          </Link>
        </div>
      </div>

      {/* メインヘッダー */}
      <AntHeader css={[styles.header, styles.headerWithMargin]}>
        <div css={styles.headerInner}>
          <div css={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="アクアテック株式会社"
                width={160}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          <StyledMenu
            mode="horizontal"
            selectedKeys={[]}
            items={menuItems.map((item) => {
              if (item.children) {
                return {
                  key: item.key,
                  label: (
                    <Link href={item.link}>
                      {item.label} <DownOutlined style={{ fontSize: 12 }} />
                    </Link>
                  ),
                  children: item.children.map((child) => ({
                    key: child.key,
                    label: <Link href={child.link}>{child.label}</Link>,
                  })),
                };
              }

              return {
                key: item.key,
                label: <Link href={item.link}>{item.label}</Link>,
              };
            })}
          />

          <div css={styles.actions}>
            <Link href="/contact" passHref>
              <Button type="primary" css={styles.contactButton} size="middle">
                お問い合わせ
              </Button>
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <Button
            css={styles.mobileMenuButton}
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            type="text"
          />
        </div>
      </AntHeader>

      {/* モバイルメニュー */}
      <Drawer
        title={
          <div css={styles.logoWrapper}>
            <Image
              src="/images/logo.svg"
              alt="アクアテック株式会社"
              width={140}
              height={35}
              style={{ objectFit: 'contain' }}
            />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={300}
      >
        <StyledDrawerMenu
          mode="inline"
          items={menuItems.map((item) => {
            if (item.children) {
              return {
                key: item.key,
                label: item.label,
                children: item.children.map((child) => ({
                  key: child.key,
                  label: (
                    <Link
                      href={child.link}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ),
                })),
              };
            }

            return {
              key: item.key,
              label: (
                <Link href={item.link} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ),
            };
          })}
        />

        <div css={styles.drawerActions}>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button
              type="primary"
              block
              css={styles.contactButton}
              size="large"
            >
              お問い合わせ
            </Button>
          </Link>

          <Space css={styles.mobileSpace}>
            <Link
              href="/contact"
              css={[styles.utilityLink, styles.drawerContactLink]}
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneOutlined /> 0120-00-0000
            </Link>
            <Link
              href="/en"
              css={[styles.utilityLink, styles.drawerContactLink]}
              onClick={() => setMobileMenuOpen(false)}
            >
              <GlobalOutlined /> English
            </Link>
          </Space>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
