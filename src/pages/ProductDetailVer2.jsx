import { useState, useEffect, useRef } from 'react';

import GlobalStyle from 'styles/GlobalStyle';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Paging from 'components/atoms/Paging';
import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';

import SliderBox from 'components/atoms/SliderBox';
import SliderBox02 from 'components/atoms/SliderBox02';
import SelectBox from 'components/atoms/SelectBox';
import SelectImgBox from 'components/atoms/SelectImgBox';
import * as Table from 'components/organisms/Table';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import CurrentPageList from 'components/atoms/CurrentPageList';
import MoTitleBox from 'components/atoms/MoTitleBox';

//제품 상세 필요 컴포넌트
import NoneQnA from 'components/organisms/Product/NoneQnA';
import PcSelectedProd from 'components/organisms/Product/PcSelectedProd';
import SelectedBtnBox from 'components/organisms/Product/SelectedBtnBox';
import UseInfo from 'components/organisms/Product/UseInfo';
import ProdReviewBox from 'components/organisms/Product/ProdReviewBox';
import QnAListBox from 'components/organisms/Product/QnAListBox';
import RecommendationProdList from 'components/organisms/Product/RecommendationProdList';

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

const selectArray = [
  { key: '0', value: '레드장미' },
  { key: '1', value: '자도르' },
  { key: '2', value: '라일락' },
];

const selectImgArray = [
  {
    value: '01',
    img: '/assets/images/product08.png',
    brand: 'Brand',
    title: '[옵션01] Product Name',
    price1: '$208',
    price2: '20%',
    price3: '$208',
    price4: '(257,504원)',
  },
  {
    value: '02',
    img: '/assets/images/product08.png',
    brand: 'Brand',
    title: '[옵션02] Product Name',
    price1: '$208',
    price2: '20%',
    price3: '$208',
    price4: '(257,504원)',
  },
  {
    value: '03',
    img: '/assets/images/product08.png',
    brand: 'Brand',
    title: '[옵션03] Product Name',
    price1: '$208',
    price2: '20%',
    price3: '$208',
    price4: '(257,504원)',
  },
  {
    value: '04',
    img: '/assets/images/product08.png',
    brand: 'Brand',
    title: '[옵션04] Product Name',
    price1: '$208',
    price2: '20%',
    price3: '$208',
    price4: '(257,504원)',
  },
  {
    value: '05',
    img: '/assets/images/product08.png',
    brand: 'Brand',
    title: '[옵션05] Product Name',
    price1: '$208',
    price2: '20%',
    price3: '$208',
    price4: '(257,504원)',
  },
];

//ProductDetailG = 배송상품상세 default

