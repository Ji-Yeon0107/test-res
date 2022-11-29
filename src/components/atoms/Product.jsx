import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

import theme from 'styles/theme';
import Div from './Div';
import Span from './Span';
import { Btn } from './Button';
import Img from './Img';
import Modal from 'components/organisms/Modal';

export default function Product({
  card,
  medium,
  small,
  prodSmall,
  membership,
  ssop,
  present,
  height,
  src,
  costPriceNone,
  won,
  tag,
  Tag,
  Tag02,
  CardTag,
  mb,
  mr,
  con4,
  con3,
  btnThree,
  airProd,
  // btnThree === true / 찜, 장바구니, 예약하기
  productStatus,
  //'0' hover X
  // productStatus === '1' / 일시품절
  // productStatus === '2' / 19세상품(주류)
  // productStatus === false / 기본 버튼
  btnStatus,
  // btnStatus === false / 찜, 선물, 장바구니, 바로구매
  // btnStatus === true / 찜, 선물, 장바구니, 예약하기
  TimeDiscount,
  BestNumTag,
  priceWonSm,
  DealerStore,
  mobHeight,
  mobWidth,
  mobWrapWidth,
  mobMgb,
  mobMgt,
  mobMgr,
  mobCon2,
  mobMaxwidth,

  id,
  categoryName,
  // TODO: later brand should be 'brandName'
  brand,
}) {
  const brandName = () => {
    if (prodSmall) {
      return '설화수';
    } else if (membership) {
      return '발렌타인';
    } else {
      return 'Brand';
    }
  };

  const prodName = () => {
    if (prodSmall) {
      return '설화수 자음생크림 소프트 (60ml)';
    } else if (ssop) {
      return '발렌타인 17년';
    } else {
      return 'Product Name';
    }
  };
  const priceInfo1 = () => {
    if (prodSmall) {
      return '$208';
    } else if (ssop) {
      return '$325';
    } else {
      return '$325';
    }
  };
  const priceInfo2 = () => {
    if (prodSmall) {
      return '20%';
    } else if (medium) {
      return '20%';
    } else {
      return '20%';
    }
  };
  const priceInfo3 = () => {
    if (prodSmall) {
      return '$208';
    } else {
      return '$325';
    }
  };
  const priceInfo4 = () => {
    if (prodSmall) {
      return '257,504원';
    } else if (ssop) {
      return '413,400원';
    } else {
      return '413,400원';
    }
  };
  const [modalControl, setModalControl] = useState(true);
  return (
    <ProductWrap
      card={card}
      medium={medium}
      small={small}
      prodSmall={prodSmall}
      present={present}
      mb={mb}
      mr={mr}
      con4={con4}
      con3={con3}
      membership={membership}
      ssop={ssop}
      airProd={airProd}
      mobHeight={mobHeight}
      mobWrapWidth={mobWrapWidth}
      mobMgb={mobMgb}
      mobMgt={mobMgt}
      mobMgr={mobMgr}
      mobCon2={mobCon2}
      mobWidth={mobWidth}
      mobMaxwidth={mobMaxwidth}
    >
      <Link href="">
        <a>
          {CardTag && (
            <CardTit>
              <Div width="2.5rem" height="2.5rem" bgColor="#007898"></Div>
              <Span
                dsp="inline-block"
                mgl="1rem"
                color="#007898"
                size="1.5rem"
                fontWeight="600"
                lineHeight="2.5rem"
              >
                보낸사람님의 선물
              </Span>
            </CardTit>
          )}
          <ProductImg>
            <ProductImgWrap
              height={height}
              mobHeight={mobHeight}
              mobWidth={mobWidth}
            >
              {TimeDiscount && (
                <TimeDiscountIcon adult={productStatus === '2'}>
                  단하루
                </TimeDiscountIcon>
              )}
              {BestNumTag && <BestTag>{BestNumTag}</BestTag>}
              {DealerStore && (
                <DealerStoreTag>
                  <span>SKYSHOP</span>
                  <br />
                  EXCLUSIVE
                </DealerStoreTag>
              )}
              <Img
                pc={{ width: '100%', height: '100%' }}
                src={src}
                alt="상품 이미지"
                center
                height100
              />
            </ProductImgWrap>
            {productStatus !== '0' && (
              <Hover bgWhite={productStatus === '2'}>
                {productStatus === '1' ? (
                  <Div dsp="flex" align="center" justify="center" height="100%">
                    <OutOfStock>일시 품절</OutOfStock>
                  </Div>
                ) : productStatus === '2' ? (
                  <Div dsp="flex" align="center" justify="center" height="100%">
                    <AdultOnly>
                      <Span size="6rem" mobSize="4rem" fontWeight="700">
                        19
                      </Span>
                      <Span size="1.5rem" mobSize="1.2rem" fontWeight="700">
                        Adult only
                      </Span>
                    </AdultOnly>
                  </Div>
                ) : (
                  <HoverBtnWrap btnThree={btnThree}>
                    <HoverBtn>
                      <div>
                        <img src="/assets/icons/icon-heart.svg" alt="" />
                      </div>
                      <p>찜하기</p>
                    </HoverBtn>
                    {!btnThree && (
                      <HoverBtn>
                        <div>
                          <img src="/assets/icons/icon-gift-bk.svg" alt="" />
                        </div>
                        <p>선물하기</p>
                      </HoverBtn>
                    )}
                    <HoverBtn>
                      <div>
                        <img src="/assets/icons/icon-cart.svg" alt="" />
                      </div>
                      <p>장바구니</p>
                    </HoverBtn>
                    {btnStatus ? (
                      <HoverBtn>
                        <div>
                          <img src="/assets/icons/icon-purchase.svg" alt="" />
                        </div>
                        <p>예약하기</p>
                      </HoverBtn>
                    ) : (
                      <HoverBtn>
                        <div>
                          <img src="/assets/icons/icon-purchase.svg" alt="" />
                        </div>
                        <p>바로구매</p>
                      </HoverBtn>
                    )}
                  </HoverBtnWrap>
                )}
                {productStatus === '1' ? (
                  <AlarmBtn>재입고 알람 신청</AlarmBtn>
                ) : productStatus === '2' ? null : (
                  <Link href={`/products/${categoryName}/${brand}/${id}`}>
                    상세보기
                  </Link>
                )}
              </Hover>
            )}
          </ProductImg>
          <ProductTxt card={card} prodSmall={prodSmall}>
            <BrandName
              small={small}
              prodSmall={prodSmall}
              present={present}
              card={card}
            >
              {/* {membership ? '발렌타인' : 'Brand'} */}
              {brandName()}
            </BrandName>
            <ProductName
              small={small}
              prodSmall={prodSmall}
              present={present}
              card={card}
              ssop={ssop}
            >
              {/* {ssop && '발렌타인'}
          {!card ? 'Product Name' : 'Lorem Ipsum is simply dummy'} */}
              {prodName()}
            </ProductName>
            <PriceWrap>
              {!costPriceNone && (
                <CostPriceWrap
                  small={small}
                  prodSmall={prodSmall}
                  present={present}
                  card={card}
                >
                  {!won && <CostPrice>{priceInfo1()}</CostPrice>}
                  <DiscountRate>{priceInfo2()}</DiscountRate>
                </CostPriceWrap>
              )}

              <Price
                small={small}
                prodSmall={prodSmall}
                present={present}
                card={card}
                priceWonSm={priceWonSm}
              >
                {/* {!won && '$325'} */}
                {won ? null : priceInfo3()}

                <Span
                  mgl={won ? '0' : '10px'}
                  mobMgl="5px"
                  fontWeight={won ? '700' : '400'}
                >
                  {!won && '('}
                  {priceInfo4()}
                  {!won && ')'}
                </Span>
              </Price>
            </PriceWrap>
            {CardTag && (
              <>
                <Div dsp="flex" pdb="2rem">
                  <TagDiv
                    border
                    radius="5px"
                    lineHeight="1.5rem"
                    color="#666"
                    mgr="5px"
                    padding=".5rem"
                    size="1.2rem"
                  >
                    #태그1
                  </TagDiv>
                  <TagDiv
                    border
                    radius="5px"
                    lineHeight="1.5rem"
                    color="#666"
                    mgr="5px"
                    padding=".5rem"
                    size="1.2rem"
                  >
                    #태그1
                  </TagDiv>
                  <TagDiv
                    border
                    radius="5px"
                    lineHeight="1.5rem"
                    color="#666"
                    mgr="5px"
                    padding=".5rem"
                    size="1.2rem"
                  >
                    #태그1
                  </TagDiv>
                </Div>
              </>
            )}
          </ProductTxt>

          {Array.isArray(tag) && (
            <Div dsp="flex" mgt="2rem">
              {tag?.map((item, idx) => (
                <TagDiv
                  key={idx}
                  border
                  radius="5px"
                  lineHeight="2.2rem"
                  color="#666"
                  mgr="5px"
                  padding="0 5px"
                >
                  {item}
                </TagDiv>
              ))}
            </Div>
          )}
          {Tag && (
            <Div dsp="flex" mgt="2rem">
              <TagDiv
                border
                radius="5px"
                lineHeight="2.2rem"
                color="#666"
                mgr="5px"
                padding="0 5px"
              >
                신상품
              </TagDiv>
            </Div>
          )}
          {Tag02 && (
            <Div dsp="flex" mgt="2rem">
              <TagDiv
                border
                radius="5px"
                lineHeight="2.4rem"
                color="#666"
                mgr="5px"
                padding="0 5px"
              >
                #태그1
              </TagDiv>
              <TagDiv
                border
                radius="5px"
                lineHeight="2.4rem"
                color="#666"
                mgr="5px"
                padding="0 5px"
              >
                #태그1
              </TagDiv>
              <TagDiv
                border
                radius="5px"
                lineHeight="2.4rem"
                color="#666"
                mgr="5px"
                padding="0 5px"
              >
                #태그1
              </TagDiv>
            </Div>
          )}
        </a>
      </Link>
    </ProductWrap>
  );
}

