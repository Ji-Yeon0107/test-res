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

export default function PcSelectedProd({ delivery }) {
  return (
    <>
      <Div width="100%" dsp="flex" align="center" justify="space-between">
        <Div bgColor="transparent" dsp="flex" align="center">
          <Div as="button" dsp="inline-block" width="32px" height="32px">
            <img src="icons/icon-minus-btn.svg" alt="수량 빼기 버튼" />
          </Div>
          <Span as="strong" padding="0 32px" size="2rem">
            1
          </Span>
          <Div as="button" dsp="inline-block" width="32px" height="32px">
            <img src="icons/icon-plus-btn.svg" alt="수량 더하기 버튼" />
          </Div>
        </Div>
        <Div bgColor="transparent">
          <Span color="#666">총 금액</Span>
          <Span
            as="strong"
            dsp="inline-block"
            mgl="42px"
            fontWeight="700"
            size="xl2"
          >
            {!delivery ? '$201(248,034원)' : '248,034원'}
            <Span
              dsp="inline-block"
              mgl="12px"
              mgr="10px"
              color="red"
              size="2rem"
            >
              36%
            </Span>
          </Span>
        </Div>
      </Div>
    </>
  );
}