export default function ProductDetailView() {
  //ProductDetailA~ 페이지 내용들 아래 변수들 true false로 제어하여 볼 수 있습니다.

  //썸네일
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //제품 상세 - 탭 메뉴
  const [tabIndex, setTabIndex] = useState(0);

  // 사은품 유의사항 popup
  const [freeGiftInfo, SetFreeGiftInfo] = useState(false);
  //품절 관련 내용 show hide
  const [soldOut, setSoldOut] = useState(false);
  //주류 문구 show hide
  const [alcohol, setAlcohol] = useState(false);
  //멤버십 내용 show hide
  const [member, setMember] = useState(false);
  //사은품 내용 show hide
  const [freeGift, setFreeGift] = useState(true);
  //하단 Q&A 내용 있을 때 없을 때
  const [QnAList, setQnAList] = useState(true);
  //default : single = true , 단품일때 (single = true), 옵션선택일때(single = false)
  const [single, setSingle] = useState(true);

  //배송상품 내용 show hide
  const [delivery, setDelivery] = useState(false);
  //배송상품 - 품절 관련 내용 show hide (배송상품 품절일땐 -> soldOut, deliverySoldOut 둘다 true)
  const [deliverySoldOut, setDeliverySoldOut] = useState(false);

  //묶음상품 내용 show hide
  const [bundledProd, setBundledProd] = useState(false);

  //mobile - 제품 상세 show hide
  const [ingredientOpen, setIngredientOpen] = useState(true);

  // 사은품 유의사항 popup
  const FreeGiftPopupWrap = props => {
    return (
      <div className={props.className}>
        <Div
          dsp="flex"
          mobDsp="none"
          justify="space-between"
          align="center"
          size="1.4rem"
          mgb="20px"
        >
          <Span as="strong" fontWeight="600">
            사은품 유의사항
          </Span>{' '}
          <img
            onClick={() => {
              SetFreeGiftInfo(false);
            }}
            className="closed"
            src="icons/icon-closed-btn.svg"
            alt="닫기"
            style={{ cursor: 'pointer' }}
          />
        </Div>
        <ul>
          <li>
            사은품 이미지는 참고용으로, 실제 상품과 다소 차이가 날 수 있습니다.​
          </li>
          <li>사은품 지급 기준 금액은 상품/회원/쿠폰할인 후 금액입니다.​</li>
          <li>사은품은 조기 품절 및 변경될 수 있습니다.​</li>
          <li>
            고객님께 증정되는 사은품은 주문완료 후 주문내역에서 확인할 수
            있으며, 사은품 조기 소진에 따라 증정되지 않을 수도 있습니다.​
          </li>
          <li>
            사은품은 구입하신 상품과 함께 인도장에서 인도받을 수 있습니다.​
          </li>
        </ul>
      </div>
    );
  };
  const FreeGiftPopup = styled(FreeGiftPopupWrap)`
    background-color: #fff;
    width: 410px;
    min-height: 225px;

    position: absolute;
    right: 0;
    top: 52px;

    border: 1px solid #000;
    padding: 15px;
    z-index: 10000000;
    justify-content: space-between;
    img.closed {
      width: 1.6rem;
      height: 1.6rem;
    }
    li {
      position: relative;
      margin-top: 5px;
      margin-left: 10px;
      color: #666;
      font-size: 14px;
    }
    li:after {
      content: '-';
      position: absolute;
      top: 0;
      left: -10px;
    }
    ${theme.device.responsive} {
      background-color: #f5f5f5;
      position: static;
      width: 100%;
      border: 0;
      min-height: auto;
      margin-top: 8px;
      margin-bottom: 60px;
      li {
        font-size: 1.3rem;
      }
    }
  `;

  // sticky 주문창
  const StickyOrderWrap = props => {
    return (
      <div className={props.className}>
        <Div
          width="400px"
          height={soldOut ? '469px' : bundledProd ? '779px' : '740px'}
          border
          borderColor="#ccc"
          position="sticky"
          top="138px"
          padding="40px"
          dsp="flex"
          direction="column"
          justify="space-between"
        >
          {/* 상단 */}
          <div>
            <Div as="p" borderBottom borderColor="#ccc" pdb="20px">
              <Span size="xl2" fontWeight="700">
                시슬리 올데이 올이어
              </Span>
            </Div>

            {!soldOut && single && (
              <Div dsp="flex" justify="space-between" mgt="20px">
                <Span>수량</Span>
                <Div dsp="flex" align="center">
                  <Div
                    as="button"
                    dsp="inline-block"
                    width="24px"
                    height="24px"
                  >
                    <img src="icons/icon-minus-btn.svg" alt="수량 빼기 버튼" />
                  </Div>
                  <Span as="strong" padding="0 32px" size="1.8rem">
                    1
                  </Span>
                  <Div
                    as="button"
                    dsp="inline-block"
                    width="24px"
                    height="24px"
                  >
                    <img src="icons/icon-plus-btn.svg" alt="수량 더하기 버튼" />
                  </Div>
                </Div>
              </Div>
            )}
            {delivery && !deliverySoldOut && !single && (
              <>
                <Div mgt="20px">
                  <SelectBox
                    optionData={selectArray}
                    currentTxt="선택하세요"
                    boxWidth="100%"
                    labelColor="#959595"
                  />
                </Div>
                <Div mgt="20px">
                  <SelectBox
                    optionData={selectArray}
                    currentTxt="선택하세요"
                    boxWidth="100%"
                    labelColor="#959595"
                    labelBg="#fafafa"
                  />
                </Div>
              </>
            )}
            {!soldOut && bundledProd && !single && (
              <>
                <Div mgt="2rem">
                  <SelectImgBox
                    optionData={selectImgArray}
                    currentTxt="묶음상품을 선택하세요"
                    boxWidth="100%"
                    labelColor="#959595"
                  />
                </Div>
                <Div mgt="2rem" mgb="2rem">
                  <SelectBox
                    optionData={selectArray}
                    currentTxt="옵션을 선택하세요."
                    boxWidth="100%"
                    labelColor="#959595"
                    labelBg
                  />
                </Div>
                <SelectOptionBox>
                  <Div dsp="flex" justify="space-between">
                    <Span size="1.6rem">%옵션1 선택값% / %옵션2 선택값%</Span>
                    <span className="icon">
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/assets/icons/icon-close-btn.svg`}
                        alt="closed btn"
                      />
                    </span>
                  </Div>
                  <Div
                    dsp="flex"
                    justify="space-between"
                    align="center"
                    mgt="2.7rem"
                  >
                    <Div
                      width="11.2rem"
                      dsp="flex"
                      justify="space-between"
                      align="center"
                    >
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/icons/icon-minus-btn.svg`}
                        alt="수량 빼기 버튼"
                      />

                      <Span as="strong" padding="0 20px" size="1.8rem">
                        1
                      </Span>
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/icons/icon-plus-btn.svg`}
                        alt="수량 더하기 버튼"
                      />
                    </Div>
                    <Span fontWeight="600" size="1.4rem">
                      248,034원
                    </Span>
                  </Div>
                </SelectOptionBox>
                <SelectOptionBox style={{ borderTop: '0' }}>
                  <Div dsp="flex" justify="space-between">
                    <Span size="1.6rem">Large / 카키색</Span>
                    <span className="icon">
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/assets/icons/icon-close-btn.svg`}
                        alt="closed btn"
                      />
                    </span>
                  </Div>
                  <Div
                    dsp="flex"
                    justify="space-between"
                    align="center"
                    mgt="2.7rem"
                  >
                    <Div
                      width="11.2rem"
                      dsp="flex"
                      justify="space-between"
                      align="center"
                    >
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/icons/icon-minus-btn.svg`}
                        alt="수량 빼기 버튼"
                      />

                      <Span as="strong" padding="0 20px" size="1.8rem">
                        1
                      </Span>
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        src={`/icons/icon-plus-btn.svg`}
                        alt="수량 더하기 버튼"
                      />
                    </Div>
                    <Span fontWeight="600" size="1.4rem">
                      248,034원
                    </Span>
                  </Div>
                </SelectOptionBox>
              </>
            )}
          </div>
          {/* 품절 안내 */}
          {soldOut && (
            <Div dsp="flex" direction="column" align="center" mgt="3rem">
              <Span as="p" size="xl2" dsp="block" fontWeight="600">
                죄송합니다.
              </Span>
              <Span as="p" size="xl2" dsp="block" fontWeight="600">
                상품이 <Span color="red">일시품절</Span> 되었습니다.
              </Span>
            </Div>
          )}
          {/* 하단 */}
          <div>
            {!soldOut && !delivery && (
              <Div
                borderBottom
                borderColor="#ccc"
                dsp="flex"
                justify="space-between"
                pdb="20px"
              >
                <Span size="ml" style={{ alignSelf: 'end' }}>
                  총 금액
                </Span>
                <Span fontWeight="700" size="2.4rem">
                  <Span>$201</Span>
                  (248,034원)
                  <Span dsp="inline-block" mgl="10px" color="red" size="base">
                    36%
                  </Span>
                </Span>
              </Div>
            )}
            {delivery && !deliverySoldOut && (
              <Div
                borderBottom
                borderColor="#ccc"
                dsp="flex"
                justify="space-between"
                pdb="20px"
              >
                <Span size="ml" style={{ alignSelf: 'end' }}>
                  총 금액
                </Span>
                <Span fontWeight="600" size="2.4rem">
                  <Span>$201</Span>
                  (248,034원)
                  <Span dsp="inline-block" mgl="10px" color="red" size="base">
                    36%
                  </Span>
                </Span>
              </Div>
            )}
            {/* 주류 안내 */}
            {alcohol && (
              <AlcoholInfo>
                <Img
                  pc={{ width: '22px', height: '22px' }}
                  src={`/assets/icons/icon-info-r.svg`}
                  alt="i 아이콘"
                />
                <Div width="calc(100% - 32px)">
                  <Span size="14px" color="red">
                    실 결제금액은 탑승일의 기내 비치 책자 가격 기준으로
                    적용되며, 예약월과 탑승월이 상이할 경우 주류 가격이 변동될
                    수 있습니다.
                  </Span>
                </Div>
              </AlcoholInfo>
            )}
            {/* 버튼 */}
            {!soldOut && !delivery && (
              <>
                <Div dsp="flex" justify="space-between" mgb="12px" mgt="40px">
                  <WhiteBtn2 size="1.6rem">선물하기</WhiteBtn2>
                  <WhiteBtn2 size="1.6rem">장바구니</WhiteBtn2>
                </Div>
                <BlackBtn2 size="1.6rem">구매하기</BlackBtn2>
              </>
            )}
            {soldOut && (
              <Div mgt="4rem" pdt="4rem" borderTop>
                <WhiteBtn4 size="1.6rem">추천상품 보기</WhiteBtn4>
                <BlackBtn2 size="1.6rem">재입고 알림신청</BlackBtn2>
              </Div>
            )}
            {delivery && !deliverySoldOut && (
              <Div pdt="4rem">
                <WhiteBtn4 size="1.6rem">장바구니</WhiteBtn4>
                <BlackBtn2 size="1.6rem">구매하기</BlackBtn2>
              </Div>
            )}
          </div>
        </Div>
      </div>
    );
  };
  const StickyOrderBox = styled(StickyOrderWrap)`
    background-color: #fff;
    width: 400px;
    height: 100%;
    /* position: relative; */
    position: absolute;
    top: 0;
    right: -110px;
    @media (min-width: 1023px) and (max-width: 1540px) {
      right: 0vw;
    }
    /* @media (min-width: 1023px) and (max-width: 1310px) {
    
    } */
    /****************************************************** */
    ${theme.device.responsive} {
      display: none;
    }
  `;

  const array = [
    { value: '홈' },
    { value: '화장품' },
    { value: '에센스&세럼' },
  ];

  return (
    <>
      <Center>
        <Div mgt="8rem" mobDsp="none">
          <CurrentPageList array={array} />
        </Div>
        <MoTitleBox tit="" homeIcon />
        {/* ---- 제품 정보 상단 ---- 시작 */}
        <ProdInfoIntro>
          <ProdImgWrap>
            <div className="product-detail">
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper2"
                pagination={{
                  type: 'fraction',
                }}
              >
                <SwiperSlide>
                  <img src="/assets/images/thum-prod00.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/thum-prod01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/thum-prod02.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/thum-prod03.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/thum-prod04.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/images/thum-prod05.png" />
                </SwiperSlide>
              </Swiper>
              <Div width="530px" mgAuto mobDsp="none">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod00.png" />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod01.jpg" />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod02.png" />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod03.png" />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod04.png" />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: '80px' }}>
                    <img src="/assets/images/thum-prod05.png" />
                  </SwiperSlide>
                </Swiper>
              </Div>
            </div>
          </ProdImgWrap>
          <ProdInfoWrap>
            <InfoTop>
              <Div dsp="flex" justify="space-between" align="center" mgb="20px">
                <a href="#">
                  <Div dsp="flex" align="center">
                    <Span size="1.8rem" mobSize="1.5rem" fontWeight="700">
                      시슬리
                    </Span>{' '}
                    <img src="/icons/icon-arrow.svg" alt="이동 아이콘" />
                  </Div>
                </a>
                <Div dsp="flex" align="center">
                  <em>
                    <Img
                      pc={{ width: '24px', height: '24px' }}
                      responsive={{ width: '18px', height: '18px' }}
                      src={`/assets/icons/icon-heart2.svg`}
                      alt="찜"
                    />
                  </em>
                  <em>
                    <Img
                      pc={{ width: '24px', height: '24px' }}
                      responsive={{ width: '18px', height: '18px' }}
                      src={`/assets/icons/icon-share.svg`}
                      alt="찜"
                    />
                  </em>
                </Div>
              </Div>
              <InfoTit>시슬리 올데이 올이어</InfoTit>
              <Div dsp="flex" mobDirection="column">
                <Div dsp="flex" align="center">
                  <Img
                    pc={{ width: '20px', height: '20px' }}
                    responsive={{ width: '16px', height: '16px' }}
                    src={`/assets/icons/icon-star.svg`}
                    alt="star"
                  />
                  {/* <img src="/icons/icon-star.svg" alt="star" /> */}
                  <Span className="count">
                    4.8<Span color="#aaa">(123건)</Span>
                    <span className="line">|</span>
                  </Span>
                </Div>
                <Div dsp="inline-block" mobMgt="12px">
                  <HashTag>신상품</HashTag>
                  <HashTag>세일</HashTag>
                  <HashTag>사은품</HashTag>
                </Div>
              </Div>
            </InfoTop>
            <InfoDetail>
              {/* line1 - 정상가 판매가 */}
              <Div borderBottom mgb="2.2rem" mobMgb="2rem">
                <dl>
                  <dt>정상가</dt>
                  <dd className="small">
                    $252<Span size="1.4rem">(310,968원)</Span>
                  </dd>
                </dl>
                <dl>
                  <dt>판매가</dt>
                  <dd className="large">
                    <Span fontWeight="600">$201</Span>
                    <Span size="2rem" mobSize="1.6rem">
                      (248,034원)
                    </Span>
                    <Span
                      dsp="inline-block"
                      mgl="13px"
                      mobMgl="6px"
                      color="red"
                      fontWeight="700"
                      size="2rem"
                      mobSize="1.6rem"
                    >
                      36%
                    </Span>
                  </dd>
                </dl>
              </Div>
              {/* line2 - 멤버십혜택 */}
              {member ? (
                <Div borderBottom mgb="2.2rem" mobMgb="2rem">
                  <dl>
                    <dt>멤버십혜택</dt>
                    <dd className="between">
                      <Span fontWeight="600">
                        &#123;멤버십 혜택 정리된 이후 추가 예정&#125;
                      </Span>
                      <Div as="span" dsp="flex" align="center">
                        <Span fontWeight="600">멤버십가입하기</Span>{' '}
                        <img src="/icons/icon-arrow.svg" />
                      </Div>
                    </dd>
                  </dl>
                </Div>
              ) : null}
              {/* line2 - 배송안내 */}
              {delivery ? (
                <Div borderBottom mgb="2.2rem" mobMgb="2rem">
                  <dl>
                    <dt>배송안내</dt>
                    <dd>
                      <Span size="1.6rem" fontWeight="600">
                        배송비 3,000원
                      </Span>
                      <Span
                        dsp="inline-block"
                        mgl=".5rem"
                        color="#aaa"
                        size="1.4rem"
                      >
                        (10,000원 이상 무료배송)
                      </Span>
                      <Span dsp="block" mgt=".9rem" color="#aaa" size="1.4rem">
                        (10,000원 이상 무료배송)
                      </Span>
                      <Span
                        dsp="block"
                        size="1.4rem"
                        mgt="1.9rem"
                        fontWeight="600"
                      >
                        CJ대한통운
                      </Span>
                    </dd>
                  </dl>
                </Div>
              ) : null}
              {/* line3 - 구매혜택 */}
              <Div borderBottom mgb="2.2rem" mobMgb="2rem">
                <dl>
                  <dt>구매혜택</dt>
                  <dd>
                    <Div mgb="1.2rem" mobMgb="14px" dsp="flex" align="center">
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        responsive={{ width: '20px', height: '20px' }}
                        src={`/assets/icons/icon-coupon-b.svg`}
                        alt="쿠폰 아이콘"
                      />
                      <Span
                        as="strong"
                        dsp="inline-block"
                        mgl=".8rem"
                        size="ml"
                        fontWeight="700"
                        mobSize="1.4rem"
                      >
                        쿠폰할인
                      </Span>
                      <Div
                        as="a"
                        dsp="flex"
                        align="center"
                        style={{ cursor: 'pointer' }}
                      >
                        <Span
                          size="1.4rem"
                          dsp="inline-block"
                          mgl="20px"
                          mgr="8px"
                          fontWeight="600"
                          textDecoration="underline"
                        >
                          쿠폰다운로드
                        </Span>
                        <Img
                          pc={{ width: '16.5px', height: '16.5px' }}
                          responsive={{ width: '14px', height: '14px' }}
                          src={`icons/icon-coupon-download.svg`}
                          alt="쿠폰 아이콘"
                        />
                        {/* <img
                          src="icons/icon-coupon-download.svg"
                          alt="다운로드 아이콘"
                        /> */}
                      </Div>
                    </Div>
                    <Span as="p" mgb="20px" color="#aaa" size="1.4rem">
                      *다운로드한 쿠폰은 주문서 작성 시 선택할 수 있습니다.
                    </Span>
                    <Div mgb="20px" dsp="flex" align="center">
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        responsive={{ width: '20px', height: '20px' }}
                        src={`/assets/icons/icon-point-b.svg`}
                        alt="포인트 아이콘"
                      />
                      <Span
                        as="p"
                        dsp="inline-block"
                        fontWeight="700"
                        mgl=".8rem"
                        size="1.6rem"
                        mobSize="1.4rem"
                      >
                        결제금액
                        <Span as="strong" dsp="inline-block" color="blue">
                          1%
                        </Span>
                        포인트 적립
                      </Span>
                    </Div>
                    <MobShow>
                      <Div
                        mgb="20px"
                        dsp="flex"
                        align="center"
                        mobAlign="center"
                      >
                        <Img
                          pc={{ width: '24px', height: '24px' }}
                          responsive={{ width: '20px', height: '20px' }}
                          src={`/assets/icons/icon-mob-point.svg`}
                          alt="포인트 아이콘"
                        />
                        <Span
                          as="p"
                          dsp="inline-block"
                          fontWeight="700"
                          mgl=".8rem"
                          size="1.6rem"
                          mobSize="1.4rem"
                          mobLineHeight="20px"
                        >
                          결제금액
                          <Span as="strong" dsp="inline-block" color="blue">
                            0.5%
                          </Span>
                          대한항공 마일리지 적립
                        </Span>
                      </Div>
                    </MobShow>
                    <Div dsp="flex" align="center">
                      <Img
                        pc={{ width: '24px', height: '24px' }}
                        responsive={{ width: '20px', height: '20px' }}
                        src={`/assets/icons/icon-gift-b.svg`}
                        alt="선물 아이콘"
                      />
                      <Span
                        as="p"
                        dsp="inline-block"
                        fontWeight="700"
                        mgl="10px"
                        mgr="6px"
                        size="1.6rem"
                        mobSize="1.4rem"
                      >
                        제휴혜택
                      </Span>
                      <Img
                        pc={{ width: '22px', height: '22px' }}
                        responsive={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-info-g.svg`}
                        alt="info 아이콘"
                      />
                    </Div>
                  </dd>
                </dl>
              </Div>
              {/* line4 - 사은품 */}
              {freeGift && (
                <Div
                  borderBottom
                  mobBorderNone
                  mgb="2.2rem"
                  mobMgb="0"
                  position="relative"
                >
                  <dl>
                    <dt>사은품</dt>
                    <Div as="dd" dsp="flex">
                      <Div border>
                        <Img
                          pc={{ width: '80px', height: '80px' }}
                          responsive={{ width: '68px', height: '68px' }}
                          src={`/assets/images/thum-free-gift.png`}
                          alt="사은품 썸네일"
                        />
                      </Div>
                      <FreeGiftInfo>
                        <Div size="ml" position="relative">
                          <Span
                            as="p"
                            size="ml"
                            mobSize="1.4rem"
                            mobWidth="128px"
                          >
                            <span className="mobDspNone">시슬리 브랜드</span>{' '}
                            $100 이상 구매 시 파우치와 5종 샘플 증정
                          </Span>
                          <FreeGiftPopupTxt open={freeGiftInfo}>
                            <Span
                              as="a"
                              cursorPointer
                              color="#aaa"
                              size="1.4rem"
                              dsp="inline-block"
                              onClick={() => {
                                {
                                  freeGiftInfo
                                    ? SetFreeGiftInfo(false)
                                    : SetFreeGiftInfo(true);
                                }
                              }}
                              mgt="8px"
                              mgb="4px"
                              mobMgt="0"
                              mobMgb="0"
                            >
                              <Div dsp="flex" align="center">
                                <Span mobDsp="none">사은품 유의사항 </Span>
                                <Div
                                  mgl=".4rem"
                                  className="open-icon"

                                  // style={
                                  //   freeGiftInfo
                                  //     ? { rotate: '0deg' }
                                  //     : { rotate: '180deg' }
                                  // }
                                >
                                  <Img
                                    pc={{ width: '16px', height: '16px' }}
                                    responsive={{
                                      width: '24px',
                                      height: '24px',
                                    }}
                                    src={`/assets/icons/icon-arrow-open-g.svg`}
                                    alt="안내창 오픈 아이콘"
                                  />
                                </Div>
                              </Div>
                            </Span>
                          </FreeGiftPopupTxt>
                        </Div>

                        <Span as="p" color="#aaa" size="1.4rem">
                          <Span dsp="inline-block" mobDsp="none">
                            행사기간 :{' '}
                          </Span>
                          2022.07.01 ~ 07.31
                        </Span>
                      </FreeGiftInfo>
                    </Div>
                  </dl>
                  {freeGiftInfo && <FreeGiftPopup />}
                </Div>
              )}
              {/* line5 - 세트상품*/}
              {bundledProd && (
                <Div borderBottom mgb="2.2rem" mobMgb="2rem">
                  <dl>
                    <dt>세트상품</dt>
                    <dd>
                      <Span size="1.8rem" fontWeight="600">
                        이 상품은 세트상품 입니다.
                      </Span>
                    </dd>
                  </dl>
                </Div>
              )}
              {/* line5 - 수량 선택, 금액 */}
              <ProdSelect>
                {/* 제품상세 default */}
                {!soldOut && single && (
                  <Div mobDsp="none">
                    {delivery && single && <Div pdt="3.8rem">&nbsp;</Div>}
                    <PcSelectedProd delivery={delivery} />
                    {delivery && single && <Div pdt="3.5rem">&nbsp;</Div>}
                  </Div>
                )}
                {/* 묶음상세 - 묶음상품 */}
                {!soldOut && bundledProd && !single && (
                  <>
                    <Div>
                      <SelectImgBox
                        optionData={selectImgArray}
                        currentTxt="이 상품은 묶음상품입니다. 상품을 선택하세요."
                        boxWidth="100%"
                        labelColor="#959595"
                      />
                    </Div>
                    <Div mgt="2rem">
                      <SelectBox
                        optionData={selectArray}
                        currentTxt="옵션을 선택하세요."
                        boxWidth="100%"
                        labelColor="#959595"
                        labelBg
                      />
                    </Div>
                    <Div mgt="2rem" mgb="6rem">
                      <SelectOptionBox>
                        <Div dsp="flex" justify="space-between">
                          <Span size="1.8rem">
                            %옵션1 선택값% / %옵션2 선택값%
                          </Span>
                          <span className="icon">
                            <Img
                              pc={{ width: '24px', height: '24px' }}
                              src={`/assets/icons/icon-close-btn.svg`}
                              alt="closed btn"
                            />
                          </span>
                        </Div>
                        <Div
                          dsp="flex"
                          justify="space-between"
                          align="center"
                          mgt="2.7rem"
                        >
                          <Div
                            width="13.8rem"
                            dsp="flex"
                            justify="space-between"
                            align="center"
                          >
                            <Img
                              pc={{ width: '32px', height: '32px' }}
                              src={`/icons/icon-minus-btn.svg`}
                              alt="수량 빼기 버튼"
                            />

                            <Span as="strong" padding="0 32px">
                              1
                            </Span>
                            <Img
                              pc={{ width: '32px', height: '32px' }}
                              src={`/icons/icon-plus-btn.svg`}
                              alt="수량 더하기 버튼"
                            />
                          </Div>
                          <Span fontWeight="600" size="2rem">
                            248,034원
                          </Span>
                        </Div>
                      </SelectOptionBox>
                      <SelectOptionBox style={{ borderTop: '0' }}>
                        <Div dsp="flex" justify="space-between">
                          <Span size="1.8rem">Large / 카키색</Span>
                          <span className="icon">
                            <Img
                              pc={{ width: '24px', height: '24px' }}
                              src={`/assets/icons/icon-close-btn.svg`}
                              alt="closed btn"
                            />
                          </span>
                        </Div>
                        <Div
                          dsp="flex"
                          justify="space-between"
                          align="center"
                          mgt="2.7rem"
                        >
                          <Div
                            width="13.8rem"
                            dsp="flex"
                            justify="space-between"
                            align="center"
                          >
                            <Img
                              pc={{ width: '32px', height: '32px' }}
                              src={`/icons/icon-minus-btn.svg`}
                              alt="수량 빼기 버튼"
                            />

                            <Span as="strong" padding="0 32px">
                              1
                            </Span>
                            <Img
                              pc={{ width: '32px', height: '32px' }}
                              src={`/icons/icon-plus-btn.svg`}
                              alt="수량 더하기 버튼"
                            />
                          </Div>
                          <Span fontWeight="600" size="2rem">
                            248,034원
                          </Span>
                        </Div>
                      </SelectOptionBox>
                    </Div>
                    {/* <Div borderTop>

                    </Div> */}
                    <Div
                      dsp="flex"
                      align="center"
                      justify="space-between"
                      mgt="2rem"
                      pdt="2rem"

                      // style={delivery && single && { padding: '3.8rem 0 3.5rem' }}
                    >
                      <Div dsp="flex" align="center">
                        <Img
                          pc={{ width: '32px', height: '32px' }}
                          src={`/icons/icon-minus-btn.svg`}
                          alt="수량 빼기 버튼"
                        />
                        <Span as="strong" padding="0 32px">
                          1
                        </Span>
                        <Img
                          pc={{ width: '32px', height: '32px' }}
                          src={`/icons/icon-plus-btn.svg`}
                          alt="수량 더하기 버튼"
                        />
                      </Div>
                      <Div>
                        <Span color="#666">총 금액</Span>
                        <Span
                          as="strong"
                          dsp="inline-block"
                          mgl="42px"
                          fontWeight="700"
                          size="xl2"
                        >
                          {!delivery ? '$201(248,034원)' : '248,034원'}
                          <Span
                            dsp="inline-block"
                            mgl="12px"
                            mgr="10px"
                            color="red"
                            size=""
                          >
                            36%
                          </Span>
                        </Span>
                      </Div>
                    </Div>
                  </>
                )}
                {/* 품절 */}
                {soldOut && (
                  <Div dsp="flex" direction="column" align="center" mgt="3rem">
                    <Span as="p" size="xl2" dsp="block" fontWeight="600">
                      죄송합니다.
                    </Span>
                    <Span as="p" size="xl2" dsp="block" fontWeight="600">
                      상품이 <Span color="red">일시품절</Span> 되었습니다.
                    </Span>
                  </Div>
                )}
                {/* 배송상품 default */}
                {delivery && !deliverySoldOut && !single && (
                  <Div dsp="flex" direction="column" align="center">
                    <Div
                      dsp="flex"
                      justify="flex-start"
                      gap=".6rem"
                      align="center"
                      width="100%"
                    >
                      <Div as="strong" width="10rem">
                        옵션명
                      </Div>
                      <SelectBox
                        optionData={selectArray}
                        currentTxt="선택하세요"
                        boxWidth="100%"
                        labelColor="#959595"
                      />
                    </Div>
                    <Div
                      dsp="flex"
                      justify="flex-start"
                      gap=".6rem"
                      align="center"
                      width="100%"
                      mgt="1.5rem"
                      mgb="3.5rem"
                    >
                      <Div as="strong" width="10rem">
                        옵션명
                      </Div>
                      <SelectBox
                        optionData={selectArray}
                        currentTxt="선택하세요"
                        boxWidth="100%"
                        labelColor="#959595"
                        labelBg="#fafafa"
                      />
                    </Div>
                    {/* 배송상품 default 일땐 이하 주석 내용 숨김처리 */}
                    {/* <SelectOptionBox>
                      <Div dsp="flex" justify="space-between">
                        <Span size="1.8rem">
                          %옵션1 선택값% / %옵션2 선택값%
                        </Span>
                        <span className="icon">
                          <Img
                            pc={{ width: '24px', height: '24px' }}
                            src={`/assets/icons/icon-close-btn.svg`}
                            alt="closed btn"
                          />
                        </span>
                      </Div>
                      <Div
                        dsp="flex"
                        justify="space-between"
                        align="center"
                        mgt="2.7rem"
                      >
                        <Div
                          width="13.8rem"
                          dsp="flex"
                          justify="space-between"
                          align="center"
                        >
                          <Img
                            pc={{ width: '32px', height: '32px' }}
                            src={`/icons/icon-minus-btn.svg`}
                            alt="수량 빼기 버튼"
                          />

                          <Span as="strong" padding="0 32px">
                            1
                          </Span>
                          <Img
                            pc={{ width: '32px', height: '32px' }}
                            src={`/icons/icon-plus-btn.svg`}
                            alt="수량 더하기 버튼"
                          />
                        </Div>
                        <Span fontWeight="600" size="2rem">
                          248,034원
                        </Span>
                      </Div>
                    </SelectOptionBox>
                    <SelectOptionBox style={{ borderTop: '0' }}>
                      <Div dsp="flex" justify="space-between">
                        <Span size="1.8rem">Large / 카키색</Span>
                        <span className="icon">
                          <Img
                            pc={{ width: '24px', height: '24px' }}
                            src={`/assets/icons/icon-close-btn.svg`}
                            alt="closed btn"
                          />
                        </span>
                      </Div>
                      <Div
                        dsp="flex"
                        justify="space-between"
                        align="center"
                        mgt="2.7rem"
                      >
                        <Div
                          width="13.8rem"
                          dsp="flex"
                          justify="space-between"
                          align="center"
                        >
                          <Img
                            pc={{ width: '32px', height: '32px' }}
                            src={`/icons/icon-minus-btn.svg`}
                            alt="수량 빼기 버튼"
                          />

                          <Span as="strong" padding="0 32px">
                            1
                          </Span>
                          <Img
                            pc={{ width: '32px', height: '32px' }}
                            src={`/icons/icon-plus-btn.svg`}
                            alt="수량 더하기 버튼"
                          />
                        </Div>
                        <Span fontWeight="600" size="2rem">
                          248,034원
                        </Span>
                      </Div>
                    </SelectOptionBox>
                    <Div
                      dsp="flex"
                      justify="flex-end"
                      align="center"
                      width="100%"
                      mgt="6rem"
                      mgb="2rem"
                    >
                      <Span color="#666">총 금액</Span>
                      <Span
                        as="strong"
                        dsp="inline-block"
                        mgl="8.4rem"
                        fontWeight="700"
                        size="xl2"
                      >
                        {!delivery ? '$201(248,034원)' : '248,034원'}
                        <Span
                          dsp="inline-block"
                          mgl="12px"
                          mgr="10px"
                          color="red"
                          size=""
                        >
                          36%
                        </Span>
                      </Span>
                    </Div>*/}
                  </Div>
                )}
                {/* 버튼 */}
                <SelectedBtnBox />
                {/* 주류 */}
                {alcohol ? (
                  <AlcoholInfo>
                    <Img
                      pc={{ width: '22px', height: '22px' }}
                      src={`/assets/icons/icon-info-r.svg`}
                      alt="i 아이콘"
                    />
                    <Div width="calc(100% - 32px)">
                      <Span size="14px" color="red">
                        실 결제금액은 탑승일의 기내 비치 책자 가격 기준으로
                        적용되며, 예약월과 탑승월이 상이할 경우 주류 가격이
                        변동될 수 있습니다.
                      </Span>
                    </Div>
                  </AlcoholInfo>
                ) : null}
              </ProdSelect>
            </InfoDetail>
          </ProdInfoWrap>
        </ProdInfoIntro>
        <ProdAdv>
          <Div>
            <Span
              size="4rem"
              mobSize="2.2rem"
              dsp="block"
              mgb="20px"
              mobMgb="11px"
              fontWegiht="600"
            >
              최상위 레벨, 그 존재의 이유
            </Span>
            <Span size="2rem" mobSize="1.2rem">
              브랜드별 안티에이징 솔루션 아이템
            </Span>
          </Div>
        </ProdAdv>
      </Center>
      {/* ---- 제품 상세 설명 ---- 시작 */}
      <ProdDetailBody>
        <Div borderBottom>
          <ProdDetailNav>
            <ProdDetailNavList
              onClick={() => {
                setTabIndex(0);
              }}
              active={tabIndex === 0}
            >
              상품설명
            </ProdDetailNavList>

            <ProdDetailNavList
              onClick={() => {
                setTabIndex(1);
              }}
              active={tabIndex === 1}
            >
              이용안내
            </ProdDetailNavList>
            <ProdDetailNavList
              onClick={() => {
                setTabIndex(2);
              }}
              active={tabIndex === 2}
            >
              상품리뷰
            </ProdDetailNavList>
            <ProdDetailNavList
              onClick={() => {
                setTabIndex(3);
              }}
              active={tabIndex === 3}
            >
              Q&A
            </ProdDetailNavList>
          </ProdDetailNav>
        </Div>
        <Div maxWidth="1300" width="100%" mgAuto position="relative">
          <TabletStyled mobDsp="none">
            <StickyOrderBox />
          </TabletStyled>
          <ProdDetailWrap>
            <ProdDetailTxt>
              {bundledProd && (
                <>
                  <Span as="p" size="2.8rem" fontWeight="600" mgb="2rem">
                    세트상품
                  </Span>
                  <BundledWrap gray>
                    <Img
                      pc={{ width: '160px', height: '160px' }}
                      src={`/assets/images/product08.png`}
                      alt="설화수 화장품 이미지"
                    />
                    <Div mgl="2rem">
                      <Span size="1.6rem" color="#666">
                        설화수
                      </Span>
                      <Span
                        dsp="block"
                        mgt="1rem"
                        size="2.2rem"
                        fontWeight="600"
                      >
                        설화수 자음생크림 소프트 (60ml)
                      </Span>
                      <Div dsp="flex" align="center" mgt="2rem">
                        <Span
                          dsp="inline-block"
                          size="2rem"
                          textDecoration="line-through"
                          color="#666"
                        >
                          $208
                        </Span>
                        <Span
                          dsp="inline-block"
                          size="2rem"
                          color="red"
                          mgl="1rem"
                        >
                          20%
                        </Span>
                        <Span
                          dsp="inline-block"
                          size="2.4rem"
                          fontWeight="600"
                          mgl="2.2rem"
                        >
                          $208
                          <Span size="2rem" fontWeight="400">
                            (257,504원)
                          </Span>
                        </Span>
                      </Div>
                    </Div>
                    <BundledBtn>자세히 보기</BundledBtn>
                  </BundledWrap>
                  <BundledWrap>
                    <Img
                      pc={{ width: '160px', height: '160px' }}
                      src={`/assets/images/product08.png`}
                      alt="설화수 화장품 이미지"
                    />
                    <Div mgl="2rem">
                      <Span size="1.6rem" color="#666">
                        설화수
                      </Span>
                      <Span
                        dsp="block"
                        mgt="1rem"
                        size="2.2rem"
                        fontWeight="600"
                      >
                        설화수 자음생크림 소프트 (60ml)
                      </Span>
                      <Div dsp="flex" align="center" mgt="2rem">
                        <Span
                          dsp="inline-block"
                          size="2rem"
                          textDecoration="line-through"
                          color="#666"
                        >
                          $208
                        </Span>
                        <Span
                          dsp="inline-block"
                          size="2rem"
                          color="red"
                          mgl="1rem"
                        >
                          20%
                        </Span>
                        <Span
                          dsp="inline-block"
                          size="2.4rem"
                          fontWeight="600"
                          mgl="2.2rem"
                        >
                          $208
                          <Span size="2rem" fontWeight="400">
                            (257,504원)
                          </Span>
                        </Span>
                      </Div>
                    </Div>
                    <BundledBtn>자세히 보기</BundledBtn>
                  </BundledWrap>
                </>
              )}
              <Div mgt="6rem" mobDsp="none">
                <Img
                  pc={{ width: '100%', height: '486px' }}
                  src={`/assets/images/pro-detail-sample01.png`}
                  alt="search img"
                  height100
                />
              </Div>
              <Span as="div" size="14px" mgt="60px">
                올데이 올이어는 피부에 보호막 역할을 하여 피부를 완벽하게
                보호해주는 데이케어 제품입니다. 피부를 보호하여 오랫동안 젊어
                보이게 합니다.
                <br />
                시슬리 연구소는 우리가 일생 동안 노출되는 내부 및 외부적
                요인들을 연구한 결과, 이러한 요소들은 특히 자외선, 외부 오염
                등을 포함하는 과학 용어인 엑스포좀으로 분류되며, <br />
                피부 노화의 80%를 차지한다는 것을 밝혀냈습니다.
                <br />
                <br />
                올데이 올이어의 포뮬라는 “스마트” 핵심 성분의 결합으로, 조기
                노화의 가시적인 징후를 야기하는 외부 공격으로부터 피부를
                보호해주기 위한 초강력 방어 전략을 선보입니다.
                <br />
                <br />
                피부에 침투하지 않는 캡슐화된 필터로 피부 표면 전체를 포괄적으로
                보호하며, 외부 오염 등에 대한 노출을 제한합니다.
                <br />
                <br />
                오염물질에 대한 노출을 제한합니다.
                <br />
                - 피부 보호막을 강화하여 피부의 자연 방어력을 향상시킵니다.
                <br />
                - 오염물질 및 자외선의 영향을 제한하기 위한 피부 보호 기능
                <br />
                - 안티에이징 작용
                <br />
                <br />
                피부를 보호하고 저항력을 강화하여 자연스러운 힘을 기르는 보호막
                <br />
                <br />
                편안한 텍스처로 피부에 보송한 마무리감을 선사하여, 바르고 나서
                바로 메이크업을 할 수 있습니다.
                <br />
                <br />
                새로운 올데이 올이어의 제품 패키지는 재활용이 가능합니다. 제품
                사용 시 안에 들어 있는 내부 파우치는 수축되며, 사용 완료 후 분리
                가능합니다.
                <br />
                <br />
                피부가 도시 외부 공격으로부터 덜 위협받게 됩니다. 더 부드럽고
                편안해진 피부가 주름과 잔주름을 줄이고 더욱 탄력있는 피부를
                만듭니다.
              </Span>
              <Div mgt="80px" mobMgt="40px">
                <img
                  src="assets/images/pro-detail-sample02.png"
                  alt="제품 이미지"
                />
              </Div>
              <Div mgt="6rem" mobMgt="40px" dsp="none" mobDsp="block">
                <Img
                  pc={{ width: '100%', height: '486px' }}
                  responsive={{ width: '100%', height: '188px' }}
                  src={`/assets/images/pro-detail-sample01.png`}
                  alt="search img"
                  height100
                />
              </Div>
              <ProdIngredientWrap>
                <ProdIngredientBtnWrap>
                  <ProdIngredientBtn
                    open={ingredientOpen}
                    onClick={() => {
                      {
                        ingredientOpen
                          ? setIngredientOpen(false)
                          : setIngredientOpen(true);
                      }
                    }}
                  >
                    {ingredientOpen ? '닫기' : '더보기'}
                    <Div
                      style={
                        ingredientOpen
                          ? { rotate: '0deg' }
                          : { rotate: '180deg' }
                      }
                    >
                      <Img
                        pc={{ width: '16px', height: '16px' }}
                        src={`/assets/icons/icon-arrow-down-g.svg`}
                        alt="arrow down"
                        height100
                      />
                    </Div>
                  </ProdIngredientBtn>
                </ProdIngredientBtnWrap>
                <ProdIngredient open={ingredientOpen}>
                  <Span
                    as="strong"
                    dsp="block"
                    fontWeight="700"
                    color="#000"
                    size="20px"
                  >
                    상품정보 고시
                  </Span>
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    용량 또는 중량
                  </Span>
                  50ml
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    제품 주요 사양
                  </Span>
                  모든 피부 타입
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    사용기한 또는 개봉 후 사용기간
                  </Span>
                  개봉 후 사용기간 6~24개월/ 제조 일자 정보는 수시로 변경되므로
                  기재가 어렵습니다. <br />
                  보다 자세한 사항은 [삼경무역 02-540-2308(601)]으로 문의
                  바랍니다.
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    사용방법
                  </Span>
                  에센스 후 얼굴과 목에 펴 발라주세요. 데이와 나이트 모두 사용이
                  가능합니다.
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    화장품제조업자 및 화장품책임판매업자
                  </Span>
                  시슬리파리
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    제조국
                  </Span>
                  프랑스
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    화장품법에 따라 기재·표시하여야 하는 모든 성분
                  </Span>
                  정제수, 옥토크릴렌, 프로필헵틸카프릴레이트, 글리세린,
                  세테아릴알코올, 쉐어버터 ,부틸메톡시디벤조일메탄
                  ,펜틸렌글라이콜, 카프릴릴메치콘, 이소프로필팔미테이트, 폴리실
                  리콘-14, 포타슘세틸포스페이트, 토코페릴아세테이트, 참깨추출물,
                  서양민들레뿌리줄기/뿌리추출물, 마시멜로뿌리추출물, 아데노신,
                  마텔추출물, 화이트윌로우잎추출물, 회화나 무꽃추출물,
                  두송열매오일, 세이지오일, 마스틱타임꽃오일,
                  세테아릴글루코사이드, 부틸렌글라이콜, 프로판디올,
                  아크릴레이트/C10-30알킬아크릴레이트크로스폴리머, 잔탄검,
                  디소듐이디티에이, 소듐하이드록사이드, 콩오일, 시트릭애씨드,
                  향료, 페녹시에탄올, 소르빅애씨드, 소듐벤조에이트, 토코페롤,
                  리날룰, 리모넨.
                  <br />
                  <br />
                  *제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다.
                  <br />
                  *최신정보는 제품 포장의 성분을 참고하시기 바랍니다.
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    사용 시 주의사항
                  </Span>
                  <ProdDetailList>
                    <li>
                      1.상처가 있는 부위, 습진 및 피부염 등의 이상이 있는
                      부위에는 사용을 하지 마십시오.
                    </li>
                    <li>
                      2. 화장품을 사용하여 다음과 같은 이상이 있는 경우에는
                      사용을 중지하여야 하며, 계속 사용하면 증상이 악화되므로
                      피부과 전문의 등에게 상담하십시오.
                      <ul>
                        <li>
                          1) 사용중 붉은 반점, 부어오름, 가려움증, 자극 등의
                          이상이 있는 경우.
                        </li>
                        <li>
                          2) 적용부위가 직사광선에 의하여 위와 같은 이상이 있는
                          경우.
                        </li>
                      </ul>
                    </li>
                    <li>
                      3. 보관 및 취급시의 주의사항
                      <ul>
                        <li>1) 사용후에는 반드시 마개를 닫아두십시오.</li>
                        <li>
                          2) 유아·소아의 손이 닿지 않는 곳에 보관하시고, 삼켰을
                          경우 즉시 전문의와 상담하십시오.
                        </li>
                        <li>
                          3) 고온 또는 저온의 장소 및 직사광선이 닿는 곳에는
                          보관하지 마십시오.
                        </li>
                      </ul>
                    </li>
                  </ProdDetailList>
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    품질보증기준
                  </Span>
                  공정거래위원회 고시 품목별 소비자분쟁 해결기준에 따름
                  <Span as="strong" dsp="block" mgt="20px" fontWeight="700">
                    소비자상담관련 전화번호
                  </Span>
                  080-656-4545(고객센터)
                </ProdIngredient>
              </ProdIngredientWrap>
            </ProdDetailTxt>
            {/* ---이용안내--- */}
            <UseInfo delivery={delivery} ingredientOpen={ingredientOpen} />

            {/* ---판매자정보--- */}
            {delivery && (
              <ToggleWrap>
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <Div dsp="flex" align="center">
                          <ProdDetailTitle>판매자정보</ProdDetailTitle>
                        </Div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <TableCover>
                        <Table.TableWrap
                          style={{ borderTop: '1px solid #dfdfdf' }}
                        >
                          <Table.Table>
                            <Table.TableTr>
                              <Table.TableTh>판매자</Table.TableTh>
                              <Table.TableTd>(주)클락스토어</Table.TableTd>
                              <Table.TableTh>상호명/대표자</Table.TableTh>
                              <Table.TableTd>
                                (주)클락스토어 | 김클락
                              </Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>사업자 구분</Table.TableTh>
                              <Table.TableTd>법인사업자</Table.TableTd>
                              <Table.TableTh>고객문의 대표번호</Table.TableTh>
                              <Table.TableTd>02-468-1234</Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>사업자 번호</Table.TableTh>
                              <Table.TableTd>123-45-67890</Table.TableTd>
                              <Table.TableTh>통신판매업신고</Table.TableTh>
                              <Table.TableTd>2020-경기 양주-0071</Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>이메일</Table.TableTh>
                              <Table.TableTd>
                                clockstore@naver.com
                              </Table.TableTd>
                              <Table.TableTh>고객문의 가능시간</Table.TableTh>
                              <Table.TableTd>
                                09시~18시 (점심시간 제외)
                              </Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>영업 주소지</Table.TableTh>
                              <Table.TableTd colSpan="3">
                                12345 경기도 양주시 오월읍
                              </Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>반품/교환지 주소</Table.TableTh>
                              <Table.TableTd colSpan="3">
                                12345 경기도 양주시 오월읍
                              </Table.TableTd>
                            </Table.TableTr>
                          </Table.Table>
                        </Table.TableWrap>
                      </TableCover>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ToggleWrap>
            )}

            {/* ---구매시 주의사항--- */}
            {delivery && (
              <ToggleWrap>
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <Div dsp="flex" align="center">
                          <ProdDetailTitle>구매시 주의사항</ProdDetailTitle>
                        </Div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <Div>
                        <Span
                          as="ul"
                          textAlign="left"
                          size="1.4rem"
                          fontWeight="400"
                          color="#666"
                          lineHeight="2.4rem"
                        >
                          <li>
                            - 「전자상거래 등에서의 소비자보호에 관한 법률」에
                            의한 반품규정이 판매자가 지정한 반품조건보다
                            우선합니다.
                          </li>
                          <li>
                            - 미성년자가 물품을 구매하는 경우, 법정대리인이
                            동의하지 않으면 미성년자 본인 또는 법정대리인이
                            구매를 취소할 수 있습니다.
                          </li>
                          <li>
                            - 공산품, 전기용품 등 인증대상 상품을 구매하실 경우
                            ‘전기용품 및 생활용품 안전관리법’ 등 관련 법률에
                            따라 허가 받은 상품인지 확인하시기 바랍니다.
                          </li>
                          <li>
                            - 대한항공 SKYSHOP 의 결제시스템을 이용하지 않고
                            판매자와 직접거래 하실 경우 상품을 받지 못하거나.
                            구매한 상품과 상이한 상품을 받는 등 피해가 발생 할
                            수 있으니 유의하시기 바랍니다.
                          </li>
                          <li>
                            - 등록된 판매물품과 내용은 판매자가 등록한 것으로
                            11번가(주)가 운영하는 11번가에 등록된 내용에 대하여
                            일체의 책임을 지지 않습니다.
                          </li>
                        </Span>
                      </Div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ToggleWrap>
            )}

            {/* --- 배송안내 --- */}
            {delivery && (
              <ToggleWrap>
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <Div dsp="flex" align="center">
                          <ProdDetailTitle>배송안내</ProdDetailTitle>
                        </Div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <TableCover borderBottom>
                        <Table.TableWrap>
                          <Table.Table>
                            <Table.TableTr>
                              <Table.TableTh>배송처</Table.TableTh>
                              <Table.TableTd>업체 배송</Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>배송 택배사</Table.TableTh>
                              <Table.TableTd>CJ 대한통운</Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>배송료</Table.TableTh>
                              <Table.TableTd>
                                일반지역 : 3,000원{' '}
                                <Span dsp="inline-block" padding="0 .5rem">
                                  도서지역 : 6,000원
                                </Span>{' '}
                                *반품 시 소급부과 됩니다.
                              </Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>배송출발일</Table.TableTh>
                              <Table.TableTd>
                                - 평균 배송 출발일 수 : 결제 확인 후 1~2일 이내
                                (토/일/공휴일 제외) <br />
                                - 업체 및 산지에서 주문 후 평균 2~3일 이내 택배
                                배송됩니다.
                                <br />- 천재지변, 물량 수급 변동 등 예외적인
                                사유 발생 시, 다소 지연될 수 있는 점 양해 부탁
                                드립니다.
                              </Table.TableTd>
                            </Table.TableTr>
                            <Table.TableTr>
                              <Table.TableTh>취소</Table.TableTh>
                              <Table.TableTd>
                                주문을 완료하신 경우 배송 전에만 취소 접수가
                                가능합니다.
                                <br />
                                (배송이 이미 이루어진 경우, 해당 상품을 반품하신
                                후 환불 받으시기 바랍니다.)
                              </Table.TableTd>
                            </Table.TableTr>
                          </Table.Table>
                        </Table.TableWrap>
                      </TableCover>
                      <Span
                        as="ul"
                        color="#666"
                        dsp="block"
                        mgt="2rem"
                        lineHeight="2.4rem"
                      >
                        <li>
                          - 택배 배송기일은 휴일 포함여부 및 상품 재고상황,
                          택배사 사정에 의해 지연될 수 있습니다.
                        </li>
                        <li>
                          - 제주/도서산간 지역은 추가 운임이 발생할 수 있습니다.
                        </li>
                        <li>
                          - [다중배송] 장바구니에서 여러 주소지로 한번에 주문
                          결제가 가능합니다. (일부상품 제외)
                        </li>
                      </Span>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ToggleWrap>
            )}

            {/* --- 교환 및 반품 안내 --- */}
            {delivery && (
              <ToggleWrap>
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <Div dsp="flex" align="center">
                          <ProdDetailTitle>교환 및 반품 안내</ProdDetailTitle>
                        </Div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <TableCover>
                        <Table.TableWrap>
                          <Table.Table>
                            <Table.TableTr>
                              <Table.TableTh>교환/반품 신청기간</Table.TableTh>
                              <Table.TableTd>
                                - 단순변심 및 사이즈/색상 불만에 관련된
                                교환/반품 신청은 배송완료 후 7일 이내에
                                가능합니다.
                                <br />
                                - 상품이 표기/광고내용과 다르거나 계약내용과
                                다른 경우 상품을 받으신 날부터 3개월 이내,
                                <br />
                                - 또는 사실을 알게 된 날(알 수 있었던 날)부터
                                30일 이내에 신청 가능합니다.
                                <br />
                              </Table.TableTd>
                            </Table.TableTr>

                            <Table.TableTr>
                              <Table.TableTh>
                                교환/반품 <br />
                                회수(배송) 비용
                              </Table.TableTh>
                              <Table.TableTd>
                                - 상품의 불량/하자 또는 표시광고 및 계약 내용과
                                다른 경우 해당 상품의 회수(배송)비용은 무료이나,
                                고객님의 단순변심 및 사이즈/색상 불만에 관련된
                                교환/반품의 경우 택배비는 고객님 부담입니다.
                                <br />
                                ※ 최초 배송비가 무료일 경우, 왕복 배송비가 (반품
                                배송비+최초 배송비) 부과됩니다.
                                <br />
                                <Span as="p" color="red">
                                  - 반품 배송비: 5,000원
                                  <br />
                                  - 교환 배송비: 5,000원
                                  <br />
                                </Span>
                                - 제주/도서산간 지역은 추가 운임이 발생할 수
                                있습니다. 단, 반품/교환 비용은 상품 및 반품/교환
                                사유에 따라 변경될 수 있으므로​ 반품/교환 신청
                                화면에서 확인 부탁 드립니다.
                                <br />
                              </Table.TableTd>
                            </Table.TableTr>

                            <Table.TableTr>
                              <Table.TableTh>
                                교환/반품 <br />
                                불가 안내
                              </Table.TableTh>
                              <Table.TableTd>
                                - 전자상거래 등에서 소비자보호에 관한 법률에
                                따라 다음의 경우 청약철회가 제한될 수 있습니다.​
                                <br />
                                - 고객님이 상품 포장을 개봉하여 사용 또는 설치
                                완료되어 상품의 가치가 훼손된 경우​
                                <br />
                                (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
                                <br />​ - 고객님의 단순변심으로 인한 교환/반품
                                신청이 상품 수령한 날로부터 7일이 경과한 경우​
                                <br />
                                - 신선식품(냉장/냉동 포함)을 단순변심/주문착오로
                                교환/반품 신청하는 경우​
                                <br />
                                - 고객님의 사용 또는 일부 소비에 의해 상품의
                                가치가 훼손된 경우​
                                <br />
                                - 시간 경과에 따라 상품 등의 가치가 현저히
                                감소하여 재판매가 불가능한 경우​
                                <br />
                                - 복제가 가능한 재화 등의 포장을 훼손한
                                경우(DVD, CD, 도서 등 복제 가능한 상품)
                                <br />​ - 고객님이 이상 여부를 확인한 후 설치가
                                완료된 상품의 경우(가전, 가구, 헬스기구 등)
                                <br />​ - 고객님의 요청에 따라 개별적으로 주문
                                제작되는 상품으로 재판매가 불가능한 경우(이니셜
                                표시상품, 사이즈 맞춤상품 등)
                                <br />​ - 구매한 상품의 구성품이 누락된
                                경우(화장품 세트, 의류부착 악세서리, 가전제품
                                부속품, 사은품 등)
                                <br />​ - 기타, 상품의 교환, 환불 및 상품 결함
                                등의 보상은 소비자분쟁해결기준(공정거래위원회
                                고시)에 의함​
                              </Table.TableTd>
                            </Table.TableTr>
                          </Table.Table>
                        </Table.TableWrap>
                      </TableCover>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ToggleWrap>
            )}

            {/* ---상품리뷰--- */}
            <ProdReviewBox />

            {/* ---Q&A--- */}
            <QnAListBox QnAList={QnAList} />
          </ProdDetailWrap>
          {/* ---추천 상품 list --- */}
          <RecommendationProdList />
        </Div>
      </ProdDetailBody>
    </>
  );
}
const TabletStyled = styled(Div)`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const HashTag = styled.strong`
  padding: 2px 10px 3px 8px;
  margin-right: 8px;
  margin-bottom: 0;

  border: 1px solid ${theme.color.gray.gray45};
  border-radius: 3px;

  color: ${theme.color.gray.gray88};
  font-family: 'Pretendard';
  font-size: 12px;
