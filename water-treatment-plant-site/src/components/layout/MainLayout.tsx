"use client";

/** @jsxImportSource @emotion/react */
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // スタイルをオブジェクトとして定義
  const layoutStyle = {
    maxWidth: '100%',
    overflow: 'hidden',
    minHeight: '100vh'
  } as React.CSSProperties;

  return (
    <Layout style={layoutStyle}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
