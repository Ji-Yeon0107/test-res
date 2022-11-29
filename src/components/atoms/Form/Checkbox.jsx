import styled, { css } from "styled-components";
// import checkWhite from 'assets/icons/icon-check.svg';
// import checkBlack from 'assets/icons/icon-check-active.svg';

const CheckboxWrap = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: ${({ mgb }) => (mgb ? mgb : "0")};
      margin-top: ${({ mgt }) => (mgt ? mgt : "0")};
      margin-left: ${({ mgl }) => (mgl ? mgl : "0")};
      width: ${({ width }) => (width ? width : "auto")};
    `;
  }}
`;
const Checkbox = styled.input`
  ${({ theme }) => {
    return css`
      display: none;
      :checked {
        & ~ ${CheckboxLabel} {
          background-color: ${({ bgColor }) =>
            bgColor ? bgColor : `${theme.color.common.black}`};
          border: ${({ borderColor }) =>
            borderColor
              ? `1px solid ${borderColor}`
              : `1px solid ${theme.color.common.black}`};
          background-image: url("assets/icons/icon-check-active.svg");
        }
        & ~ ${CheckboxLabelButton} {
          background-color: ${({ bgColor }) =>
            bgColor ? bgColor : `${theme.color.common.black}`};
          border: ${({ borderColor }) =>
            borderColor
              ? `1px solid ${borderColor}`
              : `1px solid ${theme.color.common.black}`};
          color: ${({ color }) =>
            color ? color : `${theme.color.common.white}`};
        }
      }
    `;
  }}
`;

const CheckboxLabel = styled.label`
  ${({ theme }) => {
    return css`
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 5px;
      border: ${({ borderColor }) =>
        borderColor
          ? `1px solid ${borderColor}`
          : `1px solid ${theme.color.common.black}`};
      background-color: ${({ bgColor }) =>
        bgColor ? bgColor : `${theme.color.common.white}`};
      cursor: pointer;
      margin: 0;
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("assets/icons/icon-check.svg");
    `;
  }}
`;
const CheckboxLabelButton = styled.label`
  ${({ theme }) => {
    return css`
      border: ${({ borderColor }) =>
        borderColor
          ? `1px solid ${borderColor}`
          : `1px solid ${theme.color.common.black}`};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      /* min-width: 140px; */
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 8px;
      color: ${({ color }) => (color ? color : `${theme.color.common.black}`)};
    `;
  }}
`;

const CheckboxLabelText = styled.label`
  ${({ theme }) => {
    return css`
      padding-left: ${({ pdl }) => (pdl ? pdl : "1rem")};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
      cursor: pointer;
      ${({ bold }) => {
        return bold && `font-weight:${theme.fonts.weight.xl}`;
      }};
      ${({ pdr }) => {
        return pdr && `padding-right:${pdr}`;
      }};
      ${({ red }) => {
        return red && `color:${theme.colors.red}`;
      }};
      ${({ fontWeight }) => {
        return fontWeight === "300"
          ? `font-family: 'PretendardLight'`
          : fontWeight === "400"
          ? `font-family: 'Pretendard'`
          : fontWeight === "500"
          ? `font-family: 'PretendardMedium'`
          : fontWeight === "600"
          ? `font-family: 'PretendardSemiBold'`
          : fontWeight === "700"
          ? `font-family: 'PretendardBold'`
          : null;
      }};
    `;
  }}
`;

export {
  CheckboxWrap,
  Checkbox,
  CheckboxLabel,
  CheckboxLabelButton,
  CheckboxLabelText,
};
