/** @jsxImportSource @emotion/react */
import { Carousel } from 'antd';
import styled from '@emotion/styled';
import { CarouselProps } from 'antd/lib/carousel';

/**
 * Emotionの styled API を使ったスタイル付きの Carousel コンポーネント
 * このコンポーネントはcssプロパティを持たないAnt DesignのCarouselコンポーネントに
 * Emotionのスタイルを適用するためのラッパーです
 */
const StyledCarousel = styled(Carousel)<CarouselProps>`
  .slick-dots {
    bottom: 24px;
    
    li button {
      background: rgba(255, 255, 255, 0.6);
      
      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
    
    li.slick-active button {
      background: white;
    }
  }
`;

export default StyledCarousel;
