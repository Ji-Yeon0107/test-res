import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';

export default function MypageInfoUp({ mypage }) {
  return (
    <>
      <MypageInfoWrap mypage={mypage}>
        <InfoLeft>
          <Info>
            <Img
              pc={{ width: '6.5rem', height: '6.5rem' }}
              src={`/icons/mypage-info-img.svg`}
              alt="icon-info"
            ></Img>
            <InfoTxt>
              <p>김길동 님</p>
              <span>Green 등급 (임직원)</span>
            </InfoTxt>
          </Info>
          <BenefitBtn>내 등급 혜택 보기</BenefitBtn>
        </InfoLeft>
        <Div>
          <InfoRight>
            <InfoRightList maxWidth="180px">
              <TxtWrap>
                <Img
                  pc={{ width: '3rem', height: '3rem' }}
                  src={`/icons/mypage-coupon.svg`}
                  alt="icon-coupon"
                ></Img>
                <p>쿠폰</p>
              </TxtWrap>
              <Div
                dsp="flex"
                align="center"
                gap={mypage ? '0' : '.5rem'}
                vertical-align="middle"
              >
                <Span size="2.2rem" fontWeight="600" lineHeight="2.9rem">
                  6
                </Span>
                <Span
                  size={mypage ? '2.2rem' : '1.6rem'}
                  fontWeight={mypage ? '600' : '500'}
                  lineHeight="2.9rem"
                >
                  장
                </Span>
              </Div>
              {mypage && (
                <Div dsp="flex" justify="space-between" mgt="10px">
                  <Span fontWeight="500">7일 이내 만료예정</Span>
                  <Span fontWeight="500">0장</Span>
                </Div>
              )}
            </InfoRightList>
            <InfoRightList maxWidth="201px">
              <TxtWrap>
                <Img
                  pc={{ width: '3rem', height: '3rem' }}
                  src={`/icons/mypage-point.svg`}
                  alt="icon-point"
                ></Img>
                <p>포인트</p>
              </TxtWrap>
              <Div
                dsp="flex"
                align="center"
                gap={mypage ? '0' : '.5rem'}
                vertical-align="middle"
              >
                <Span size="2.2rem" fontWeight="600" lineHeight="2.9rem">
                  2,000
                </Span>
                <Span
                  size={mypage ? '2.2rem' : '1.6rem'}
                  fontWeight={mypage ? '600' : '500'}
                  lineHeight="2.9rem"
                >
                  P
                </Span>
              </Div>
              {mypage && (
                <Div mgt="10px">
                  <Div dsp="flex" justify="space-between">
                    <Span fontWeight="500" lineHeight="1.9rem">
                      구매 적립 포인트
                    </Span>
                    <Span fontWeight="500" lineHeight="1.9rem">
                      2,000P
                    </Span>
                  </Div>
                  <Div dsp="flex" justify="space-between" mgt="5px">
                    <Span fontWeight="500" lineHeight="1.9rem">
                      이벤트 포인트
                    </Span>
                    <Span fontWeight="500" lineHeight="1.9rem">
                      0P
                    </Span>
                  </Div>
                </Div>
              )}
            </InfoRightList>
            <InfoRightList maxWidth="150px">
              <TxtWrap>
                <Img
                  pc={{ width: '3rem', height: '3rem' }}
                  src={`/icons/mypage-order.svg`}
                  alt="icon-order"
                ></Img>
                <p>주문 완료</p>
              </TxtWrap>
              <Div
                dsp="flex"
                align="center"
                gap={mypage ? '0' : '.5rem'}
                vertical-align="middle"
              >
                <Span size="2.2rem" fontWeight="600" lineHeight="2.9rem">
                  6
                </Span>
                <Span
                  size={mypage ? '2.2rem' : '1.6rem'}
                  fontWeight={mypage ? '600' : '500'}
                  lineHeight="2.9rem"
                >
                  건
                </Span>
              </Div>
            </InfoRightList>
            <InfoRightList maxWidth="279px">
              <TxtWrap>
                <Img
                  pc={{ width: '3rem', height: '3rem' }}
                  src={`/assets/icons/icon-airplane-point.svg`}
                  alt="airplane point"
                ></Img>
                <p>전환 가능한 대한항공 포인트</p>
              </TxtWrap>
              <Div
                dsp="flex"
                align="center"
                gap={mypage ? '0' : '.5rem'}
                vertical-align="middle"
              >
                <Div
                  dsp="flex"
                  align="center"
                  gap={mypage ? '0' : '.5rem'}
                  vertical-align="middle"
                  mgr="5px"
                >
                  <Span size="2.2rem" fontWeight="600" lineHeight="2.9rem">
                    2,000
                  </Span>
                  <Span
                    size={mypage ? '2.2rem' : '1.6rem'}
                    fontWeight={mypage ? '600' : '500'}
                    lineHeight="2.9rem"
                  >
                    P
                  </Span>
                </Div>
                <Img
                  pc={{ width: '2.4rem', height: '2.4rem' }}
                  src={`/assets/icons/icon-arrow-bk-2.svg`}
                  alt="arrow right"
                ></Img>
                <Div
                  dsp="flex"
                  align="center"
                  gap={mypage ? '0' : '.5rem'}
                  vertical-align="middle"
                  mgl="5px"
                >
                  <Span size="2.2rem" fontWeight="600" lineHeight="2.9rem">
                    2,000
                  </Span>
                  <Span
                    size={mypage ? '2.2rem' : '1.6rem'}
                    fontWeight={mypage ? '600' : '500'}
                    lineHeight="2.9rem"
                  >
                    마일
                  </Span>
                </Div>
              </Div>
            </InfoRightList>
          </InfoRight>
          {mypage && (
            <MyGrade>
              <Div dsp="flex" align="center" mgr="5.5rem">
                <Img
                  pc={{ width: '4rem', height: '4rem' }}
                  src="/assets/icons/icon-Silver.png"
                  alt="silver icon"
                />
                <Span fontWeight="500" mgl="10px">
                  SILVER 달성 기준
                </Span>
              </Div>
              <Div dsp="flex" align="center" mgr="5.5rem">
                <Span mgr="10px">구매횟수</Span>
                <Span fontWeight="700">2회</Span>
              </Div>
              <Div dsp="flex" align="center">
                <Span mgr="10px">구매금액</Span>
                <Span as="p">
                  <Span fontWeight="700">200만원</Span>이 필요해요.
                </Span>
              </Div>
            </MyGrade>
          )}
        </Div>
      </MypageInfoWrap>
    </>
  );
}

