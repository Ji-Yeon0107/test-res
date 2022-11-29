import styled from 'styled-components';

import theme from 'styles/theme';
import Div from './Div';
import Img from './Img';

export default function MoTitleBox({ tit, homeIcon }) {
  return (
    <Box
      mobAlign="center"
      mobJustify="space-between"
      mobPadding="16px 15px 16px 10px"
      mobBorderBottom
    >
      <Div dsp="flex">
        <Div width="6rem">
          <Img
            pc={{ width: '32px', height: '32px' }}
            src="/assets/icons/icon-arrow-left.png"
            alt="뒤로가기 아이콘"
          />
        </Div>
        {homeIcon && (
          <Div>
            <Img
              pc={{ width: '32px', height: '32px' }}
              src="/assets/icons/icon-mobile-header-home.svg"
              alt="홈 아이콘"
            />
          </Div>
        )}
      </Div>

      <Title>{tit}</Title>
      <Div>
        <Div dsp="flex" align="center" justify="space-between">
          <button>
            <Img
              pc={{ width: '24px', height: '24px' }}
              src="/assets/icons/icon-bag-search.svg"
              alt="검색 아이콘"
            />
          </button>
          <Div position="relative" dsp="flex" align="center">
            <button>
              <Img
                pc={{ width: '24px', height: '24px' }}
                src="/assets/icons/icon-bag-bk.svg"
                alt="장바구니 아이콘"
                ml="1.3rem"
              />
              <ShopNum>0</ShopNum>
            </button>
          </Div>
        </Div>
      </Div>
    </Box>
  );
}
const Box = styled(Div)`
  display: none;
  ${theme.device.responsive} {
    display: flex;
  }
`;
const Title = styled.p`
  ${theme.device.responsive} {
    font-size: 2rem;
    font-family: 'PretendardBold';
    margin-bottom: 0;
  }
`;
const ShopNum = styled.div`
  position: absolute;
  top: 0;
  right: -1px;
  min-width: 14px;
  height: 14px;
  font-size: 9px;
  color: #fff;
  text-align: center;
  line-height: 14px;
  border-radius: 20px;
  padding: 0 3px;
  background-color: #e0003f;
`;
