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

export default function NoneQnA() {
  return (
    <QAnone>
      <Div
        maxWidth="335"
        width="100%"
        margin="60px auto 0"
        dsp="flex"
        justify="center"
        direction="column"
        align="center"
      >
        <Img
          pc={{ width: '130px', height: '130px' }}
          src={`/assets/icons/icon-no-result.svg`}
          alt="i 아이콘"
        />
        <Span dsp="block" as="strong" fontWeight="600" size="xl2" mgt="2rem">
          등록된 상품 Q&A가 없습니다.
        </Span>
        <Span
          as="strong"
          dsp="block"
          size="1.4rem"
          color="#aaa"
          mgt="2rem"
          mgb="4rem"
        >
          궁금하신 사항은 상품문의를 통해 확인하세요.
        </Span>
        <BlackBtn2>상품 문의</BlackBtn2>
      </Div>
    </QAnone>
  );
}

const QAnone = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
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