`;

const IconInfo = styled.em`
  display: block;
  width: 22px !important;
  height: 22px;
  background-color: teal;
`;

const MobShow = styled.div`
  display: none;
  ${theme.device.responsive} {
    display: block;
  }
`;

//layout
const Center = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  .mobDspBlock {
    display: none;
  }
  .mobDspNone {
    display: inline-block;
  }
  ${theme.device.tablet} {
    width: 1300px;
    padding: 0 25px 0 25px;
  }
  ${theme.device.responsive} {
    max-width: none;
    min-width: 375px;
    .mobDspBlock {
      display: inline-block;
    }
    .mobDspNone {
      display: none;
    }
  }
`;

//제품 정보 상단
// const CurrentPage = styled.div`
//   margin-top: 80px;
//   ul {
//     display: flex;
//   }
//   li {
//     padding: 0 22px;
//     position: relative;
//     font-size: 12px;
//   }
//   li:nth-child(1) {
//     padding-left: 0;
//   }
//   li:after {
//     content: '>';
//     position: absolute;
//     top: 0;
//     right: -5px;
//   }
//   li:last-child:after {
//     display: none;
//   }
// `;
const ProdInfoIntro = styled.div`
  display: flex;
  margin-top: 44px;
  ${theme.device.responsive} {
    display: block;
    margin-top: 0px;
  }
`;
const ProdImgWrap = styled.div`
  width: 660px;
  height: 660px;
  ${theme.device.responsive} {
    width: 100%;
    height: auto;
  }
`;
const ProdInfoWrap = styled.div`
  /* border: 5px solid tomato; */
  margin-left: 30px;
  flex-grow: 1;
  ${theme.device.responsive} {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
`;
const InfoTop = styled.div`
  div {
    em {
      display: inline-block;
      width: 21px;
      margin-left: 15px;
      cursor: pointer;
    }
    .count {
      margin-left: 4px;
    }
    .line {
      margin: 0 13px;
      color: ${theme.color.primary.gray};
    }
  }
  ${theme.device.responsive} {
    div {
      em {
        width: 18px;
        margin-left: 13px;
      }
      .count {
        font-size: 1.4rem;
      }
      .line {
        display: none;
      }
      .hashTagWrap {
      }
    }
  }
`;
const InfoTit = styled.div`
  font-family: 'PretendardBold';
  margin: 20px 0;
  font-size: 36px;
  ${theme.device.responsive} {
    font-size: 2.2rem;
    margin: 9px 0 24px;
  }
`;
const InfoDetail = styled.div`
  margin-top: 5rem;
  div {
    dl {
      display: flex;
      padding-bottom: 2.2rem;
      font-size: 1.8rem;
      dt {
        width: 100px;
        color: ${theme.color.primary.fontGray};
      }
      dd {
        flex-grow: 1;
      }
      dd.small {
        text-decoration: line-through;
      }
      dd.large {
        font-size: 2.4rem;
      }
      dd.between {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  ${theme.device.responsive} {
    margin-top: 30px;
    div {
      dl {
        font-size: 1.4rem;
        padding-bottom: 1.2rem;
        dt {
          width: 80px;
        }
        dd.large {
          font-size: 1.8rem;
        }
      }
      dl:last-child {
        padding-bottom: 2rem;
      }
    }
  }
`;
const FreeGiftInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;
const FreeGiftPopupTxt = styled.div`
  ${theme.device.responsive} {
    position: absolute;
    top: 0;
    right: 0;
    .open-icon {
      ${({ open }) => {
        if (!open) {
          return css`
            rotate: 180deg;
          `;
        }
      }}
    }
  }
`;

