import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Img from 'components/atoms/Img';

const baseIcon = '/assets/icons/icon-dropdown-black.svg';

export default function SelectImgBox({
  currentTxt, //select box 선택 전 최초 문구
  optionData, //option data (배열)
  iconWidth, //select box 오른쪽 아이콘 사이즈
  iconHeight, //select box 오른쪽 아이콘 사이즈
  iconSrc, // 이미지 url
  iconRight, //아이콘 위치
  boxWidth, //select box 크기
  boxHeight, //select box 크기
  labelColor, //라벨 텍스트 컬러
  labelBg, //라벨 배경 컬러
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(currentTxt);
  const [currentKey, setCurrentKey] = useState(null);
  const [selected, setSelected] = useState(false);

  const handleOnChangeSelectValue = (props) => {
    // const { innerText } = e.target;
    // setCurrentValue(innerText);
    // console.log('props',props);
    setCurrentKey(props);
    setSelected(true);
  };

  return (
    <SelectBoxWrap
      show={showOptions}
      onClick={() => setShowOptions(prev => !prev)}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      iconSrc={iconSrc}
      iconRight={iconRight}
      boxWidth={boxWidth}
      boxHeight={boxHeight}
      labelBg={labelBg}
      selected={selected}
    >
      {currentKey === null ? (
        <Label labelColor={labelColor}>{currentValue}</Label>
      ): (
        <LabelSelect>
          <Img
              pc={{ width: '100px', height: '100px' }}
              src={optionData[currentKey.index]?.img}
              alt={optionData[currentKey.index]?.title}
              height100
            />
            <ProdWrap>
              <ProdBrand>{optionData[currentKey.index]?.brand}</ProdBrand>
              <ProdTit>{optionData[currentKey.index]?.title}</ProdTit>
              <PriceInfo>
                <Price1>{optionData[currentKey.index]?.price1}</Price1>
                <Price2>{optionData[currentKey.index]?.price2}</Price2>
                <Price3>{optionData[currentKey.index]?.price3}</Price3>
                <Price4>{optionData[currentKey.index]?.price4}</Price4>
              </PriceInfo>
            </ProdWrap>
        </LabelSelect>
      )}
      
      <SelectOptions show={showOptions} boxHeight={boxHeight} selected={selected}>
        {optionData?.map((data, index) => (
          <Option
            key={index}
            value={data.value}
            onClick={()=>{
              handleOnChangeSelectValue({index})
            }}
          >
            <Img
              pc={{ width: '100px', height: '100px' }}
              src={data.img}
              alt={data.title}
              height100
            />
            <ProdWrap>
              <ProdBrand>{data.brand}</ProdBrand>
              <ProdTit>{data.title}</ProdTit>
              <PriceInfo>
                <Price1>{data.price1}</Price1>
                <Price2>{data.price2}</Price2>
                <Price3>{data.price3}</Price3>
                <Price4>{data.price4}</Price4>
              </PriceInfo>
            </ProdWrap>
          </Option>
        ))}
      </SelectOptions>
    </SelectBoxWrap>
  );
}

const SelectBoxWrap = styled.div`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : '610px')};
  height: ${({ selected }) => (selected ? '130px' : '48px')};
  /* max-height:130px; */
  padding: 8px;
  border-radius: 5px;
  background-color: ${({ labelBg }) => (labelBg ? labelBg : '#fff')};
  border: 1px solid #dfdfdf;
  border-color: ${props => (props.show ? '#000' : '#dfdfdf')};
  font-size: 1.5rem;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: ${({ iconWidth }) => (iconWidth ? iconWidth : '1rem')};
    height: ${({ iconHeight }) => (iconHeight ? iconHeight : '0.5rem')};
    top: 50%;
    right: ${({ iconRight }) => (iconRight ? iconRight : '1.5rem')};
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
  height:100%;
  /* height: ${({ selected }) => (selected ? '130px' : '48px')}; */
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ labelColor }) => (labelColor ? labelColor : '#000')};
`;
const LabelSelect = styled(Label)`
  display: flex;
  align-items: center;
  padding: 1.1rem 0.5rem;
`;
const SelectOptions = styled.ul`
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  list-style: none;
  margin-top: -1px;
  top: ${({ selected }) => (selected ? '130px' : '48px')};
  left: 0;
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
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
  display: flex;
  align-items: center;
  padding: 1.1rem 0.5rem;
  width: 100%;
  height: 12rem;
  position: relative;
  z-index: 10;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgba(91, 166, 210, 0.1);
  }
  
`;

const ProdWrap = styled.div`
  margin-left: 2rem;
  text-align:left;
`;
const ProdBrand = styled.span`
  display: block;
  color: #666;
  font-size: 1.4rem;
  
`;
const ProdTit = styled.strong`
  display: block;
  font-size: 1.8rem;
  font-family: 'PretendardSemiBold';
  margin-top:.5rem;
`;
const PriceInfo = styled.div`
  display: flex;
  align-items:center;
  font-size: 1.6rem;
  margin-top:1.1rem;
`;
const Price1 = styled.strong`
  color: #666;
  text-decoration: line-through;
`;
const Price2 = styled.strong`
  color: #e1251b;
  display: inline-block;
  margin-left: 0.5rem;
`;

const Price3 = styled.strong`
  font-size: 1.8rem;
  font-family: 'PretendardSemiBold';
  display: inline-block;
  margin-left: 1rem;
`;

const Price4 = styled.strong`
  display: inline-block;
`;
