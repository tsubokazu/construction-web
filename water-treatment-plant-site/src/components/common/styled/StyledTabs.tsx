/** @jsxImportSource @emotion/react */
import { Tabs } from "antd";
import styled from "@emotion/styled";
import { TabsProps } from "antd/lib/tabs";

/**
 * Emotionの styled API を使ったスタイル付きの Tabs コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのTabsコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledTabs = styled(Tabs)<TabsProps>`
  .ant-tabs-nav {
    margin-bottom: 24px;
  }

  .ant-tabs-tab {
    padding: 12px 16px;
  }
`;

export default StyledTabs;
