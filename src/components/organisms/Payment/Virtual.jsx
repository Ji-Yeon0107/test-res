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

import { accountArray } from 'utility';

const cardSelectArray = [
  { key: '0', value: 'KB국민' },
  { key: '1', value: '삼성카드' },
  { key: '2', value: '현대카드' },
  { key: '3', value: '신한카드' },
  { key: '4', value: '롯데카드' },
  { key: '5', value: '농협[NH페이]' },
  { key: '6', value: '우리카드' },
  { key: '7', value: '하나카드' },
  { key: '8', value: '씨티카드' },
  { key: '9', value: 'SC리워드' },
  { key: '10', value: '카카오뱅크' },
  { key: '11', value: '비씨' },
  { key: '12', value: '기타' },
];

const planArray = [
  { key: '0', value: '일시불' },
  { key: '1', value: '1개월' },
  { key: '2', value: '2개월' },
  { key: '3', value: '3개월' },
];

export default function Virtual() {
  const [activeValue, setActiveValue] = useState('');

  const AccountBox = props => {
    return (
      <CardWrap>
        <GridWrap>
          {accountArray.map((array, idx) => (
            <GridList
              key={idx}
              onClick={() => {
                setActiveValue(array.key);
              }}
              active={activeValue === array.key}
            >
              <Img
                pc={{ width: '7rem', height: '7rem' }}
                src={array.img}
                alt={array.title}
              />
              <p>{array.title}</p>
            </GridList>
          ))}
        </GridWrap>
        <Div mgt="6rem" dsp="flex" direction="column" borderTop pdt="2rem">
          <Div as="ul">
            <Div as="li" dsp="flex" align="center">
              <Span dsp="inline-block" size="1.5rem" mgr="3rem">
                입금자명
              </Span>
              <Input placeholder="입금자명을 입력하세요.​"></Input>
            </Div>
            <Div as="li" dsp="flex" align="center" mgt="1rem">
              <Span dsp="inline-block" size="1.5rem" mgr="3rem">
                입금기간
              </Span>
              <Div dsp="flex" align="center" width="100%">
                <Div
                  dsp="inline-block"
                  padding="1.2rem 1.5rem"
                  maxWidth="300"
                  width="100%"
                >
                  <Span as="strong" fontWeight="600">
                    2022년 08월 24일 16시 31분까지
                  </Span>
                </Div>
                <Span dsp="inline-block" mgl="2rem" fontWeight="300">
                  미입금 시 자동취소 됩니다.
                </Span>
              </Div>
            </Div>
          </Div>{' '}
          {/* ul */}
        </Div>
        <Div mgt="6rem" dsp="flex" direction="column" pdt="2rem">
          <Div as="strong" dsp="block" borderBottom pdb="1.8rem" mgb="2rem">
            환불계좌
          </Div>
          <Div as="ul">
            <Div as="li" dsp="flex" align="center">
              <ListTit>은행선택</ListTit>
              <InputWrap>
                <select>
                  <option>은행을 선택하세요.</option>
                </select>
              </InputWrap>
            </Div>
            <Div as="li" dsp="flex" align="center" mgt="1rem">
              <ListTit>계좌번호</ListTit>
              <Div dsp="flex" align="center" width="100%">
                <Input placeholder="계좌번호를 입력하세요.​"></Input>
                <Span
                  dsp="inline-block"
                  mgl="2rem"
                  fontWeight="300"
                  color="#a1a1a1"
                  size="1.2rem"
                >
                  ( -없이 숫자만 입력해주세요.)​
                </Span>
              </Div>
            </Div>
            <Div as="li" dsp="flex" align="center" mgt="1rem">
              <ListTit>예금주</ListTit>
              <Div width="100%">
                <Input placeholder="예금주명을 입력하세요.​​"></Input>
              </Div>
            </Div>
          </Div>{' '}
          {/* ul */}
        </Div>
      </CardWrap>
    );
  };

  return (
    <>
      <AccountBox />
      <GrayBox>
        <Div dsp="flex" align="center">
          <Img
            pc={{ width: '20px', height: '20px' }}
            src={`/assets/icons/icon-tri-warning.svg`}
            alt="경고 아이콘"
          />
          <Span dsp="inline-block" mgl=".5rem" size="2rem" fontWeight="700">
            일반결제 유의사항
          </Span>
        </Div>
        <Span className="list" as="ul" mgt="2rem">
          <li>
            환금성 상품 구매 시, 일시불만 결제 가능(포인트 사용 불가)하며, 결제
            한도는 카드사별 전 가맹점 월100만원입니다.
          </li>
          <li>
            결제 승인일 기준, 행사기간 동안 위 할부조건에 따라 무이자할부가
            가능합니다.
          </li>
          <li>부분 무이자란? 1,2회차 고객 부담, 나머지 회차 면제</li>
        </Span>
      </GrayBox>
    </>
  );
}
//card
const CardWrap = styled.div`
  max-width: 840px;
  width: 100%;
  margin: 6rem auto 0;
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const GridList = styled.div`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-right: 0;
  cursor: pointer;

  &:nth-child(n + 7) {
    margin-top: -1px;
  }
  &:nth-child(6) {
    &:after {
      width: 120px;
    }
  }
  &:nth-child(7) {
    margin-top: 0;
    img {
      padding: 1rem;
    }
    &:after {
      width: 120px;
    }
  }
  &:nth-child(7n) {
    border-right: 1px solid #ccc;
    margin-left: -1px;
  }
  &:last-child {
    border-right: 1px solid #ccc;
    &:after {
      width: 120px;
    }
  }

  ${({ active }) => {
    if (active) {
      return css`
        position: relative;
        z-index: 1;
        &:after {
          content: '';
          position: absolute;
          z-index: 2;
          top: -1px;
          left: -1px;
          width: 121px;
          height: 120px;
          border: 1px solid #5ba6d2 !important;
        }
      `;
    }
  }}
`;

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

const ListTit = styled.span`
  font-size: 1.5rem;
  margin-right: 3rem;
  max-width: 6rem;
  width: 100%;
`;

//input
const InputWrap = styled.div`
  font-size: ${theme.font.size.base};

  strong {
    display: block;
    min-width: 70px;
    margin-left: 20px;
  }
  select {
    width: 30rem;
    height: 4.2rem;
    /* width: 100%; */
    font-size: 1.5rem;
    font-weight: normal;
    vertical-align: middle;
    padding: 12px 15px;
    border-radius: 4px;
    border: 1px solid ${theme.color.primary.gray};
    /* color: #a0a0a0; */
    color: #000;
  }
  select::expand {
    display: none;
  }
  option {
  }
`;

const Input = styled.input`
  flex-grow: 1;
  font-family: 'Pretendard';
  font-weight: bold;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: normal;
  vertical-align: middle;
  border: 1px solid ${theme.color.primary.gray};
  border-radius: 4px;
  padding: 12px 15px;
  max-width: 300px;
  width: 100%;
  ::placeholder {
    color: ${theme.color.gray.gray58};
  }
  :focus {
    border-color: ${theme.color.primary.fontBlue};
    ::placeholder {
      color: transparent;
    }
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
