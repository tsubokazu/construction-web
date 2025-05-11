/** @jsxImportSource @emotion/react */
import { List } from "antd";
import styled from "@emotion/styled";
import { ListProps } from "antd/lib/list";

/**
 * 型安全なリストコンポーネントを作成するための関数
 * ジェネリック型パラメータTを指定することで、型安全なListコンポーネントを作成できます
 *
 * @template T リストアイテムの型
 */
export function createStyledList<T>() {
  // ListPropsにジェネリック型パラメータTを指定
  return styled(List)<ListProps<T>>`
    margin-top: 16px;

    .ant-list-item {
      padding: 8px 0;
    }

    .anticon {
      color: ${(props) => props.theme.customColors.ecoGreen};
      margin-right: 8px;
    }
  `;
}

// デフォルトのStyledListコンポーネント（型パラメータはstring）
const StyledList = createStyledList<string>();

export default StyledList;
