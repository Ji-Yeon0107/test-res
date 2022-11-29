import styled from 'styled-components';
import theme from 'styles/theme';

const HeadTableWrap = styled.div`
  width: 100%;
`;

const HeadTableTitle = styled.h3`
  width: 100%;
  margin-bottom: 2rem;
  font-size: 20px;
  line-height: 24px;
`;

const HeadTable = styled.table`
  width: 100%;
  table-layout: ${props => props.layout || 'auto'};
  ${theme.device.responsive} {
    width: 95%;
    margin: 0 auto;
    thead {
      display: none;
    }
    tbody {
      border-bottom: 1px solid #dfdfdf;
    }
  }
`;

const HeadTableTr = styled.tr`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  ${theme.device.responsive} {
    width: 100%;
    display: ${({mobDisplay}) => mobDisplay || 'flex'};
    flex-direction: ${({mobDirection}) => mobDirection || 'column'};
    border-top: 1px solid #dfdfdf;
    padding: 1rem 0;
  }
`;

const HeadTableTh = styled.th`
  background-color: #f7f7f7;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  vertical-align: middle;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-family: ${({ fontWeight }) =>
    fontWeight ? fontWeight : 'PretendardMedium'};
  height: ${({ height }) => (height ? height : '48px')};
  input {
    background-image: url(/icons/check.svg);
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
  }
  input:checked {
    background-image: url(/icons/checked.svg);
  }
`;

const HeadTableTd = styled.td`
  height: ${({ height }) => (height ? height : null)};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  vertical-align: ${({ vertical }) => (vertical ? vertical : 'middle')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  font-family: ${({ fontWeight }) => (fontWeight ? fontWeight : 'Pretendard')};
  padding: ${({ padding }) => (padding ? padding : '10px 12px')};
  border-bottom: ${({ border }) => (border ? border : '1px solid #dfdfdf')};
  color: ${({ color }) => (color ? color : '#000')};
  input {
    background-image: url(/icons/check.svg);
    width: 2rem;
    height: 2rem;
  }
  input:checked {
    background-image: url(/icons/checked.svg);
  }
  ${theme.device.responsive} {
    position: relative;
    width: 100%;
    border-bottom: ${({ mobborder }) => (mobborder ? mobborder : 'none')};
    text-align: ${({ mobtextAlign }) => (mobtextAlign ? mobtextAlign : 'right')};
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 30%;
      padding: 1rem 0;
      white-space: nowrap;
      font-weight: bold;
      color: ${theme.color.common.black};
      font-family: 'PretendardMedium';
      text-align: left;
      text-indent: 0;
      content: attr(data-title);
    }
  }
`;

const TableWrap = styled.div`
  width: 100%;
`;
const Table = styled.table`
  width: 100%;
  table-layout: ${props => props.layout || 'auto'};
`;

const TableTitle = styled.div`
  font-size: 16px;
  margin-bottom: ${({ mgb }) => (mgb ? mgb : '2rem')};
  width: 100%;
  ${theme.device.responsive} {
    margin-bottom: ${({ mobMgb }) => (mobMgb ? mobMgb : '1rem')};
  }
`;
const TableTr = styled.tr`
  display: ${({ dsp }) => dsp && dsp};
  ${theme.device.responsive} {
    display: ${({ mobDsp }) => mobDsp && mobDsp};
  }
`;
const TableTh = styled.th`
  padding: ${({ pd }) => (pd ? pd : '0 2rem')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#f7f7f7')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  vertical-align: middle;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-family: ${({ fontWeight }) => (fontWeight ? fontWeight : 'Pretendard')};
  height: ${({ height }) => (height ? height : '60px')};

  border: ${({ border }) => (border ? border : '1px solid #dfdfdf')};
  border-left: ${({ borderL }) => (borderL ? 'none' : '1px solid #dfdfdf')};
  border-right: ${({ borderR }) => (borderR ? 'none' : '1px solid #dfdfdf')};
  border-top: ${({ borderT }) => (borderT ? 'none' : '1px solid #dfdfdf')};
  border-bottom: ${({ borderB }) => (borderB ? 'none' : '1px solid #dfdfdf')};

  display: ${({ dsp }) => dsp && dsp};
  visibility: ${({ vsb }) => vsb && vsb};
  ${theme.device.responsive} {
    display: ${({ mobDsp }) => mobDsp && mobDsp};
    visibility: ${({ mobVsb }) => mobVsb && mobVsb};
    width: ${({ mobWidth }) => (mobWidth ? mobWidth : 'fit-content')};
  }
`;
const TableTd = styled.td`
  padding: ${({ pd }) => (pd ? pd : '0 2rem')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : null)};
  vertical-align: middle;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  font-family: ${({ fontWeight }) => (fontWeight ? fontWeight : 'Pretendard')};
  border: ${({ border }) => (border ? border : '1px solid #dfdfdf')};
  border-left: ${({ borderL }) => (borderL ? 'none' : '1px solid #dfdfdf')};
  border-right: ${({ borderR }) => (borderR ? 'none' : '1px solid #dfdfdf')};
  border-top: ${({ borderT }) => (borderT ? 'none' : '1px solid #dfdfdf')};
  border-bottom: ${({ borderB }) => (borderB ? 'none' : '1px solid #dfdfdf')};

  color: ${({ color }) => (color ? color : '#000')};

  display: ${({ dsp }) => dsp && dsp};
  ${theme.device.responsive} {
    display: ${({ mobDsp }) => mobDsp && mobDsp};
    width: ${({ mobWidth }) => (mobWidth ? mobWidth : 'fit-content')};
  }
`;

export {
  HeadTableWrap,
  HeadTable,
  HeadTableTitle,
  HeadTableTr,
  HeadTableTh,
  HeadTableTd,
  TableWrap,
  TableTitle,
  Table,
  TableTr,
  TableTh,
  TableTd,
};
