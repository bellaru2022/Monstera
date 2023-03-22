// 기본 import
import React from 'react';
import PropTypes from 'prop-types';

// 공동 컴포넌트 import
import { Title } from '../../components/Title/Title';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { PaginationC } from '../../components/Pagination/Pagination';
import { Button } from '../../components/Button/Button';

// css import
import './plantList.css';

export const PlantList = ({}) => {
  return (
    <div className="plantList">
      {/* 제목 */}
      <Title className="plantTitle" type={2} label="반려식물"></Title>
      <div className="plantCategory">
        {/* 카테고리 필터 */}
        <Title
          className="categoryFilter"
          type={3}
          label="카테고리 필터"
        ></Title>
        <Button option={1} label="관역식물" width={100}></Button>
        <Button option={2} label="허브류" width={90}></Button>
        <Button option={2} label="공기정확식물" width={120}></Button>
        <Button option={2} label="다육식물" width={100}></Button>
        <Button option={2} label="야생화" width={90}></Button>
        <Button option={2} label="기타" width={80}></Button>
      </div>

      {/* 상품 리스트 */}
      <div className="cardContainer">
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <Card
          containerWidth="276px"
          containerHeight="489px"
          componentGap="24px"
          src="src/assets/images/card_image.png"
          alt="test"
          imageWidth="276px"
          imageHeight="240px"
          contentWidth="276px"
          contentHeight="225px"
          categoryTitle="관엽식물"
          productTitle="몬스테라"
          score={4.6}
          reviewsNumber={135}
          newItem="신상품"
          prevPrice={200000}
          currentPrice={80000}
        />{' '}
        <div className="page">
          <PaginationC></PaginationC>
        </div>
      </div>
    </div>
  );
};
