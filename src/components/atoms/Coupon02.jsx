import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Btn } from 'components/atoms/Button';
import Img from 'components/atoms/Img';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import theme from 'styles/theme';

export default function Coupon02({ mt, mb }) {
  return (
    <FlexBox mt={mt} mb={mb} space="center">
      <Div
        bgColor="gray"
        radius="15px"
        width="66.66%"
        padding="2rem"
        height="16rem"
        maxWidth="320"
      >
        <Div>
          <Span as="h3" mgb="5px" lineHeight="2.4rem">
            %쿠폰명%
          </Span>
          <Span as="p" lineHeight="1.9rem">
            %쿠폰사용조건(혜택/제한조건)%
          </Span>
        </Div>
        <FlexBox mt="5rem">
          <Span>%쿠폰사용기간%</Span>
          <Span>중복사용가능</Span>
        </FlexBox>
      </Div>
      <CouponLine
        bgColor="gray"
        radius="15px"
        width="33.33%"
        padding="2rem"
        maxWidth="160"
      >
        <Span as="p" size="2.5rem" lineHeight="3rem" bold mgb="7px">
          정액/정율
        </Span>
        <Span as="h3" size="1.8rem" lineHeight="2.1rem" bold>
          상품할인쿠폰
        </Span>
        <Span as="p" size="1.8rem" lineHeight="2.1rem" mgt="2rem">
          N장
        </Span>
      </CouponLine>
    </FlexBox>
  );
}

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => props.space || 'space-between'};
  margin-top: ${props => props.mt || 0};
  margin-bottom: ${props => props.mb || 0};
`;
const CouponLine = styled(Div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 1px;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1px;
    width: 1px;
    height: calc(100% - 30px);
    background-color: ${theme.color.primary.gray};
    transform: translateY(-50%);
  }
`;

const CouponFoot = styled(Span)`
  height: 5.9rem;
  border-top: 1px solid ${theme.color.primary.gray};
  border-bottom: 1px solid ${theme.color.primary.gray};
`;
