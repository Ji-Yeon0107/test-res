import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import { Btn } from 'components/atoms/Button';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import Paging from 'components/atoms/Paging';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import NoneQnA from 'components/organisms/Product/NoneQnA';

export default function QnAListBox({ QnAList }) {
  return (
    <QAListWrap>
      <ProdDetailTitle>Q&A</ProdDetailTitle>
      <Div
        dsp="flex"
        justify="space-between"
        width="100%"
        mgt="6rem"
        mobMgt="20px"
        pdb="1.7rem"
        mobPdb="20px"
        borderBottom
        borderColor="black"
      >
        <ReviewTit>
          <strong>전체</strong>
          <span> (87건)</span>
        </ReviewTit>
        {/* <img src="/icons/icon-arrow.svg" alt="이동 아이콘" /> */}
        <Div dsp="flex" align="center">
          <Span size="ml" mobSize="1.4rem" fontWeight="600">
            상품 문의{' '}
          </Span>
          <Img
            pc={{ width: '16px', height: '16px' }}
            src={`/icons/icon-arrow.svg`}
            alt="이동 아이콘 "
          />
        </Div>
      </Div>
      {/* Q&A list */}

      {QnAList ? (
        <ToggleQnAWrap className="qna-toggle">
          {/* line1 */}
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <QAquestion>
                    <Div mobDsp="flex" mobAlign="center">
                      <QAtag black>답변완료</QAtag>
                      <QAInfo>albe***** | 2022.06.14</QAInfo>
                    </Div>
                    <QAtit>
                      재입고언제되나요? 다음주 출국인데 살 수 있을까요?
                    </QAtit>
                  </QAquestion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <QAanswer>
                  <Div dsp="flex" align="center">
                    <QAtag blue>답변</QAtag>
                    <Span
                      as="p"
                      dsp="inline-block"
                      mgl="1.2rem"
                      fontWeight="300"
                      color="#aaa"
                      size="1.2rem"
                    >
                      답변완료일
                      <Span dsp="inline-block" mgl="1.2rem">
                        2022.06.14
                      </Span>
                    </Span>
                  </Div>
                  <Span
                    dsp="block"
                    mgt="1.2rem"
                    color="#666"
                    size="1.2rem"
                    mobSize="1.3rem"
                  >
                    안녕하세요. 대한항공 인터넷 기내면세점 입니다. <br />
                    답변내용 출력
                  </Span>
                </QAanswer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* line2 */}
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <QAquestion>
                    <Div mobDsp="flex" mobAlign="center">
                      <QAtag gray>답변대기</QAtag>
                      <QAInfo>happ****** | 2022.06.11</QAInfo>
                    </Div>
                    <QAtit>주문했습니다. 정품이 맞나요?</QAtit>
                  </QAquestion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <QAanswer></QAanswer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* line3 */}
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <QAquestion>
                    <Div mobDsp="flex" mobAlign="center">
                      <QAtag black>답변완료</QAtag>
                      <QAInfo>aron********** | 2022.06.01</QAInfo>
                    </Div>
                    <QAtit>몇주전부터 계속 확인해봐도 재입고가 안되네요</QAtit>
                  </QAquestion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <QAanswer></QAanswer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* line4 */}
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <QAquestion>
                    <Div mobDsp="flex" mobAlign="center">
                      <QAtag black>답변완료</QAtag>
                      <QAInfo>kys1******** | 2022.05.17</QAInfo>
                    </Div>
                    <QAtit>브랜드매장에서 A/S도 가능한가요?</QAtit>
                  </QAquestion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <QAanswer></QAanswer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* line5 */}
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <QAquestion>
                    <Div mobDsp="flex" mobAlign="center">
                      <QAtag gray>답변완료</QAtag>
                      <QAInfo>moml******** | 2022.04.12</QAInfo>
                    </Div>
                    <QAtit>
                      <Div dsp="flex" align="center">
                        <Img
                          pc={{ width: '20px', height: '20px' }}
                          src={`/assets/icons/icon-lock-g.svg`}
                          alt="자물쇠"
                          height100
                        />
                        비밀글입니다.
                      </Div>
                    </QAtit>
                  </QAquestion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <QAanswer></QAanswer>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Div mobDsp="none">
            <Paging />
          </Div>
          <Div
            dsp="none"
            mobDsp="flex"
            align="center"
            justify="flex-end"
            lineHeight="1.4rem"
            size="1.4rem"
            mgt="20px"
            cursorPointer
          >
            Q&A 전체보기
            <Img
              pc={{ width: '16px', height: '16px' }}
              src={`/assets/icons/icon-rightarrow-bk.svg`}
              alt=""
            />
          </Div>
        </ToggleQnAWrap>
      ) : (
        <NoneQnA />
      )}
    </QAListWrap>
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

//review tit
const ReviewTit = styled.div`
  font-size: ${theme.font.size.lg};
  strong {
    font-family: 'PretendardBold';
  }
  span {
    font-size: 1.4rem;
    color: #aaa;
  }
  ${theme.device.responsive} {
    font-size: 1.6rem;
  }
`;
const ReviewTit2 = styled(ReviewTit)`
  font-size: ${theme.font.size.base};
`;
const ReviewTit3 = styled(ReviewTit)`
  font-size: 3rem;
  span {
    margin-left: 5px;
  }
`;

// Q&A
const ToggleQnAWrap = styled.div``;

const QAListWrap = styled.div`
  margin-top: 80px;
`;
const QAquestion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 11px 0;
  ${theme.device.responsive} {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
  }
`;
const QAanswer = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #dfdfdf;
`;
const QAtit = styled.div`
  margin-left: 3.2rem;
  font-size: 1.2rem;
  color: ${theme.color.gray.gray88};
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;

  ${theme.device.responsive} {
    margin-left: 0;
    margin-top: 12px;
  }
`;

const QAList = styled.div``;
const QAtag = styled.strong`
  display: inline-block;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 0.8rem;
  min-height: 2rem;
  line-height: 2rem;

  background-color: ${props =>
    props.blue ? `${theme.color.primary.fontBlue}` : null};
  border: ${function (props) {
    if (props.gray) {
      return '1px solid #aaa';
    } else if (props.black) {
      return '1px solid #000';
    } else {
      return 'none';
    }
  }};
  color: ${function (props) {
    if (props.gray) {
      return '#aaa';
    } else if (props.black) {
      return '#000';
    } else {
      return '#fff';
    }
  }};
  ${theme.device.responsive} {
  }
`;
const QAInfo = styled.div`
  color: #aaa;
  font-size: 1.2rem;
  font-family: 'PretendardLight';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  ${theme.device.responsive} {
    position: static;
    transform: none;
    margin-left: 12px;
  }
`;
