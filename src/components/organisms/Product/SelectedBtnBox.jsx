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

export default function SelectedBtn({ delivery, soldOut, deliverySoldOut }) {
  return (
    <Div>
      {/* 제품상세 default */}
      {!soldOut && !delivery && (
        <BtnWrap>
          <IconBtn>
            <Img
              pc={{ width: '24.4px', height: '24.4px' }}
              src={`/assets/icons/icon-heart2.svg`}
              alt=""
            />
          </IconBtn>
          <GiftBtn>선물하기</GiftBtn>
          <BasketBtn>장바구니</BasketBtn>
          <BlackBtn>구매하기</BlackBtn>
        </BtnWrap>
      )}
      {/* 품절 */}
      {soldOut && (
        <BtnWrap>
          <WhiteBtn3>추천상품 보기</WhiteBtn3>
          <BlackBtn3>재입고 알림신청</BlackBtn3>
        </BtnWrap>
      )}
      {/* 배송상품 default */}
      {delivery && !deliverySoldOut && (
        <BtnWrap mgt="0">
          <WhiteBtn3>장바구니</WhiteBtn3>
          <BlackBtn3>구매하기</BlackBtn3>
        </BtnWrap>
      )}
    </Div>
  );
}

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
  ${theme.device.responsive} {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    width: 100%;
    margin-top: 0;
    button {
      margin-left: 0;
      height: 60px;
      width: calc((100% - 60px) / 2);
    }
    button:first-child {
      width: 60px;
    }
  }
`;
const WhiteBtn = styled(Btn)`
  color: #000;
  border: 1px solid #000;
  max-width: 140px;
  width: 100%;
  font-family: 'PretendardBold';
  font-size: ${({ size }) => (size ? size : '18px')};
`;
const WhiteBtn2 = styled(WhiteBtn)`
  max-width: 154px;
  height: 50px;
`;

const WhiteBtn3 = styled(WhiteBtn)`
  max-width: 300px;
  height: 60px;
`;

const WhiteBtn4 = styled(WhiteBtn)`
  max-width: none;
  width: 100%;
  height: 50px;
  margin-bottom: 1.2rem;
`;
const GiftBtn = styled(WhiteBtn)`
  display: inline-block;
  ${theme.device.responsive} {
    display: none;
  }
`;
const BasketBtn = styled(WhiteBtn)``;
const IconBtn = styled(WhiteBtn)`
  display: none;
  border-right: none;
  ${theme.device.responsive} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const BlackBtn = styled(Btn)`
  background-color: #000;
  flex-grow: 2;
  font-family: 'PretendardBold';
  font-size: ${({ size }) => (size ? size : '18px')};
`;

const BlackBtn2 = styled(BlackBtn)`
  width: 100%;
  height: 50px;
`;

const BlackBtn3 = styled(BlackBtn)`
  max-width: 300px;
  height: 60px;
`;
