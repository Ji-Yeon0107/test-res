import { useState, useEffect, useRef } from 'react';

import GlobalStyle from 'styles/GlobalStyle';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import * as Form from 'components/atoms/Form/index';
import SelectBox from 'components/atoms/SelectBox';

export default function Fast() {
  const [paymentType, setPaymentType] = useState('card');
  return (
    <Div mgt="6rem" dsp="flex" justify="center">
      <WhiteBtn
        Mwidth="22rem"
        width="100%"
        margin="0 4rem"
        onClick={() => {
          setPaymentType('card');
        }}
        active={paymentType === 'card'}
      >
        신용/체크카드
      </WhiteBtn>
      <WhiteBtn
        Mwidth="22rem"
        width="100%"
        margin="0 4rem"
        onClick={() => {
          setPaymentType('account');
        }}
        active={paymentType === 'account'}
      >
        실시간 계좌이체
      </WhiteBtn>
    </Div>
  );
}

// 회색 박스
const GrayBox = styled.div`
  background-color: #f7f7f7;
  padding: 2rem;
  margin-top: 6rem;

  ul.list {
    li:after {
      content: '-';
      position: absolute;
      top: 0;
      left: -1rem;
    }
  }
  li {
    position: relative;
    margin-left: 1rem;
    line-height: 2.4rem;
    color: ${theme.color.primary.fontGray};
    font-size: 1.4rem;
  }
`;

// 버튼
const WhiteBtn = styled(Btn)`
  color: ${props => (props.active ? '#fff' : '#000')};
  border: 1px solid ${theme.color.primary.bgGray};
  border-color: ${props =>
    props.active ? '#000' : `${theme.color.primary.bgGray}`};
  background-color: ${props => (props.active ? '#000' : '#fff')};

  max-width: ${({ Mwidth }) => (Mwidth ? Mwidth : null)};
  width: ${({ width }) => (width ? width : null)};
  margin: ${({ margin }) => (margin ? margin : null)};

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const BlackBtn = styled(Btn)`
  /* max-width: 22rem; */
  max-width: ${({ Mwidth }) => (Mwidth ? Mwidth : null)};
  width: ${({ width }) => (width ? width : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : null)};
  background-color: #000;
`;

const ImgBtn = styled(WhiteBtn)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 2rem;
    height: 1.8rem;
    background-size: cover;
  }
`;

const KakaoBtn = styled(ImgBtn)`
  &::after {
    background-image: url('/assets/icons/icon-kakao.png');
  }
`;

const NaverBtn = styled(ImgBtn)`
  &::after {
    background-image: url('/assets/icons/icon-kakao.png');
  }
`;
