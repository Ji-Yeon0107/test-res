import styled from 'styled-components';
import theme from 'styles/theme';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import Image from 'next/image';

export default function MypageInfo() {
  return (
    <>
      <MypageInfoWrap>
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
        <InfoRight>
          <InfoRightList>
            <TxtWrap>
              <Img
                pc={{ width: '3rem', height: '3rem' }}
                src={`/icons/mypage-coupon.svg`}
                alt="icon-coupon"
              ></Img>
              <p>쿠폰</p>
            </TxtWrap>
            <Div dsp="flex" align="center" gap=".5rem" vertical-align="middle">
              <Span size="2.2rem" fontWeight="600" lineHeight="3rem">
                6장
              </Span>
              {/* <Span size="1.6rem" fontWeight="500" lineHeight="3rem">
                장
              </Span> */}
            </Div>
          </InfoRightList>
          <InfoRightList>
            <TxtWrap>
              <Img
                pc={{ width: '3rem', height: '3rem' }}
                src={`/icons/mypage-point.svg`}
                alt="icon-point"
              ></Img>
              <p>포인트</p>
            </TxtWrap>
            <Div dsp="flex" align="center" gap=".5rem" vertical-align="middle">
              <Span size="2.2rem" fontWeight="600" lineHeight="3rem">
                2,000P
              </Span>
              {/* <Span size="1.6rem" fontWeight="500" lineHeight="3rem">
                P
              </Span> */}
            </Div>
          </InfoRightList>
          <InfoRightList>
            <TxtWrap>
              <Img
                pc={{ width: '3rem', height: '3rem' }}
                src={`/icons/mypage-order.svg`}
                alt="icon-order"
              ></Img>
              <p>주문 완료</p>
            </TxtWrap>
            <Div dsp="flex" align="center" gap=".5rem" vertical-align="middle">
              <Span size="2.2rem" fontWeight="600" lineHeight="3rem">
                6건
              </Span>
              {/* <Span size="1.6rem" fontWeight="500" lineHeight="3rem">
                건
              </Span> */}
            </Div>
          </InfoRightList>
          <InfoRightList>
            <TxtWrap>
              <Img
                pc={{ width: '3rem', height: '3rem' }}
                src={`/assets/icons/icon-airplane-point.svg`}
                alt="airplane point"
              ></Img>
              <p>전환 가능한 대한항공 포인트</p>
            </TxtWrap>
            <Div dsp="flex" align="center" gap=".5rem" vertical-align="middle">
              <Div
                dsp="flex"
                align="center"
                gap=".5rem"
                vertical-align="middle"
              >
                <Span size="2.2rem" fontWeight="600" lineHeight="3rem">
                  2,000P
                </Span>
                {/* <Span size="1.6rem" fontWeight="500" lineHeight="3rem">
                  P
                </Span> */}
              </Div>
              <Img
                pc={{ width: '2.4rem', height: '2.4rem' }}
                src={`/assets/icons/icon-arrow-bk-2.svg`}
                alt="arrow right"
              ></Img>
              <Div
                dsp="flex"
                align="center"
                gap=".5rem"
                vertical-align="middle"
              >
                <Span size="2.2rem" fontWeight="600" lineHeight="3rem">
                  2,000마일
                </Span>
                {/* <Span size="1.6rem" fontWeight="500" lineHeight="3rem">
                  마일
                </Span> */}
              </Div>
            </Div>
          </InfoRightList>
        </InfoRight>
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

  ${theme.device.responsive} {
    display: none;
  }
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
  justify-content: space-between;
  width: 992px;
  height: 106px;
  padding: 2rem 4rem 2rem 2rem;
  border: 1px solid ${theme.color.primary.gray};
  border-radius: 10px;
  background: linear-gradient(to left, ${theme.color.common.white}bf8, #f8f9ff);
`;
const InfoRightList = styled.div`
  height: 66px;
  position: relative;
  border-left: 1px solid ${theme.color.primary.gray};
  padding-left: 2rem;
  &:first-child {
    border: none;
    padding-left: 0;
  }
  .icon {
    width: 24px;
    height: 24px;
    // background-color: #ccc;
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
    // background-color: #ccc;
  }
`;
