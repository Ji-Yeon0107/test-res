import { useEffect, useRef, useState } from 'react';

import { createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

import Image from 'next/image';
import Img from 'components/atoms/Img';

import styled from 'styled-components';
import theme from 'styles/theme';

import { Pagination, Navigation, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from 'components/organisms/Slide';
import Tabs from 'components/Tabs';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';

import { useCountdown } from 'hooks/useCountDown';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SliderBox02 from 'components/atoms/SliderBox02';
import SliderBox from 'components/atoms/SliderBox';

const SLIDE_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const tabArray = [
  { value: '전체' },
  { value: '주류' },
  { value: '화장품' },
  { value: '패션용품' },
  { value: '식품' },
  { value: '전자제품' },
];

export default function MainVer2({
  // DATA
  categories,
  rankProducts,
  newAllProducts,
  plannedProducts,
  storyProducts = [],
  reviewedProducts,
  arrangedProductGroups = [],

  // UI
  newProductsTabIndex,
  setNewProductsTabIndex,
  handleNavigateTo,
  hydrated,
}) {
  // console.log('categories', categories);

  const playingSwiperRef = useRef(null);
  const paginationRef = useRef(null);

  const [slidePlaying, setSlidePlaying] = useState(true);
  const [categoriesTabIndex, setCategoriesTabIndex] = useState(0);

  const [days, hours, minutes, seconds] = useCountdown(
    plannedProducts?.expireDate,
  );

  useEffect(() => {
    const progressSwiper = paginationRef?.current?.swiper;

    const playingSwiper = playingSwiperRef?.current?.swiper;

    if (progressSwiper?.controller && playingSwiper?.controller) {
      progressSwiper.controller.control = playingSwiper;
      playingSwiper.controller.control = progressSwiper;
    }
  }, []);

  const handleOnClickPlayHandler = e => {
    if (slidePlaying === true) {
      playingSwiperRef.current.swiper.autoplay.stop();
      paginationRef.current.swiper.autoplay.stop();
      setSlidePlaying(false);
    } else {
      playingSwiperRef.current.swiper.autoplay.start();
      setSlidePlaying(true);
    }
  };

  // 반응형 분기점
  const isMob = useMediaQuery('(max-width:430px)');
  return (
    <Bg>
      <Wrapper>
        <div style={{ backgroundColor: '#858a8d' }}>
          <BannerSwiperContainer>
            {/* banner slide */}
            <BannerSwiper
              ref={playingSwiperRef}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ type: 'progressbar' }}
              loop={true}
              modules={[Pagination, Autoplay, Controller]}
              className="mySwiper playing-swiper"
            >
              {SLIDE_COUNT?.map(item => (
                <SwiperSlide key={item}>
                  <MainBannerTxtWrap>
                    <span>이벤트</span>
                    <MainBannerTit>
                      High-End
                      <br />
                      Anti-Aging
                    </MainBannerTit>
                    <MainBannerSubTxt>
                      브랜드마다 내세우는 감동의 안티에이징 솔루션 제품
                      <br />
                      높은 진입장벽에도 불구하고 수많은 이들이 기꺼기 지갑을
                      여는 이유
                    </MainBannerSubTxt>
                  </MainBannerTxtWrap>

                  <BannerContainer>
                    <Img
                      src={`/images/sul2.jpg`}
                      alt="이벤트 배너"
                      // width={`100%`}
                      // height={`100%`}
                      height100
                      objectFit="cover"
                      pc={{ width: `1600px`, height: `780px` }}
                      responsive={{
                        width: `100vw`,
                        height: `calc(450vw / 375 * 100)`,
                      }}
                      // pc와 mobile 배너 시안 width, heignt 비율이 많이 달라 width값은 150vw로 했습니다.
                    />
                  </BannerContainer>
                </SwiperSlide>
              ))}
            </BannerSwiper>
            <PlayHandler>
              <PlayHandlerPc>
                <img
                  src={`/icons/${slidePlaying ? 'pause' : 'play'}.svg`}
                  alt="pause"
                  className="play-handler"
                  onClick={handleOnClickPlayHandler}
                />
              </PlayHandlerPc>
              <PlayHandlerMob>
                <img
                  src={`/assets/icons/icon-plus-bold-w.svg`}
                  alt="pause"
                  className="play-handler"
                  onClick={handleOnClickPlayHandler}
                />
              </PlayHandlerMob>
            </PlayHandler>
            {/* banner number slide */}
            <BannerNumberSwiper
              ref={paginationRef}
              slidesPerView={1}
              pagination={{ type: 'fraction' }}
              loop={true}
              modules={[Pagination, Autoplay, Controller]}
              // controller={{
              //   control: playingSwiperRef?.current?.swiper,
              // }}
              className="mySwiper for-pagination-swiper"
            >
              {SLIDE_COUNT?.map((item, idx) => (
                <SwiperSlide key={item} className="hidden">
                  {idx + 1}
                </SwiperSlide>
              ))}
            </BannerNumberSwiper>
          </BannerSwiperContainer>
        </div>

        <StyledDiv>
          {/* <QuickMenu /> */}
          <Inner>
            <SwiperContWrap>
              <Swiper
                loop={true}
                navigation={true}
                modules={Navigation}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 3.425,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
              >
                {SLIDE_COUNT?.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Section1Img src={`/images/bag.png`} alt="" />
                    <Section1Text>
                      Shortcut <span>Entity</span>
                    </Section1Text>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperContWrap>

            <Section>
              <Title>
                카테고리 랭킹
                <Link href="">
                  <a className="mo">
                    <MoreView>
                      더보기
                      <Img
                        src={`/icons/icon-arrow.svg`}
                        alt="이동 아이콘"
                        pc={{ width: '16px', height: '16px' }}
                      />
                    </MoreView>
                  </a>
                </Link>
              </Title>
              <Div
                dsp="flex"
                justify={isMob ? 'left' : 'center'}
                mgt="5.2rem"
                mobMgt="2.1rem"
              >
                <Tabs
                  theme={isMob ? mobileTabStyle : categoriesTabStyle}
                  tabList={categories}
                  currentIndex={categoriesTabIndex}
                  setCurrentIndex={setCategoriesTabIndex}
                />
              </Div>
              <Div position="relative" mgt="6rem" mobMgt="2rem" mobPdl="2.5%">
                <SliderBox
                  slidesPerView={4}
                  spaceBetween={20}
                  medium
                  src="/assets/images/thum-product01.png"
                  costPriceNone
                  Tag
                  mobMgt={'0'}
                  mobMgb={'0'}
                  mobWidth={'100%'}
                />{' '}
              </Div>
            </Section>

            <Section>
              <Title>핫 딜! 국내 유일 면세점만의 특권</Title>
              <Div
                mobWidth="95%"
                mgAuto
                mobDsp="flex"
                mobJustify="space-between"
                mobAlign="flex-end"
                mobMgt="2rem"
                mobMgb="2rem"
              >
                <Span
                  as="p"
                  mgt="6rem"
                  mgb="6rem"
                  size="5rem"
                  color="#5ba6d2"
                  fontWeight="700"
                  textAlign="center"
                  mobSize="2rem"
                  mobTextAlign="left"
                  mobMgt="0"
                  mobMgb="0"
                >
                  {hydrated
                    ? `${hours || '00'}:${minutes || '00'}:${seconds || '00'}`
                    : '00-00-00'}
                  <span className="mo">&nbsp;&nbsp;남음</span>
                </Span>
                <Link href="">
                  <a className="mo">
                    <MoreView>
                      더보기
                      <Img
                        src={`/icons/icon-arrow.svg`}
                        alt="이동 아이콘"
                        pc={{ width: '16px', height: '16px' }}
                      />
                    </MoreView>
                  </a>
                </Link>
              </Div>
              <Div position="relative" mgt="6rem" mobMgt="2rem" mobPdl="2.5%">
                <SliderBox
                  slidesPerView={4}
                  spaceBetween={20}
                  medium
                  src="/assets/images/thum-product01.png"
                  costPriceNone
                  Tag
                  mobMgt={'0'}
                  mobMgb={'0'}
                  mobWidth={'100%'}
                />{' '}
              </Div>
            </Section>

            <Section>
              <Title>지금 받을 수 있는 혜택</Title>
              <Div
                mgt="4rem"
                mgb="3.5rem"
                mobMgt="2rem"
                mobPdl="2.5%"
                mobMgb="4rem"
              >
                <BenefitSwiper
                  loop={true}
                  navigation={true}
                  pagination={{ type: 'progressbar' }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1.1,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {SLIDE_COUNT?.map((item, idx) => (
                    <SwiperSlide
                      key={idx}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Img
                        src={`/images/event.png`}
                        alt=""
                        pc={{ width: '640px', height: '280px' }}
                        responsive={{ width: '100%', height: '36.53vw' }}
                        height100
                      />
                    </SwiperSlide>
                  ))}
                </BenefitSwiper>
              </Div>
              <Div mobMgb="4rem">
                <SmallBannerSwiper
                  slidesPerView={1}
                  pagination={{ type: 'fraction' }}
                  loop={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {SLIDE_COUNT?.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <SmallBanner>
                        <div>최상위 레벨, 그 존재의 이유</div>
                        <div>브랜드별 안티에이징 솔루션 아이템</div>
                      </SmallBanner>
                    </SwiperSlide>
                  ))}
                </SmallBannerSwiper>
              </Div>
            </Section>
          </Inner>
          <BgBox className="pc">
            <BackgroundImage>
              <img
                width="100%"
                height={402}
                src="/images/chanel.png"
                alt="chanel"
                style={{ objectFit: 'cover', objectPosition: '0 44%' }}
              />
              <ImageCover />
            </BackgroundImage>
          </BgBox>
          <Inner>
            <Section02>
              <Div
                mobWidth="95%"
                mgAuto
                mobDsp="flex"
                mobJustify="space-between"
                mobAlign="flex-end"
              >
                <Title02>신규 상품</Title02>
                <Link href="">
                  <a className="mo">
                    <MoreView>
                      더보기
                      <Img
                        src={`/icons/icon-arrow.svg`}
                        alt="이동 아이콘"
                        pc={{ width: '16px', height: '16px' }}
                      />
                    </MoreView>
                  </a>
                </Link>
              </Div>
              <Div
                mgt="3rem"
                mgb="5.4rem"
                dsp="flex"
                justify={isMob ? 'left' : 'center'}
                mobMgt="2rem"
                mobMgb="2rem"
              >
                <Tabs
                  theme={isMob ? mobileTabStyle : categoriesTabStyle}
                  tabList={categories}
                  currentIndex={categoriesTabIndex}
                  setCurrentIndex={setCategoriesTabIndex}
                />
              </Div>
              <Div mobPdl="2.5%">
                <SliderBox
                  slidesPerView={4}
                  spaceBetween={20}
                  medium
                  src="/assets/images/thum-product01.png"
                  costPriceNone
                  Tag
                  mobMgt={'0'}
                  mobMgb={'0'}
                  mobWidth={'100%'}
                />
              </Div>
            </Section02>

            <Section>
              <Title>설레임 한가득 스토리</Title>

              <StorySwiper
                loop={true}
                pagination={{ type: 'progressbar' }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10.5,
                  },
                  1024: {
                    slidesPerView: 4.52,
                    spaceBetween: 17,
                  },
                }}
              >
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  onClick={handleNavigateTo}
                >
                  <StoryImage src={`/images/green.png`} alt="" />
                  <div className="slide-desc">
                    <div>SUMMER PERFUME</div>
                    <div>시원한 여름 시트러스 향수를 만나보자</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  onClick={handleNavigateTo}
                >
                  <StoryImage src={`/images/green.png`} alt="" />
                  <div className="slide-desc">
                    <div>List Entity</div>
                    <div>Description goes here</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  onClick={handleNavigateTo}
                >
                  <StoryImage src={`/images/red.png`} alt="" />
                  <div className="slide-desc">
                    <div>List Entity</div>
                    <div>Description goes here</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  onClick={handleNavigateTo}
                >
                  <StoryImage src={`/images/red.png`} alt="" />
                  <div className="slide-desc">
                    <div>List Entity</div>
                    <div>Description goes here</div>
                  </div>
                </SwiperSlide>
              </StorySwiper>
            </Section>

            <Section>
              <Title>태양을 닮은 메이크업</Title>
              <Section6FlexWrap>
                <Sec6LargeBox style={{ position: 'relative' }}>
                  <img src={`/assets/images/cosmetic01.png`} alt="product" />
                  <strong>1</strong>
                  <Sec6TxtWrap first>
                    <Sec6Tit>
                      브랜드
                      <strong>상품</strong>
                    </Sec6Tit>
                    <Sec6PriceWrap>
                      <Div>
                        <Sec6Price gray> $233</Sec6Price>
                        <Sec6Price red> 20%</Sec6Price>
                      </Div>
                      <Div>
                        <Sec6Price bold>$222</Sec6Price>
                        <Sec6Price> (232,000원)</Sec6Price>
                      </Div>
                    </Sec6PriceWrap>
                  </Sec6TxtWrap>
                </Sec6LargeBox>

                <Sec6SmallBoxWrap>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>2</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>3</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>4</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>5</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                </Sec6SmallBoxWrap>
              </Section6FlexWrap>
            </Section>
            <Section>
              <Title>태양을 닮은 메이크업</Title>
              <Section6FlexWrap>
                <Sec6LargeBox style={{ position: 'relative' }}>
                  <img src={`/assets/images/cosmetic01.png`} alt="product" />
                  <strong>1</strong>
                  <Sec6TxtWrap first>
                    <Sec6Tit>
                      브랜드
                      <strong>상품</strong>
                    </Sec6Tit>
                    <Sec6PriceWrap>
                      <Div>
                        <Sec6Price gray> $233</Sec6Price>
                        <Sec6Price red> 20%</Sec6Price>
                      </Div>
                      <Div>
                        <Sec6Price bold>$222</Sec6Price>
                        <Sec6Price> (232,000원)</Sec6Price>
                      </Div>
                    </Sec6PriceWrap>
                  </Sec6TxtWrap>
                </Sec6LargeBox>

                <Sec6SmallBoxWrap>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>2</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>3</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>4</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                  <Sec6SmallBox>
                    <Img
                      pc={{ width: '361px', height: '384px' }}
                      responsive={{
                        width: '160px',
                        height: '200px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      //이미지 사이즈 때문에 어쩔수 없이 width보다 이미지를 늘린 뒤 left, transform으로 위치를 조정했습니다.
                      src={`/assets/images/cosmetic02.png`}
                      alt="지방시 화장품"
                    />
                    <Sec6SmallBoxNum>5</Sec6SmallBoxNum>
                    <Sec6TxtWrap small>
                      <Sec6Tit>
                        <em> 브랜드</em>
                        <strong> 상품명</strong>
                      </Sec6Tit>
                      <Sec6PriceWrap>
                        <Div>
                          <Sec6Price gray> $34</Sec6Price>
                          <Sec6Price red> 10%</Sec6Price>
                        </Div>
                        <Div>
                          <Sec6Price bold>$34</Sec6Price>
                          <Sec6Price> 10%</Sec6Price>
                        </Div>
                      </Sec6PriceWrap>
                    </Sec6TxtWrap>
                  </Sec6SmallBox>
                </Sec6SmallBoxWrap>
              </Section6FlexWrap>
            </Section>

            <Section>
              <Link href="/influencer-reviews">
                <a>
                  <Title onClick={() => console.log('review click')}>
                    인플루언서 리뷰
                    <Link href="/influencer-reviews">
                      <a className="mo">
                        <MoreView>
                          더보기
                          <Img
                            src={`/icons/icon-arrow.svg`}
                            alt="이동 아이콘"
                            pc={{ width: '16px', height: '16px' }}
                          />
                        </MoreView>
                      </a>
                    </Link>
                  </Title>
                </a>
              </Link>

              <InfluencerReviewSwiper
                loop={true}
                navigation={true}
                pagination={{ type: 'progressbar' }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1.45,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4.035,
                    spaceBetween: 19,
                  },
                }}
              >
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <ReviewImageBox>
                    <ReviewImage src={`/images/cosmetic.png`} alt="" />
                    <ReviewImageComment>
                      <p
                        style={{
                          color: '#999',
                        }}
                      >
                        "@koreanair
                      </p>
                      <span>#랑콤 </span>
                      <span>#파운데이션</span>
                      <span>#철벽피부</span>
                      <span>#대한한공 국내선 면...</span>
                    </ReviewImageComment>
                  </ReviewImageBox>
                  <ReviewTextBox>
                    <div>하류종일 무너짐없는 파운데이션</div>
                    <div>랑콤 펭 이돌 롱라스팅 파운데이션</div>
                    <div>
                      <img src={`/icons/icon-star.png`} alt="rate" />
                      <strong>5</strong>
                      <span>(5.0)</span>
                    </div>
                  </ReviewTextBox>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <ReviewImageBox>
                    <ReviewImage src={`/images/cosmetic.png`} alt="" />
                    <ReviewImageComment>
                      <p
                        style={{
                          color: '#999',
                        }}
                      >
                        "@koreanair
                      </p>
                      <span>#랑콤 </span>
                      <span>#파운데이션</span>
                      <span>#철벽피부</span>
                      <span>#대한한공 국내선 면...</span>
                    </ReviewImageComment>
                  </ReviewImageBox>
                  <ReviewTextBox>
                    <div>하류종일 무너짐없는 파운데이션</div>
                    <div>랑콤 펭 이돌 롱라스팅 파운데이션</div>
                    <div>
                      <img src={`/icons/icon-star.png`} alt="rate" />
                      <strong>5</strong>
                      <span>(5.0)</span>
                    </div>
                  </ReviewTextBox>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <ReviewImageBox>
                    <ReviewImage src={`/images/cosmetic.png`} alt="" />
                    <ReviewImageComment>
                      <p
                        style={{
                          color: '#999',
                        }}
                      >
                        "@koreanair
                      </p>
                      <span>#랑콤 </span>
                      <span>#파운데이션</span>
                      <span>#철벽피부</span>
                      <span>#대한한공 국내선 면...</span>
                    </ReviewImageComment>
                  </ReviewImageBox>
                  <ReviewTextBox>
                    <div>하류종일 무너짐없는 파운데이션</div>
                    <div>랑콤 펭 이돌 롱라스팅 파운데이션</div>
                    <div>
                      <img src={`/icons/icon-star.png`} alt="rate" />
                      <strong>5</strong>
                      <span>(5.0)</span>
                    </div>
                  </ReviewTextBox>
                </SwiperSlide>
              </InfluencerReviewSwiper>
            </Section>

            <LastSection>
              <LastSectionFLexBox>
                <LastSecTitWrap>
                  <div>Duty Free Shopping Guide</div>
                  <div>SKY SHOP</div>
                  <div>
                    <span> 2022.07</span>
                    <Div mgl="18px" mobMgl="4px" dsp="inline-block">
                      <Img
                        pc={{ width: '40px', height: '24px' }}
                        responsive={{ width: '14.8px', height: '14.8px' }}
                        src={`/assets/icons/icon-arrow-bk.svg`}
                        alt="arrow"
                      />
                    </Div>
                  </div>
                </LastSecTitWrap>

                <BottomImgBnrWrap>
                  <BottomBannerImageBox>
                    {/* <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      
                      width: '100%',
                      height: '100%',
                    }}
                  ></div> */}
                  </BottomBannerImageBox>
                  <BottomBnrTxtBox>
                    <p>
                      <span>
                        <strong>MATCH</strong>
                      </span>
                      혼자서도 하는 페어링
                    </p>
                    <p>
                      <span>
                        <strong>SEASON</strong>
                      </span>
                      CHILL, IT'S SUMMER
                    </p>
                    <p>
                      <span>
                        <strong>SCENT</strong>
                      </span>
                      7월을 담은 향수
                    </p>
                    <p>
                      <span>
                        <strong>MEN'S GROOMING</strong>
                      </span>
                      어메니티 대신
                    </p>
                    <p>
                      <span>
                        <strong>UNBOXING</strong>
                      </span>
                      초콜릿 상자 오픈식
                    </p>
                  </BottomBnrTxtBox>
                </BottomImgBnrWrap>
              </LastSectionFLexBox>
            </LastSection>
          </Inner>
        </StyledDiv>
      </Wrapper>
    </Bg>
  );
}
const mobileTabStyle = createTheme({
  components: {
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          style: {
            display: 'none',
          },
        },
      },
      styleOverrides: {
        root: {
          paddingLeft: '15px',
        },
        scroller: {
          display: 'flex',
        },
        flexContainer: {
          alignItems: 'center',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '10px 10px',
          fontSize: '1.4rem',
          color: '#000',
          minWidth: '50px',
          minHeight: '0',
          borderRadius: 20,
          border: '1px solid #ccc',
          marginRight: '0.9rem',
          '&.Mui-selected': {
            color: '#FFFFFF',
            backgroundColor: '#191919',
            border: '1px solid #000',
          },
        },
      },
    },
  },
});

