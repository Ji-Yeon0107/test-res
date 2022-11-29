import styled, { css } from 'styled-components';
import Link from 'next/link';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';

export default function BrandLogo({ con3, BestNum, con4 }) {
  return (
    <BrandWrap con3={con3} BestNum={BestNum} con4={con4}>
      {BestNum && <Num size="8.8rem">{BestNum}</Num>}
      <Link href="#">
        <a>
          <BrandImgWrap>
            <img
              src="https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5a471139/images/large/637758168312267969-2289921.png?sw=350&sh=350&sm=fit&sfrm=png"
              alt=""
            />
          </BrandImgWrap>
          <LogoImgWrap>
            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Cartier-logo-500x240.png"
              alt="cartier"
            />
          </LogoImgWrap>
        </a>
      </Link>
    </BrandWrap>
  );
}
const BrandWrap = styled.div`
  position: relative;
  display: inline-block;
  max-width: 42rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  margin-right: 2rem;
  ${({ con3 }) => {
    if (con3) {
      return css`
        &:nth-child(3n) {
          margin-right: 0;
        }
      `;
    }
  }}
  ${({ con4 }) => {
    if (con4) {
      return css`
        max-width: 100%;
      `;
    }
  }}
`;
const BrandImgWrap = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    padding-top: 50%;
  }
  & img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const LogoImgWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40%;
  }
`;
const Num = styled.div`
  z-index: 1;
  position: absolute;
  left: 10px;
  width: 4.7rem;
  font-size: 8.8rem;
  line-height: 10.1rem;
  vertical-align: middle;
  text-align: center;
  font-family: ${theme.font.family.sub};
  ${theme.device.responsive} {
    font-size: 5rem;
  }
`;
