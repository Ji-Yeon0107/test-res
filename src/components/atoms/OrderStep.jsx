import styled from 'styled-components';

import theme from 'styles/theme';
import Div from './Div';
import Span from './Span';
import Img from './Img';

export default function OrderStep({ step }) {
  // step
  // 첫번째 : first
  // 두번째 : second
  // 세번째 : third

  return (
    <>
      <Step step={step}>
        <li>
          <Span fontWeight="700">장바구니</Span>
        </li>
        <li>
          <Span fontWeight="700">주문서</Span>
        </li>
        <li>
          <Span fontWeight="700">주문완료</Span>
        </li>
      </Step>
    </>
  );
}
const Step = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  width: 100%;
  gap: 1rem;
  font-size: 2rem;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #dfdfdf;
    :before {
      content: '';
      width: 4rem;
      height: 4rem;
      background-color: ${theme.color.primary.gray};
      border-radius: 100%;
      color: #fff;
      font-family: 'PretendardBold';
      text-align: center;
      line-height: 4rem;
    }
    :nth-child(1)::before {
      content: '1';
    }
    :nth-child(2)::before {
      content: '2';
    }
    :nth-child(3)::before {
      content: '3';
    }
    :after {
      content: '';
      width: 2.4rem;
      height: 2.4rem;
      background: center/ auto 100% no-repeat
        url('/assets/icons/arrow-right-gray.svg');
    }
    :last-child:after {
      display: none;
    }
    ${({ step }) => {
      return step === 'first'
        ? `
          :nth-child(1) {
            color: ${theme.color.common.black};
          }
          :nth-child(1):before {
          background-color: ${theme.color.common.black};
          }
          :nth-child(1):after {
          background-image: url(/icons/arrow-right.svg);
          }
          `
        : step === 'second'
        ? `
          :nth-child(2) {
            color: ${theme.color.common.black};
          }
          :nth-child(2):before {
            background-color: ${theme.color.common.black};
          }
          :nth-child(2):after {
          background-image: url(/icons/arrow-right.svg);
          }
          `
        : step === 'third'
        ? `
          :nth-child(3) {
            color: ${theme.color.common.black};
          }
          :nth-child(3):before {
            background-color: ${theme.color.common.black};
          }`
        : null;
    }};
  }

  //반응형
  ${theme.device.responsive} {
    font-size: 1.6rem;
    li {
      :before {
        width: 20px;
        height: 20px;
        font-size: 1.1rem;
        line-height: 19.5px;
      }
    }
  }
`;
