import { useState, useEffect, useRef } from 'react';

import GlobalStyle from 'styles/GlobalStyle';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function UseInfo({ delivery, ingredientOpen }) {
  return (
    <ToggleWrap className="use-info-toggle" ingredientOpen={ingredientOpen}>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Div dsp="flex" align="center">
                <ProdDetailTitle>이용안내</ProdDetailTitle>
              </Div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Div>
              {delivery && (
                <Span as="p" textAlign="center" size="2rem" fontWeight="600">
                  이용안내 부분 고객센터에서 내용 정리된 이후 <br />
                  해당 화면을 바탕으로 추가 예정
                  <br />
                  <br />
                  * 배송, 교환, 반품, 취소
                  <br />
                  <br />+ 판매자 정보 어떤 정보 받을지에 따라 변경
                </Span>
              )}
            </Div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </ToggleWrap>
  );
}

const ProdDetailTitle = styled.p`
  color: #000;
  font-size: 4rem;
  font-family: 'PretendardBold';
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #000;
  }
  ${theme.device.responsive} {
    font-size: 2.6rem;
  }
`;

//토글
const ToggleWrap = styled.div`
  margin-top: 12rem;
  ${theme.device.responsive} {
    ${({ ingredientOpen }) => {
      if (ingredientOpen) {
        return css`
          margin-top: 182px;
        `;
      } else {
        return css`
          margin-top: 54px;
        `;
      }
    }}
  }
`;
