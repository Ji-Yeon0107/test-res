import styled from 'styled-components';
import Product from './Product';
import theme from 'styles/theme';
/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/css';
// import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProductList({ title, txt, style }) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Center>
      <ProductHeader>
        <h2>{title}</h2>
        <h3>{txt}</h3>
      </ProductHeader>
      <CustomSwiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products?.map(item => (
          <SwiperSlide key={item}>
            <Product medium />
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
`;
const ProductHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  & h2 {
    font-size: ${theme.font.size.title.base};
    font-weight: bold;
  }
  & h3 {
    font-size: ${theme.font.size.lg};
    color: ${theme.color.gray.gray88};
    margin-top: 2rem;
  }
`;
const CustomSwiper = styled(Swiper)`
  position: relative;
  /* height: 628px; */
  padding-bottom: 6.2rem;
  margin-bottom: 6rem;

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
    left: 0;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 21rem;
  }
`;
