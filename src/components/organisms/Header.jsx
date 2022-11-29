import Link from 'next/link';

import { Tabs, Tab, ThemeProvider, createTheme } from '@mui/material';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';
import Modal from 'components/organisms/Modal';
import { useState } from 'react';
import Inform from 'components/organisms/Inform';
import { Btn } from 'components/atoms/Button';
import Menu from 'components/organisms/Menu';
import Div from 'components/atoms/Div';
import Img from 'components/atoms/Img';
import { Block } from '@mui/icons-material';

// import { useDispatch, useSelector } from 'react-redux';
// import { setMainTabIndex } from 'store/app';

export default function Header() {
  const [activeMainTabIndex, setActiveMainTabIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setActiveMainTabIndex(newValue);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = e => {
    setMenuOpen(prev => !prev);
  };

  return (
    <Bg themeWhite={themeWhite} themeBlack={themeBlack} small={small}>
      <Wrapper small={small}>
        {small || (
          <Container small={small}>
            <InnerLeft>
              <LogoContainer>
                <LogoImage
                  src={
                    themeWhite
                      ? `/assets/gnb/logo-black.svg`
                      : `/icons/gnb/logo-white.svg`
                  }
                  alt="logo"
                  width="100%"
                  height="100%"
                  onClick={() => {
                    setThemeWhite(prev => !prev);
                    if (themeWhite) {
                      setThemeBlack(true);
                      return;
                    }
                    if (themeBlack) {
                      setThemeBlack(false);
                      setThemeWhite(false);

                      return;
                    }
                  }}
                />
              </LogoContainer>
              <Search as="form">
                <input placeholder="단독! 로얄살루트 추가할인 & FREE GIFT!" />
                <SearchBtn>
                  <Img
                    pc={{ width: '3.57rem', height: '3.57rem' }}
                    src={
                      themeWhite
                        ? `/assets/icons/icon-search-light-bk.svg`
                        : `/icons/gnb/icon-search.svg`
                    }
                    alt="search icon"
                  />
                </SearchBtn>
              </Search>
              <ExchangeRate
                onClick={() => {
                  setThemeBlack(prev => !prev);
                }}
              >
                오늘의환율 $1 = 1,1311원
              </ExchangeRate>
              <LangSelect>
                <option>한국어</option>
                <option>English</option>
              </LangSelect>
            </InnerLeft>

            <InnerRight>
              <SubMenu
                onClick={() => {
                  setLoginNoticeControl(prev => !prev);
                }}
              >
                {login ? <MenuIconWrap01Login /> : <MenuIconWrap01 />}
                {login ? (
                  <SubMenuTxt>
                    로그
                    <br />
                    아웃
                  </SubMenuTxt>
                ) : (
                  <SubMenuTxt>
                    로그
                    <br />인
                  </SubMenuTxt>
                )}
              </SubMenu>
              <SubMenu
                onClick={() => {
                  setModalControl(prev => !prev);
                }}
              >
                <MenuIconWrap02 />
                <SubMenuTxt>
                  나의
                  <br />
                  정보
                </SubMenuTxt>
              </SubMenu>
              <SubMenu>
                <MenuIconWrap03 />
                <SubMenuTxt>
                  알림
                  <br />
                  보기
                </SubMenuTxt>
              </SubMenu>
              <SubMenu>
                <MenuIconWrap04 />
                <SubMenuTxt>
                  고객
                  <br />
                  센터
                </SubMenuTxt>
              </SubMenu>
              <SubMenu>
                <MenuIconWrap05 />
                <SubMenuTxt>
                  장바
                  <br />
                  구니
                </SubMenuTxt>
              </SubMenu>
              <SubMenu>
                <MenuIconWrap>
                  <span
                    style={{
                      display: 'block',
                      width: 30,
                      height: 30,
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      border: '1px solid grey',
                    }}
                  ></span>
                </MenuIconWrap>
                <SubMenuTxt>
                  최근
                  <br />
                  상품
                </SubMenuTxt>
              </SubMenu>
            </InnerRight>
          </Container>
        )}
        <Container>
          <InnerLeftFlexEnd>
            <MenuIconContainer small={small}>
              <MenuIcon
                onClick={handleMenu}
                sx={{ width: '5rem', height: '4.5rem', cursor: 'pointer' }}
              />
            </MenuIconContainer>
            <ThemeProvider theme={theme}>
              <StyledTabs
                small={small}
                value={activeMainTabIndex}
                onChange={handleChange}
              >
                <StyledTab small={small} label="베스트"></StyledTab>
                <StyledTab
                  small={small}
                  label="세일"
                  className="under"
                ></StyledTab>
                <StyledTab small={small} label="선물하기"></StyledTab>
                <StyledTab small={small} label="주류전문관"></StyledTab>
                <StyledTab small={small} label="스토리"></StyledTab>
                <StyledTab small={small} label="이벤트"></StyledTab>
                <StyledTab small={small} label="혜택"></StyledTab>
                <StyledTab small={small} label="카탈로그"></StyledTab>
              </StyledTabs>
            </ThemeProvider>
            {small && (
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  right: 0,
                }}
              >
                <SearchInSmallHeader as="form">
                  <input placeholder="단독! 로얄살루트 추가할인 & FREE GIFT!" />
                  <SearchBtn>
                    <Img
                      pc={{ width: '3.57rem', height: '3.57rem' }}
                      src={
                        themeWhite
                          ? `/assets/icons/icon-search-light-bk.svg`
                          : `/icons/gnb/icon-search.svg`
                      }
                      alt="search icon"
                    />
                  </SearchBtn>
                </SearchInSmallHeader>

                <PlaneImage
                  src={`/icons/gnb/plane.png`}
                  alt="plane search"
                  width={60}
                  height={60}
                />
              </div>
            )}
          </InnerLeftFlexEnd>
          {small || (
            <InnerRight>
              {/* <Link href="#">
                <a className="MallLink">임직원몰</a>
              </Link> */}

              <LineSearch>
                고객님이 탑승하는 노선 선택
                <Img
                  pc={{ width: '1.7rem', height: '1.7rem' }}
                  src={`/icons/gnb/arrow.svg`}
                  alt="arrow icon"
                  inlineBlock
                  ml="1.2rem"
                />
              </LineSearch>
              <PlaneImage
                src={`/icons/gnb/plane.png`}
                alt="plane search"
                width={60}
                height={60}
              />
            </InnerRight>
          )}
        </Container>
        {menuOpen ? <Menu small={small} /> : null}
      </Wrapper>
      {loginNoticeControl ? (
        <ModalBox
          open={loginNoticeControl}
          setOpen={setLoginNoticeControl}
          noTitle
          closeBtn
          width="47rem"
          height="23.1rem"
          overY="visible"
        >
          로그인이 필요한 메뉴 입니다.
          <br />
          로그인을 하시겠습니까?
          <div>
            <Btn btnBorder mr="5px" mt="3rem">
              취소
            </Btn>
            <Btn
              as="a"
              href="#login"
              btnBlack
              ml="5px"
              mt="3rem"
              onClick={() => {
                setLogin(true);
                setLoginNoticeControl(false);
              }}
            >
              확인
            </Btn>
          </div>
        </ModalBox>
      ) : 테스트?.length ? (
        <Inform open={modalControl} setOpen={setModalControl} />
      ) : (
        <ModalBox
          open={modalControl}
          setOpen={setModalControl}
          noTitle
          closeBtn
          width="47rem"
          height="23.1rem"
        >
          알림이 존재하지 않습니다.
          <Btn btnBlack display="block" ml="auto" mr="auto" mt="3rem">
            확인
          </Btn>
        </ModalBox>
      )}
    </Bg>
  );
}

