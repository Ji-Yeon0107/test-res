import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const baseIcon = '/assets/icons/icon-dropdown-black.svg';

export default function SelectBox({
  currentTxt, //select box 선택 전 최초 문구
  optionData, //option data (배열)
  iconWidth, //select box 오른쪽 아이콘 사이즈
  iconHeight, //select box 오른쪽 아이콘 사이즈
  iconSrc, // 이미지 url
  iconRight, //아이콘 위치
  boxWidth, //select box 크기
  boxHeight, //select box 크기
  time, //시간, 분 optionr값이 00 01 과 같을때
  labelColor, //라벨 텍스트 컬러
  labelBg, //라벨 배경 컬러
  labelPdL, //Label padding-left 값
  pd, //select box padding 값
  fontSize, // 라벨 텍스트 사이즈
  lang, // 언어선택 스타일링 (백그라운드 없음)
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(currentTxt);
  const [currentKey, setCurrentKey] = useState(null);
  const [selected, setSelected] = useState(false);

  const handleOnChangeSelectValue = props => {
    // const { innerText } = e.target;
    // setCurrentValue(innerText);
    setCurrentValue(props);
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
      pd={pd}
      lang={lang}
    >
      {currentKey === null ? (
        <Label labelColor={labelColor} labelPdL={labelPdL} fontSize={fontSize}>
          {!time ? (
            <>
              {currentValue === undefined
                ? `${optionData[0].value}`
                : currentValue}
            </>
          ) : optionData[0].value < 10 ? (
            <>
              {currentValue === undefined
                ? `0${optionData[0].value}`
                : currentValue}
            </>
          ) : (
            <>
              {currentValue === undefined
                ? `${optionData[0].value}`
                : currentValue}
            </>
          )}
        </Label>
      ) : (
        <Label2>
          {!time ? (
            <>{currentValue}</>
          ) : currentValue < 10 ? (
            <>{`0${currentValue}`}</>
          ) : (
            <>{currentValue}</>
          )}
        </Label2>
      )}

      {/* {time && } */}
      <SelectOptions show={showOptions} boxHeight={boxHeight}>
        {optionData?.map((data, index) => (
          <Option
            key={index}
            value={data.value}
            onClick={() => {
              handleOnChangeSelectValue(data.value);
            }}
            time={time}
          >
            {/* {data.value} */}
            {!time
              ? `${data.value}`
              : data.value < 10
              ? `0${data.value}`
              : `${data.value}`}
          </Option>
        ))}
      </SelectOptions>
    </SelectBoxWrap>
  );
}

const SelectBoxWrap = styled.div`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : '330px')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : '48px')};
  padding: ${({ pd }) => (pd ? pd : '8px')};
  border-radius: 5px;
  /* background-color: ${({ labelBg }) => (labelBg ? labelBg : '#fff')}; */
  background-color: ${function (props) {
    if (props.labelBg) {
      return '#fafafa';
    } else if (props.selected) {
      return '#fff !important';
    } else if (props.lang) {
      return 'trasnparent';
    } else {
      return '#fff';
    }
  }};
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
  padding-left: ${({ labelPdL }) => (labelPdL ? labelPdL : '1.5rem')};
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.6rem')};
  cursor: pointer;
  color: ${({ labelColor }) => (labelColor ? labelColor : '#000')};
`;
const Label2 = styled(Label)`
  color: #000;
`;
const SelectOptions = styled.ul`
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  list-style: none;
  margin-top: -1px;
  top: ${({ boxHeight }) => (boxHeight ? boxHeight : '48px')};
  left: 0;
  width: 100%;
  max-height: 200px;
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
  padding: 1.1rem 0.5rem;
  width: 100%;
  height: 4rem;
  position: relative;
  z-index: 10;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgba(91, 166, 210, 0.1);
  }
`;
