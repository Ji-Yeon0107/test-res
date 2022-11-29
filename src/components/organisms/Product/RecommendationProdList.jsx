import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import Paging from 'components/atoms/Paging';
import SliderBox02 from 'components/atoms/SliderBox02';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import NoneQnA from 'components/organisms/Product/NoneQnA';

const products = [
  { key: 1, productStatus: '0' },
  { key: 2, productStatus: '0' },
  {
    key: 3,
    productStatus: '0',
  },
  {
    key: 4,
    productStatus: '0',
  },
  { key: 5, productStatus: '0' },
  { key: 6, productStatus: '0' },
  { key: 7, productStatus: '0' },
  { key: 8, productStatus: '0' },
  { key: 9, productStatus: '0' },
];

export default function RecommendationProdList({ QnAList }) {
  return (
    <RecommendationWrap>
      <ProdListWrap>
        <ProdDetailTitle>상품명과 함께 본 상품</ProdDetailTitle>
        <Div mgt="6rem" mobMgt="20px">
          <SliderBox02
            products={products}
            slidesPerView={4}
            spaceBetween={13}
            height="279px"
            // navTop={110}
            small
            prodSmall
            src="/assets/images/thum-sulwhasoo.png"
          />
        </Div>
      </ProdListWrap>

      <ProdListWrap>
        <Div dsp="flex" justify="space-between">
          <ProdDetailTitle>브랜드명 베스트</ProdDetailTitle>
          <Div dsp="flex" mobDsp="none" align="center">
            <Span size="ml" fontWeight="600">
              브랜드관{' '}
            </Span>
            <Img
              pc={{ width: '16px', height: '16px' }}
              src={`/icons/icon-arrow.svg`}
              alt="이동 아이콘 "
            />
          </Div>
        </Div>
        <Div mgt="6rem" mobMgt="20px">
          <SliderBox02
            products={products}
            slidesPerView={4}
            spaceBetween={13}
            height="279px"
            // navTop={110}
            small
            prodSmall
            src="/assets/images/thum-sulwhasoo.png"
          />
        </Div>
      </ProdListWrap>
    </RecommendationWrap>
  );
}

const ProdDetailTitle = styled.p`
  color: #000;
  font-size: 4rem;
  font-family: 'PretendardBold';
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #000;
  }
  ${theme.device.responsive} {
    font-size: 2.6rem;
  }
`;

//review tit
const ReviewTit = styled.div`
  font-size: ${theme.font.size.lg};
  strong {
    font-family: 'PretendardBold';
  }
  span {
    font-size: 1.4rem;
    color: #aaa;
  }
  ${theme.device.responsive} {
    font-size: 1.6rem;
  }
`;
const ReviewTit2 = styled(ReviewTit)`
  font-size: ${theme.font.size.base};
`;
const ReviewTit3 = styled(ReviewTit)`
  font-size: 3rem;
  span {
    margin-left: 5px;
  }
`;

// 상품 list
const RecommendationWrap = styled.div`
  max-width: 864px;
  width: 100%;
  ${theme.device.tablet} {
    max-width: none;
  }
  ${theme.device.responsive} {
    padding-left: 2.5%;
    .swiper-pagination-progressbar {
      display: none;
    }
  }
`;
const ProdListWrap = styled.div`
  margin-top: 80px;
`;
