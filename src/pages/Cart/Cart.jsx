import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../containers/Header/Header';
import { Footer } from '../../containers/Footer/Footer';
import { Title } from '../../components/Title/Title';
import { Checkbox } from './../../components/Checkbox/Checkbox';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import check from '../../assets/images/check.svg';
import uncheck from '../../assets/images/uncheck.svg';
import cart_Icon01 from '../../assets/images/cart_Icon01.svg';
import cart_Icon02 from '../../assets/images/cart_Icon02.svg';
import cart_Icon03 from '../../assets/images/cart_Icon03.svg';
import card_img from '../../assets/images/card_img.png';
import { cartState } from '../../store/atom';
import { useRecoilState } from 'recoil';
import './cart.css';

const numberSpliter = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const Desc = () => {
  const [cartInfo, setCartInfo] = useRecoilState(cartState);
  return (
    <div className="cart_synopsis">
      <div className="cart_item">
        <div>총 금액</div>
        <div>
          {' '}
          {numberSpliter(
            Object.values(cartInfo).reduce(
              (acc, cur) => acc + cur.stock * cur.replacePrice,
              0,
            ),
          )}
        </div>
      </div>
      <div className="cart_item">
        <div>할인</div>
        <div>-</div>
      </div>
      <div className="cart_item">
        <div>배송비</div>
        <div>3,500원</div>
      </div>
      <div className="cart_cupon">
        <Input
          font-size={16}
          type={'text'}
          id={'textInput'}
          label={'쿠폰'}
          islabel={false}
          placeholder={'쿠폰코드를 입력해주세요'}
          width={230}
          option={false}
          border-radius={8}
        />
        <button className="cupon_button">쿠폰적용</button>
      </div>
      <div className="buy_info">
        <div className="bar"></div>
        <div className="buy_text_box">
          <span>쿠폰/적립금은 주문서에서 사용가능합니다</span>
          <Link label="계속 쇼핑하기" path="/" option={3} />
        </div>
      </div>
      <button className="buy_button">구매하기</button>
    </div>
  );
};

const Detail = ({ n, productPrice, productName }) => {
  const [cartInfo, setCartInfo] = useRecoilState(cartState);
  return (
    <div className="detail-container">
      <div className="detail-desc">
        <Checkbox label=""></Checkbox>
        <img src={card_img} className="product_img" alt="제품 썸네일" />
        <span>{productName}</span>
      </div>
      <div className="detail-counter">
        <button
          className="counter-btn"
          onClick={() => {
            if (n < 2) {
              const copiedInfo = { ...cartInfo };
              delete copiedInfo[productName];
              setCartInfo({ ...copiedInfo });
            } else
              setCartInfo({
                ...cartInfo,
                [productName]: {
                  productTitle: productName,
                  stock: n - 1,
                  replacePrice: productPrice,
                },
              });
          }}
        >
          -
        </button>
        <span className="current-number">{n}</span>

        <button
          className="counter-btn"
          onClick={() =>
            setCartInfo({
              ...cartInfo,
              [productName]: {
                productTitle: productName,
                stock: n + 1,
                replacePrice: productPrice,
              },
            })
          }
        >
          +
        </button>
      </div>
      <span>{numberSpliter(productPrice)}원</span>
      <span>{numberSpliter(n * productPrice)}원</span>
    </div>
  );
};

export const Cart = () => {
  const [cartInfo, setCartInfo] = useRecoilState(cartState);

  return (
    <div>
      <h2 className="cart_title">식집사의 장바구니</h2>
      <div className="cart_container">
        <div className="cart_detail">
          <div className="cart_my_order">
            <h3 className="cart_my_order_title">나의 주문</h3>
            <span>
              {'(' +
                Object.values(cartInfo).reduce(
                  (acc, cur) => acc + cur.stock,
                  0,
                ) +
                ')'}
            </span>
          </div>
          {Object.values(cartInfo).map(
            ({ productTitle, replacePrice, src, stock }, index) => (
              <Detail
                productName={productTitle}
                productPrice={replacePrice}
                n={stock}
                src={src}
                key={index}
              />
            ),
          )}
          <div className="price_info">
            <span className="total_Price_info">
              상품금액 + 검수비 + 수수료 + 배송비
            </span>
            <span className="total_Price">
              총
              {numberSpliter(
                Object.values(cartInfo).reduce(
                  (acc, cur) => acc + cur.stock * cur.replacePrice,
                  3500,
                ),
              )}
              원
            </span>
          </div>
          <section className="delivery_information">
            <div className="delivery_box">
              <h4>배송 안내</h4>
              <div className="information_box">
                <img src={cart_Icon01} alt="배송안내 아이콘" />
                <p className="information_str">
                  10시 이전 주문시 다음날 도착보장
                </p>
                <p className="information_dsc">
                  주말과 공휴일에 따라 다를수 있음을 알려드립니다
                </p>
              </div>
            </div>
            <div className="delivery_box">
              <h4>퀵서비스 안내</h4>
              <div className="information_box">
                <img src={cart_Icon02} alt="배송안내 아이콘" />
                <p className="information_str">당일배송 서비스 가능</p>
                <p className="information_dsc">
                  기념일 등 특별한 날에 빠르게 받아 보실 수 있습니다
                </p>
              </div>
            </div>
            <div className="delivery_box">
              <h4>반품 안내</h4>
              <div className="information_box">
                <img src={cart_Icon03} alt="배송안내 아이콘" />
                <p className="information_dsc">
                  30일 이내로 반품 신청해주셔야 반품 처리 진행 되오니 이점
                  유의해 주시기 바랍니다
                </p>
              </div>
            </div>
          </section>
        </div>
        <Desc />
      </div>
    </div>
  );
};
