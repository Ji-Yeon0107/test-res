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

export default function Payco() {
  return (
    <>
      <GrayBox>
        <Div dsp="flex" align="center">
          <Img
            pc={{ width: '20px', height: '20px' }}
            src={`/assets/icons/icon-tri-warning.svg`}
            alt="경고 아이콘"
          />
          <Span dsp="inline-block" mgl=".5rem" size="2rem" fontWeight="600">
            PAYCO 유의사항
          </Span>
        </Div>
        <ul>
          <li>PAYCO는 NHN엔터테인먼트가 만든 안전한 간편결제 서비스입니다.</li>
          <li>
            휴대폰과 카드 명의자가 동일해야 하며 결제 금액 제한은 없습니다.
          </li>
          <li>결제 가능 카드 : 모든 신용/체크 카드 결제 가능</li>
        </ul>
      </GrayBox>
    </>
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
    background-image: url('/assets/icons/icon-naver.svg');
  }
`;
