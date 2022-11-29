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

export default function Overseas() {
  const [paymentType, setPaymentType] = useState('card');
  return (
    <>
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
          신용카드
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
          계좌이체
        </WhiteBtn>
      </Div>
      <GrayBox>
        <Div dsp="flex" align="center">
          <Img
            pc={{ width: '20px', height: '20px' }}
            src={`/assets/icons/icon-tri-warning.svg`}
            alt="경고 아이콘"
          />
          <Span dsp="inline-block" mgl=".5rem" size="2rem" fontWeight="600">
            해외결제 유의사항​
          </Span>
        </Div>
        <Span as="ul" mgt="2rem" fontWeight="300">
          <li>해외에서 발급한 신용카드로만 결제가 가능합니다.​</li>
          <li>
            MCP(현지 통화 결제) 대상카드는 VISA, MASTER, JCB입니다. (AMEX는
            제외)​
          </li>
          <li>
            등록한 해외카드가 도난 혹은 타인 명의이거나, 허위, 정보누락,오기가
            있는 경우 구매자의 동의 없이 체결취소가 가능합니다.​
          </li>
          <li>환율로 인한 결제금액의 환차손익은 구매고객님께 부담됩니다.​</li>
          <li>
            환율변동으로 인해 주문시점과 결제시점의 자국 통화 환산금액에 차액이
            발생할 수 있습니다.​
          </li>
          <li>
            실제 자국통화 결제금액은 카드정보 입력화면에 표시되는 금액으로
            확인해 주시기 바랍니다.​
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
