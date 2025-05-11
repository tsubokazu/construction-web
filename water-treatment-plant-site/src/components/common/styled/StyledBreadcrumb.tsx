/** @jsxImportSource @emotion/react */
import { Breadcrumb } from "antd";
import styled from "@emotion/styled";
import { BreadcrumbProps } from "antd/lib/breadcrumb";

/**
 * Emotionの styled API を使ったスタイル付きの Breadcrumb コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのBreadcrumbコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledBreadcrumb = styled(Breadcrumb)<BreadcrumbProps>`
  margin-bottom: 16px;

  .ant-breadcrumb-link a {
    color: ${(props) => props.theme.customColors.waterBlue};
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.customColors.waterDarkBlue};
    }
  }
`;

export default StyledBreadcrumb;
