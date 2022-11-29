import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import Img from 'components/atoms/Img';
import theme from 'styles/theme';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Navbar from 'components/organisms/Navbar';

export default function Footer() {
  return (
    <Bg>
      <Wrapper>
        <TopContainer>
          <TopInner>
            <TopText>
              <Img
                pc={{ width: '4rem', height: '4rem' }}
                src="/icons/footer/temp-footer-headphone.svg"
                alt="icon"
              />
              <p>
                <strong>무엇</strong>을 도와드릴까요?
              </p>
            </TopText>
            <Line1></Line1>
            <TopText>
              <Img
                pc={{ width: '4rem', height: '4rem' }}
                src="/icons/footer/icon-gift.svg"
                alt="icon"
              />
              <div>
                <p>새롭게 준비한 회원님들만의</p>
                <p>
                  <strong>특별한 혜택</strong>을 준비했어요.
                </p>
              </div>
            </TopText>
            <Line2></Line2>
            <TopText>
              <Img
                pc={{ width: '4rem', height: '4rem' }}
                src="/icons/footer/temp-footer-plane.svg"
                alt="icon"
              />
              <div>
                <p>탑승편 정보 등록하고</p>
                <p>
                  <strong>1000포인트 선물</strong> 받으세요.
                </p>
              </div>
            </TopText>
          </TopInner>
        </TopContainer>
        <BottomContainer>
          <GridWrap>
            <GridLeft>
              <Div as="ul" lineHeight="30px">
                <Div as="li">㈜대한항공씨앤디서비스</Div>
                <Div as="li" dsp="flex" gap="1.5rem">
                  사업자등록번호
                  <Span color="#999">732-86-02017</Span>
                  <Div dsp="flex" align="center">
                    <Span color="#999" underline>
                      사업자정보확인
                    </Span>
                    <Img
                      pc={{ width: '1.6rem', height: '1.6rem' }}
                      src={`/assets/icons/arrow-right-gray.svg`}
                      alt="arrow-right"
                    ></Img>
                  </Div>
                </Div>
                <Div as="li" dsp="flex" gap="1.5rem">
                  통신판매업 신고번호
                  <Span color="#999">2022-서울중구-0365</Span>
                </Div>
                <Div as="li" dsp="flex" gap="1.5rem">
                  대표이사
                  <Span color="#999">최덕진</Span>
                </Div>
                <Div as="li" dsp="flex" gap="1.5rem">
                  주소
                  <Span color="#999">
                    서울특별시 종로구 수송동 146-1 이마빌딩
                  </Span>
                </Div>
                <Div
                  as="li"
                  color="#999"
                  fonsize="1.4rem"
                  mgt="2rem"
                  dsp="flex"
                >
                  소비자피해보상보험
                  <Div
                    className="check"
                    dsp="flex"
                    align="center"
                    mgl="1rem"
                    pdl="1rem"
                    borderLeft
                    borderColor="#999"
                    lineHeight="16px"
                  >
                    <Span underline>서울보증보험 가입사실 확인</Span>
                    <Img
                      pc={{ width: '1.6rem', height: '1.6rem' }}
                      src={`/assets/icons/arrow-right-gray.svg`}
                      alt="arrow-right"
                    ></Img>
                  </Div>
                </Div>
              </Div>

              <Div as="ul" lineHeight="30px">
                <Div as="li" mgb="1rem" size="1.4rem">
                  COMPANY
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  개인정보 처리방침
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  이용약관
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  회사소개
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  임직원 등록
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  패밀리 사이트
                </Div>
              </Div>

              <Div as="ul" lineHeight="30px">
                <Div as="li" mgb="1rem" size="1.4rem">
                  CS CENTER
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  공지사항
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  이용안내
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  FAQ
                </Div>
                <Div as="li" size="1.4rem" color="#999">
                  Q&A
                </Div>
              </Div>
            </GridLeft>

            <GridRight>
              <Span size="2.6rem" fontWeight="500">
                080-656-4545
              </Span>
              <Span size="1.4rem" color="#999">
                KST 08:30 ~ 17:30 (연중무휴)
              </Span>
            </GridRight>
          </GridWrap>
          <GridBottom>
            <Span size="1.4rem" color="#666" lineHeight="30px">
              © KOREANAIRCND. ALL RIGHTS RESERVED.
            </Span>
          </GridBottom>
        </BottomContainer>
      </Wrapper>

      <Navbar />
    </Bg>
  );
}

