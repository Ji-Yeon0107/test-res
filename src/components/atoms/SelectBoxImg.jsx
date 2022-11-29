import { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';

const baseIcon = '/assets/icons/icon-dropdown-black.svg';

export default function SelectBoxImg({
  currentTxt, //select box 선택 전 최초 문구
  optionData, //option data (배열)
  iconWidth, //select box 오른쪽 아이콘 사이즈
  iconHeight, //select box 오른쪽 아이콘 사이즈
  iconSrc, // 이미지 url
  boxWidth, //select box 크기
  boxHeight, //select box 크기
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const handleOnChangeSelectValue = e => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <SelectBoxWrap
      show={showOptions}
      onClick={() => setShowOptions(prev => !prev)}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      iconSrc={iconSrc}
      boxWidth={boxWidth}
      boxHeight={boxHeight}
    >
      <Label>{currentValue === null ? currentTxt : currentValue}</Label>
      <SelectOptions show={showOptions}>
        {optionData?.map((data, index) => (
          <Option
            key={index}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            <Img
              pc={{ width: '10rem', height: '10rem' }}
              src={data.src}
              alt={`${data.product} 이미지`}
            />
            <ProdInfo>
              <Span dsp="block" as="strong" size="1.4rem" color="#666">
                {data.brand}
              </Span>
              <Span
                dsp="block"
                as="strong"
                fontWeight="600"
                size="1.8rem"
                mgt="5=.5rem"
              >
                {data.product}
              </Span>
              <Div dsp="flex" align="flex-end" mgt="1rem">
                <Span
                  dsp="inline-block"
                  size="1.6rem"
                  color="#666"
                  textDecoration="line-through"
                >
                  {data.price1}
                </Span>
                <Span dsp="inline-block" size="1.6rem" mgl=".5rem" color="red">
                  {data.price2}
                </Span>
                <Span
                  dsp="inline-block"
                  size="1.8rem"
                  mgl="1rem"
                  fontWeight="600"
                >
                  {data.price3}
                </Span>
                <Span dsp="inline-block" size="1.6rem">
                  {data.price4}
                </Span>
              </Div>
            </ProdInfo>
          </Option>
        ))}
      </SelectOptions>
    </SelectBoxWrap>
  );
}

const SelectBoxWrap = styled.div`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : '610px')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : '48px')};
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-color: ${props => (props.show ? '#000' : '#dfdfdf')};
  font-size: 1.5rem;
  z-index: 10;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: ${({ iconWidth }) => (iconWidth ? iconWidth : '1rem')};
    height: ${({ iconHeight }) => (iconHeight ? iconHeight : '0.5rem')};
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    background-image: url(${({ iconSrc }) => (iconSrc ? iconSrc : baseIcon)});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Label = styled.label`
  padding-left: 1.5rem;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SelectOptions = styled.ul`
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  list-style: none;
  margin-top: -1px;
  top: ${({ boxHeight }) => (boxHeight ? boxHeight : '48px')};
  left: 0;
  width: 100%;
  height: ${props => (props.show ? 'auto' : '0')};
  opacity: ${props => (props.show ? '1' : '0')};
  padding: ${props => (props.show ? '1rem' : '0')};
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  border-width: ${props => (props.show ? '1' : '0')};
  transition-property: opacity;
  transition-duration: 0.5s;
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : ' 0 3px 20px 0 rgba(0, 0, 0, 0.16);'};
`;
const Option = styled.li`
  padding: 1.1rem 0.5rem;
  width: 100%;
  height: 12rem;
  background-color: salmon;
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(2n) {
    background-color: darksalmon;
  }
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgba(91, 166, 210, 0.1);
  }
`;

const ProdInfo = styled.div`
  margin-left: 2rem;
`;