const ProductWrap = styled.article`
  width: ${({ width }) => width || '100%'};
  max-width: 31rem;
  margin-right: ${props => props.mr || '2rem'};
  margin-bottom: ${props => props.mb || 0};
  ${theme.device.responsive} {
    /* max-width: none; */
    width: ${props => props.mobWrapWidth || 'inherit'};
    margin-right: ${({ mobMgr }) => mobMgr || '2%'};
    margin-bottom: ${({ mobMgb }) => mobMgb || '0'};
    margin-top: ${({ mobMgt }) => mobMgt || '0'};
    max-width: ${props => props.mobMaxwidth || '100%'};
    &:nth-of-type(2n) {
      margin-right: 0;
    }
    ${({ mobCon2 }) => {
      if (mobCon2) {
        return css`
          &:nth-of-type(2n) {
            margin-right: 2%;
          }
        `;
      }
    }}
  }

  ${({ con4 }) => {
    if (con4) {
      return css`
        &:nth-child(4n) {
          margin-right: 0;
        }
      `;
    }
  }}
  ${({ con3 }) => {
    if (con3) {
      return css`
        &:nth-child(3n) {
          margin-right: 0;
        }
      `;
    }
  }}
  

  ${({ medium }) => {
    if (medium) {
      return css`
        ${BrandName} {
          font-size: 1.5rem;
          line-height: 1.8rem;
          ${theme.device.responsive} {
            font-size: 1rem;
            line-height: 1.1rem;
          }
        }
        ${ProductName} {
          font-size: 2rem;
          line-height: 2.4rem;
          margin-top: 5px;
          ${theme.device.responsive} {
            font-size: 1.5rem;
            line-height: 1.8rem;
            margin-bottom: 1rem;
          }
        }
      `;
    }
  }}  
  ${({ small }) => {
    if (small) {
      return css`
        max-width: 206px;
        margin-right: 1.5rem;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        max-width: none;
        height: 100%;
        display: flex;
        justify-content: space-between;
        margin-right: 0;
        padding-top: 4.7rem;
        position: relative;
      `;
    }
  }}
`;
const CardTit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
const ProductImg = styled.div`
  position: relative;
  border-radius: ${theme.radius.basic};
  overflow: hidden;
  ${theme.device.responsive} {
    border-radius: 1rem;
  }
`;
const ProductImgWrap = styled.div`
  position: relative;
  height: ${({ height }) => height || '42rem'};
  overflow: hidden;
  max-height: 42rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${theme.device.responsive} {
    max-height: 100%;
    width: ${({ mobWidth }) => mobWidth || '37.33vw'};
    /* width: ${({ mobWidth }) => mobWidth || '100%'}; 로 변경해주세요. */
    height: ${({ mobHeight }) => mobHeight || '50.66vw'};
  }
`;
const Hover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 9px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.45);
  ${({ bgWhite }) => {
    if (bgWhite) {
      return css`
        display: block;
        background-color: rgba(255, 255, 255, 0.01);
      `;
    }
  }}
  ${ProductImg}:hover & {
    display: block;
    ${theme.device.responsive} {
      display: none;
    }
  }
  & button:hover div {
    opacity: 1;
  }
  & .detailBtn {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: block;
    width: calc(100% - 20px);
    font-size: ${theme.font.size.lg};
    color: ${theme.color.common.black};
    line-height: 4.4rem;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
  }
