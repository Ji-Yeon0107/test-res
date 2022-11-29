import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Controller } from 'swiper';

import theme from 'styles/theme';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Product from 'components/search-result-item/Merchandise';

export default function Slide({ addImage, imageLabel, products = [] }) {
  return (
    <SwiperContainer>
      <CustomSwiper
        loop={true}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2.46,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products?.map(product => (
          <SwiperSlide
            key={product.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Product imageLabel={imageLabel} product={product} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const CustomSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 70px;
  ${theme.device.responsive} {
    padding-bottom: 20px;
  }

  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
  .swiper-pagination-progressbar {
    width: 97.5%;
    bottom: 0 !important;
    top: auto !important;
  }

  :hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 0.2;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    transform: translatey(-120px);
    opacity: 0;

    :hover {
      opacity: 0.8;
    }
    ${theme.device.responsive} {
      display: none;
    }
  }
`;

const AdditionalImage = styled.img`
  position: absolute;
  width: 80px;
  top: -13px;
  left: 12px;
`;
