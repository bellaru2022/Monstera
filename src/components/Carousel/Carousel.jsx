import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Carousel = ({
  className,
  slidesPerView,
  spaceBetween,
  centeredSlides,
  autoplay,
  pagination,
  loop,
  src_1,
  src_2,
  src_3,
  src_4,
  alt,
  context,
}) => {
  return (
    <>
      <Swiper
        className={className}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        pagination={pagination}
        loop={loop}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        speed={1000}
      >
        <SwiperSlide>
          {context}
          <img src={src_1} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src_2} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src_3} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src_4} alt={alt} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string.isRequired,
  slidesPerView: PropTypes.number.isRequired,
  spaceBetween: PropTypes.number,
  pagination: PropTypes.object,
  centeredSlides: PropTypes.bool,
  autoplay: PropTypes.object,
  loop: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

Carousel.defaultProps = {
  className: 'mainSwiper',
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  loop: true,
  src_1: 'src/assets/images/swiper01.png',
  src_2: 'src/assets/images/swiper02.png',
  src_3: 'src/assets/images/swiper03.png',
  src_4: 'src/assets/images/swiper04.png',
};
