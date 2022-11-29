import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import styled, { css } from 'styled-components';

import Modal from 'components/organisms/Modal';
import Inform from 'components/organisms/Inform';
import Menu from 'components/organisms/Menu';
import Img from 'components/atoms/Img';
import SelectBox from 'components/atoms/SelectBox';
import { Btn } from 'components/atoms/Button';

import { MAIN_MENUS } from 'constants';
import themeResponsive from 'styles/theme';
import Span from 'components/atoms/Span';

export default function Header({ hydrated }) {
  const [showOptions, setShowOptions] = useState(false);
  const [activeMainTabIndex, setActiveMainTabIndex] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [테스트, 셋테스트] = useState([]);
  const [modalControl, setModalControl] = useState(false);
  const [loginNoticeControl, setLoginNoticeControl] = useState(false);
  const [login, setLogin] = useState(false);

  const [themeWhite, setThemeWhite] = useState(false);
  const [themeBlack, setThemeBlack] = useState(false);

  const [small, setSmall] = useState(false);
  const [currentValue, setCurrentValue] = useState('한국어');

  const handleOnChangeSelectValue = props => {
    setCurrentValue(props.target.innerHTML);
  };
  const router = useRouter();

  useEffect(() => {
    document.addEventListener('scroll', changeHeaderStyle);

    return () => {
      document.removeEventListener('scroll', changeHeaderStyle);
    };
  }, []);

  useEffect(() => {
    if (router.asPath === '/') {
      setActiveMainTabIndex(false);

      return;
    }

    setActiveMainTabIndex(
      MAIN_MENUS.findIndex(
        ({ path }) => path === `/${router.asPath.split('/')[1]}`,
      ),
    );
  }, [router.asPath]);

  const changeHeaderStyle = () => {
    if (window.scrollY >= 120) {
      setSmall(true);
      // setThemeWhite(true);

      return;
    }
    // setThemeWhite(false);
    setSmall(false);
  };

  const handleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    function menuClose(e) {
      if (menuOpen && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('click', menuClose);
    return () => {
      window.removeEventListener('click', menuClose);
    };
  }, [menuOpen]);

  const handleNavigateToHome = () => {
    // TODO: This code maybe later redirect by init history stack
    router.push('/');
  };

  const handleNavigateTo = e => {
    const to = e.target.id;

    router.push(to);
  };
  return (
    <Bg themeWhite={themeWhite} themeBlack={themeBlack} small={small}>
      <Wrapper small={small} ref={menuRef} menuOpen={menuOpen}>
        {small || (
          <Container small={small}>
            <InnerLeft small={small}>
              <LogoContainer onClick={handleNavigateToHome}>
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
                    setThemeBlack(false);
                    setThemeWhite(true);
                  }}
                />
              </LogoContainer>

              <Search as="form">
                <input placeholder="단독! 로얄살루트 추가할인 & FREE GIFT!" />
                <SearchBtn>
                  <Img
                    pc={{ width: '3.57rem', height: '3.57rem' }}
                    responsive={{ width: '2.4rem', height: '2.4rem' }}
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
                  setThemeWhite(false);
                  setThemeBlack(true);
                }}
              >
                오늘의환율 $1 = 11,311원
              </ExchangeRate>
              {/* <LangSelect>
                <option>한국어</option>
                <option>English</option>
              </LangSelect> */}
              <LangSelectBox onClick={() => setShowOptions(prev => !prev)}>
                <button className="default-option">{currentValue}</button>
                {showOptions && (
                  <ul className="option-box">
                    <li
                      value="ko"
                      className="option"
                      onClick={e => {
                        handleOnChangeSelectValue(e);
                      }}
                    >
                      한국어
                    </li>
                    <li
                      value="en"
                      className="option"
                      onClick={e => {
                        handleOnChangeSelectValue(e);
                      }}
                    >
                      English
                    </li>
                  </ul>
                )}
              </LangSelectBox>
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
                <ShopNum>0</ShopNum>
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
                  />
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
        <Container small={small}>
          <InnerLeftFlexEnd>
            <MenuIconContainer small={small} themeWhite={themeWhite}>
              <MenuIcon
                onClick={handleMenu}
                sx={{ width: '5rem', height: '4.5rem', cursor: 'pointer' }}
              />
            </MenuIconContainer>

            <StyledTabs small={small} value={activeMainTabIndex}>
              {hydrated
                ? MAIN_MENUS.map(menu => (
                    <StyledTab
                      key={menu.id}
                      id={menu.path}
                      small={small}
                      label={menu.label}
                      onClick={handleNavigateTo}
                    />
                  ))
                : null}
            </StyledTabs>

            {/* {small && (
              <div
                style={{
                  display: 'flex',
                  marginLeft: 'auto',
                  transform: 'translateX(232px)',
                }}
              >
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

                <PlaneImage
                  src={`/icons/gnb/plane.png`}
                  alt="plane search"
                  width={60}
                  height={60}
                />
              </div>
            )} */}
          </InnerLeftFlexEnd>
          {small ? (
            <InnerRight small={small}>
              <InnerRightBorder display="inline-block" padding="0 1rem 0 0">
                로그인
              </InnerRightBorder>
              <Span display="inline-block" mgl="1rem">
                회원가입
              </Span>
            </InnerRight>
          ) : (
            <InnerRight>
              {/* <Link href="/employees-mall">
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

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    display: block;
    height: 4px;
  }
  ${({ small }) =>
    small
      ? `
    .MuiTabs-indicator {
      background:#000;
    }
    `
      : `
    .MuiTabs-indicator {
      background:#fff;
    }
`}
  ${themeResponsive.device.layoutTablet} {
    min-height: auto;
    .MuiTabs-scroller {
      overflow-x: auto !important;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    /* .MuiTabs-flexContainer {
      padding: 0 0.5rem;
    } */
  }
`;

const StyledTab = styled(Tab)`
  &.Mui-selected {
    font-weight: 600;
  }

  :hover {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: 1px;
  }

  ${({ theme }) => `
      font-family: 'Pretendard';
      font-size: ${theme.font.size.lg};
      padding: 1.2rem 0.3rem;
      margin:0 2.3rem;
      min-width:auto;
      ${themeResponsive.device.layoutTablet} {
        font-size: ${theme.font.size.base};
        padding: 0 1.5rem;
        margin: 0 auto;
      }
  
 `};

  ${({ small }) =>
    small
      ? `
      height: 80px;
      color: #fff;
      ${themeResponsive.device.layoutTablet} {
        height: 56px;
      }
      `
      : `
      height: 60px;
      color: #fff;
      &.Mui-selected {
        color:#fff;
      }
      ${themeResponsive.device.layoutTablet} {
        min-height: 35px;
        height: 100%;
        padding-bottom: 0.4rem;
      }
 `}

  :hover {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: 1px;
    ${themeResponsive.device.layoutTablet} {
      text-decoration: none;
    }
  }
`;

const Bg = styled.div`
  top: 0;
  z-index: 1001;
  width: 100%;
  ${({ theme, small }) =>
    small
      ? `
      position: fixed;
      height: 80px;
      background: linear-gradient(to bottom, #000, rgba(0, 69, 56, 0.26) 103%);
      transition: background 200ms ease-out;
      ${themeResponsive.device.layoutTablet} {
        max-height: 56px;
      }
    `
      : `
      position: relative;
      height: 189px;
      background: linear-gradient(to bottom, #000, rgba(0, 69, 56, 0.26) 103%);
      transition: height 300ms ease-out; 
    `}

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
        ${LangSelectBox} {
          .default-option {
            color: #000;
            background-image: url('/assets/gnb/icon-arrow-select-filled-bk.svg');
          }
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
        ${StyledTab} {
          &.under {
            &:before {
              background-color: #000;
            }
          }
        }
        & .MuiTabs-indicator {
          background-color: #000;
        }
        ${InnerRight} {
          color: #000;
        }
        ${InnerRightBorder} {
          border-color: #000;
        }
        ${MenuIconContainer} {
          ${({ small }) => {
            if (small) {
              return css`
                background-image: url(/assets/gnb/logo-black.svg);
              `;
            }
          }}
        }
      `;
    }
  }}
  .MallLink {
    ${({ theme }) => {
      return css`
        font-family: 'PretendardSemiBold';
        align-self: flex-start;
        display: inline-block;
        width: 8.1rem;
        color: ${theme.color.primary.fontWhite};
        line-height: 4.3rem;
        text-align: center;
        border: 1px solid ${theme.color.primary.fontWhite};
        border-radius: 21.5px;
        margin-right: 1.2rem;
        margin-top: 0.3rem;
        /* background: url('/assets/gnb/icon-storefront.svg') no-repeat left center /
          2.3rem; */
        cursor: pointer;
        ${({ themeWhite }) => {
          if (themeWhite) {
            return css`
              color: ${theme.color.common.black};
              border-color: #5b6768;
            `;
          }
        }}
      `;
    }}
  }
  //반응형 작업 추가 ----
  /* overflow: hidden; */
  ${themeResponsive.device.layoutTablet} {
    // min-width: 375px;
    height: 84px;
    width: 1299px;
  }
  ${themeResponsive.device.responsive} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1680px;
  width: 100%;
  margin: auto;
  padding-top: 20px;
  ${themeResponsive.device.layoutTablet} {
    min-width: 375px;
    width: auto;
    height: 8.4rem;
    padding: 0;
    max-width: none;
  }

  ${({ small }) =>
    small &&
    `
    padding-top: 0;
    ${themeResponsive.device.layoutTablet} {
    padding: 0;
  }
  `};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${themeResponsive.device.layoutTablet} {
    &:first-child {
      padding: 0 1.5rem;
      width: 100%;
    }
    &:last-child {
      &::-webkit-scrollbar {
        display: none;
      }
    }
    ${({ small }) =>
      small
        ? `
    padding: 0 0 0 1.5rem !important
    `
        : `
    margin-bottom: 0
    `};
  }
  ${({ small }) =>
    small
      ? `
    margin-bottom: 0
    `
      : `
    margin-bottom: 2rem
    `};
  ${themeResponsive.device.responsive} {
    &:first-child {
      padding-top: 0.7rem;
    }
  }
`;
const MenuIconContainer = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  ${({ small }) =>
    small &&
    `
    margin: auto;
    margin-right: 6rem;
    width: 8.96rem;
    height: 4rem;
    padding: 0;
    background-image: url(/assets/gnb/logo-white.svg);
    background-size: cover;
    > .MuiSvgIcon-fontSizeMedium {
      display: none;
    }
  ${themeResponsive.device.layoutTablet} {
    min-width: 6.27rem;
    width: 6.27rem;
    height: 2.8rem;
    margin: 0;
    justify-content: flex-start;
  }
  `};
  img {
    width: 100%;
  }
  ${themeResponsive.device.layoutTablet} {
    display: none;
    ${({ small }) =>
      small &&
      `
    display: flex;
    `}
  }
`;
const InnerLeft = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  ${themeResponsive.device.layoutTablet} {
    min-width: auto;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    > .MuiSvgIcon-fontSizeMedium {
      display: none;
    }
  }
  }
`;
const InnerLeftFlexEnd = styled(InnerLeft)`
  align-items: flex-end;
  justify-content: space-between;
  ${themeResponsive.device.layoutTablet} {
    align-items: center;
    justify-content: flex-start;
  }
`;
const InnerRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  ${({ small }) =>
    small &&
    `
  ${themeResponsive.device.layoutTablet} {
      display: none;
    }
    `}
`;
const InnerRightBorder = styled(Span)`
  border-right: 1px solid #fff;
  ${({ themeWhite }) => {
    if (themeWhite) {
      return css`
        border-color: #000;
      `;
    }
  }}
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
  padding-right: 9px;
  border-right: 1px solid #fff;
  border-color: rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  ${themeResponsive.device.layoutTablet} {
    display: none;
  }
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
  ${themeResponsive.device.layoutTablet} {
    width: 62.7px;
    height: 28px;
  }
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
    ${themeResponsive.device.layoutTablet} {
      display: none;
    }
  }
  ${themeResponsive.device.layoutTablet} {
    margin-bottom: 0;
  }
`;
const SearchBtn = styled.button`
  vertical-align: bottom;
  margin-left: 0.7rem;
  ${themeResponsive.device.layoutTablet} {
    padding: 0.5rem;
  }
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
  ${themeResponsive.device.layoutTablet} {
    display: none;
  }
`;
const PlaneImage = styled.img`
  position: relative;
  width: 60px;
  transform: translatey(-10px);
  cursor: pointer;
  ${themeResponsive.device.layoutTablet} {
    display: none;
  }
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
  ${themeResponsive.device.layoutTablet} {
    height: 100%;
    margin-right: 0;
  }
  &:nth-child(-n + 4) {
    ${themeResponsive.device.layoutTablet} {
      display: none;
    }
  }
  &:last-child {
    margin-right: 0;
    ${themeResponsive.device.layoutTablet} {
      display: none;
    }
  }
  &:hover {
    background-color: #fff;
    ${themeResponsive.device.layoutTablet} {
      background-color: transparent;
    }
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
    ${themeResponsive.device.layoutTablet} {
      opacity: 0;
    }
  }
`;
const MenuIconWrap = styled.div`
  position: relative;
  top: 50%;
  width: 3rem;
  height: 3rem;
  background: no-repeat center / 100%;
  transform: translateY(-50%);
  ${themeResponsive.device.layoutTablet} {
    width: 2.4rem;
    height: 2.4rem;
  }
  /* transition: 0.2s; */
  ${SubMenu}:hover & {
    top: 0;
    transform: translateY(0);
    ${themeResponsive.device.layoutTablet} {
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
const MenuIconWrap01 = styled(MenuIconWrap)`
  background-image: url('/icons/gnb/icon-submenu-1.svg');
  ${SubMenu}:hover & {
    background-image: url('/icons/gnb/icon-submenu-1-black.svg');
  }
`;
const MenuIconWrap01Login = styled(MenuIconWrap)`
  background-image: url('/assets/gnb/icon-logout-w.svg');
  ${SubMenu}:hover & {
    background-image: url('/assets/gnb/icon-logout.svg');
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
    ${themeResponsive.device.layoutTablet} {
      background-image: url('/icons/gnb/icon-submenu-5.svg');
    }
  }
`;
const LangSelectBox = styled.section`
  position: relative;
  .default-option {
    height: 30px;
    background: url('/assets/gnb/icon-arrow-select-filled.svg') no-repeat 95%
      center / 6px;
    font-size: 11px;
    padding: 5px 2rem 5px 8px;
    margin-top: 1rem;
    cursor: pointer;
  }
  .option-box {
    /* display: none; */
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    transform: translateY(100%);
  }
  .option {
    font-size: 1.1rem;
    color: #000;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: rgba(91, 166, 210, 0.1);
    }
  }
  ${themeResponsive.device.layoutTablet} {
    display: none;
  }
`;
const SelectBox2 = styled(SelectBox)`
  margin-top: 10px;
`;
const ShopNum = styled.div`
  display: none;
  ${themeResponsive.device.layoutTablet} {
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    min-width: 14px;
    height: 14px;
    font-size: 9px;
    color: #fff;
    text-align: center;
    line-height: 14px;
    border-radius: 20px;
    padding: 0 3px;
    background-color: #e0003f;
  }
`;