`;
const AlarmBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: inline-block;
  font-size: ${theme.font.size.lg};
  color: ${theme.color.common.black};
  line-height: 4.4rem;
  text-align: center;
  padding: 0 8px;
  border-radius: 10px;
  background-color: #fff;
  transform: translateX(-50%);
`;
const HoverBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
  & div {
    text-align: center;
    margin-bottom: 4rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ${({ small }) => {
    if (small) {
      return css`
        font-size: 1rem;
      `;
    }
  }}
  ${({ btnThree }) => {
    if (btnThree) {
      return css`
        & ${HoverBtn} {
          &:nth-child(1) {
            width: 100%;
            margin-right: 0;
            & > div {
              margin: 0 auto 2rem;
            }
          }
          &:nth-child(2n) {
            margin-right: 5rem;
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
          &:nth-child(n + 4) {
            display: none;
          }
        }
      `;
    }
  }}
`;
const HoverBtn = styled.button`
  margin-right: 5rem;
  margin-bottom: 5rem;
  color: ${theme.color.primary.fontWhite};
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:nth-child(n + 5) {
    display: none;
  }
  div {
    width: 8rem;
    line-height: 8rem;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 2rem;
    background-color: #fff;
    opacity: 0.7;
    & img {
      vertical-align: middle;
    }
  }
`;
const ProductTxt = styled.div`
  margin-top: 2rem;
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        margin-top: 1.6rem;
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        margin-top: 2rem;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        text-align: left;
        width: 168px !important;
        display: flex;import { width } from '@mui/system';

        flex-direction: column;
        justify-content: center;
      `;
    }
  }}
  ${theme.device.responsive} {
    ${({ prodSmall }) => {
      if (prodSmall) {
        return css`
          margin-top: 12px !important;
        `;
      }
    }}
  }
`;
const BrandName = styled.p`
  font-size: ${theme.font.size.base};
  color: ${theme.color.gray.gray88};
  ${({ small }) => {
    if (small) {
      return css`
        font-size: 1rem;
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        font-size: 1.8rem;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        font-size: 1.5rem;
      `;
    }
  }}
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        font-size: 1rem;
      `;
    }
  }}
  ${theme.device.responsive} {
    font-size: 1rem;
    line-height: 1.1rem;
    ${({ prodSmall }) => {
      if (prodSmall) {
        return css`
          font-size: 1.2rem;
        `;
      }
    }}
  }
