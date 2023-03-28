import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../components/Logo/Logo';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { Button } from '../../components/Button/Button';
import Search_Button from '../../assets/images/Search_Button.svg';
import cart_icon from '../../assets/images/cart_icon.svg';
import { Link as ReactRouterLink } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <div>
      <div className="Notification">
        <p>식집사님들 지금 가입하시고 반려식물 데려가세요~</p>
      </div>
      <div className="search_form_background">
        <div className="search_form">
          <h1 className="Logo">
            <Logo alt="monstera" />
          </h1>
          <div className="search_bar">
            <Input
              type="search"
              id="searchInput"
              label="searchForm"
              islabel={false}
              placeholder="필요한 상품을 입력해주세요"
              width={400}
              height={48}
            />
            <button className="search_button">
              <img src={Search_Button} alt="검색버튼" />
            </button>
          </div>
          <div className="menu_bar">
            <Link label="로그인" path="/login" option={3} />
            <span className="gap">|</span>
            <Link label="회원가입" path="/register" option={3} />
            <span className="gap">|</span>
            <Link label="식물병원" path="/diagnosis" option={3} />
            <span className="gap">|</span>
            <ReactRouterLink to={'/cart'}>
              <img src={cart_icon} className="cart_icon" alt="장바구니" />
            </ReactRouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};