const categoriesTabStyle = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: '0px !important',
        },
      },
      defaultProps: {
        TabIndicatorProps: {
          style: {
            // display: 'block',
            background: '#000',
            height: '2px',
            // display: {isMob ? 'none' : 'block'},
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 29.5,
          paddingRight: 29.5,
          color: '#000',
          fontSize: '20px',

          '&.Mui-selected': {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#000',
            responsiveFontSizes: '1.4rem',
          },
        },
      },
    },
  },
});

const newProductsTabStyle = createTheme({
  components: {
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          style: {
            display: 'block',
            background: '#fff',
            height: '2px',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 29.5,
          paddingRight: 29.5,
          color: '#fff',
          fontSize: '2rem',
          '&.Mui-selected': {
            color: '#fff',
            fontSize: '20px',
            fontWeight: 600,
          },
        },
      },
    },
  },
});

const SwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 780px;
  margin: auto;
`;

const BannerSwiperContainer = styled(SwiperContainer)`
  position: relative;
  overflow: hidden;
  // width: 1600px;
  min-width: 1300px;
  max-width: 1600px;
  height: 780px;
  margin: auto;
  margin-bottom: 20px;
  ${theme.device.tablet} {
    min-width: auto;
  }
  ${theme.device.responsive} {
    min-width: auto;
    width: 100vw;
    height: 120vw;
  }
  .for-pagination-swiper {
    width: 100% !important;
  }
