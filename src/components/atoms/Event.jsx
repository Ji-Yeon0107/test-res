import Div from './Div';
import Span from './Span';
import Link from 'next/link';
import Img from './Img';
import styled, { css } from 'styled-components';

export default function Event({
  src,
  alt = '이벤트 이미지',
  title = '사전예약 할인전',
  txt = '2022.08.08 ~ 2022.08.08',
  mgb,
  mgr,
  href = '/EventIng',
  endEvent,
}) {
  return (
    <EventWrap width="31rem" mgb={mgb} mgr={mgr} endEvent={endEvent}>
      <Span as={Link} href={href}>
        <a className="event">
          <Img
            pc={{ width: '31rem', height: '31rem' }}
            src={src}
            alt={alt}
            height100
            className="event_img"
          ></Img>
          <Div dsp="flex" align="center" justify="center" direction="column">
            <Span dsp="inline-block" size="2rem" fontWeight="700" mgt="2rem">
              {title}
            </Span>
            <Span dsp="inline-block" size="1.5rem" color="#666" mgt="1rem">
              {txt.split('\n').map((arr, index) => (
                <Span dsp="block" key={index}>
                  {arr}
                </Span>
              ))}
            </Span>
          </Div>
          <Div as="p" className="end" size="2rem" lineHeight="1.5">
            <Div>
              <Span fontWeight="700">EVENT</Span>
              <br />
              종료
            </Div>
          </Div>
        </a>
      </Span>
    </EventWrap>
  );
}

const EventWrap = styled(Div)`
  position: relative;
  & .end {
    display: none;
  }
  ${({ endEvent }) => {
    if (endEvent) {
      return css`
        & .event > div {
          position: relative;
        }
        & .end {
          display: block;
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          max-height: 31rem;
          color: #fff;
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.5);
          & div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15rem;
            height: 15rem;
            font-size: 2rem;
            line-height: 0.8;
            border: 1px solid #fff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
        }
      `;
    }
  }}
`;