const MypageInfoWrap = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.primary.gray};
  ${({ mypage }) => {
    if (mypage) {
      return css`
        & ${InfoRightList} {
          height: 119px;
        }
        & ${InfoRight} {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      `;
    }
  }}
`;
const InfoLeft = styled.div`
  width: 288px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const InfoTxt = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: 'PretendardSemiBold';
    font-size: 22px;
    color: #000;
  }
  span {
    font-size: 16px;
  }
`;
const BenefitBtn = styled.button`
  width: 100%;
  min-height: 50px;
  background-color: #000;
  color: ${theme.color.common.white};
  margin-top: 1.25rem;
`;
const InfoRight = styled.div`
  display: flex;
  align-items: center;
  width: 992px;
  min-height: 106px;
  padding: 2rem;
  border: 1px solid ${theme.color.primary.gray};
  border-radius: 10px;
  background: linear-gradient(to left, ${theme.color.common.white}bf8, #f8f9ff);
`;
const InfoRightList = styled.div`
  width: 50%;
  max-width: ${props => props.maxWidth || 'auto'};
  height: 66px;
  position: relative;
  border-left: 1px solid ${theme.color.primary.gray};
  padding-left: 2rem;
  margin-right: 2rem;
  box-sizing: content-box;
  &:first-child {
    border: none;
    padding-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  .icon {
    width: 24px;
    height: 24px;
    background-color: #ccc;
    margin: 0 5px;
  }
`;
const TxtWrap = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  p {
    font-family: 'PretendardSemiBold';
    font-size: 22px;
  }
  .icon {
    width: 30px;
    height: 30px;
    background-color: #ccc;
  }
`;
const MyGrade = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  border: 1px solid ${theme.color.primary.gray};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: 0;
  background-color: #fff;
`;
