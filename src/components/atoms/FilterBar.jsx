import theme from 'styles/theme';
import styled, { css } from 'styled-components';
import Product from 'components/atoms/Product';
import Product2 from 'components/search-result-item/Merchandise';
import { Btn } from 'components/atoms/Button';
import { useState } from 'react';
import BrandLogo from 'components/search-result-item/BrandLogo';
import Img from './Img';
import Div from './Div';

export default function FilterBar() {
  return (
    <>
      <form>
        <FilterWrap>
          <Filter className="pc">
            <FilterInner>
              <FilterTitle mt="8px">브랜드</FilterTitle>
              <Div textAlign="left">
                <Div position="relative" dsp="inline-block">
                  <InputText
                    type="text"
                    placeholder="브랜드를 입력하세요"
                    lh="3.4rem"
                    width="24rem"
                  />
                  <SearchBtn>
                    <Img
                      pc={{ width: '18.7px', height: '16.7px' }}
                      src="/assets/icons/icon-search-gray.svg"
                      alt="회색 검색아이콘"
                    />
                  </SearchBtn>
                </Div>
                <div>
                  <Div as="ul" dsp="flex" mgt="2.4rem" mgb="1.2rem">
                    <BrandOrder active>
                      <button>인기순</button>
                    </BrandOrder>
                    <BrandOrder>
                      <button>ABC순</button>
                    </BrandOrder>
                    <BrandOrder>
                      <button>가나다순</button>
                    </BrandOrder>
                  </Div>
                  <ul>
                    <li>
                      <RoundBtn as="a" href="#none">
                        랑콤
                      </RoundBtn>
                      <RoundBtn as="a" href="#none">
                        록시땅
                      </RoundBtn>
                      <RoundBtn as="a" href="#none">
                        비오템 옴므
                      </RoundBtn>
                      <RoundBtn as="a" href="#none">
                        시세이도
                      </RoundBtn>
                      <RoundBtn as="a" href="#none">
                        시슬리
                      </RoundBtn>
                      <RoundBtn as="a" href="#none">
                        에스티로더
                      </RoundBtn>
                      <MoreBtn href="#none">더보기</MoreBtn>
                    </li>
                  </ul>
                </div>
              </Div>
            </FilterInner>
            <FilterInner>
              <FilterTitle>가격</FilterTitle>
              <Div textAlign="left" dsp="flex">
                <Div dsp="inline-block" mgr="2rem">
                  <InputText
                    type="text"
                    placeholder="$ 최소금액"
                    lh="3.2rem"
                    width="9.2rem"
                  />
                  &nbsp;&nbsp;~&nbsp;&nbsp;
                  <InputText
                    type="text"
                    placeholder="$ 최고금액"
                    lh="3.2rem"
                    width="9.2rem"
                  />
                </Div>
                <ul>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price1">
                      ~ $50
                    </RoundBtn>
                    <input type="checkbox" id="price1" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price2">
                      $51 ~ $100
                    </RoundBtn>
                    <input type="checkbox" id="price2" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price3">
                      $101 ~ $150
                    </RoundBtn>
                    <input type="checkbox" id="price3" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price4">
                      $151 ~ $200
                    </RoundBtn>
                    <input type="checkbox" id="price4" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price5">
                      $201 ~ $250
                    </RoundBtn>
                    <input type="checkbox" id="price5" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="price6">
                      $251 ~
                    </RoundBtn>
                    <input type="checkbox" id="price6" />
                  </RoundBtnWrap>
                </ul>
              </Div>
            </FilterInner>
            <FilterInner>
              <FilterTitle>쇼핑정보</FilterTitle>
              <div>
                <ul>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping1">
                      일시품절 제외
                    </RoundBtn>
                    <input type="checkbox" id="shopping1" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping2">
                      SKYSHOP EXCLUSIVE
                    </RoundBtn>
                    <input type="checkbox" id="shopping2" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping3">
                      온라인 단독
                    </RoundBtn>
                    <input type="checkbox" id="shopping3" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping4">
                      신상품
                    </RoundBtn>
                    <input type="checkbox" id="shopping4" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping5">
                      세일
                    </RoundBtn>
                    <input type="checkbox" id="shopping5" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping6">
                      쿠폰
                    </RoundBtn>
                    <input type="checkbox" id="shopping6" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping7">
                      사은품
                    </RoundBtn>
                    <input type="checkbox" id="shopping7" />
                  </RoundBtnWrap>
                  <RoundBtnWrap as="li">
                    <RoundBtn as="label" htmlFor="shopping8">
                      핫딜
                    </RoundBtn>
                    <input type="checkbox" id="shopping8" />
                  </RoundBtnWrap>
                </ul>
              </div>
            </FilterInner>
          </Filter>
          <BtnWrap className="pc">
            <Btn
              display="inline-block"
              color="#000"
              bd="1px solid #000"
              mr="5px"
            >
              <Div dsp="flex" align="center" justify="center">
                <Img
                  pc={{ width: '2.4rem', height: '2.4rem' }}
                  src="/assets/icons/rotate-arrow.svg"
                  alt="아이콘"
                  mr=".8rem"
                />
                초기화
              </Div>
            </Btn>
            <Btn display="inline-block" bgc="#000" ml="5px">
              <Div dsp="flex" align="center" justify="center">
                <Img
                  pc={{ width: '2.4rem', height: '2.4rem' }}
                  src="/assets/icons/icon-search-light-w.svg"
                  alt="아이콘"
                  mr=".8rem"
                />
                필터적용
              </Div>
            </Btn>
          </BtnWrap>
          <MoFilter className="mo">
            <MoSelect>
              <option>브랜드</option>
              <option>브랜드</option>
            </MoSelect>
            <MoSelect>
              <option>가격</option>
              <option>가격</option>
            </MoSelect>
            <MoSelect>
              <option>쇼핑정보</option>
              <option>쇼핑정보</option>
            </MoSelect>
          </MoFilter>
        </FilterWrap>
      </form>
    </>
  );
}