`;
const ProductName = styled.p`
  font-size: ${theme.font.size.xl};
  font-family: 'PretendardBold';
  margin-top: 1.2rem;
  margin-bottom: 2rem;
  ${theme.common.ellipsis};
  ${({ small }) => {
    if (small) {
      return css`
        font-size: 1.4rem;
        line-height: 1.8rem;
        font-family: 'PretendardBold';
        margin-top: 0.5rem;
        margin-bottom: 1.3rem;
      `;
    }
  }}
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        margin-top: 0.8rem;
        margin-bottom: 1.4rem;
        font-size: 1.4rem;
        font-family: 'PretendardSemiBold';
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        width: 16.8rem;
        margin-top: 0.5rem;
        font-size: 2rem;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #000;
      `;
    }
  }}
  ${({ medium }) => {
    if (medium) {
      return css`
        font-family: 'Pretendard';
      `;
    }
  }}
  ${theme.device.responsive} {
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
    ${({ prodSmall }) => {
      if (prodSmall) {
        return css`
          margin-bottom: 1.2rem;
          font-size: 1.3rem;
        `;
      }
    }}
  }
`;
const PriceWrap = styled.div``;
const CostPriceWrap = styled.div`
  font-size: ${theme.font.size.lg};
  color: ${theme.color.gray.gray88};
  line-height: 2.2rem;
  margin-bottom: 5px;
  ${({ small }) => {
    if (small) {
      return css`
        font-size: 1.3rem;
        line-height: 2rem;
        margin-bottom: 3px;
        ${DiscountRate} {
          font-size: 1.2rem;
        }
      `;
    }
  }}
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        line-height: 1.54;
        margin-bottom: 0.6rem;
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        display: none;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        display: none;
      `;
    }
  }}
  ${theme.device.responsive} {
    font-size: 1.5rem;
    ${({ prodSmall }) => {
      if (prodSmall) {
        return css`
          font-size: 1.2rem;
          line-height: 2rem;
        `;
      }
    }}
  }
