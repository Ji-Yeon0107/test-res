import styled from 'styled-components';
import Img from 'components/atoms/Img';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Div';
import theme from 'styles/theme';

export default function Navbar() {
  return (
    <NavWrap>
      <Div as="ul">
        <Div as="li">
          <Div as="button">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/navbar_menu_1.svg`}
              alt="navbar_menu1"
            ></Img>
            메뉴
          </Div>
        </Div>
        <Div as="li">
          <Div as="button">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/navbar_menu_2.svg`}
              alt="navbar_menu1"
            ></Img>
            주류전문관
          </Div>
        </Div>
        <Div as="li">
          <Div as="button">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/navbar_menu_3.svg`}
              alt="navbar_menu1"
            ></Img>
            홈
          </Div>
        </Div>
        <Div as="li">
          <Div as="button">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/navbar_menu_4.svg`}
              alt="navbar_menu1"
            ></Img>
            마이페이지
          </Div>
        </Div>
        <Div as="li">
          <Div as="button">
            <Img
              pc={{ width: '3rem', height: '3rem' }}
              src={`/icons/navbar_menu_5.svg`}
              alt="navbar_menu1"
            ></Img>
            찜
          </Div>
        </Div>
      </Div>
    </NavWrap>
  );
}

const NavWrap = styled.div`
  ${theme.device.responsive} {
    display: block;
  }
  display: none;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6.1rem;
  // min-width: 375px;
  background-color: #fff;
  ul {
    padding: 0 2rem;
    width: 100%;
    height: 6.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    li {
      width: 100%;
      text-align: center;
      button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 4.8rem;
        padding: 0 1rem;
        margin: 0 auto;
        font-size: 12px;
        gap: 0.4rem;
      }
    }
  }
`;
