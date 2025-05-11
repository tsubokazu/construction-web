/** @jsxImportSource @emotion/react */
import { Steps } from "antd";
import styled from "@emotion/styled";
import { StepsProps } from "antd/lib/steps";

/**
 * Emotionの styled API を使ったスタイル付きの Steps コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのStepsコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledSteps = styled(Steps)<StepsProps>`
  margin-bottom: 32px;

  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: ${(props) => props.theme.customColors.waterBlue};
    border-color: ${(props) => props.theme.customColors.waterBlue};
  }

  .ant-steps-item-process .ant-steps-item-icon {
    background-color: ${(props) => props.theme.customColors.waterBlue};
    border-color: ${(props) => props.theme.customColors.waterBlue};
  }

  .ant-steps-item-finish .ant-steps-item-title::after {
    background-color: ${(props) => props.theme.customColors.waterBlue};
  }
`;

export default StyledSteps;
