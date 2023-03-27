import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import './reset.css';

import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export const Card = (props) => {
  const currentPrice = props.currentPrice;
  const replacePrice = currentPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const prevPrice = props.prevPrice;
  const replacePrevPrice = prevPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className="card__container"
      style={{
        width: props.containerWidth,
        height: props.containerHeight,
        gap: props.componentGap,
      }}
      key={props.id}
    >
      <img
        className="product__image"
        src={props.src}
        alt={props.alt}
        width={props.imageWidth}
        height={props.imageHeight}
      />
      <div
        className="content"
        style={{ width: props.contentWidth, height: props.contentHeight }}
      >
        <p className="category__title">{props.categoryTitle}</p>
        <h3 className="product__title">{props.productTitle}</h3>
        <div className="review">
          <span>{props.score}/5</span>
          <span> | </span>
          <span>{props.reviewsNumber}</span>
          <span className="reviews"> Reviews</span>
        </div>
        <span className="newItem">{props.newItem}</span>
        <div className="price">
          <span className="prevPrice">
            <del>{replacePrevPrice}원</del> /
          </span>
          <span className="currentPrice"> {replacePrice}원</span>
        </div>
        <Button option={1} label={'장바구니 담기'} width={130}></Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
  componentGap: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  contentWidth: PropTypes.string,
  contentHeight: PropTypes.string,
  categoryTitle: PropTypes.string,
  productTitle: PropTypes.string,
  score: PropTypes.number,
  reviewsNumber: PropTypes.number,
  newItem: PropTypes.string,
  prevPrice: PropTypes.number,
  currentPrice: PropTypes.number,
};
