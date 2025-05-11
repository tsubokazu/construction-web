/** @jsxImportSource @emotion/react */
import { Divider } from 'antd';
import styled from '@emotion/styled';
import { DividerProps } from 'antd/lib/divider';
import React from 'react';

/**
 * Emotionの styled API を使ったスタイル付きの Divider コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt Designのコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 * 
 * 使用例:
 * <StyledDivider backgroundColor="rgba(255, 255, 255, 0.1)" margin="32px 0 24px 0" />
 */
interface StyledDividerProps extends Omit<DividerProps, 'style'> {
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
}

// スタイル付きのDividerコンポーネントを作成
const StyledDividerBase = styled(Divider)`
  ${({ style }) => `
    ${style?.backgroundColor ? `background-color: ${style.backgroundColor};` : ''}
    ${style?.margin ? `margin: ${style.margin};` : ''}
    ${style?.padding ? `padding: ${style.padding};` : ''}
    ${style?.width ? `width: ${style.width};` : ''}
  `}
`;

// ラッパーコンポーネントを作成して、カスタムプロパティをstyleオブジェクトに変換
const StyledDivider: React.FC<StyledDividerProps> = ({
  backgroundColor,
  margin,
  padding,
  width,
  ...restProps
}) => {
  // カスタムプロパティをstyleオブジェクトに変換
  const customStyle = {
    backgroundColor,
    margin,
    padding,
    width,
  };
  
  // 値がundefinedのプロパティを削除
  Object.keys(customStyle).forEach(key => {
    if (customStyle[key as keyof typeof customStyle] === undefined) {
      delete customStyle[key as keyof typeof customStyle];
    }
  });
  
  return <StyledDividerBase style={customStyle} {...restProps} />;
};

export default StyledDivider;