`;
const MainBannerTxtWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 189px;
  left: 16%;
  color: #fff;
  z-index: 999;
  span {
    display: inline-block;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 20px;
    font-size: 2rem;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  ${theme.device.responsive} {
    left: 15px;
    left: 0;
    padding: 0 20px;
    top: 0;
    span {
      width: 76px;
      height: 31px;
      font-size: 1.8rem;
      /* margin-top: 238px; */
      margin-top: 63.466vw;
      margin-bottom: 2rem;
    }
  }
`;
const MainBannerTit = styled.p`
  margin-bottom: 40px;
  font-size: 5.2rem;
  line-height: 1.1;
  ${theme.device.responsive} {
    font-size: 2.4rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }
`;
const MainBannerSubTxt = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  ${theme.device.responsive} {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
const PlayHandler = styled.div`
  position: absolute;
  /* bottom: 60px;
  left: 77%; */
  left: auto !important;
  right: 305px;
  bottom: 40px;
  z-index: 200;
  width: 89px;
  height: 31.8px;
  ${theme.device.responsive} {
    /* bottom: 4.5%; */
    bottom: 5.5vw;
    left: auto !important;
    right: 6%;
    height: 10px;
    width: 54px;
    height: 20px;
  }
`;

const PlayHandlerPc = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
  }
  ${theme.device.responsive} {
    display: none;
  }
