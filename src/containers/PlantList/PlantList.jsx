// 기본 import
import React from 'react';
import PropTypes from 'prop-types';

// 공동 컴포넌트 import
import { Title } from '../../components/Title/Title';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { PaginationC } from '../../components/Pagination/Pagination';

// css import
import './plantList.css';

export const PlantList = ({}) => {
  return (
    <div>
      {/* 제목 */}
      <Title type={2} label="반려식물"></Title>
      {/* 카테고리 필터 */}
      <Title type={3} label="카테고리 필터"></Title>
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

    // <form>
    //   <fieldset className="fieldset_login_form">
    //     <legend className="a11y-hidden">로그인</legend>
    //     <Input
    //       type="text"
    //       id="idInput"
    //       option={true}
    //       label="아이디"
    //       width={372}
    //       height={40}
    //       islabel={false}
    //     />
    //     <Input
    //       type="password"
    //       id="passwordInput"
    //       label="비밀번호"
    //       placeholder="비밀번호를 입력하세요"
    //       width={372}
    //       height={40}
    //       islabel={false}
    //     />
    //     <div className="link_container">
    //       <Link to="/findId" label="아이디찾기" />
    //       <span className="divider">/</span>
    //       <Link to="/findPw" label="비밀번호찾기" />
    //     </div>
    //     <Button option={1} label="로그인" width={400} />
    //     <Link path="/register" option={2} label="회원가입" width={400} />
    //   </fieldset>
    // </form>
  );
};
