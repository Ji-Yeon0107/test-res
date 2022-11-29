import Image from 'next/image';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';
import { useEffect } from 'react';

export default function Quick() {
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <QuickMenu>
      <ul>
        <CouponLi>
          <a href="#none">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={'/assets/icons/icon-coupon-quick.svg'}
              alt="쿠폰 아이콘"
              center
            />
            <HoverTxt>탑승편정보</HoverTxt>
          </a>
          <QuickTip>
            +1,000P 적립<span></span>
          </QuickTip>
        </CouponLi>
        <CouponLi>
          <a href="#none">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/assets/icons/Icon-gift-w.svg`}
              alt="선물 아이콘"
            />
            <HoverTxt>혜택안내</HoverTxt>
          </a>
        </CouponLi>
        <CouponLi>
          <a href="#none">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/assets/icons/icon-questionmark.svg`}
              alt="물음표 아이콘"
            />
            <HoverTxt>이용안내</HoverTxt>
          </a>
        </CouponLi>
        <CouponLi>
          <a
            href="#none"
            onClick={() => {
              ScrollUp();
            }}
          >
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/assets/icons/icon-arrow-quick.svg`}
              alt="화살표 아이콘"
            />
          </a>
        </CouponLi>
      </ul>
    </QuickMenu>
  );
}

const QuickMenu = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: calc(100vh - 320px);
  left: calc(100% - 80px);

  z-index: 1000;
  width: 80px;
  & li {
    position: relative;
  }
  & li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    text-align: center;
    line-height: 8rem;
    background-color: rgba(0, 0, 0, 0.7);
  }
  & img {
    vertical-align: middle;
  }
`;
const CouponLi = styled.li``;
const QuickTip = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  right: 85%;
  width: 100%;
  font-size: ${theme.font.size.sm};
  line-height: 1.6rem;
  color: ${theme.color.primary.fontWhite};
  min-width: 10rem;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #e0003f;
  transform: translateY(-50%);
  & span {
    position: absolute;
    right: 0;
    top: 50%;
    border-left: 6px solid #e0003f;
    border-right: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    transform: translate(100%, -50%);
  }
  ${CouponLi}:hover & {
    display: block;
  }
`;
const HoverTxt = styled.p`
  position: absolute;
  bottom: 0;
  opacity: 0;
  font-size: 1.2rem;
  font-family: 'PretendardBold';
  color: ${theme.color.primary.fontWhite};
  letter-spacing: -0.3px;
  line-height: 1.4rem;
  margin-top: 5px;
  transition: 0.2s;
  ${CouponLi}:hover & {
    opacity: 1;
    position: relative;
  }
`;
