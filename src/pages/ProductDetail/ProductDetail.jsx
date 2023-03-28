import React from 'react';
import PropTypes from 'prop-types';
import { PriceInfo } from './../../containers/PriceInfo/PriceInfo';
import { ProductGuide } from '../../containers/ProductGuide/ProductGuide';

export const ProductDetail = () => {
  return (
    <div className="detail_container">
      <PriceInfo />
      <ProductGuide />
      {/* <ProductInfo />
      <InspectionGuide />
      <PurchaseGuide /> */}
    </div>
  );
};
