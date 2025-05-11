/** @jsxImportSource @emotion/react */
import { Timeline } from "antd";
import styled from "@emotion/styled";
import { TimelineProps } from "antd/lib/timeline";

/**
 * Emotionの styled API を使ったスタイル付きの Timeline コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのTimelineコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledTimeline = styled(Timeline)<TimelineProps>`
  margin-top: 32px;

  .ant-timeline-item-tail {
    border-left-color: ${(props) => props.theme.customColors.waterBlue};
    border-left-width: 2px;
  }

  .ant-timeline-item-head {
    background-color: ${(props) => props.theme.customColors.waterBlue};
  }

  .year {
    display: inline-block;
    font-weight: bold;
    color: ${(props) => props.theme.customColors.waterDarkBlue};
    margin-right: 12px;
    font-size: 18px;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
  }

  .description {
    margin-top: 4px;
    color: ${(props) => props.theme.customColors.textSecondary};
  }
`;

export default StyledTimeline;
