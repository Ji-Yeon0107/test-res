import styled, { css } from 'styled-components';
import Product from 'components/atoms/Product';
import theme from 'styles/theme';
/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/css';
// import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import Div from './Div';
import Img from './Img';
import Span from './Span';

// import { products } from './utilty';

export default function SliderBox02({
  slidesPerView,
  spaceBetween,
  src,
  costPriceNone,
  btnThree,
  productStatus,
  btnStatus,
  TimeDiscount,
  height,
  medium,
  small,
  prodSmall,
  present,
  BestNumTag,
  mbNone,
  products,
  noNavigation,
  DealerStore,
  ssop,
  membership,
  mobHeight,
  mobWrapWidth,
  mobMgb,
  mobMgt,
  mobMgr,
  mobWidth,
}) {
  return (
    <Center>
      <CustomSwiper
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination, Navigation]}
        mbNone={mbNone}
        present={present}
        breakpoints={{
          320: {
            slidesPerView: 2.46,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView,
            spaceBetween,
          },
        }}
      >
        {products?.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Product
                height={height}
                medium={medium}
                small={small}
                prodSmall={prodSmall}
                present={present}
                src={src ? src : item.src}
                costPriceNone={costPriceNone}
                tag={item.tag}
                btnThree={item.btnThree}
                productStatus={item.productStatus}
                btnStatus={item.btnStatus}
                TimeDiscount={TimeDiscount}
                BestNumTag={BestNumTag && item.key}
                DealerStore={DealerStore}
                ssop={ssop}
                membership={membership}
                mobHeight={mobHeight}
                mobWrapWidth={mobWrapWidth}
                mobMgb={mobMgb}
                mobMgr={mobMgr}
                mobWidth={mobWidth}
              />
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
    </Center>
  );
}

const Center = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;
const CustomSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 6.2rem;
  margin-bottom: 6rem;
  ${({ mbNone }) => {
    if (mbNone) {
      return css`
        margin-bottom: 0;
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        padding-bottom: 3.7rem;
      `;
    }
  }}
  ${theme.device.responsive} {
    padding-bottom: 3rem;
    margin-bottom: 4rem;
  }

  .swiper-wrapper {
  }
  .swiper-pagination-progressbar {
    bottom: 0 !important;
    top: auto !important;
    ${theme.device.responsive} {
      width: 97.5%;
    }
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: 0;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    /* top: 21rem; */
    top: 30%;
    ${theme.device.responsive} {
      display: none;
    }
  }
`;
