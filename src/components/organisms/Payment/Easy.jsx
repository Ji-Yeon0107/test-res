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

export default function Easy() {
  const [paymentType, setPaymentType] = useState('naver');
  return (
    <>
      <Div mgt="6rem" dsp="flex" justify="center">
        <KakaoBtn
          Mwidth="22rem"
          width="100%"
          margin="0 4rem"
          onClick={() => {
            setPaymentType('kakao');
          }}
          active={paymentType === 'kakao'}
        >
          Kakao Pay
        </KakaoBtn>
        <NaverBtn
          Mwidth="22rem"
          width="100%"
          margin="0 4rem"
          onClick={() => {
            setPaymentType('naver');
          }}
          active={paymentType === 'naver'}
        >
          Naver Pay
        </NaverBtn>
      </Div>
      <GrayBox>
        <Div dsp="flex" align="center">
          <Img
            pc={{ width: '20px', height: '20px' }}
            src={`/assets/icons/icon-tri-warning.svg`}
            alt="경고 아이콘"
          />
          <Span dsp="inline-block" mgl=".5rem" size="2rem" fontWeight="600">
            카카오/네이버 페이 유의사항​
          </Span>
        </Div>
        <Span as="ul" mgt="2rem" fontWeight="300">
          <li>
            카카오페이/네이버페이로 결제할 경우 아래의 혜택은 적용되지 않습니다.
          </li>
          <li>① 신용카드 빠른할인/청구할인 적용제외</li>
          <li>② 상품별 제공되는 신용카드 무이지 할부 적용제외</li>
          <li>
            ③ 제휴카드사에서 SKYSHOP에 제공하는 추가적립금, 무이자 등 혜택 제외
          </li>
          <li>
            ※ 카카오페이/네이버페이에서 제공하는 카드사별 무이자, 청구할인
            혜택만 제공
          </li>
        </Span>
        <Span as="ul" mgt="3rem" fontWeight="300">
          <li>
            카카오페이/네이버페이 결제 후 취소/반품 등이 발생할 경우
            카카오페이/네이버페이를 통한 신용카드 취소/계좌 환불이 이루어집니다.
          </li>
          <li>
            주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라
            변경될 수 있습니다.
          </li>
        </Span>
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
