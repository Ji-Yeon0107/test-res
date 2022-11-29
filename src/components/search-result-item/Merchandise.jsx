import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import PopupBtnSet from 'components/molecules/PopupBtnSet';
import Modal from 'components/organisms/Modal/ModalWithBtn';
import ModalWithBtn from 'components/organisms/Modal/ModalWithBtn';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import theme from 'styles/theme';

export default function Merchandise({ w, h, imageLabel, rank, product = [] }) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleOnMouseEnter = () => {
    setIsMouseHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsMouseHover(false);
  };

  return (
    <div>
      <Div
        position="relative"
        width="100%"
        maxWidth="310"
        height="42rem"
        mobHeight="50.66vw"
      >
        <ProductImageBox
          onMouseEnter={handleOnMouseEnter}
          style={{ backgroundColor: ' #f5f5f5' }}
        >
          <Img
            pc={{ width: '100%', height: '100%' }}
            src="/assets/images/chivas-regal.png"
            alt="상품"
            center
          />
        </ProductImageBox>

        {imageLabel === 'only-today' && (
          <ImageLabelBox>
            <Img
              src="/assets/icons/icon-onlyfortoday.svg"
              pc={{ width: '8rem', height: '8rem' }}
              responsive={{ width: '4rem', height: '4rem' }}
              alt="단하루"
            />
            <Oneday>단하루</Oneday>
          </ImageLabelBox>
        )}

        {imageLabel === 'rank' && product.rank < 4 && (
          <ImageLabelBox rank>
            <Img
              src={`/assets/icons/icon-flag-${product.rank + 1}.svg`}
              pc={{ width: '4rem', hegiht: '5rem' }}
              responsive={{ width: '3.4rem', height: '4.4rem' }}
              alt={`product-rank-${rank}`}
            />
          </ImageLabelBox>
        )}

        <ProductImageBoxCover
          isMouseHover={isMouseHover}
          onMouseLeave={handleOnMouseLeave}
          bgColor={
            product.adultOnly ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.5)'
          }
        >
          <ProductHoverLayout
            id={product.id}
            adultOnly={product.adultOnly}
            backOrdered={product.backOrdered}
          />
        </ProductImageBoxCover>
      </Div>

      <Span
        as="p"
        size="1.4rem"
        color="#6e6e6e"
        mgt="2rem"
        mobSize="1rem"
        mobLineHeight="1.1rem"
        mobMgt="1.5rem"
      >
        {product.brandName}
      </Span>

      <Span
        as="p"
        size="2rem"
        fontWeight="700"
        mgt="1rem"
        mobSize="1.5rem"
        mobMgt="5px"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {product.productName}
      </Span>

      <ProductPrice price={product.price} />

      <LabelBox>
        {product.labels.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </LabelBox>
    </div>
  );
}

const ProductPrice = ({ price }) => {
  const { onDiscount, disCountRate, byCurrency, originPrice } = price;

  return (
    <Div mgt="2rem" mobMgt="1.3rem">
      {onDiscount ? (
        <Div mgt="1.8rem">
          <>
            <span
              style={{
                marginRight: 10,
                textDecoration: 'line-through',
              }}
              css={`
                color: ${({ theme }) => `${theme.color.gray.gray88}
                            
                    `};
              `}
            >
              {originPrice}
            </span>
            <span
              css={`
                color: ${({ theme }) => `${theme.color.primary.fontRed}
                    `};
              `}
            >
              {disCountRate}
            </span>
          </>
        </Div>
      ) : null}

      <Span as="div" size="2.5rem" mobSize="1.5rem">
        <Span fontWeight="700" mgr="1rem" mobMgr="4px">
          {byCurrency.USE}
        </Span>
        <span>({byCurrency.KRW})</span>
      </Span>
    </Div>
  );
};

