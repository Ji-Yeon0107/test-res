import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const LayoutCover = styled.div`
  ${({ theme }) => {
    return css`
      padding-top: 189px;
      ${theme.device.responsive} {
        padding-top: 84px;
}
    `;
  }}
`;

export default LayoutCover;
