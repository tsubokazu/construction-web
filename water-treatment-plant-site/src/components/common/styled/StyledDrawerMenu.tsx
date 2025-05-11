/** @jsxImportSource @emotion/react */
import { Menu } from "antd";
import styled from "@emotion/styled";
import { MenuProps } from "antd/lib/menu";

/**
 * Emotionの styled API を使ったスタイル付きの Menu コンポーネント（Drawer用）
 * このコンポーネントはcssプロパティを持たないAnt DesignのMenuコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledDrawerMenu = styled(Menu)<MenuProps>`
  .ant-menu-item,
  .ant-menu-submenu {
    font-size: 16px;
    height: auto;
    line-height: 1.5;
    margin: 8px 0;
  }
`;

export default StyledDrawerMenu;
