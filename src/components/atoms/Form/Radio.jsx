import styled, { css } from 'styled-components';
const RadioWrap = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      /* gap: 0.5rem; */
      ${({ width }) => {
        return width && `width: ${width};`;
      }};
    `;
  }}
`;
const Radio = styled.input`
  ${({ theme }) => {
    return css`
      display: none;
      :checked {
        & ~ ${RadioLabel} {
          &:before {
            content: '';
            width: ${({ checkW }) => (checkW ? checkW : '60%')};
            height: ${({ checkH }) => (checkH ? checkH : '60%')};
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: ${({ borderColor }) =>
              borderColor
                ? `1px solid ${borderColor}`
                : `1px solid ${theme.color.common.black}`};
            background-color: ${({ bgColor }) =>
              bgColor ? bgColor : `${theme.color.common.black}`};
            border-radius: 50%;
          }
        }
        & ~ ${RadioLabelButton} {
          background-color: ${theme.color.common.black};
          color: ${theme.color.common.white};
          border-color: ${theme.color.common.black};
        }
      }
    `;
  }}
`;
const RadioLabel = styled.label`
  ${({ theme }) => {
    return css`
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: ${({ borderColor }) =>
        borderColor
          ? `1px solid ${borderColor}`
          : `1px solid ${theme.color.common.black}`};
      background-color: ${({ bgColor }) =>
        bgColor ? bgColor : `${theme.color.common.white}`};

      cursor: pointer;
      margin: 0;
      position: relative;
    `;
  }}
`;
const RadioLabelText = styled.label`
  ${({ theme }) => {
    return css`
      padding-left: ${({ pdl }) => (pdl ? pdl : '1rem')};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
      cursor: pointer;
    `;
  }}
`;
const RadioLabelButton = styled.label`
  ${({ theme }) => {
    return css`
      border: 1px solid ${theme.color.common.black};
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      min-width: 140px;
      border-radius: 8px;
      color: ${theme.color.common.black};
      ${({ type2 }) => {
        return (
          type2 &&
          `
                background-color:${theme.color.common.white};
                color:${theme.colors.black};
                // font-size:${theme.fonts.size.sm};
                padding: 0 1rem;
                // font-weight:${theme.fonts.weight.lg};
                border:1px solid ${theme.color.primary.gray};
                height:2.5rem;
                width:fit-content;
                min-width:80px;
                `
        );
      }};
      ${({ inintialChecked }) => {
        return (
          inintialChecked &&
          `
                    background-color: ${theme.color.common.black};
                    color: ${theme.color.common.white};
                    border-color: ${theme.color.common.black};

                `
        );
      }};
    `;
  }}
`;

export { RadioWrap, Radio, RadioLabel, RadioLabelText, RadioLabelButton };