const ProdSelect = styled.div``;

const SelectOptionBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 2rem 2rem 2.5rem 1.5rem;
  background-color: #f5f5f5;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  position: relative;
  .icon {
    /* icon-close-btn.svg */
    display: inline-block;
    cursor: pointer;
  }
`;

//버튼
const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 55px; */
  margin-top: ${({ mgt }) => (mgt ? mgt : '55px')};

  button {
    margin-left: 8px;
    height: 60px;
  }
  button:first-child {
    margin-left: 0;
  }
`;
const WhiteBtn = styled(Btn)`
  color: #000;
  border: 1px solid #000;
  max-width: 140px;
  width: 100%;
  font-family: 'PretendardBold';
  font-size: ${({ size }) => (size ? size : '18px')};
`;
const WhiteBtn2 = styled(WhiteBtn)`
  max-width: 154px;
  height: 50px;
`;

const WhiteBtn3 = styled(WhiteBtn)`
  max-width: 300px;
  height: 60px;
`;

const WhiteBtn4 = styled(WhiteBtn)`
  max-width: none;
  width: 100%;
  height: 50px;
  margin-bottom: 1.2rem;
`;

const BlackBtn = styled(Btn)`
  background-color: #000;
  flex-grow: 2;
  font-family: 'PretendardBold';
  font-size: ${({ size }) => (size ? size : '18px')};
`;