const ProductHoverLayout = ({ id, adultOnly, backOrdered }) => {
  if (adultOnly) {
    return (
      <img
        src={`/assets/images/adult-only.png`}
        width="100%"
        height="100%"
        alt="adult-only"
      />
    );
  }

  if (backOrdered) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 108,
            height: 44,
            margin: 'auto',
            marginTop: 188,
            background: '#666',
            borderRadius: 15,
            color: '#fff',
            fontSize: '2rem',
          }}
        >
          일시 품절
        </div>
        <LearnMoreBtn width="content-fit">재입고 알림신청</LearnMoreBtn>
      </>
    );
  }

  return (
    <>
      <ProductIconBox>
        <ProductIcon>
          <ProductIconText>찜하기</ProductIconText>
          <ProductIconImage>
            <Image
              src="/icons/product/icon-heart.svg"
              width="40px"
              height="40px"
            />
          </ProductIconImage>
        </ProductIcon>
        <ProductIcon>
          <ProductIconText>선물하기</ProductIconText>
          <ProductIconImage>
            <Image
              src="/icons/product/icon-gift.svg"
              width="40px"
              height="40px"
            />
          </ProductIconImage>
        </ProductIcon>
        <ProductIcon>
          <ProductIconText>장바구니</ProductIconText>
          <ProductIconImage>
            <Image
              src="/icons/product/icon-cart.svg"
              width="40px"
              height="40px"
            />
          </ProductIconImage>
        </ProductIcon>
        <ProductIcon>
          <ProductIconText>바로구매</ProductIconText>
          <ProductIconImage>
            <Image
              src="/icons/product/icon-purchase.svg"
              width="40px"
              height="40px"
            />
          </ProductIconImage>
        </ProductIcon>
      </ProductIconBox>

      <Link href={`/products/best/perfume/${id}`}>
        <a>
          <LearnMoreBtn width="292px">상세보기</LearnMoreBtn>
        </a>
      </Link>
    </>
  );
};

const ProductImageBox = styled.div`
  ${({ theme }) => `
        position:absolute;
        width: 100%;
        height: 100%;
        border-radius: ${theme.radius.basic};
        display:flex;
        align-items:center;
        justify-content:center;
`}
`;

const LabelBox = styled.div`
  display: flex;
  margin-top: 19px;
  ${theme.device.responsive} {
    margin-top: 12px;
  }
`;

const Label = styled.div`
  font-size: 1.4rem;
  color: #666;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  padding: 2px 4px;
  margin-right: 5px;
  ${theme.device.responsive} {
    font-size: 1.2rem;
    padding: 2px;
  }
`;

const ImageLabelBox = styled.div`
  position: absolute;

  ${({ rank }) =>
    rank
      ? `
      margin-left:17px;
      z-index: 101;
      ${theme.device.responsive} {
        margin-left:12px;
      }
      `
      : `
      z-index: 99;
      margin-top: 8px;
      margin-left: 8px;
      ${theme.device.responsive} {
      margin-top: 10px;
      margin-left: 10px;
      }
      `}
`;

const ProductImageBoxCover = styled.div`
  z-index: 100;

  ${props => `
    display: ${props.isMouseHover ? 'flex' : 'none'};
    opacity :${props.isMouseHover && 0}
    `};
  transition: opacity 350ms;

  :hover {
    opacity: 1;
  }

  ${({ theme, bgColor }) => `
        position:absolute;
        flex-direction:column;
        width: 100%;
        height: 100%;
        background-color: ${bgColor};
        backdrop-filter: blur(5px);
        border-radius: ${theme.radius.basic};
`};
`;
const ProductIconBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 28px;
  grid-template-columns: repeat(2, 1fr);
`;
const ProductIcon = styled.div`
  position: relative;
  width: 80px;
  height: 120px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: auto;
`;
const ProductIconImage = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.color.common.white}`};
  opacity: 0.67;
  transition: opacity 250ms;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
const ProductIconText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  :hover {
    + div {
      opacity: 1;
    }
  }
`;
const LearnMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ width }) => width && `width:${width}`};
  padding-left: 3px;
  padding-right: 3px;
  height: 44px;
  margin: auto;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 2rem;
  cursor: pointer;
`;
const Oneday = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'PretendardBold';
  font-size: 1.8rem;
  color: #fff;
  transform: translate(-50%, -50%);
  ${theme.device.responsive} {
    font-size: 1rem;
  }
`;