const Bg = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  bottom: 0;
  z-index: 1000;
  // min-width: 1300px;
  width: 100%;
  height: 510px;
  background-color: #000;
  ${theme.device.layoutTablet} {
    height: 100%;
    // min-width: 375px;
    width: 1299px;
  }
  ${theme.device.responsive} {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  color: #fff;
  margin: auto;
`;

const TopContainer = styled.div`
  height: 118px;
  display: flex;
  padding-left: 120px;
  padding-right: 120px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ${theme.device.layoutTablet} {
    // min-width: 375px;
    padding: 0 2rem;
    height: 21rem;
    border-bottom: 1px solid #fff;
  }
`;

const TopInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  > div {
    padding: 0px 100px;
    display: flex;
    gap: 30px;

    @media screen and (min-width: 1024px) and (max-width: 1599px) {
      padding: 0px 60px;
    }
  }

  ${theme.device.layoutTablet} {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    > div {
      padding: 0;
      gap: 5rem;
    }
  }
`;

const TopText = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
  align-items: center;
  height: 47px;
  padding: 35px 0;
  box-sizing: content-box;
  border-right: 1px solid #333;
  p {
    font-size: 1.8rem;
    margin: 0;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:last-child {
    border-right: 0;
  }
  ${theme.device.layoutTablet} {
    justify-content: flex-start;
    width: 100%;
    height: 7rem;
    border-right: 0;
    p {
      font-size: 1.6rem;
      letter-spacing: -0.4px;
      margin-bottom: 0.3rem;
    }
  }
`;

const Line1 = styled.div`
  display: none !important;
  ${theme.device.layoutTablet} {
    display: block !important;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${theme.color.primary.fontBlack};
    top: 6.967rem;
  }
`;
const Line2 = styled(Line1)`
  ${theme.device.layoutTablet} {
    top: 13.934rem;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 49px 120px 64px;
  padding-bottom: 0;
  ${theme.device.layoutTablet} {
    height: fit-content;
    padding: 4rem 2rem 10rem;
  }
`;

const RightClamp = styled.span`
  position: relative;
  display: inline-block;
  width: 19px;
  height: 19px;
  line-height: 16px;
  margin-left: 0.5rem;
  &:before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
  }
`;
const GridLine = styled(Grid)`
  margin-bottom: 0;
`;
const Select = styled.select`
  border: none;
  font-family: 'PretendardMedium';
  font-size: 1.4rem;
  color: #999;
  padding: 0;
  background: url(/assets/gnb/icon-arrow-select-filled-bk.svg) no-repeat right
    2px center;
  background-size: 0.8rem;
  outline: 0;
`;

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${theme.device.layoutTablet} {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const GridLeft = styled.div`
  display: flex;
  gap: 15rem;
  li {
    flex-wrap: nowrap;
  }
  .check {
    display: none;
  }
  ${theme.device.layoutTablet} {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1.5rem;
    > ul {
      &:first-child {
        order: 2;
        margin-top: 2rem;
        li {
          font-size: 1.2rem;
          &:first-child {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
          &:last-child {
            font-size: 1.4rem;
          }
        }
      }
      &:nth-child(2) {
        li {
          &:nth-child(4) {
            border-right: none;
          }
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        }
      }
      &:nth-child(2),
      :nth-child(3) {
        display: flex;
        li {
          font-size: 1.4rem;
          line-height: 16px;
          padding: 0 1rem;
          border-right: 1px solid #999;
          &:first-child {
            display: none;
          }
          &:nth-child(2) {
            padding-left: 0;
          }
          &:nth-child(5) {
            border-right: none;
          }
        }
      }

      > li {
        font-family: 'Pretendard';
        line-height: 20px;
        .check {
          display: flex;
        }
      }
    }
  }
`;

const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  ${theme.device.layoutTablet} {
    margin-top: 2rem;
    span {
      &:first-child {
        font-size: 2rem;
      }
      &:nth-child(2) {
        font-size: 1.2rem;
      }
    }
  }
`;

const GridBottom = styled.div`
  margin-top: 1.5rem;
`;