const FilterWrap = styled.div`
  ${theme.common.center};
  padding: 3.6rem 17rem 4rem;
  background-color: ${theme.color.primary.bgGray};
  .mo {
    display: none;
  }
  ${theme.device.responsive} {
    .mo {
      display: block;
    }
    .pc {
      display: none;
    }
    padding: 12px 0;
    margin: 0 auto;
  }
`;
const Filter = styled.section``;
const FilterInner = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${theme.color.gray.gray45};
  margin-bottom: 2rem;
  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
const FilterTitle = styled.h3`
  width: 9.2rem;
  font-size: ${theme.font.size.base};
  font-family: 'PretendardSemiBold';
  margin-top: ${props => props.mt || '6px'};
`;
const FilterInputWrap = styled.div``;
const InputText = styled.input`
  width: ${props => props.width || 'inherit'};
  line-height: ${props => props.lh || 'inherit'};
  border: ${props => props.bd || `1px solid ${theme.color.gray.gray45}`};
  padding: ${props => props.pd || '0 8px'};
  background-color: #fff;
  outline: 0;
`;
const RoundBtnWrap = styled.div`
  display: inline-block;
  &:last-child label {
    margin-right: 0;
  }
  & input {
    display: none;
  }
`;
const RoundBtn = styled.button`
  display: inline-block;
  font-size: ${props => props.fz || '1.4rem'};
  line-height: ${props => props.lh || '3.2rem'};
  color: ${theme.color.gray.gray88};
  padding: 0 1.6rem;
  border: 1px solid ${theme.color.gray.gray45};
  border-radius: ${props => props.radius || '5rem'};
  margin-right: ${props => props.mr || '8px'};
  background-color: ${props => props.bgc || `${theme.color.common.white}`};
  cursor: pointer;
`;
const MoreBtn = styled.a`
  position: relative;
  font-size: 1.6rem;
  font-family: 'PretendardBold';
  padding-right: 16px;
  padding-bottom: 3px;
  margin-left: 1.2rem;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 16px);
    height: 1px;
    background-color: ${theme.color.common.black};
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    border: 4px solid ${theme.color.common.black};
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: translateY(-50%);
  }
`;
const BrandOrder = styled.li`
  color: ${theme.color.gray.gray88};
  margin-right: 2rem;
  ${props =>
    props.active &&
    css`
      color: ${theme.color.common.black};
      font-family: 'PretendardSemiBold';
      border-bottom: 1px solid ${theme.color.common.black};
    `}
`;
const BtnWrap = styled.div`
  ${theme.common.center};
  text-align: center;
  margin-top: 4rem;
`;
const ProductWrap = styled.div`
  ${theme.common.center};
  margin-bottom: 12rem;
`;
const Title = styled.p`
  font-size: ${props => props.fz || `4rem`};
  font-family: ${props => props.ff || `PretendardBold`};
  text-align: ${props => props.ta || `center`};
  margin-bottom: ${props => props.mb || `6rem`};
`;
const FlexWrap = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  justify-content: space-between;
  // & > div {
  //     width: 33%;
  //     margin-right: 0;
  // }
`;
const FlexWrap2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // width: 100%;

  justify-content: space-between;
  // & > div {
  //     width: 33%;
  //     margin-right: 0;
  // }
`;
const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 8.3px;
  transform: translateY(-50%);
`;
const MoFilter = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const MoSelect = styled.select`
  font-size: 1.4rem;
  color: #666;
  height: 3.2rem;
  font-family: 'PretendardMedium';
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 4px 3.2rem 4px 1rem;
  margin-right: 1rem;
  background: #fff url('/assets/icons/ic_arrowup.svg') no-repeat right 1.3rem
    center;
  & option {
    font-size: 1.3rem;
    line-height: 3rem;
    border-radius: 15px;
  }
`;
