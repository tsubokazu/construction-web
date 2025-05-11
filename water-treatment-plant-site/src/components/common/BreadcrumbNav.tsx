"use client";

/** @jsxImportSource @emotion/react */
import Link from "next/link";
import StyledBreadcrumb from "./styled/StyledBreadcrumb";

// パンくずリストの項目の型定義
export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  // Antdの形式に変換
  const antdItems = items.map((item) => ({
    title: item.href ? <Link href={item.href}>{item.title}</Link> : item.title,
  }));

  return <StyledBreadcrumb items={antdItems} />;
};

export default BreadcrumbNav;