const BlackBtn2 = styled(BlackBtn)`
  width: 100%;
  height: 50px;
`;

const BlackBtn3 = styled(BlackBtn)`
  max-width: 300px;
  height: 60px;
`;

const AlcoholInfo = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  span.orderBox {
    display: inline-block;
    max-width: 288px;
  }
`;
const ProdAdv = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  margin-top: 80px;
  border-radius: 15px;
  color: #fff;
  background-image: url('assets/images/banner/bnr-sample01.png');
  background-repeat: no-repeat;
  overflow: hidden;
  > div {
    position: absolute;
    top: 0;
    left: 50%;
    margin: 45px 0 44px;
  }
  ${theme.device.responsive} {
    width: 95%;
    margin: 40px auto;
    background-image: url('assets/images/banner/bnr-sample01_mob.png');
    background-size: cover;
    /* background-position: 10% 0%; */
    &:after {
      content: '';
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    > div {
      margin: 0;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 1;
    }
  }
`;

//제품 상세 설명
const ProdDetailBody = styled.div`
  margin-top: 125px;
  margin-bottom: 130px;
  ${theme.device.tablet} {
    width: 1300px;
    padding: 0 25px 0 25px;
  }
  ${theme.device.responsive} {
    margin-top: 60px;
  }
`;
const ProdDetailNav = styled.ul`
  display: flex;
  justify-content: center;
  li {
    position: relative;
    max-width: 192px;
    width: 100%;
    font-size: 2rem;
    padding: 19px 61px 17px;

    cursor: pointer;
  }
  ${theme.device.responsive} {
    width: 95%;
    margin: 0 auto;
    li {
      padding: 14px 11px;
      font-size: 1.5rem;
    }
  }
`;
const ProdDetailNavList = styled.li`
  color: ${theme.color.primary.fontGray};
  text-align: center;
  ${({ active }) => {
    if (active) {
      return css`
        font-family: 'PretendardBold';
        color: #000;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
        }
      `;
    }
  }}
`;

