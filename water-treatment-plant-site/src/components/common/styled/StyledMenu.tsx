/** @jsxImportSource @emotion/react */
import { Menu } from "antd";
import styled from "@emotion/styled";
import { MenuProps } from "antd/lib/menu";

/**
 * Emotionの styled API を使ったスタイル付きの Menu コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのMenuコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledMenu = styled(Menu)<MenuProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  border: none;

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: 15px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);

    &:hover {
      color: ${(props) => props.theme.customColors.waterBlue};
    }

    a {
      color: inherit;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default StyledMenu;