const theme = createTheme({
  components: {
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          style: {
            display: 'block',
            background: '#fff',
            height: '4px',
          },
        },
      },
      styleOverrides: {
        root: {
          // borderRight: 1,
          // borderColor: "divider",
          // backgroundColor: "#F8F8FA",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: '60px !important',
          color: '#fff',
          '&.Mui-selected': {
            color: '#fff',
            fontWeight: 600,
          },
        },
      },
    },
  },
});

const StyledTab = styled(Tab)`
  ${({ theme }) => {
    return css`
      font-family: 'PretendardBold';
      font-size: ${theme.font.size.lg};
    `;
  }};
`;
const Bg = styled.div`
  width: 100%;
  opacity: 0.8;
  background: linear-gradient(to bottom, #000, rgba(0, 69, 56, 0.2) 104%);
  ${({ themeBlack }) => {
    if (themeBlack) {
      return css`
        opacity: 1;
        background: #000;
      `;
    }
  }}
  ${({ themeWhite }) => {
    if (themeWhite) {
      return css`
        opacity: 1;
        background: #fff;
        ${InnerLeft} {
          color: #000;
        }
        ${LangSelect} {
          color: #000;
          background-image: url('/assets/gnb/icon-arrow-select-filled-bk.svg.svg');
        }
        ${ExchangeRate} {
          border-color: #999;
        }
        ${StyledTab} {
          color: #000;
        }
        ${Search} input {
          border-color: #000;
        }
        ${MenuIconWrap01} {
          background-image: url('/icons/gnb/icon-submenu-1-black.svg');
        }
        ${MenuIconWrap02} {
          background-image: url('/icons/gnb/icon-submenu-2-black.svg');
        }
        ${MenuIconWrap03} {
          background-image: url('/icons/gnb/icon-submenu-3-black.svg');
        }
        ${MenuIconWrap04} {
          background-image: url('/icons/gnb/icon-submenu-4-black.svg');
        }
        ${MenuIconWrap05} {
          background-image: url('/icons/gnb/icon-submenu-5-black.svg');
        }
        ${MallLinkA} {
          color: #000;
          background-image: url('/assets/gnb/icon-storefront-bk.svg');
        }
      `;
    }
  }}
`;