const ProdDetailWrap = styled.div`
  max-width: 864px;
  width: 100%;
  order: -1;
  ${theme.device.tablet} {
    margin: auto;
  }
  ${theme.device.responsive} {
    width: 95%;
    margin: 0 auto;
  }
`;
const ProdDetailTitle = styled.p`
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
const ProdDetailTxt = styled.div`
  margin-top: 60px;
  ${theme.device.responsive} {
    margin-top: 40px;
  }
`;
const ProdIngredientWrap = styled.div`
  padding-top: 60px;
  color: #666;
  font-size: 1.4rem;
  ${theme.device.responsive} {
    position: relative;
    padding-top: 40px;
  }
`;
const ProdIngredient = styled.div`
  ${({ open }) => {
    if (open) {
      return css`
        height: auto;
        opacity: 1;
      `;
    } else {
      return css`
        height: 0;
        opacity: 0;
      `;
    }
  }}
`;
const ProdIngredientBtnWrap = styled.div`
  button {
    display: none;
    ${theme.device.responsive} {
      display: flex;
    }
  }
`;
const ProdIngredientBtn = styled(WhiteBtn)`
  height: 48px;
  max-width: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: -46px;
  left: 0;

  ${({ open }) => {
    if (open) {
      return css`
        top: auto;
        bottom: -88px;
      `;
    } else {
      return css`
        &::before {
          content: '';
          width: 100vw;
          height: 120px;
          position: absolute;
          top: -121px;
          left: -2.5%;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            #fff
          );
        }
      `;
    }
  }}
  ${theme.device.responsive} {
    display: flex;
  }
