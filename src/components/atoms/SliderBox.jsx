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

export default function SliderBox({
  slidesPerView,
  spaceBetween,
  src,
  costPriceNone = false,
  Tag = false,
  btnThree = false,
  productStatus = false,
  btnStatus = false,
  TimeDiscount = false,
  height,
  medium,
  small,
  prodSmall,
  membership,
  ssop,
  present,
  BestNumTag,
  mbNone,
  won,
  card,
  mobHeight,
  mobWrapWidth,
  mobMgb,
  mobMgt,
  mobMgr,
  mobWidth,
}) {
  const products = [
    { key: 1, productStatus: '2' },
    { key: 2, productStatus: '1' },
    { key: 3, productStatus: false, btnThree: true },
    { key: 4, productStatus: false, btnStatus: true },
    { key: 5, productStatus: false },
    { key: 6, productStatus: false },
    { key: 7, productStatus: false },
    { key: 8, productStatus: false },
    { key: 9, productStatus: false },
  ];
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
        {products?.map(item => (
          <SwiperSlide key={item.key}>
            <Product
              height={height}
              medium={medium}
              small={small}
              prodSmall={prodSmall}
              membership={membership}
              ssop={ssop}
              present={present}
              src={src}
              costPriceNone={costPriceNone}
              Tag={Tag}
              btnThree={item.btnThree}
              productStatus={item.productStatus}
              btnStatus={item.btnStatus}
              TimeDiscount={TimeDiscount}
              BestNumTag={BestNumTag && item.key}
              won={won}
              card={card}
              mobHeight={mobHeight}
              mobWrapWidth={mobWrapWidth}
              mobMgb={mobMgb}
              mobMgt={mobMgt}
              mobMgr={mobMgr}
              mobWidth={mobWidth}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Center>
  );
}

const Center = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  ${theme.device.responsive} {
    padding-left: 2.5%;
  }
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
    /* ${theme.device.responsive} {
      padding: 0 2.5%;
    } */
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
