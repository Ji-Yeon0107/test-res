import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import Paging from 'components/atoms/Paging';

export default function ProdReviewBox() {
  return (
    <ProdReviewWrap>
      <ProdDetailTitle>상품 리뷰</ProdDetailTitle>
      <Div mgt="60px" mobMgt="40px">
        <ReviewTotal>
          <Div dsp="flex" align="center">
            <Div dsp="flex">
              <Img
                pc={{ width: '36px', height: '36px' }}
                responsive={{ width: '24px', height: '24px' }}
                src={`/assets/icons/icon-star.svg`}
                alt="별 아이콘"
              />
              <Img
                pc={{ width: '36px', height: '36px' }}
                responsive={{ width: '24px', height: '24px' }}
                src={`/assets/icons/icon-star.svg`}
                alt="별 아이콘"
              />
              <Img
                pc={{ width: '36px', height: '36px' }}
                responsive={{ width: '24px', height: '24px' }}
                src={`/assets/icons/icon-star.svg`}
                alt="별 아이콘"
              />
              <Img
                pc={{ width: '36px', height: '36px' }}
                responsive={{ width: '24px', height: '24px' }}
                src={`/assets/icons/icon-star.svg`}
                alt="별 아이콘"
              />
              <Img
                pc={{ width: '36px', height: '36px' }}
                responsive={{ width: '24px', height: '24px' }}
                src={`/assets/icons/icon-star-half.svg`}
                alt="별 아이콘"
              />
            </Div>

            <Span
              dsp="inline-block"
              size="4.0rem"
              mobSize="3rem"
              mgl="32px"
              mgr="45px"
              mobMgl="22px"
              mobMgr="0"
              fontWeight="700"
            >
              4.6
              <Span
                size="2.5rem"
                mobSize="1.8rem"
                color="#a1a1a1"
                fontWeight="400"
              >
                /5
              </Span>
            </Span>
          </Div>
          <BlackBtn>상품리뷰 작성</BlackBtn>
        </ReviewTotal>
        {/* 인플루언서 리뷰 */}
        {/* <Div mgt="80px">
                  <ReviewTit>
                    <strong>인플루언서 리뷰</strong>
                    <span> (123건)</span>
                  </ReviewTit>
                  <ReviewList>
                    <ul>
                      <li>
                        <Div width="calc(100% - 90px)">
                          <Div dsp="flex" align="center">
                            <div>
                              <Img
                                pc={{ width: '18px', height: '18px' }}
                                src={`/assets/icons/icon-star.svg`}
                                alt="별 아이콘"
                              />
                            </div>
                            <Span size="1.4rem" dsp="inline-block" mgl="4px">
                              4.
                            </Span>
                            <Span size="1.2rem" color="#aaa">
                              <Span dsp="inline-block" mgl="10px" mgr="10px">
                                {' '}
                                |{' '}
                              </Span>
                              2022.06.01
                            </Span>
                          </Div>
                          <Span as="p" mgt="20px" color="#666">
                            역시 키엘 수분크림은 최고예요! 리뉴얼 버전도 사보고
                            싶어요 <br />제 인생템.. 좋습니다 진짜 추천드려요!
                          </Span>
                        </Div>
                        <Img
                          pc={{ width: '90px', height: '90px' }}
                          src={`/assets/images/thum-pro-list-review01.png`}
                          alt="별 아이콘"
                        />
                      </li>
                      <li>
                        <Div width="calc(100% - 90px)">
                          <Div dsp="flex" align="center">
                            <div>
                              <Img
                                pc={{ width: '18px', height: '18px' }}
                                src={`/assets/icons/icon-star.svg`}
                                alt="별 아이콘"
                              />
                            </div>
                            <Span size="1.4rem" dsp="inline-block" mgl="4px">
                              4.
                            </Span>
                            <Span size="1.2rem" color="#aaa">
                              <Span dsp="inline-block" mgl="10px" mgr="10px">
                                {' '}
                                |{' '}
                              </Span>
                              2022.06.01
                            </Span>
                          </Div>
                          <Span as="p" mgt="20px" color="#666">
                            인터넷으로 주문하고 기내에서 받아서 너무 편하고
                            좋았어요.
                          </Span>
                        </Div>
                        <Img
                          pc={{ width: '90px', height: '90px' }}
                          src={`/assets/images/thum-pro-list-review02.png`}
                          alt="별 아이콘"
                        />
                      </li>
                      <li>
                        <Div width="calc(100% - 90px)">
                          <Div dsp="flex" align="center">
                            <div>
                              <Img
                                pc={{ width: '18px', height: '18px' }}
                                src={`/assets/icons/icon-star.svg`}
                                alt="별 아이콘"
                              />
                            </div>
                            <Span size="1.4rem" dsp="inline-block" mgl="4px">
                              4.
                            </Span>
                            <Span size="1.2rem" color="#aaa">
                              <Span dsp="inline-block" mgl="10px" mgr="10px">
                                {' '}
                                |{' '}
                              </Span>
                              2022.06.01
                            </Span>
                          </Div>
                          <Span as="p" mgt="20px" color="#666">
                            너무너무 좋아요! 친구 선물해주면 좋아할거 같아요!
                          </Span>
                        </Div>
                        <Img
                          pc={{ width: '90px', height: '90px' }}
                          src={`/assets/images/thum-pro-list-review02.png`}
                          alt="별 아이콘"
                        />
                      </li>
                    </ul>
                  </ReviewList>
                </Div> */}
        {/* 포토리뷰 */}
        <Div mgt="80px" mobMgt="60px">
          <ReviewTit2>
            <strong>포토, 동영상 리뷰</strong>
            <span> (25건)</span>
          </ReviewTit2>
          <ReviewPhoto>
            <PhotoWrap>
              <Img
                as="li"
                pc={{ width: '158px', height: '158px' }}
                responsive={{ width: '113px', height: '113px' }}
                src={`/assets/images/thum-pro-photo-review01.png`}
                alt="포토 리뷰"
              />
            </PhotoWrap>
            <PhotoWrap>
              <Img
                as="li"
                pc={{ width: '158px', height: '158px' }}
                responsive={{ width: '113px', height: '113px' }}
                src={`/assets/images/thum-pro-photo-review02.png`}
                alt="포토 리뷰"
              />
            </PhotoWrap>
            <PhotoWrap video>
              <Img
                as="li"
                pc={{ width: '158px', height: '158px' }}
                responsive={{ width: '113px', height: '113px' }}
                src={`/assets/images/thum-review03.png`}
                alt="포토 리뷰"
              />
            </PhotoWrap>
            <PhotoWrap>
              {' '}
              <Img
                as="li"
                pc={{ width: '158px', height: '158px' }}
                responsive={{ width: '113px', height: '113px' }}
                src={`/assets/images/thum-pro-photo-review04.png`}
                alt="포토 리뷰"
              />
            </PhotoWrap>
            <PhotoWrap>
              <Img
                as="li"
                pc={{ width: '158px', height: '158px' }}
                responsive={{ width: '113px', height: '113px' }}
                src={`/assets/images/thum-pro-photo-review05.png`}
                alt="포토 리뷰"
              />
            </PhotoWrap>
          </ReviewPhoto>
        </Div>
        {/* 전체리뷰 */}
        <Div mgt="80px" mobMgt="60px">
          <Div dsp="flex" justify="space-between" align="center">
            <ReviewTit>
              <strong>전체 리뷰</strong>
              <span> (123건)</span>
            </ReviewTit>
            <MobLatestSort>
              최신순
              <Img
                pc={{ width: '16px', height: '16px' }}
                src={`/assets/icons/icon-arrow-down-b.svg`}
                alt="별 아이콘"
              />
            </MobLatestSort>
            <TotalReviewNav>
              <ul>
                <li className="active">베스트순</li>
                <li>최신순</li>
                <li>평점높은순</li>
              </ul>
            </TotalReviewNav>
          </Div>
          <ReviewListBox>
            <ReviewListWrap>
              <ReviewList>
                <Div width="calc(100% - 90px)" mobWidth="100%">
                  <Div dsp="flex" align="center" mobJustify="space-between">
                    <Div dsp="flex">
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Span size="1.4rem" dsp="inline-block" mgl="4px">
                        5.
                      </Span>
                    </Div>
                    <div>
                      <Span size="1.2rem" color="#aaa" fontWeight="300">
                        <Span
                          dsp="inline-block"
                          mobDsp="none"
                          mgl="8px"
                          mgr="8px"
                        >
                          {' '}
                          |{' '}
                        </Span>
                        kimm********
                        <Span dsp="inline-block" mgl="8px" mgr="8px">
                          {' '}
                          |{' '}
                        </Span>
                        2022.06.01
                      </Span>
                    </div>
                  </Div>
                  <ReviewThumb>
                    <Img
                      pc={{ width: '90px', height: '90px' }}
                      src={`/assets/images/thum-pro-list-review01.png`}
                      alt="썸네일"
                    />
                  </ReviewThumb>
                  <Span as="p" mgt="20px" color="#666">
                    샘플써보고 좋아서 구입했어요 얼굴에 광이 나네요 할인할때
                    구입해서 좋아요. 추천합니다. 얼른 다시 기내 면세점 이용해서
                    구매하고 싶네요. 시슬리 백화점에서 구입하는거 보다 훨씬
                    저렴하고, 계속 쓰려고 쟁여놓아요
                  </Span>
                </Div>
              </ReviewList>
              <ReviewList>
                <Div width="calc(100% - 90px)" mobWidth="100%">
                  <Div dsp="flex" align="center" mobJustify="space-between">
                    <Div dsp="flex">
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star-b-line.svg`}
                        alt="별 아이콘"
                      />
                      <Span size="1.4rem" dsp="inline-block" mgl="4px">
                        4.
                      </Span>
                    </Div>

                    <div>
                      <Span size="1.2rem" color="#aaa" fontWeight="300">
                        <Span
                          dsp="inline-block"
                          mobDsp="none"
                          mgl="8px"
                          mgr="8px"
                        >
                          {' '}
                          |{' '}
                        </Span>
                        vdou***********
                        <Span dsp="inline-block" mgl="8px" mgr="8px">
                          {' '}
                          |{' '}
                        </Span>
                        2022.06.01
                      </Span>
                    </div>
                  </Div>
                  <ReviewThumb>
                    <Img
                      pc={{ width: '90px', height: '90px' }}
                      src={`/assets/images/thum-pro-list-review02.png`}
                      alt="썸네일"
                    />
                  </ReviewThumb>
                  <Span as="p" mgt="20px" color="#666">
                    인터넷으로 주문하고 기내에서 받아서 너무 편하고 좋았어요.
                    <br />
                    시슬리 평소에 너무 고가라 고민했는데, 이번 여행에서 시슬리
                    득템해서 좋았어요. 앞으로의 효과가 기대됩니다.
                  </Span>
                </Div>
              </ReviewList>
              <ReviewList>
                <Div width="calc(100% - 90px)" mobWidth="100%">
                  <Div dsp="flex" align="center" mobJustify="space-between">
                    <Div dsp="flex">
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Img
                        pc={{ width: '18px', height: '18px' }}
                        src={`/assets/icons/icon-star.svg`}
                        alt="별 아이콘"
                      />
                      <Span size="1.4rem" dsp="inline-block" mgl="4px">
                        5.
                      </Span>
                    </Div>

                    <Span size="1.2rem" color="#aaa" fontWeight="300">
                      <Span
                        dsp="inline-block"
                        mobDsp="none"
                        mgl="8px"
                        mgr="8px"
                      >
                        {' '}
                        |{' '}
                      </Span>
                      min7******
                      <Span dsp="inline-block" mgl="8px" mgr="8px">
                        {' '}
                        |{' '}
                      </Span>
                      2022.06.01
                    </Span>
                  </Div>
                  <Span as="p" mgt="20px" color="#666">
                    너무너무 좋아요! 친구 선물해주면 좋아할거 같아요!
                  </Span>
                </Div>

                {/* <Img
                          pc={{ width: '90px', height: '90px' }}
                          src={`/assets/images/thum-pro-list-review02.png`}
                          alt="썸네일"
                        /> */}
              </ReviewList>
              <Div mobDsp="none">
                <Paging />
              </Div>
              <Div
                dsp="none"
                mobDsp="flex"
                align="center"
                justify="flex-end"
                lineHeight="1.4rem"
                size="1.4rem"
                mgt="20px"
                cursorPointer
              >
                리뷰 전체보기
                <Img
                  pc={{ width: '16px', height: '16px' }}
                  src={`/assets/icons/icon-rightarrow-bk.svg`}
                  alt=""
                />
              </Div>
            </ReviewListWrap>
          </ReviewListBox>
        </Div>
      </Div>
    </ProdReviewWrap>
  );
}

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

const BlackBtn = styled(Btn)`
  background-color: #000;
  flex-grow: 2;
  font-family: 'PretendardBold';
  font-size: ${({ size }) => (size ? size : '18px')};
`;

// 상품리뷰
const ProdReviewWrap = styled.div`
  margin-top: 80px;
`;

const ReviewTotal = styled.div`
  border: 1px solid ${theme.color.primary.gray};
  padding: 60px 90px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  button {
    max-width: 314px;
    height: 60px;
  }
  ${theme.device.responsive} {
    border: 0;
    padding: 40px 0;
    flex-direction: column;
    padding: 0;
    margin-bottom: 0px;
    button {
      max-width: none;
      height: 44px;
      line-height: 44px;
      width: 100%;
      font-size: 1.6rem;
      font-family: 'Pretendard';
      margin-top: 30px;
    }
  }
`;
const ReviewListBox = styled.div``;
const ReviewListWrap = styled.ul`
  border-top: 1px solid ${theme.color.common.black};
  margin-top: 12px;
  ${theme.device.responsive} {
    margin-top: 20px;
  }
`;
const ReviewList = styled.li`
  padding: 18px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.primary.gray};
  position: relative;
  > div {
    min-height: 90px;
    ${theme.device.responsive} {
      min-height: auto;
    }
  }
`;
const ReviewThumb = styled.div`
  position: absolute;
  right: 0;
  top: 18px;
  ${theme.device.responsive} {
    position: static;
    margin-top: 20px;
  }
`;
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
const ReviewPhoto = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const PhotoWrap = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* ${({ video }) => {
    return (
      video &&
      `
      background:salmon;
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.3);
          z-index:10;
          position:absolute;
          top:0;
          left:0;

        }
      `
    );
  }}; */
  &:last-child::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:last-child::after {
    content: '+2';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 2rem;
    color: #fff;
  }
  ${({ plus }) => {
    return (
      plus &&
      `
        &:before {

          content: '';
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.3);
          z-index:1;
          position:absolute;
          top:0;
          left:0;

        }
        &:after {
          content: '+2';
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          z-index:1;
          font-size: 2rem;
          color: #fff;
        }
      `
    );
  }};
  ${theme.device.responsive} {
    &:nth-child(4) {
      display: none;
    }
    &:nth-child(5) {
      display: none;
    }
    &:nth-child(3)::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }
    &:nth-child(3)::after {
      content: '+2';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      font-size: 2rem;
      color: #fff;
    }
  }
`;
const TotalReviewNav = styled.div`
  max-width: 260px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    color: ${theme.color.gray.gray58};
    position: relative;
  }
  li.active {
    color: ${theme.color.common.black};
  }
  li.active:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
    right: -16px;
    background: top center / cover url('/assets/icons/icon-dropdown-black.svg')
      no-repeat;
  }
  ${theme.device.responsive} {
    display: none;
  }
`;
const MobLatestSort = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
