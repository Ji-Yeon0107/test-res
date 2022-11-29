import Link from 'next/link';

import styled from 'styled-components';
import theme from 'styles/theme';

import Img from 'components/atoms/Img';

export default function StoryListItem({ item, mgb }) {
  return (
    <StoryWrap key={item?.id} mgb={mgb}>
      <Link href={`/stories/${item?.id}/detail`}>
        <a>
          <ImgWrap>
            {item?.imageURL ? (
              <LogoImg>
                <Img
                  pc={{ width: '10rem', height: '4.45rem' }}
                  src={`icons/logo_w.svg`}
                  alt="arrow-right"
                  height100
                />
              </LogoImg>
            ) : (
              <ImgWrap>
                <LogoImg>
                  <Img
                    pc={{ width: '10rem', height: '4.45rem' }}
                    responsive={{ width: '14.13vw', height: '6.4vw' }}
                    src={`icons/logo_w.svg`}
                    alt="korean air duty free skyshop"
                    height100
                  ></Img>
                </LogoImg>
                <Img
                  pc={{ width: '100%', height: '46rem' }}
                  responsive={{ width: '100%', height: '64.26vw' }}
                  src={`icons/story-img.png`}
                  alt="이벤트 배너"
                  height100
                ></Img>
              </ImgWrap>
            )}
          </ImgWrap>
          <TxtWrap>
            <Title>{item?.title}</Title>
            <Txt>{item?.description}</Txt>
          </TxtWrap>
        </a>
      </Link>
    </StoryWrap>
  );
}

const StoryWrap = styled.div`
  display: inline-block;
  max-width: 31rem;
  width: 100%;
  margin-bottom: ${props => props.mgb || '6rem'};
  margin-right: 2rem;
  &:nth-child(4n) {
    margin-right: 0;
  }
  ${theme.device.responsive} {
    max-width: none;
    width: calc(50% - (9px / 2));
    margin-right: 9px;
    margin-bottom: 4rem;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;
const ImgWrap = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;
const LogoImg = styled.div`
  position: absolute;
  max-width: 10rem;
  top: 2rem;
  left: 2rem;
  & img {
    z-index: 1;
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0);
  }
  ${theme.device.responsive} {
    top: 10.5px;
    left: 10.5px;
  }
`;
const TxtWrap = styled.div`
  margin-top: 2rem;
  ${theme.device.responsive} {
    margin-top: 1rem;
  }
`;
const Title = styled.p`
  font-family: 'PretendardExtraBold';
  font-size: 2.8rem;
  margin-bottom: 1rem;
  ${theme.device.responsive} {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
`;
const Txt = styled.p`
  font-size: ${theme.font.size.base};
  line-height: 1.55;
  color: ${theme.color.common.black};
  letter-spacing: -0.45px;
  ${theme.device.responsive} {
    font-size: 1.2rem;
  }
`;