const Wrapper = styled.div`
  position: relative;
  min-width: 1260px;
  max-width: 1560px;
  margin: auto;
  padding: 20px 20px 0px 20px;

  ${({ small }) =>
    small &&
    `
    padding-top: 0;
  `};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
const MenuIconContainer = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
  margin-right: 62px;
  img {
    width: 100%;
  }
`;
const InnerLeft = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;
const InnerLeftFlexEnd = styled(InnerLeft)`
  align-items: flex-end;
`;
const InnerRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Icon = styled(Image)`
  cursor: pointer;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 50%;
`;

const ExchangeRate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding-right: 14px;
  border-right: 1px solid #fff;
  border-color: rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`;

const LangSelect = styled.select`
  height: 30px;
  margin-left: 8px;
  background-color: transparent;
  background: url('/assets/gnb/icon-arrow-select-filled.svg') no-repeat 95%
    center / 6px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 11px;
  padding-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  option {
    color: #000;
  }
`;
const LogoContainer = styled.div`
  margin-right: 30px;
`;
const LogoImage = styled.img`
  width: 140px;
  height: 62.5px;
  cursor: pointer;
`;
const Search = styled.div`
    align-self: flex-end;
    margin-bottom: 1.5rem;
    input {
        width: 320px;
        height: 30px;
        color: #fff;
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #fff;
        color: #fff;
        box-shadow: none;
        ::placeholder {
            color: #999;
            font-size: 14px;
        }
        :focus {
            outline: none;
        }
    }
    transition: width 200ms;
  }
  @media screen and (max-width: 1785px) {
    input {
      width: 260px;
    }
`;
const SearchInSmallHeader = styled(Search)`
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;
const SearchBtn = styled.button`
  vertical-align: bottom;
  margin-left: 0.7rem;
`;
const LineSearch = styled.button`
  width: 269px;
  font-family: 'PretendardBold';
  text-align: left;
  line-height: 4.3rem;
  margin-right: -30px;
  padding: 0 2rem 0 2.2rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 100px;
  border: solid 1px #5b6768;
  color: #000;
  background-color: #f7f7f7;
  transform: translatey(-10px);
  outline: 0;
  ::placeholder {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const PlaneImage = styled.img`
  position: relative;
  width: 60px;
  transform: translatey(-10px);
  cursor: pointer;
`;

const ModalBox = styled(Modal)`
  display: flex;
  width: ${props => props.width || ''};
  height: ${props => props.height || ''};
  text-align: center;
  align-items: center;
`;

const SubMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  padding: 5px;
  border-radius: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #fff;
  }
`;
const SubMenuTxt = styled.span`
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  line-height: 14px;
  color: #000;
  font-family: 'PretendardBold';
  text-align: center;
  opacity: 0;
  ${SubMenu}:hover & {
    opacity: 1;
  }
`;
const MenuIconWrap = styled.div`
  position: relative;
  top: 50%;
  width: 3rem;
  height: 3rem;
  background: no-repeat center / 100%;
  transform: translateY(-50%);
  /* transition: 0.2s; */
  ${SubMenu}:hover & {
    top: 0;
    transform: translateY(0);
  }
`;
const MenuIconWrap01 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-1.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-1-black.svg');
  }
`;
const MenuIconWrap02 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-2.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-2-black.svg');
  }
`;
const MenuIconWrap03 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-3.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-3-black.svg');
  }
`;
const MenuIconWrap04 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-4.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-4-black.svg');
  }
`;
const MenuIconWrap05 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-5.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-5-black.svg');
  }
`;
const MallLinkA = styled.a`
  ${({ theme }) => {
    return css`
      align-self: flex-start;
      display: inline-block;
      font-size: 1.5rem;
      color: ${theme.color.primary.fontWhite};
      line-height: 2.3rem;
      margin-right: 2rem;
      padding-left: 3.3rem;
      margin-top: 1rem;
      background: url('/assets/gnb/icon-storefront.svg') no-repeat left center /
        2.3rem;
      cursor: pointer;
    `;
  }}
`;
