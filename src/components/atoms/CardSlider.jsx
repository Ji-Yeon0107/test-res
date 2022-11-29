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

export default function CardSlider({
  slidesPerView,
  spaceBetween,
  src,
  costPriceNone = false,
  CardTag,
  Tag = false,
  btnThree = false,
  productStatus = false,
  btnStatus = false,
  TimeDiscount = false,

  height,
  medium,
  small,
  prodSmall,
  present,
  BestNumTag,
  mbNone,
  LinkSlide,
  noNavigation,
  card,
}) {
  const products = [
    { key: 1, productStatus: '0' },
    { key: 2, productStatus: '0' },
  ];
  return (
    <Center>
      <CustomSwiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination, Navigation]}
        mbNone={mbNone}
        present={present}
      >
        {products?.map(item => (
          <SwiperSlide key={item.key}>
            <Product
              height={height}
              card={card}
              medium={medium}
              small={small}
              prodSmall={prodSmall}
              present={present}
              src={src}
              costPriceNone={costPriceNone}
              Tag={Tag}
              CardTag={CardTag}
              btnThree={item.btnThree}
              productStatus={item.productStatus}
              btnStatus={item.btnStatus}
              TimeDiscount={TimeDiscount}
              BestNumTag={BestNumTag && item.key}
            />
          </SwiperSlide>
        ))}
        {LinkSlide && (
          <SwiperSlide>
            <Link href="#none">
              <a className="more-btn">
                <Div
                  dsp="flex"
                  align="center"
                  justify="centre"
                  direction="column"
                  height="100%"
                >
                  <Img
                    pc={{ width: '4rem', height: '4rem' }}
                    src="/assets/icons/icon-arrow_2.svg"
                    alt="더보기 아이콘"
                  ></Img>
                  <Span as="p" size="2.2rem" color="gray" mgt="2rem">
                    더보기
                  </Span>
                </Div>
              </a>
            </Link>
          </SwiperSlide>
        )}
      </CustomSwiper>
    </Center>
  );
}

const Center = styled.div`
  width: 338px;
  height: 100%;
  margin: 0 auto;
`;
const CustomSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 0;

  .swiper-wrapper {
  }
  .swiper-pagination-progressbar {
    bottom: 0 !important;
    top: auto !important;
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: 283px;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    /* top: 21rem; */
    top: 22px;
    background-color: #fff;
    border: 1px solid #e4e4e4;
    opacity: 1;
    width: 2.8rem !important;
    height: 2.8rem !important;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #000;
    z-index: 1000;
  }
`;