`;

const ProdDetailList = styled.ul`
  ul {
    margin-left: 15px;
  }
`;
const ProdUseInfo = styled.div`
  margin-top: 120px;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding-bottom: 60px;
  /* border-bottom: 1px solid ${theme.color.primary.gray}; */
`;

const BundledWrap = styled.div`
  /* background-color: #f5f5f5; */
  background-color: ${({ gray }) => (gray ? '#f5f5f5' : '#fff')};
  padding: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  button {
    display: ${({ gray }) => (gray ? 'block' : 'none')};
  }
`;
const BundledBtn = styled(Btn)`
  background: transparent;
  border: 1px solid #000;
  color: #000;
  font-size: 1.6rem;
  width: 17.4rem;
  height: 5rem;
  line-height: 5rem;

  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
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

//토글
const ToggleWrap = styled.div`
  margin-top: 12rem;
  .accordion .accordion__item .accordion__heading .accordion__button {
    height: auto;
    padding: 0;
    padding-bottom: 6rem;
  }
  .accordion .accordion__item .accordion__heading .accordion__button::before {
    margin: 0;
    right: 1.2rem;
    width: 2.4rem;
    height: 2.4rem;
    transform: rotate(0deg);
    transform: ${hidden => (hidden ? 'rotate(45deg)' : 'rotate(0deg)')};
    border-width: 3px;
  }
  .accordion .accordion__item .accordion__panel {
    padding: 4rem 0;
    background: #fff;
  }
`;

const ToggleQnAWrap = styled.div`
  .accordion .accordion__item .accordion__heading .accordion__button {
    height: auto;
    padding: 0;
    /* padding-bottom: 6rem; */
  }
  .accordion .accordion__item .accordion__heading .accordion__button::before {
    display: none;
  }
  .accordion .accordion__item .accordion__panel {
    padding: 0;
    background: #fff;
  }
`;

//table
const TableCover = styled.div`
  padding-bottom: 1px;
  border-bottom: ${({ borderBottom }) => borderBottom && '1px solid #dfdfdf'};
  table tr th {
    background: #fff;
    padding: 2.2rem 2rem;
    width: 15.4rem;
    text-align: left;
  }
  table tr th:first-child {
    border-left: 0;
  }
  table tr td {
    padding: 2.2rem 2rem;
    font-size: 1.4rem;
    color: #a1a1a1;
  }
  table tr td:last-child {
    border-right: 0;
  }
`;
