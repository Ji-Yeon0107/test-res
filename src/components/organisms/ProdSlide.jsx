import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Controller } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Product from 'components/search-result-item/Merchandise';

export default function ProdSlide({ addImage, noDiscount }) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SwiperContainer>
      <CustomSwiper
        slidesPerView={4}
        loop={true}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products?.map(item => (
          <SwiperSlide
            key={item}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Product noDiscount={noDiscount} w="200px" height="300px" />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SwiperContainer>
  );
}
const SwiperContainer = styled.div`
  position: relative;
  height: 622px;
  transform: translateY(-100px);
  margin-bottom: 20px;
`;
const Section2Img = styled.img`
  width: 310px;
  height: 420px;
  background-color: #f5f5f5;
  object-fit: contain;
  border-radius: 25px;
`;
const Section2TextBox = styled.div`
  margin-top: 20px;

  div:nth-of-type(1) {
    margin-bottom: 12px;
    font-size: 15px;
    color: grey;
  }
  div:nth-of-type(2) {
    margin-bottom: 16px;
    font-size: 20px;
    color: #000;
  }
  div:nth-of-type(3) {
    margin-top: 20px;
    font-size: 20px;
    display: flex;
    span:nth-of-type(1) {
      color: #aaa;
      text-decoration: line-through;
    }
    span:nth-of-type(2) {
      color: #e1251b;
      margin-left: 4px;
    }
  }
  div:nth-of-type(4) {
    font-size: 24px;
  }
`;

const CustomSwiper = styled(Swiper)`
  position: relative;
  height: 780px;

  .swiper-wrapper {
  }
  .swiper-pagination-progressbar {
    transform: translateY(105px);
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
`;

const AdditionalImage = styled.img`
  position: absolute;
  width: 80px;
  top: -13px;
  left: 12px;
`;