`;
const CostPrice = styled.span`
  text-decoration: line-through;
  margin-right: 8px;
  ${theme.device.responsive} {
    margin-right: 5px;
  }
`;
const DiscountRate = styled.span`
  color: ${theme.color.primary.fontRed};
  font-weight: bold;
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        font-family: 'PretendardSemiBold';
        margin-bottom: 4px;
      `;
    }
  }}
`;
const Price = styled.p`
  font-family: 'PretendardBold';
  font-size: 2.5rem;
  line-height: 3rem;
  ${({ small }) => {
    if (small) {
      return css`
        font-size: 1.6rem;
        line-height: 1.9rem;
      `;
    }
  }}
  ${({ priceWonSm }) => {
    if (priceWonSm) {
      return css`
        span {
          font-size: 1.8rem;
          line-height: 2.1rem;
          margin-left: 0px;
        }
      `;
    }
  }}
  ${({ prodSmall }) => {
    if (prodSmall) {
      return css`
        line-height: 2rem;
        font-family: 'PretendardSemiBold';
        span {
          font-size: 1.3rem;
          font-family: 'Pretendard';
        }
      `;
    }
  }}
  ${({ present }) => {
    if (present) {
      return css`
        font-size: 2.5rem;
      `;
    }
  }}
  ${({ card }) => {
    if (card) {
      return css`
        display: none;
      `;
    }
  }}
  ${theme.device.responsive} {
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 0;
    ${({ prodSmall }) => {
      if (prodSmall) {
        return css`
          font-size: 1.4rem;
          line-height: 1.4rem;
          span {
            font-size: 1.3rem;
            line-height: 1.4rem;
          }
        `;
      }
    }}
  }
`;
const TagDiv = styled(Div)`
  font-size: 1.2rem;
`;
const OutOfStock = styled.div`
  display: inline-block;
  font-size: 2rem;
  line-height: 4.4rem;
  color: ${theme.color.primary.fontWhite};
  padding: 0 16px 0 18px;
  border-radius: 10px;
  background-color: ${theme.color.gray.gray85};
`;
const AdultOnly = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  border: 10px solid ${theme.color.primary.fontRed};
  border-radius: 50%;
  ${theme.device.responsive} {
    min-width: 10rem;
    width: 26.6vw;
    height: 26.6vw;
    min-height: 10rem;
    border-width: 5px;
  }
`;
const TimeDiscountIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'PretendardSemiBold';
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  color: #fff;
  font-size: 2rem;
  background: url('/assets/icons/icon-onlyfortoday.svg') no-repeat center / 100%;
  ${({ adult }) => {
    if (adult) {
      return css`
        z-index: 1;
      `;
    }
  }}
`;
const BestTag = styled.div`
  position: absolute;
  left: 20px;
  display: inline-block;
  width: 4rem;
  height: 5rem;
  line-height: 4rem;
  z-index: 2;
  font-family: 'PretendardSemiBold';
  color: #fff;
  font-size: 2rem;
  text-align: center;
  background-color: ${theme.color.primary.fontBlue};
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    50% calc(100% - 8px),
    0% 100%,
    0% 0%
  );
  ${theme.device.responsive} {
    font-family: 'PretendardMedium';
    left: 1rem;
    width: 2.8rem;
    height: 3.2rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      50% calc(100% - 6px),
      0% 100%,
      0% 0%
    );
  }
`;
const DealerStoreTag = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 20px;
  font-size: 14px;
  color: ${theme.color.common.white};
  line-height: 1.43;
  font-family: 'PretendardSemiBold';
  padding: 8px 15px;
  background-color: ${theme.color.common.black};
  & span {
    letter-spacing: 1.3px;
  }
`;

const ModalBox = styled(Modal)`
  display: flex;
  width: ${props => props.width || ''};
  height: ${props => props.height || ''};
  text-align: center;
  align-items: center;
`;
