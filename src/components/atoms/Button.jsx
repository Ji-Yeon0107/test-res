import styled, { css } from 'styled-components';

export const Btn = styled.button`
  ${({ theme }) => {
    return css`
      display: ${props => props.display || 'inline-block'};
      width: ${props => props.width || '20rem'};
      height: ${props => props.lh || '4.8rem'};
      font-size: ${props => props.fz || '1.8rem'};
      color: ${props => props.color || '#fff'};
      font-family: ${props => props.fontFamily || 'PretendardSemiBold'};
      line-height: ${props => props.lh || '4.8rem'};
      vertical-align: middle;
      border: ${props => props.bd || '0'};
      border-radius: ${props => props.bdr || '0'};
      margin-left: ${props => props.ml || '0'};
      margin-right: ${props => props.mr || '0'};
      margin-top: ${props => props.mt || '0'};
      margin-bottom: ${props => props.mb || '0'};
      transition: all 350ms;
      background-color: ${props => props.bgc || `${theme.color.common.white}`};
      ${({ btnBlack }) => {
        if (btnBlack) {
          return css`
            color: ${theme.color.common.white};
            background-color: ${theme.color.common.black};
          `;
        }
      }}
      ${({ btnBorder }) => {
        if (btnBorder) {
          return css`
            color: ${theme.color.common.black};
            border: 1px solid ${theme.color.common.black};
          `;
        }
      }}
            ${({ btnBlue }) => {
        if (btnBlue) {
          return css`
            color: ${theme.color.common.white};
            background-color: ${theme.color.primary.fontBlue};
          `;
        }
      }}
    `;
  }}
`;