`;
const PlayHandlerMob = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 9px;
    height: 9px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
  ${theme.device.responsive} {
    display: block;
    opacity: 1;
  }
`;

const Bg = styled.div`
  position: relative;
  min-height: 100vh;
  margin-top: -189px;
  min-width: 1300px;
  .mo {
    display: none;
  }
  ${theme.device.responsive} {
    .mo {
      display: inline-block;
    }
    .pc {
      display: none;
    }
    min-width: auto;
    min-width: 375px;
    margin-top: -89px;
    padding-bottom: 0;
  }
`;
const Wrapper = styled.div`
  /* overflow: hidden; */
  margin: auto;
`;
const Inner = styled.div`
  margin: auto;
  width: 100%;
`;

const Section = styled.div`
  width: 1300px;
  margin: auto;
  margin-top: 120px;
  :nth-of-type(1) {
    margin-top: 0;
  }
  ${theme.device.tablet} {
    width: 100%;
  }
  ${theme.device.responsive} {
    width: 100%;
    margin-top: 40px;
  }
`;
const Section02 = styled(Section)`
  margin-top: -140px !important;
  ${theme.device.responsive} {
    margin-top: 0 !important;
  }
`;
const Section6 = styled(Section)`
  margin-top: 120px;
  padding-left: 310px;
  padding-right: 310px;
`;
const LastSection = styled(Section)`
  padding-bottom: 120px;
  ${theme.device.responsive} {
    background: #f4f4f4;
    min-width: 375px;
    padding-bottom: 8rem;
    margin-bottom: 2rem;
  }
`;

const SwiperContWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 1300px;
  height: 204px;
  margin: 35px auto 0;
  ${theme.device.tablet} {
    width: 100%;
  }
  ${theme.device.responsive} {
    width: 100%;
    height: auto;
    margin: 35px 0 0 0;
    padding-left: 2.5%;
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;
const Section1Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: auto;
  ${theme.device.responsive} {
    min-width: 90px;
    min-height: 90px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    margin-bottom: 12px;
  }
`;
const Section1Text = styled.div`
  text-align: center;
  font-family: 'PretendardBold';
  ${theme.device.responsive} {
    span {
      display: block;
    }
  }
`;

const Title = styled.h1`
  font-family: 'PretendardBold';
  font-size: 40px;
  text-align: center;
  ${theme.device.responsive} {
    width: 95%;
    margin: 0 auto;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 2.4rem;
  }
`;
const Title02 = styled(Title)`
  position: relative;
  color: #fff;
  ${theme.device.responsive} {
    color: #000;
  }
`;
const MoreView = styled.div`
  font-size: 1.4rem;
  display: none;
  align-items: center;
  ${theme.device.responsive} {
    display: flex;
  }
`;

const ReviewTextBox = styled.div`
  margin-top: 20px;
  div:nth-of-type(1) {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  div:nth-of-type(2) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5;
    color: #aaa;
  }
  div:nth-of-type(3) {
    font-size: 18px;
    display: flex;
    span {
      color: #aaa;
    }
  }
  ${theme.device.responsive} {
    div:nth-of-type(1) {
      margin-bottom: 7px;
      font-size: 16px;
      line-height: 1.5;
    }
    div:nth-of-type(2) {
      margin-bottom: 16px;
      font-size: 13px;
      line-height: 1.85;
      min-height: 48.09px;
    }
    div:nth-of-type(3) {
      font-size: 14px;
    }
  }
`;

const ReviewImageBox = styled.div`
  position: relative;
  width: 310px;
  height: 310px;
  ${theme.device.responsive} {
    width: 100%;
    height: auto;
  }
`;

const ReviewImageComment = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
  position: absolute;
  /* top: 100px;
  left: 100px; */
  bottom: 10px;
  right: 10px;
  z-index: 1;
  display: block;
  color: #fff;
  line-height: 2;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  p {
    margin-bottom: 2rem;
  }
  span {
    display: block;
    line-height: 1.88;
  }
  ${theme.device.responsive} {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    /* top: 110px;
    left: 110px; */
    padding: 10px;
    font-size: 11px;
    p {
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 1rem;
    }
    span {
      line-height: 1.64;
    }
  }
`;

const ReviewImage = styled.img`
  position: relative;
  width: 310px;
  height: 310px;
  ${theme.device.responsive} {
    width: 100%;
    height: 66vw;
  }
`;

const SmallBanner = styled.div`
  background: url(../images/banner.png) no-repeat;
  background-position: 0 -50px;
  background-size: cover;
  height: 180px;
  border-radius: 15px;
  div {
    color: #fff;
    position: relative;
    left: 750px;
    top: 45px;
    /* ${theme.device.responsive} {
      display: none;
    } */
  }
  div:nth-of-type(1) {
    font-size: 3.6rem;
    font-weight: 600;
  }
  div:nth-of-type(2) {
    font-size: 20px;
  }
  ${theme.device.responsive} {
    border-radius: 0;
    height: 21.33vw;
    min-height: 80px;
    max-height: 180px;
    background-position: 0;
    div {
      left: 50%;
      top: 10px;
    }
    div:nth-of-type(1) {
      font-size: 1.6rem;
    }
    div:nth-of-type(2) {
      font-size: 1.2rem;
    }
  }
`;

const Section6FlexWrap = styled.div`
  display: flex;
  margin-top: 4rem;
  ${theme.device.responsive} {
    min-width: 375px;
    display: block;
    margin-top: 2rem;
  }
`;
const Sec6LargeBox = styled.div`
  width: 484px;
  height: 768px;
  position: relative;
  overflow: hidden;
  background: center top/ 100% auto no-repeat
    url('/assets/images/cosmetic01.png');
  > strong {
    position: absolute;
    width: 110px;
    right: 0;
    top: 0;
    font-family: 'Libre Baskerville';
    font-size: 22rem;
    text-align: center;
    color: #fff;
    font-weight: 400;
  }
  ${theme.device.responsive} {
    background-position: bottom;
    max-width: none;
    max-height: none;
    width: 95%;
    height: 95vw;
    margin: 0 auto;
    border-radius: 1rem;
    > strong {
      font-size: 6rem;
      width: auto;
      right: 2.5rem;
      top: 1rem;
    }
  }
`;
const Sec6SmallBoxWrap = styled.div`
  max-width: 762px;
  width: 100%;
  margin-left: 5.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 384px;
  grid-column-gap: 4rem;
  ${theme.device.responsive} {
    max-width: none;
    width: 100%;
    margin: 2rem 0 0 2.5%;
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    overflow-x: scroll;
    -ms-overflow-style: none; /* Explorer */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome */
    }
  }
`;
const Sec6SmallBox = styled.div`
  position: relative;
  ${theme.device.responsive} {
    width: 140px;
    height: 240px;
  }
`;
const Sec6SmallBoxNum = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-family: 'Libre Baskerville';
  font-weight: 100;
  font-size: 8.8rem;
  text-align: center;
  color: #ccc;
  ${theme.device.responsive} {
    font-size: 3rem;
    top: 0;
    right: 0;
  }
`;
const Sec6TxtWrap = styled.div`
  position: absolute;
  ${function (props) {
    if (props.first) {
      return `
        bottom: 6rem;
        left: 6rem;        
      `;
    } else if (props.small) {
      return `
        width: 100%;
        text-align: center;
        bottom:0;
        left:50%;
        transform: translateX(-50%);
        padding-left:10px;
      `;
    }
  }};
  ${theme.device.responsive} {
    ${function (props) {
      if (props.first) {
        return `
          bottom: 2rem;
          left: 2rem;        
        `;
      } else if (props.small) {
        return `
          // position: static;
          text-align: left;
          left: 0;
          transform: none;
        `;
      }
    }};
  }
`;
const Sec6Tit = styled.div`
  margin-bottom: 2rem;
  em {
    display: block;
    font-size: 1.6rem;
    color: #666;
    margin-bottom: 1.2rem;
    font-style: normal;
    font-family: 'PretendardMedium';
  }
  strong {
    display: block;
    font-size: 2rem;
    color: #222;
    font-family: 'PretendardSemiBold';
  }
  ${theme.device.responsive} {
    margin-bottom: 1.1rem;
    em {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    strong {
      font-size: 1.3rem;
    }
  }
`;
const Sec6PriceWrap = styled.div`
  > div {
    margint-bottom: 0.4rem;
  }
  ${theme.device.responsive} {
    > div {
      margint-bottom: 0.3rem;
    }
  }
`;
const Sec6Price = styled.em`
  display: inline-block;
  font-style: normal;
  font-size: 2rem;
  ${function (props) {
    if (props.gray) {
      return `
        color: #666; 
        text-decoration: line-through;
        
      `;
    } else if (props.red) {
      return `
        color: #e1251b;
        font-family: 'PretendardSemiBold';
        margin-left: 1.2rem
      `;
    } else if (props.bold) {
      return `
        font-family: 'PretendardSemiBold';
        font-size: 2.5rem;
      `;
    }
  }};
  ${theme.device.responsive} {
    font-size: 1.2rem;
    ${function (props) {
      if (props.gray) {
        return `
          font-size: 1.2rem;
        `;
      } else if (props.red) {
        return `
        font-size: 1.3rem;
        `;
      } else if (props.bold) {
        return `
          font-size: 1.4rem;
        `;
      }
    }}
  } ;
`;

const Section6Grid = styled.div`
  margin-top: 60px;
  display: grid;
  > div:nth-of-type(1) {
    max-width: 484px;
    max-height: 868px;
    aspect-ratio: 484 / 868;
    object-fit: contain;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  > div:nth-of-type(2) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
  > div:nth-of-type(3) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
  }
  ${theme.device.responsive} {
    margin-top: 20px;
  }
`;

const GridSmallItem = styled.div`
  position: relative;
  max-width: 408px;
  max-height: 434px;
`;

const LastSectionFLexBox = styled.div`
  display: flex;
  height: 600px;
  gap: 20px;
  ${theme.device.responsive} {
    width: 95%;
    margin: 0 auto;
    display: block;
    height: auto;
  }
`;

const LastSecTitWrap = styled.div`
  flex: 1.1;
  height: 100%;
  border-radius: 15px;
  background-color: #f4f4f4;
  font-family: 'PretendardBold';
  padding: 132px 60px;
  > div:nth-of-type(1) {
    font-size: 2rem;
  }
  > div:nth-of-type(2) {
    font-size: 6rem;
  }
  > div:nth-of-type(3) {
    font-size: 4rem;
    margin-top: 200px;
  }
  ${theme.device.responsive} {
    padding: 39px 0 0 0;
    height: auto;
    border-radius: 0px;
    > div:nth-of-type(1) {
      font-size: 1.2rem;
    }
    > div:nth-of-type(2) {
      font-size: 2.4rem;
    }
    > div:nth-of-type(3) {
      font-size: 2rem;
      margin-top: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const BottomImgBnrWrap = styled.div`
  position: relative;
  flex: 2;
`;
const BottomBannerImageBox = styled.div`
  position: relative;
  height: 600px;
  z-index: 10;
  border-radius: 15px;
  background: url('../images/shu_sm.png') no-repeat;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  ${theme.device.responsive} {
    margin-top: 1.2rem;
    width: 100%;
    min-height: 180px;
    height: 48vw;
    background-size: 100% auto;
    background-position: center;
  }
`;
const BottomBnrTxtBox = styled.div`
  color: #fff;
  position: absolute;
  top: 100px;
  left: 145px;
  z-index: 20;
  p {
    margin-bottom: 4px;
    font-family: 'PretendardBold';
  }
  span {
    font-size: 24px;
    margin-right: 10px;
  }
  ${theme.device.responsive} {
    position: relative;
    top: 0;
    left: 0;
    background: #fff;
    color: #000;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    p {
      font-size: 1.6rem;
    }
    span {
      font-size: 1.4rem;
    }
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
`;

const BgBox = styled.div`
  position: relative;
  top: 155px;
  width: 100%;
  ${theme.device.responsive} {
    top: 0;
  }
`;

const BackgroundImage = styled.div`
  display: flex;

  justify-content: center;
  background-color: #79756d;
`;

const ImageCover = styled.div`
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 1600px;
  height: 402px;
  background-color: black;
  opacity: 0.4;

  ${theme.device.tablet} {
    width: 100%;
  }
`;

const BannerSwiper = styled(Swiper)`
  .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    /* top: 490px; */
    top: 678px;
  }
  .swiper-pagination-current {
    color: #fff !important;
    font-weight: bold !important;
    opacity: 1 !important;
  }
  ${theme.device.responsive} {
    .swiper-pagination-progressbar,
    .swiper-pagination-progressbar.swiper-pagination-horizontal {
      display: none;
    }
  }
`;
const BannerNumberSwiper = styled(Swiper)`
  .swiper-pagination-fraction {
    position: absolute;
    left: 90.3%;
    left: auto !important;
    right: 305px;
    bottom: 40px;
    width: 89px;
    padding: 7px 22px 4px 1px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    font-size: 1.6rem;
    color: #fff !important;
  }
  ${theme.device.responsive} {
    .swiper-pagination-fraction {
      /* bottom: 4.5%; */
      bottom: 5.5vw;
      left: auto !important;
      right: 6%;
      width: 54px;
      height: 20px;
      font-size: 1.2rem;
      padding: 0;
      line-height: 20px;
      padding-right: 11px;
    }
  }
`;
const BenefitSwiper = styled(Swiper)`
  padding-bottom: 42px;
  ${theme.device.responsive} {
    padding-bottom: 20px;
  }
  .swiper-pagination-progressbar {
    top: 320px;
    ${theme.device.responsive} {
      bottom: 0 !important;
      top: auto !important;
      width: 97.5%;
    }
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transform: translatey(-30px);
    ${theme.device.responsive} {
      display: none;
    }
  }
`;

const SmallBannerSwiper = styled(Swiper)`
  .swiper-pagination-fraction {
    width: 54px;
    padding: 3px 0;
    left: 93%;
    border-radius: 10px;
    font-size: 1.2rem;
    color: #fff !important;
    background: rgba(0, 0, 0, 0.5);
    ${theme.device.responsive} {
      width: 48px;
      left: calc(100% - 20px);
      bottom: 12px;
      transform: translateX(-100%);
    }
  }
`;

const InfluencerReviewSwiper = styled(Swiper)`
  margin-top: 60px;
  padding-bottom: 80px;
  width: 100%;
  // margin-left: 2.5%;
  position: relative;
  .swiper-pagination-progressbar {
    top: 480px;
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transform: translatey(-90px);
  }
  ${theme.device.responsive} {
    margin-top: 24px;
    padding-bottom: 28px;
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-pagination-progressbar {
      /* top: 111vw;
      top: 460px; */
      bottom: 0 !important;
      top: auto !important;
      width: 95%;
    }
  }
`;

const StorySwiper = styled(Swiper)`
  margin-top: 60px;
  padding-bottom: 113px;
  ${theme.device.responsive} {
    margin-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 2.5%;
  }
  .swiper-wrapper {
    height: 500px;
    ${theme.device.responsive} {
      height: auto;
    }
  }
  .swiper-pagination-progressbar {
    top: 610px;
    ${theme.device.responsive} {
      bottom: 0 !important;
      top: auto !important;
      width: 97.5%;
    }
  }
  .swiper-pagination-progressbar-fill {
    background: #000 !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transform: translatey(-40px);
    ${theme.device.responsive} {
      display: none;
    }
  }
  .swiper-slide {
    height: 390px;
    transition: height 340ms, width 340ms;
    ${theme.device.responsive} {
      width: auto;
      height: 97.33vw;
      max-height: 552px;
      :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 17px;
        background: linear-gradient(
          181deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.2) 1%
        );
      }
    }
  }
  .swiper-slide-active {
    width: 428px !important;
    height: 552px;
    ${theme.device.responsive} {
      width: fit-content !important;
      height: 97.33vw;
      max-height: 552px;
    }
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 17px;
      background: linear-gradient(
        181deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 1%
      );
    }
  }
  .slide-desc {
    position: absolute;
    bottom: 0;
    z-index: 100;
    transform: translateY(100%);
    ${theme.device.responsive} {
      color: #fff;
      bottom: 27px;
      left: 18px;
      transform: translateY(0);
    }
    > div:nth-of-type(1) {
      margin-top: 20px;
      font-family: 'PretendardBold';
      font-size: 2.8rem;
      ${theme.device.responsive} {
        font-size: 1.5rem;
      }
    }
    > div:nth-of-type(2) {
      margin-top: 12px;
      font-size: 1.8rem;
      color: #aaa;
      ${theme.device.responsive} {
        font-size: 1.2rem;
        color: #fff;
        margin-top: 9px;
      }
    }
  }
  .swiper-slide-active .slide-desc {
    color: #fff;
    bottom: 22%;
    left: 30px;
    transform: translateY(100%);
    & > div:nth-of-type(2) {
      font-size: 1.3rem;
      color: #fff;
    }
    ${theme.device.responsive} {
      left: 18px;
      bottom: 27px;
      transform: translateY(0%);
    }
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin: auto;
  object-fit: cover;
  border-radius: 17px;
`;

const StyledDiv = styled(Div)`
  ${theme.device.tablet} {
    padding: 0 25px 0 25px;
  }
`;
