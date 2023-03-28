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
  className: PropTypes.string,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  pagination: PropTypes.object,
  centeredSlides: PropTypes.bool,
  autoplay: PropTypes.object,
  loop: PropTypes.bool,
  src: PropTypes.string,
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
  src_1:
    'https://firebasestorage.googleapis.com/v0/b/monstera-ad980.appspot.com/o/swiper01.png?alt=media&token=bc510ab7-abf4-4064-999f-5cafd5291abd',
  src_2:
    'https://firebasestorage.googleapis.com/v0/b/monstera-ad980.appspot.com/o/swiper02.png?alt=media&token=4d70d85b-3473-4011-ba70-a5d89dd556c8',
  src_3:
    'https://firebasestorage.googleapis.com/v0/b/monstera-ad980.appspot.com/o/swiper03.png?alt=media&token=2dcb32d9-85f8-4c92-ad53-a3535d2b59e9',
  src_4:
    'https://firebasestorage.googleapis.com/v0/b/monstera-ad980.appspot.com/o/swiper04.png?alt=media&token=4c252469-27ac-461c-9487-37cea81ba1ea',
};
