import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import { Btn } from 'components/atoms/Button';
import * as Table from 'components/organisms/Table';
import * as Form from 'components/atoms/Form/index';

import SelectBox from 'components/atoms/SelectBox';
import MoTitleBox from 'components/atoms/MoTitleBox';
import OrderStep from 'components/atoms/OrderStep';
import CurrentPageList from 'components/atoms/CurrentPageList';

import { SelectTime, SelectMin, Year, Month, Day, Email } from 'utility';
const Center = styled.div`
  width: 100%;
  max-width: 1300px;

  margin: 0 auto;
  padding-bottom: 100px;
  ${theme.device.tablet} {
    width: 1300px;
    padding-left: 25px;
    padding-right: 25px;
  }
  ${theme.device.responsive} {
    max-width: none;
    width: 95%;
  }
`;
export default function OrderSheetAir() {
  const [member, setMember] = useState(true);

  //최종 결제 box - 회원
  const AmountMember = props => {
    return (
      <div className={props.className}>
        <Span as="p" size="1.2rem" mobSize="1.1rem" textAlign="right">
          오늘의 환율 $1 = 1,350원
        </Span>
        <ul>
          <Div as="li" dsp="flex" justify="space-between" mgt="1rem">
            <Span size="xl2" fontWeight="600">
              최종 결제금액
            </Span>
            <Div dsp="flex" direction="column" align="flex-end" gap="1rem">
              <Span size="xl2" fontWeight="600">
                $ 185
              </Span>
              <Span size="2rem">200,000원</Span>
            </Div>
          </Div>
          <Div as="li" dsp="flex" justify="space-between" mgt="1rem">
            <Span size="xl2" fontWeight="600">
              총 할인금액
            </Span>
            <Div dsp="flex" direction="column" align="flex-end" gap="1rem">
              <Span size="xl2" fontWeight="600">
                $ 100
              </Span>
              <Span size="2rem">150,000원</Span>
            </Div>
          </Div>
          {member && (
            <Div as="li">
              <Div dsp="flex" justify="space-between" mgt="1rem">
                <Span size="xl2" fontWeight="600">
                  구매 적립 포인트
                </Span>
                <Span size="xl2" fontWeight="600">
                  2,360P
                </Span>
              </Div>
              <Div dsp="none" mobDsp="flex" justify="space-between" mgt="2rem">
                <Span size="xl2" fontWeight="600">
                  대한항공 마일리지
                </Span>
                <Span size="xl2" fontWeight="600">
                  131M
                </Span>
              </Div>
            </Div>
          )}
        </ul>
        {member ? (
          <Div>
            <Span
              as="strong"
              fontWeight="700"
              dsp="block"
              mgb=".9rem"
              size="1.4rem"
            >
              주문 동의
            </Span>
            <Span as="p" mgb="2rem" size="1.3rem" lineHeight="1.9rem">
              주문내용을 확인해주세요 <br />
              주문할 상품의 상품명, 상품가격, 인도정보를 확인하였으며, <br />
              구매에 동의하시겠습니까?
            </Span>
            <Form.CheckboxWrap>
              <Form.Checkbox
                type="checkbox"
                id="check0"
                name="agree0"
                value="check0"
              />
              <Form.CheckboxLabel htmlFor="check0" />
              <Form.CheckboxLabelText htmlFor="check0">
                주문 동의합니다
              </Form.CheckboxLabelText>
            </Form.CheckboxWrap>
          </Div>
        ) : (
          <Div>
            <Form.CheckboxWrap>
              <Form.Checkbox
                type="checkbox"
                id="check0"
                name="agree0"
                value="check0"
              />
              <Form.CheckboxLabel htmlFor="check0" />
              <Form.CheckboxLabelText htmlFor="check0">
                개인정보 제공 위탁에 동의
              </Form.CheckboxLabelText>
            </Form.CheckboxWrap>
            <Form.CheckboxWrap mgb="2rem">
              <Form.Checkbox
                type="checkbox"
                id="check0"
                name="agree0"
                value="check0"
              />
              <Form.CheckboxLabel htmlFor="check0" />
              <Form.CheckboxLabelText htmlFor="check0">
                전자상거래 관련 동의
              </Form.CheckboxLabelText>
            </Form.CheckboxWrap>
            <Form.CheckboxWrap mgb="2rem">
              <Form.Checkbox
                type="checkbox"
                id="check0"
                name="agree0"
                value="check0"
              />
              <Form.CheckboxLabel htmlFor="check0" />
              <Form.CheckboxLabelText htmlFor="check0">
                비회원 개인정보 수집/이용 동의
              </Form.CheckboxLabelText>
            </Form.CheckboxWrap>
          </Div>
        )}
        <Div mobDsp="none" mgt="1rem">
          <Button black radius="0" Mwidth="100%" lineHeight="5rem">
            결제하기
          </Button>
        </Div>
      </div>
    );
  };

  const array = [
    { value: '홈' },
    { value: '주문' },
    { value: '주문서 작성(회원)' },
  ];

  return (
    <>
      <Center>
        {/* mobile - only 상단 타이틀 */}
        <MoTitleBox tit="주문서" />
        {/* mobile - only 모바일 하단 플로팅 결제버튼 */}
        <MobPaymentBtn>
          <Button black radius="0" lineHeight="6rem">
            <Span size="2rem" fontWeight="700">
              $185
            </Span>{' '}
            <Span size="1.8rem">245,372원</Span>
            <Span dsp="inline-block" mgl="20px" size="2rem" fontWeight="600">
              결제하기
            </Span>
          </Button>
        </MobPaymentBtn>

        <Div mgt="4rem" mobDsp="none">
          <CurrentPageList array={array} />
        </Div>
        <DetailWrap>
          {/* 컨텐츠 영역 */}
          <ContWrap>
            <OrderStep step={'second'} />

            {/* 주문내역 시작-- */}
            <OrderList>
              <Order>
                <Tit>
                  <strong>기내면세품 주문내역 (2)</strong>
                  <Span mobMgl="20px">
                    * 상품수량 및 옵션변경은 상품상세 또는 장바구니에서
                    가능합니다.{' '}
                    <Button
                      lineHeight="2.7rem"
                      height="2.7rem"
                      Mwidth="8rem"
                      mobWidth="80px"
                      size="1.2rem"
                    >
                      장바구니 가기
                    </Button>
                  </Span>
                </Tit>
                {/* 주문내역 table1 */}
                <ListTable>
                  <Table.Table>
                    {/* thead */}
                    <thead>
                      <Table.HeadTableTr>
                        <Table.HeadTableTh width="46.2rem">
                          상품 정보
                        </Table.HeadTableTh>
                        <Table.HeadTableTh width="13rem">
                          수량
                        </Table.HeadTableTh>
                        <Table.HeadTableTh width="14rem">
                          쿠폰적용 할인금액
                        </Table.HeadTableTh>
                        <Table.HeadTableTh>상품 결제금액</Table.HeadTableTh>
                      </Table.HeadTableTr>
                    </thead>
                    <tbody>
                      {/* tbody 1*/}
                      <Table.TableTr>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          pd="0 2rem 0 0"
                          data-title="상품정보"
                        >
                          <ProdInfoWrap>
                            <Img
                              pc={{ width: '120px', height: '120px' }}
                              src={`/assets/images/image06-1.png`}
                              alt=""
                            />
                            <ProdInfo>
                              <TagWrap>
                                <Tag>세트상품</Tag>
                              </TagWrap>
                              <Brand>아틀리에 코롱 ATELIER COLOGNE​</Brand>
                              <ProdName>
                                러브 오스만투스 압솔뤼 향수 100ml​
                              </ProdName>
                              <SelectOption>자스민</SelectOption>
                              <Price1>$325</Price1>
                              <PriceWrap>
                                <Price2>$325</Price2>
                                <Price3>(413,400원)</Price3>
                                <Price4>20%</Price4>
                              </PriceWrap>
                            </ProdInfo>
                          </ProdInfoWrap>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="수량"
                        >
                          <Qua>1</Qua>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="쿠폰 할인금액"
                        >
                          {/* <Payment>
                          <strong className="red">$9</strong>
                          <span>12,000원</span>
                        </Payment> */}
                          {member ? (
                            <Payment>
                              <strong className="red">$9</strong>
                              <span>12,000원</span>
                            </Payment>
                          ) : (
                            <ColumnBox>
                              <Button black lineHeight="2.7rem" size="1.2rem">
                                로그인
                              </Button>
                              <Button white lineHeight="2.7rem" size="1.2rem">
                                회원가입
                              </Button>
                            </ColumnBox>
                          )}
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="상품 결제금액"
                        >
                          <Payment2>
                            <strong>$85</strong>
                            <span>115,372원</span>
                          </Payment2>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* tbody 2*/}
                      <Table.TableTr>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          pd="0 2rem 0 0"
                          data-title="상품정보"
                        >
                          <ProdInfoWrap>
                            <Img
                              pc={{ width: '120px', height: '120px' }}
                              src={`/assets/images/prod-order02.png`}
                              alt=""
                            />
                            <ProdInfo>
                              <Brand>시바스 브라더스​</Brand>
                              <ProdName>
                                시바스 리갈 12년산 블렌디드 스카치
                              </ProdName>
                              <SelectOption>100ml</SelectOption>
                              <Price1>$325 (377,000원)</Price1>
                              <PriceWrap>
                                <Price2>$325</Price2>
                                <Price3>(413,400원)</Price3>
                                <Price4>20%</Price4>
                              </PriceWrap>
                            </ProdInfo>
                          </ProdInfoWrap>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="수량"
                        >
                          <Qua>1</Qua>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="쿠폰 할인금액"
                        >
                          {member ? (
                            <Payment>
                              <strong className="red">$9</strong>
                              <span>12,000원</span>
                            </Payment>
                          ) : (
                            <ColumnBox>
                              <Button
                                black
                                Mwidth="8rem"
                                lineHeight="2.7rem"
                                size="1.2rem"
                              >
                                로그인
                              </Button>
                              <Button
                                white
                                Mwidth="8rem"
                                lineHeight="2.7rem"
                                size="1.2rem"
                              >
                                회원가입
                              </Button>
                            </ColumnBox>
                          )}
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="상품 결제금액"
                        >
                          <Payment2>
                            <strong>$85</strong>
                            <span>115,372원</span>
                          </Payment2>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* tbody 3*/}
                      <Table.TableTr>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          pd="0 2rem 0 0"
                          data-title="상품정보"
                        >
                          <ProdInfoWrap>
                            <Img
                              pc={{ width: '120px', height: '120px' }}
                              src={`/assets/images/prod-order02.png`}
                              alt=""
                            />
                            <ProdInfo>
                              <TagWrap>
                                <Tag>묶음상품</Tag>
                                <span>글로벌 퍼펙트 리갈 시리즈</span>
                              </TagWrap>
                              <Brand>시바스 브라더스​</Brand>
                              <ProdName>
                                시바스 리갈 12년산 블렌디드 스카치
                              </ProdName>
                              <SelectOption>100ml</SelectOption>
                              <Price1>$325 (377,000원)</Price1>
                              <PriceWrap>
                                <Price2>$325</Price2>
                                <Price3>(413,400원)</Price3>
                                <Price4>20%</Price4>
                              </PriceWrap>
                            </ProdInfo>
                          </ProdInfoWrap>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="수량"
                        >
                          <Qua>1</Qua>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="쿠폰 할인금액"
                        >
                          {member ? (
                            <Payment>
                              <strong className="red">$9</strong>
                              <span>12,000원</span>
                            </Payment>
                          ) : (
                            <ColumnBox>
                              <Button
                                black
                                Mwidth="8rem"
                                lineHeight="2.7rem"
                                size="1.2rem"
                              >
                                로그인
                              </Button>
                              <Button
                                white
                                Mwidth="8rem"
                                lineHeight="2.7rem"
                                size="1.2rem"
                              >
                                회원가입
                              </Button>
                            </ColumnBox>
                          )}
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="상품 결제금액"
                        >
                          <Payment2>
                            <stron>$85</stron>
                            <span>115,372원</span>
                          </Payment2>
                        </Table.TableTd>
                      </Table.TableTr>
                    </tbody>
                  </Table.Table>
                </ListTable>
                <ButtonWrap>
                  <Button radius="0" lineHeight="5rem">
                    <Span dsp="inline-block" mgr="1.17rem">
                      주문 상품 전체보기 (2)
                    </Span>
                    <Img
                      pc={{ width: '16px', height: '16px' }}
                      src={`/assets/icons/icon-arrow-down-b.svg`}
                      alt=""
                      inlineBlock
                    />
                  </Button>
                </ButtonWrap>
                {/* 주문내역 table2 */}
                <ListTable2>
                  <Table.Table>
                    <thead>
                      {/* thead */}
                      <Table.HeadTableTr>
                        <Table.HeadTableTh width="29.2rem">
                          정상가
                        </Table.HeadTableTh>
                        <Table.HeadTableTh width="29.2rem">
                          총 할인금액
                        </Table.HeadTableTh>
                        <Table.HeadTableTh>최종 결제금액</Table.HeadTableTh>
                      </Table.HeadTableTr>
                    </thead>
                    <tbody>
                      {/* tbody 1*/}
                      <Table.TableTr>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="정상가"
                        >
                          <PriceBox>
                            <strong>$294</strong>
                            <span>391,244원</span>
                          </PriceBox>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="총 할인금액"
                        >
                          <PriceBox>
                            <strong>$109</strong>
                            <span>145,872원</span>
                          </PriceBox>
                        </Table.TableTd>
                        <Table.TableTd
                          border="0"
                          borderL="0"
                          borderR="0"
                          data-title="최종 결제금액"
                        >
                          <PriceBox>
                            <strong>$185</strong>
                            <span>245,372원</span>
                          </PriceBox>
                        </Table.TableTd>
                      </Table.TableTr>
                    </tbody>
                  </Table.Table>
                </ListTable2>
                {/* 주문내역 table3 */}

                {member ? (
                  <ListTable3>
                    {/* <Span
                      
                      mgt="40px"
                      size="1.6rem"
                      fontWeight="700"
                    >
                      할인 상세
                    </Span> */}
                    <TableTit>
                      <h2>할인 상세</h2>
                    </TableTit>
                    <ListTable3Box first>
                      <dl>
                        <dt>상품 할인금액</dt>
                        <dd>
                          <ListPrice>
                            <strong>$100</strong>
                            <span>133,872원</span>
                          </ListPrice>
                        </dd>
                      </dl>
                      <dl>
                        <dt>
                          <Span dsp="block" mobDsp="none">
                            사용가능 쿠폰
                          </Span>
                          <Span dsp="none" mobDsp="block">
                            SKYSHOP 할인 쿠폰​
                          </Span>
                        </dt>
                        <dd style={{ position: 'relative' }}>
                          <Button
                            className="coupon"
                            lineHeight="2.7rem"
                            Mwidth="10rem"
                            mobWidth="88px"
                            size="1.2rem"
                            style={{ borderColor: '#707070' }}
                          >
                            쿠폰 선택/적용
                          </Button>
                          <ListPrice>
                            <strong>$0</strong>
                            <span>0원</span>
                          </ListPrice>
                        </dd>
                      </dl>
                      <dl>
                        <dt>쿠폰적용 할인금액</dt>
                        <dd>
                          <ListPrice>
                            <strong>$9</strong>
                            <span>12,000원</span>
                          </ListPrice>
                        </dd>
                      </dl>
                      <dl>
                        <dt>MY 포인트 적용​</dt>
                        <dd>
                          <Div
                            mgl=".4rem"
                            dsp="flex"
                            align="center"
                            width="100%"
                          >
                            <Span size="1.4rem" mobDsp="none" color="#666">
                              MY 포인트
                            </Span>{' '}
                            <Span
                              size="1.4rem"
                              fontWeight="700"
                              dsp="inline-block"
                              mgl="1rem"
                              mobFontWeight="400"
                              mobColor="#666"
                            >
                              30,000 P
                            </Span>
                            <DdBox>
                              <InputV2
                                mgl="1.5rem"
                                Mwidth="15.4rem"
                                textAlign="right"
                                defaultValue="0P"
                              />
                              <Button
                                Mwidth="10.6rem"
                                mgl=".8rem"
                                height="4.2rem"
                                lineHeight="4.2rem"
                              >
                                전액사용
                              </Button>
                            </DdBox>
                          </Div>
                        </dd>
                      </dl>
                    </ListTable3Box>
                    {/* <Span
                      dsp="none"
                      mobDsp="block"
                      mgt="40px"
                      size="1.6rem"
                      fontWeight="700"
                    >
                      혜택 상세
                    </Span> */}
                    <TableTit>
                      <h2>혜택 상세</h2>
                    </TableTit>
                    <ListTable3Box>
                      <dl>
                        <dt>제휴 혜택</dt>
                        <dd>
                          <Div
                            mgl=".4rem"
                            dsp="flex"
                            align="center"
                            width="100%"
                          >
                            <Span size="1.4rem" color="#5ba6d2">
                              (제휴 카드) 혜택 확인하기 GO​
                            </Span>
                          </Div>
                        </dd>
                      </dl>
                      <dl>
                        <dt>구매 적립포인트</dt>
                        <dd>
                          <Div dsp="flex" align="center" width="100%">
                            <Img
                              pc={{ width: '40px', height: '40px' }}
                              responsive={{ width: '30px', height: '30px' }}
                              src={`/assets/icons/icon-VIP.svg`}
                              alt="vip "
                            />

                            <Span size="1.4rem" dsp="inline-block" mgl="1rem">
                              1%
                            </Span>
                            <Span
                              size="1.4rem"
                              color="#5ba6d2"
                              dsp="inline-block"
                              mgl="1rem"
                            >
                              회원등급 GO​
                            </Span>
                          </Div>
                          <Div dsp="none" mobDsp="block">
                            <ListPrice mob>
                              <strong>$18</strong>
                              <span>2,360P</span>
                            </ListPrice>
                          </Div>
                        </dd>
                      </dl>
                      {/* Only mobile */}
                      <Div as="dl" dsp="none" mobDsp="block">
                        <dt>대한항공 마일리지</dt>
                        <dd>
                          <Div dsp="flex" align="center" width="100%">
                            <Img
                              pc={{ width: '40px', height: '40px' }}
                              responsive={{ width: '30px', height: '30px' }}
                              src={`/assets/icons/icon-VIP.svg`}
                              alt="vip "
                            />

                            <Span size="1.4rem" dsp="inline-block" mgl="1rem">
                              1%
                            </Span>
                            <Span
                              size="1.4rem"
                              color="#5ba6d2"
                              dsp="inline-block"
                              mgl="1rem"
                            >
                              회원등급 GO​
                            </Span>
                          </Div>
                          <Div dsp="none" mobDsp="block">
                            <ListPrice mob>
                              <strong>$18</strong>
                              <span>2,360M</span>
                            </ListPrice>
                          </Div>
                        </dd>
                      </Div>
                      <dl>
                        <dt>
                          면세한도적용금액
                          <Div mgl="1rem">
                            <Img
                              pc={{ width: '16px', height: '16px' }}
                              src={`/assets/icons/question-mark-g.svg`}
                              alt="물음표 아이콘"
                            />
                          </Div>
                        </dt>
                        <dd>
                          <ListPrice>
                            <strong>$185</strong>
                            <span>242,750원</span>
                          </ListPrice>
                        </dd>
                      </dl>
                    </ListTable3Box>
                  </ListTable3>
                ) : (
                  <ListTable3>
                    <BlurBg>
                      <BlurPopup>
                        <Span as="p" textAlign="center" color="#666">
                          비회원으로 구매 시에는 상품할인쿠폰, MY 포인트, <br />
                          구매적립 포인트 등 혜택을 받을 수 없습니다.
                          <br />
                          회원가입을 통해 많은 혜택을 받을 실 수 있습니다.
                        </Span>
                        <JustifyCenter mgt="3rem">
                          <Button
                            white
                            width="18rem"
                            lineHeight="4.2rem"
                            height="4.2rem"
                            size="1.6rem"
                          >
                            로그인
                          </Button>
                          <Button
                            black
                            width="18rem"
                            lineHeight="4.2rem"
                            height="4.2rem"
                            size="1.6rem"
                          >
                            회원가입
                          </Button>
                        </JustifyCenter>
                      </BlurPopup>
                    </BlurBg>
                    <dl>
                      <dt>상품 할인금액</dt>
                      <dd>
                        <ListPrice>
                          <strong>$100</strong>
                          <span>133,872원</span>
                        </ListPrice>
                      </dd>
                    </dl>

                    <dl>
                      <dt>SKYSHOP 할인 쿠폰</dt>
                      <dd>
                        <Button
                          lineHeight="2.7rem"
                          Mwidth="10rem"
                          size="1.2rem"
                          style={{ borderColor: '#707070' }}
                        >
                          쿠폰 선택/적용
                        </Button>
                        <ListPrice>
                          <strong>$0</strong>
                          <span>0원</span>
                        </ListPrice>
                      </dd>
                    </dl>
                    <dl>
                      <dt>쿠폰적용 할인금액</dt>
                      <dd>
                        <ListPrice>
                          <strong>$9</strong>
                          <span>12,000원</span>
                        </ListPrice>
                      </dd>
                    </dl>
                    <dl>
                      <dt>MY 포인트 적용​</dt>
                      <dd>
                        <Div mgl=".4rem" dsp="flex" align="center" width="100%">
                          <Span size="1.4rem" color="#666">
                            MY 포인트
                          </Span>{' '}
                          <Span
                            size="1.4rem"
                            fontWeight="700"
                            dsp="inline-block"
                            mgl="1rem"
                          >
                            30,000 P
                          </Span>
                          <InputV2
                            mgl="1.5rem"
                            mobMgl="0px"
                            Mwidth="15.4rem"
                            textAlign="right"
                            defaultValue="0P"
                          />
                          <Button
                            Mwidth="10.6rem"
                            mgl=".8rem"
                            height="4.2rem"
                            lineHeight="4.2rem"
                          >
                            전액사용
                          </Button>
                        </Div>
                      </dd>
                    </dl>

                    <dl>
                      <dt>구매 적립포인트</dt>
                      <dd>
                        <Div dsp="flex" align="center" width="100%">
                          <Img
                            pc={{ width: '40px', height: '40px' }}
                            src={`/assets/icons/icon-VIP.svg`}
                            alt="vip "
                          />

                          <Span size="1.4rem" dsp="inline-block" mgl="1rem">
                            1%
                          </Span>
                          <Span
                            size="1.4rem"
                            color="#5ba6d2"
                            dsp="inline-block"
                            mgl="1rem"
                          >
                            회원등급 GO​
                          </Span>
                        </Div>
                      </dd>
                    </dl>

                    <dl>
                      <dt>제휴 혜택</dt>
                      <dd>
                        <Div mgl=".4rem" dsp="flex" align="center" width="100%">
                          <Span size="1.4rem" color="#5ba6d2">
                            (제휴 카드) 혜택 확인하기 GO​
                          </Span>
                        </Div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        면세한도적용금액
                        <Div mgl="1rem">
                          <Img
                            pc={{ width: '16px', height: '16px' }}
                            src={`/assets/icons/question-mark-g.svg`}
                            alt="물음표 아이콘"
                          />
                        </Div>
                      </dt>
                      <dd>
                        <ListPrice>
                          <strong>$185</strong>
                          <span>242,750원</span>
                        </ListPrice>
                      </dd>
                    </dl>
                  </ListTable3>
                )}
                {/* mobile only - 결제 금액 창  */}
                <MobPaymentBox>
                  <AmountMember />
                </MobPaymentBox>

                {/* 주문내역 table4 - 주문자 정보 */}
                <ListTable4>
                  {member ? (
                    <Table.TableWrap>
                      <TableTit>
                        <h2>주문자 정보</h2>
                      </TableTit>
                      <Table.Table>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            영문 이름
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                          >
                            Kil dong Hong
                          </Table.TableTd>
                        </Table.TableTr>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            이메일
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                          >
                            hong082103@naver.com
                          </Table.TableTd>
                        </Table.TableTr>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            연락처
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                          >
                            010-9090-9090
                          </Table.TableTd>
                        </Table.TableTr>
                      </Table.Table>
                    </Table.TableWrap>
                  ) : (
                    <Table.TableWrap>
                      <TableTit>
                        <h2>주문자 정보</h2>
                      </TableTit>
                      <Table.Table>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            영문 이름<Span color="red">*</Span>
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                            colSpan={3}
                          >
                            <Div>
                              <InputV2
                                width="21.68rem"
                                placeholder="LAST NAME (성)​"
                              />
                              <InputV2
                                mgl="1rem"
                                width="21.68rem"
                                placeholder="FIRST NAME (이름)​"
                              />
                            </Div>
                          </Table.TableTd>
                        </Table.TableTr>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            이메일
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                            colSpan={3}
                          >
                            <FlexBox>
                              <InputV2 placeholder="ID 입력" width="15rem" />
                              <Span>@</Span>
                              <SelectBox
                                boxWidth="24.5rem"
                                optionData={Email}
                                labelColor="#959595"
                                currentTxt="선택하세요"
                                time
                              />
                              <InputV2 placeholder="직접입력" width="23rem" />
                            </FlexBox>
                          </Table.TableTd>
                        </Table.TableTr>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            연락처<Span color="red">*</Span>
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                            colSpan={3}
                          >
                            <Div>
                              <InputV2
                                placeholder="휴대폰 번호 입력해 주세요.​"
                                width="27.44rem"
                              />
                              <Span
                                color="#959595"
                                dsp="inline-block"
                                mgl="1rem"
                              >
                                ( -없이 숫자만 입력해주세요.)​
                              </Span>
                            </Div>
                          </Table.TableTd>
                        </Table.TableTr>
                        <Table.TableTr>
                          <Table.TableTh textAlign="left" borderL>
                            본인확인<Span color="red">*</Span>
                          </Table.TableTh>
                          <Table.TableTd
                            width="auto"
                            fontSize="14px"
                            style={{ letterSpacing: '-0.35px' }}
                            borderR
                            colSpan={3}
                          >
                            <Div pdt="2rem" pdb="2rem">
                              <Span as="p" size="1.6rem" color="#666">
                                비회원 주문 시 휴대폰 인증이 필요합니다.
                              </Span>
                              <Span as="p" size="1.4rem" color="#666">
                                비회원 주문은 할인, 추가적립 등 SKYSHOP의 다양한
                                혜택이 제공되지 않습니다.​
                              </Span>
                              <FlexBox mgt="2rem" mgb="2rem">
                                <Form.RadioWrap>
                                  <Form.Radio
                                    type="radio"
                                    id="0"
                                    name="user"
                                    value="0"
                                  />
                                  <Form.RadioLabel htmlFor="0" />
                                  <Form.RadioLabelText htmlFor="0">
                                    휴대번호 인증
                                  </Form.RadioLabelText>
                                </Form.RadioWrap>
                                <Form.RadioWrap>
                                  <Form.Radio
                                    type="radio"
                                    id="0"
                                    name="user"
                                    value="0"
                                  />
                                  <Form.RadioLabel htmlFor="0" />
                                  <Form.RadioLabelText htmlFor="0">
                                    이메일 인증
                                  </Form.RadioLabelText>
                                </Form.RadioWrap>
                              </FlexBox>
                              <Button
                                white
                                size="1.4rem"
                                width="19.8rem"
                                height="4.2rem"
                                lineHeight="4.2rem"
                              >
                                인증번호 발송
                              </Button>
                            </Div>
                          </Table.TableTd>
                        </Table.TableTr>
                      </Table.Table>
                    </Table.TableWrap>
                  )}
                </ListTable4>

                {/* 주문내역 table5 - 탑승자 정보 */}
                <ListTable5>
                  <Table.TableWrap>
                    <TableTit className="table5">
                      <h2>탑승자 정보</h2>
                      <Div
                        dsp="flex"
                        align="flex-end"
                        mobDirection="column"
                        mobGap="20px"
                      >
                        <Form.CheckboxWrap width="190px" className="check">
                          <Form.Checkbox
                            type="checkbox"
                            id="check0"
                            name="agree0"
                            value="check0"
                          />
                          <Form.CheckboxLabel htmlFor="check0" />
                          <Form.CheckboxLabelText htmlFor="check0">
                            주문자 정보와 동일
                          </Form.CheckboxLabelText>
                        </Form.CheckboxWrap>

                        <Div dsp="flex">
                          <Button
                            lineHeight="2.7rem"
                            height="2.7rem"
                            width="10.2rem"
                            size="1.2rem"
                            regular
                          >
                            기내반입 제한안내​
                          </Button>
                          <Button
                            lineHeight="2.7rem"
                            height="2.7rem"
                            width="9.6rem"
                            size="1.2rem"
                            mgl=".8rem"
                            regular
                          >
                            출국 시 주의사항
                          </Button>
                        </Div>
                      </Div>
                    </TableTit>
                    <Table.Table>
                      {/* 1 */}
                      <Table.TableTr className="mobTr1">
                        <Table.TableTh textAlign="left" borderL>
                          출발지<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                        >
                          <JustifyCenter>
                            <InputV2 placeholder="도시/공항" width="230px" />
                          </JustifyCenter>
                        </Table.TableTd>
                        <Table.TableTh textAlign="left" mobDsp="none">
                          도착지<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="267px"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          mobDsp="none"
                        >
                          <JustifyCenter>
                            <InputV2 placeholder="도시/공항" width="228px" />
                          </JustifyCenter>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* mob-2 */}
                      <Table.TableTr
                        className="mobTr2"
                        vsb="hidden"
                        mobVsb="visible"
                      >
                        <Table.TableTh textAlign="left" borderL>
                          도착지<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <JustifyCenter>
                            <InputV2 placeholder="도시/공항" width="228px" />
                          </JustifyCenter>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 2 */}
                      <Table.TableTr className="mobTr3">
                        <Table.TableTh textAlign="left" borderL>
                          출발일자<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                        >
                          <AlignCenter>
                            <InputV2
                              placeholder="YYYY-MM-DD"
                              mgr="1rem"
                              Mwidth="189px"
                            />
                            <Img
                              pc={{ width: '30px', height: '30px' }}
                              src={`/assets/icons/icon-calendar-b-fill.svg`}
                              alt="캘린더"
                            />
                          </AlignCenter>
                        </Table.TableTd>
                        <Table.TableTh textAlign="left" mobDsp="none">
                          출발시간<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          mobDsp="none"
                        >
                          <FlexBox>
                            <SelectBox
                              boxWidth="9.5rem"
                              optionData={SelectTime}
                              labelColor="#959595"
                              time
                            />
                            <SelectBox
                              boxWidth="9.5rem"
                              optionData={SelectMin}
                              labelColor="#959595"
                              time
                            />
                          </FlexBox>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* mob 4 */}
                      <Table.TableTr
                        className="mobTr4"
                        vsb="hidden"
                        mobVsb="visible"
                      >
                        <Table.TableTh textAlign="left" borderL>
                          도착지<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <FlexBox>
                            <SelectBox
                              boxWidth="9.5rem"
                              optionData={SelectTime}
                              labelColor="#959595"
                              time
                            />
                            <SelectBox
                              boxWidth="9.5rem"
                              optionData={SelectMin}
                              labelColor="#959595"
                              time
                            />
                          </FlexBox>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 3 */}
                      <Table.TableTr className="mobTr5">
                        <Table.TableTh textAlign="left" borderL>
                          편명<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            dsp="flex"
                            align="center"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <Div
                              dsp="flex"
                              align="center"
                              MobJustify="flex-start"
                              mobWidth="100%"
                            >
                              <Span fontWeight="700">KE</Span>
                              <InputV2
                                mgl="1rem"
                                width="14.7rem"
                                mobWidth="auto"
                                placeholder="EX) 113"
                              />
                            </Div>
                            <Button
                              mgl="1rem"
                              mobMgl="0px"
                              width="10.6rem"
                              mobWidth="100%"
                              height="4.2rem"
                              lineHeight="4.2rem"
                            >
                              편명검색
                            </Button>
                            <Button
                              mgl="1rem"
                              mobMgl="0px"
                              width="14.8rem"
                              mobWidth="100%"
                              height="4.2rem"
                              lineHeight="4.2rem"
                            >
                              탑승편 정보 불러오기
                            </Button>
                            <Button
                              mgl="1rem"
                              mobMgl="0px"
                              width="8rem"
                              mobWidth="100%"
                              height="4.2rem"
                              lineHeight="4.2rem"
                              blue
                            >
                              초기화
                            </Button>
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 4 */}
                      <Table.TableTr className="mobTr6">
                        <Table.TableTh textAlign="left" borderL>
                          영문 이름<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            mobDsp="flex"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <InputV2
                              width="21.68rem"
                              mobWidth="auto"
                              placeholder="LAST NAME (성)​"
                            />
                            <InputV2
                              mgl="1rem"
                              mobMgl="0px"
                              width="21.68rem"
                              mobWidth="auto"
                              placeholder="FIRST NAME (이름)​"
                            />
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 5 */}
                      <Table.TableTr className="mobTr7">
                        <Table.TableTh textAlign="left" borderL>
                          한글 이름<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            mobDsp="flex"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <InputV2
                              width="21.68rem"
                              mobWidth="auto"
                              placeholder="성​"
                            />
                            <InputV2
                              mgl="1rem"
                              mobMgl="0px"
                              width="21.68rem"
                              mobWidth="auto"
                              placeholder="이름"
                            />
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 6 */}
                      <Table.TableTr className="mobTr8">
                        <Table.TableTh textAlign="left" borderL>
                          생년월일<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <FlexBox mobDirection="column">
                            <SelectBox
                              className="select"
                              boxWidth="15.1rem"
                              boxHeight="42px"
                              mobBoxWidth="100%"
                              optionData={Year}
                              labelColor="#959595"
                              currentTxt="YYYY"
                              time
                            />
                            <FlexBox>
                              <SelectBox
                                className="select"
                                boxWidth="11.5rem"
                                boxHeight="42px"
                                mobBoxWidth="100%"
                                optionData={Month}
                                labelColor="#959595"
                                currentTxt="MM"
                                time
                              />
                              <SelectBox
                                className="select"
                                boxWidth="11.5rem"
                                boxHeight="42px"
                                mobBoxWidth="100%"
                                optionData={Day}
                                labelColor="#959595"
                                currentTxt="YY"
                                time
                              />
                            </FlexBox>
                          </FlexBox>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 7 */}
                      <Table.TableTr className="mobTr9">
                        <Table.TableTh textAlign="left" borderL>
                          여권번호<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            mobDsp="flex"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <InputV2
                              placeholder="탑승자 여권번호를 입력해주세요!​"
                              width="27.44rem"
                              mobWidth="100%"
                            />
                            <Span
                              color="#959595"
                              dsp="inline-block"
                              mgl="1rem"
                              mobMgl="0px"
                            >
                              (관세법 고시 제정 2019. 09월부)
                            </Span>
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 8 */}
                      <Table.TableTr className="mobTr10">
                        <Table.TableTh textAlign="left" borderL>
                          이메일
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <FlexBox mobDirection="column">
                            <InputV2
                              placeholder="ID 입력"
                              width="15rem"
                              mobWidth="100%"
                            />
                            <FlexBox width="auto">
                              <Span>@</Span>
                              <SelectBox
                                boxWidth="24.5rem"
                                boxHeight="42px"
                                optionData={Email}
                                labelColor="#959595"
                                currentTxt="선택하세요"
                                time
                              />
                            </FlexBox>
                            <InputV2
                              placeholder="직접입력"
                              width="23rem"
                              mobWidth="100%"
                            />
                          </FlexBox>
                        </Table.TableTd>
                      </Table.TableTr>
                      {/* 9 */}
                      <Table.TableTr className="mobTr11">
                        <Table.TableTh textAlign="left" borderL>
                          연락처<Span color="red">*</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          fontSize="14px"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            mobDsp="flex"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <InputV2
                              placeholder="휴대폰 번호 입력해 주세요.​"
                              width="241px"
                              mobWidth="100%"
                            />
                            <Span
                              color="#959595"
                              dsp="inline-block"
                              mgl="1rem"
                              mobMgl="0px"
                            >
                              ( -없이 숫자만 입력해주세요.)​
                            </Span>
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                    </Table.Table>
                  </Table.TableWrap>
                </ListTable5>

                {/* 주문내역 table6 - 사은품 정보 */}
                <ListTable6>
                  <Table.TableWrap>
                    <TableTit>
                      <h2>사은품 정보</h2>
                      <Span dsp="block" mobDsp="none" size="1.2rem">
                        사은품 쿠폰은 소정의 회원만을 위해 제공되며, 사은품
                        쿠폰정보 등록 영역은 사은품을 교환권을 받으신
                        회원님에게만 노출 됩니다.​
                      </Span>
                    </TableTit>
                    <Table.Table>
                      <Table.TableTr>
                        <Table.TableTh textAlign="left" width="17rem" borderL>
                          사은품 <Span mobDsp="block">쿠폰번호</Span>
                        </Table.TableTh>
                        <Table.TableTd
                          width="auto"
                          fontSize="14px"
                          style={{ letterSpacing: '-0.35px' }}
                          borderR
                          colSpan={3}
                        >
                          <Div
                            mobDsp="flex"
                            mobDirection="column"
                            mobGap="10px"
                          >
                            <InputV2
                              placeholder="“사은품 쿠폰번호”을 등록해 주세요​​"
                              width="30.2rem"
                              mobWidth="100%"
                            />
                            <Button
                              width="8.3rem"
                              mobWidth="100%"
                              mgl="1rem"
                              mobMgl="0px"
                              height="4.2rem"
                              lineHeight="4.2rem"
                            >
                              조회
                            </Button>
                            <Span
                              dsp="none"
                              mobDsp="block"
                              size="1.2rem"
                              color="#707070"
                            >
                              사은품 쿠폰은 소정의 회원만을 위해 제공되며,
                              사은품 쿠폰정보 등록 영역은 사은품을 교환권을
                              받으신 회원님에게만 노출 됩니다.​
                            </Span>
                          </Div>
                        </Table.TableTd>
                      </Table.TableTr>
                    </Table.Table>
                  </Table.TableWrap>
                </ListTable6>

                <Div bgColor="teal" padding="5rem" mgt="6rem">
                  <JustifyCenter>
                    결제 영역 <br />
                    결제 공통 참고
                  </JustifyCenter>
                </Div>
                <InfoBox>
                  <Div dsp="flex" align="center">
                    <Img
                      pc={{ width: '20px', height: '20px' }}
                      src={`/assets/icons/icon-tri-warning.svg`}
                      alt="경고 아이콘"
                    />
                    <Span
                      dsp="inline-block"
                      mgl=".5rem"
                      size="2rem"
                      fontWeight="600"
                    >
                      유의사항
                    </Span>
                  </Div>
                  <Span className="list" as="ul" mgt="2rem" fontWeight="300">
                    <li>
                      출국정보 및 여권정보가 일치하지 않을 경우, 상품을 수령할
                      수 없습니다.
                    </li>
                    <li>여권을 재발행한 경우 신여권으로 주문하셔야 합니다.</li>
                    <li>
                      주문 후 출국정보(여권번호, 휴대폰번호, 탑승정보)가
                      변경되었을 경우 고객센터로 문의 하시기 바랍니다.
                    </li>
                    <li>
                      일정이 변경되신 경우에는 출국 30시간 전, 귀국 편 50시간
                      전까지 고객지원센터로 연락을 주셔야 합니다.
                    </li>
                    <li>
                      주문취소는 출/입국 편 72시간 전에 취소 신청을 하시면
                      신속하게 처리되며, 그 이후 취소 신청 건은 확인 절차를 거쳐
                      수일내에 취소됩니다.
                    </li>
                  </Span>
                </InfoBox>
                <InfoBox>
                  <Div dsp="flex" align="center">
                    <Img
                      pc={{ width: '20px', height: '20px' }}
                      src={`/assets/icons/question-mark.svg`}
                      alt="물음표 아이콘"
                    />
                    <Span
                      dsp="inline-block"
                      mgl=".5rem"
                      size="2rem"
                      fontWeight="600"
                    >
                      안내사항
                    </Span>
                  </Div>
                  <Span className="list" as="ul" mgt="2rem" fontWeight="300">
                    <li>
                      주문하신 상품은 주문 시 입력하신 대한항공 탑승편 기내에서
                      승무원으로부터 인도받게 됩니다. <br />
                      이때 여권이나 주문내역(주민등록번호)를 승무원에게
                      제시바랍니다.
                    </li>
                    <li>
                      상품을 인도받지 못한 경우 귀국 후에 반드시 고객센터로
                      연락바랍니다.
                    </li>
                    <li>
                      일정변경/취소가 있으면 &#91;마이 페이지&#93;에서
                      변경하셔야만 합니다.
                    </li>
                    <li>
                      영수증 출력은&#91;마이 페이지&gt;주문내역&#93;을
                      이용하세요. (비회원은 &#91;고객센터&gt;비회원
                      주문조회&#93; 이용)
                    </li>
                    <li>
                      기내결제 시 지불하실 금액은 탑승일의 기내 비치 책자
                      가격기준으로 적용되어 현재 예약 가격과 달라질 수 있으며,{' '}
                      <br />
                      가격인하로 인해 기내 사은품 지급에서 제외 될 수 있습니다.
                    </li>
                  </Span>
                </InfoBox>
              </Order>
              <StickyOrderWrap>
                <StickyBox>
                  <AmountMember />
                </StickyBox>
              </StickyOrderWrap>
            </OrderList>
          </ContWrap>
        </DetailWrap>
      </Center>
    </>
  );
}

const DetailWrap = styled.section`
  /* max-width: 1300px; */
  margin: 40px auto 0;
  display: flex;
`;
const ContWrap = styled.div`
  width: 100%;
`;
const MobPaymentBtn = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  ${theme.device.responsive} {
    display: block;
  }
`;
const OrderList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: stretch;
  height: 100%;
  ${theme.device.responsive} {
    gap: 0;
    display: block;
  }
`;
const Order = styled.div`
  max-width: 88rem;
  width: 100%;
  ${theme.device.tablet} {
    max-width: none;
  }
  ${theme.device.responsive} {
    max-width: none;
  }
`;
const StickyOrderWrap = styled.div`
  width: 400px;
  height: 100%;
  padding-bottom: 50px;

  ${theme.device.responsive} {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const StickyBox = styled.div`
  position: sticky;
  top: 13.8rem;
  background-color: ${theme.color.common.white};
  max-width: 400px;
  min-height: 477px;
  max-height: 594px;
  width: 100%;
  border: 1px solid ${theme.color.gray.gray45};
  padding: 4rem;
  margin-top: 4.3rem;

  li {
    border-bottom: 1px solid ${theme.color.gray.gray45};
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }

  ${theme.device.tablet} {
    padding: 2.5rem;
  }
`;
const Tit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 1.4rem;
  strong {
  }
  span {
    max-width: 46rem;
    width: 100%;
    font-size: 1.4rem;
  }
  button {
    margin-left: 0.5rem;
  }

  ${theme.device.responsive} {
    font-size: 1.4rem;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    strong {
      display: inline-block;
      line-height: 27px;
      margin-bottom: 6px;
    }
    span {
      max-width: none;
      width: auto;
      font-size: 1.2rem;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
const TableTit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin: 60px 0 20px 0;
  h2 {
    font-size: 2rem;
    font-family: 'PretendardBold';
    vertical-align: middle;
  }
  ${theme.device.responsive} {
    margin: 40px 0 20px 0;
    align-items: flex-start;
    h2 {
      font-size: 1.6rem;
    }
    &.table5 {
      .check {
        justify-content: flex-end;
      }
    }
  }
`;
const ListTable = styled.div`
  padding-bottom: 2rem;
  border: 0;
  tr {
    border-bottom: 1px solid #dfdfdf;
  }
  tr:first-child {
    border-bottom: 0;
  }
  tr td {
    border-top: 0;
    padding: 2rem 0;
  }

  ${theme.device.responsive} {
    thead {
      display: none;
    }
    tr {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #dfdfdf !important;
      border-bottom: 1px solid #dfdfdf !important;
      padding: 11px 0;
    }
    tr td {
      width: 100% !important;
      position: relative;
      border: 0;
      padding: 8px 0;
    }
    td:before {
      content: attr(data-title);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      white-space: nowrap;
      /* text-indent:0; */
      font-size: 1.4rem;
      font-family: 'PretendardMedium';
    }
    td:first-child:before {
      display: none;
    }
  }
`;
const ListTable2 = styled.div`
  tr {
    border-bottom: 1px solid #dfdfdf;
  }
  tr:first-child {
    border-bottom: 0;
  }
  tr td {
    border-top: 0;
  }

  ${theme.device.responsive} {
    thead {
      display: none;
    }
    tbody tr {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #dfdfdf;
      border-bottom: 1px solid #dfdfdf !important;
      padding: 8px 0;
    }
    tbody tr td {
      width: 100%;
      position: relative;
      padding: 0;
      border: 0;
    }
    tbody tr td:before {
      content: attr(data-title);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      white-space: nowrap;
      /* text-indent:0; */
      font-size: 1.4rem;
      font-family: 'PretendardMedium';
    }
    tbody tr td:last-child {
      &:before {
        font-size: 1.6rem;
        font-family: 'PretendardBold';
      }
      strong {
        font-size: 2rem;
      }
      span {
        font-size: 1.6rem;
      }
    }
  }
`;
const ListTable3 = styled.div`
  font-size: 1.6rem;
  margin-top: 3rem;

  dl {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid #dfdfdf;
  }
  dt {
    display: flex;
    align-items: center;
    max-width: 20rem;
    width: 100%;
    height: 6rem;
    padding: 0 0 0 4rem;
    font-family: 'PretendardMedium';
  }
  dd {
    display: flex;
    align-items: center;
    padding: 0 4rem 0 1.7rem;
    height: 6rem;
    width: 100%;
    position: relative;
  }

  ${theme.device.responsive} {
    border-top: 1px solid #dfdfdf;
    position: relative;
    margin-top: 0;
    padding: 8px 0;
    border: 0;
    dl {
      padding: 8px 0;
      position: relative;
      border: 0;
    }
    dt {
      width: auto;
      max-width: none;
      height: auto;
      font-size: 1.4rem;
      margin-right: 8px;
      padding: 0;
      font-family: 'Pretendard';
    }
    dd {
      position: static;
      width: auto;
      height: auto;
      flex-grow: 1;
      padding: 0;
      justify-content: flex-end;
      button.coupon {
        position: absolute;
        left: 0;
      }
    }
  }
`;
const ListTable3Box = styled.div`
  border-top: 1px solid #dfdfdf;

  ${theme.device.responsive} {
    padding: 8px 0;
    margin-top: 20px;
    border-bottom: 1px solid #dfdfdf;
    ${({ first }) => {
      return (
        first &&
        `
      padding-bottom: 58px;
    `
      );
    }};
  }
`;
const DdBox = styled.div`
  display: flex;
  button {
    width: 106px;
  }
  ${theme.device.responsive} {
    position: absolute;
    width: 100%;
    top: 34px;
    left: 0;
    input {
      margin-left: 0 !important;
      max-width: none;
      flex-grow: 1;
    }
    button {
      width: 80px;
    }
  }
`;

const ListTable4 = styled.div`
  tr th {
    width: 170px;
  }
  ${theme.device.responsive} {
    font-size: 1.3rem;
    tr th {
      width: 94px;
      padding: 0 10px;
    }
  }
`;
const ListTable5 = styled.div`
  tr th {
    width: 170px;
  }
  tr td {
    /* width: 270px; */
  }
  ${theme.device.responsive} {
    font-size: 1.3rem;
    tr th {
      width: 94px;
      padding: 0 10px;
    }
    tr td {
      width: auto;
      padding: 10px;
    }
    tr.mobTr8 td > div > div,
    tr.mobTr8 td > div > div > div {
      width: 100% !important;
    }
  }
`;
const ListTable6 = styled.div`
  tr th {
    width: 170px;
  }
  ${theme.device.responsive} {
    font-size: 1.3rem;
    tr th {
      width: 94px;
      padding: 0 10px;
    }
    tr td {
      width: auto;
      padding: 10px;
    }
  }
`;
const BlurBg = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 245px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
  }

  ${theme.device.responsive} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 245px;
  }
`;
const BlurPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 53.9rem;
  height: 19.9rem;
  z-index: 2;
  background-color: #fff;
  padding: 3rem;
`;
const ListPrice = styled.div`
  position: absolute;
  right: 4rem;
  top: 50%;
  transform: translateY(-50%);
  strong {
    font-family: 'PretendardBold';
  }
  span {
    color: #666;
    display: inline-block;
    margin-left: 1rem;
  }
  ${({ mob }) => {
    return (
      mob &&
      `
          display: flex;
          align-items: center;
        `
    );
  }};
  ${theme.device.responsive} {
    position: static;
    transform: none;
  }
`;
const MobPaymentBox = styled.div`
  display: none;
  border: 1px solid #dfdfdf;
  padding: 30px;
  margin-top: 30px;
  li {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  ${theme.device.responsive} {
    display: block;
  }
`;
const PriceBox = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  strong {
    font-family: 'PretendardBold';
    font-size: 2rem;
  }
  span {
    font-size: 1.6rem;
    color: #666;
  }

  ${theme.device.responsive} {
    padding: 8px 0;
    width: 100%;
    justify-content: flex-end;
    span {
      font-size: 1.4rem;
    }
    strong {
      font-size: 1.4rem;
    }
  }
`;
// 상품정보
const ProdInfoWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
`;
const ProdInfo = styled.div`
  margin-left: 2rem;
`;
const TagWrap = styled.div`
  margin-bottom: 0.9rem;
  font-size: 1.2rem;
  span {
    display: inline-block;
    margin-left: 0.5rem;
  }

  ${theme.device.responsive} {
    font-size: 1rem;
  }
`;
const Tag = styled.strong`
  background-color: #f8f8f8;

  padding: 0.6rem;
  border-radius: 0.4rem;
`;
const Brand = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #666;
  ${theme.device.responsive} {
    font-size: 1rem;
  }
`;
const ProdName = styled.strong`
  display: block;
  margin-top: 0.5rem;
  font-family: 'PretendardBold';
  ${theme.device.responsive} {
    font-size: 1.4rem;
  }
`;
const SelectOption = styled.span`
  display: block;
  margin-top: 1rem;
  color: #666;
  ${theme.device.responsive} {
    font-size: 1.4rem;
  }
`;

const PriceWrap = styled.div`
  margin-top: 0.5rem;
  ${theme.device.responsive} {
    font-size: 1.4rem;
  }
`;
const Price1 = styled.span`
  display: block;
  color: #666;
  margin-top: 1rem;
  text-decoration: line-through;
`;

const Price2 = styled.strong`
  display: inline-block;
  font-family: 'PretendardBold';
`;
const Price3 = styled.strong`
  display: inline-block;
  margin-left: 1rem;
`;
const Price4 = styled.strong`
  display: inline-block;
  font-family: 'PretendardBold';
  margin-left: 1rem;
  color: #e1251b;
`;
//수량
const Qua = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PretendardBold';

  ${theme.device.responsive} {
    justify-content: flex-end;
  }
`;
//쿠폰적용 할인금액 & 상품 예약금액
const Payment = styled.div`
  font-size: 1.6rem;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'PretendardBold';
  position: relative;
  margin-right: 1.72rem;
  strong.red {
    color: #e1251b;
  }
  span {
    position: absolute;
    bottom: -2.5rem;
    right: 0;
  }

  ${theme.device.responsive} {
    margin-right: 0;
    font-size: 1.4rem;
    span {
      position: static;
      display: inline-block;
      margin-left: 10px;
      font-family: 'Pretendard';
      color: #666;
    }
  }
`;
const Payment2 = styled(Payment)`
  margin-right: 3.7rem;
  ${theme.device.responsive} {
    margin-right: 0;
  }
`;
//하단 유의 안내 사항
const InfoBox = styled.div`
  margin-top: 6rem;

  ul.list {
    li:after {
      content: '-';
      position: absolute;
      top: 0;
      left: -1rem;
    }
  }
  li {
    position: relative;
    margin-left: 1rem;
    line-height: 2.5rem;
    color: ${theme.color.primary.fontGray};
    font-size: 1.4rem;
  }
  ${theme.device.responsive} {
    margin-top: 20px;
  }
`;

//버튼
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  button {
    max-width: 28.8rem;
    width: 100%;
  }
  ${theme.device.responsive} {
    margin: 0 0 40px;
    button {
      max-width: none;
    }
  }
`;

const Button = styled(Btn)`
  /* font-family: 'PretendardBold'; */
  font-family: ${function (props) {
    if (props.regular) {
      return 'Pretendard';
    } else {
      return 'PretendardBold';
    }
  }};
  border: 1px solid #000;
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  border-color: ${function (props) {
    if (props.black) {
      return '#000';
    } else if (props.blue) {
      return `${theme.color.primary.fontBlue}`;
    } else {
      return '#000';
    }
  }};
  background-color: ${function (props) {
    if (props.black) {
      return '#000';
    } else if (props.blue) {
      return '#fff';
    } else {
      return `#fff`;
    }
  }};
  color: ${function (props) {
    if (props.black) {
      return '#fff';
    } else if (props.blue) {
      return `${theme.color.primary.fontBlue}`;
    } else {
      return `#000`;
    }
  }};

  max-width: ${({ Mwidth }) => (Mwidth ? Mwidth : '18rem')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  margin: ${({ margin }) => (margin ? margin : null)};
  margin-left: ${({ mgl }) => (mgl ? mgl : null)};

  font-size: ${({ size }) => (size ? size : '1.5rem')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '4.2rem')};

  /* &:hover {
    background-color: #000;
    color: #fff;
  } */

  //반응형
  ${theme.device.responsive} {
    width: ${({ mobWidth }) => mobWidth && mobWidth};
    max-width: none;
    margin-left: ${({ mobMgl }) => mobMgl && mobMgl};
    font-family: 'Pretendard';
    line-height: ${({ mobLineHeight }) =>
      mobLineHeight ? mobLineHeight : null};
  }
`;

//input
const Input = styled.input`
  flex-grow: 1;
  font-size: ${theme.font.size.base};
  font-family: 'Pretendard';
  font-weight: bold;
  padding: 0;
  padding-top: 12px;
  padding-bottom: 18px;
  border: 0;
  border-bottom: 1px solid ${theme.color.primary.gray};
  outline: 0;
  max-width: ${({ Mwidth }) => (Mwidth ? Mwidth : null)};
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : '4.2rem')};
  margin-left: ${({ mgl }) => (mgl ? mgl : null)};
  margin-right: ${({ mgr }) => (mgr ? mgr : null)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ::placeholder {
    color: ${theme.color.gray.gray58};
  }
  :focus {
    border-color: ${theme.color.primary.fontBlue};
    ::placeholder {
      color: transparent;
    }
  }
  ${theme.device.responsive} {
    margin-left: ${({ mobMgl }) => mobMgl && mobMgl} !important;
    max-width: ${({ mobMwidth }) => (mobMwidth ? mobMwidth : null)};
    width: ${({ mobWidth }) => (mobWidth ? mobWidth : null)};
  }
`;

const InputV2 = styled(Input)`
  font-size: 1.5rem;
  font-weight: normal;
  vertical-align: middle;
  border: 1px solid ${theme.color.primary.gray};
  border-radius: 4px;
  padding: 12px 15px;
  ${theme.device.responsive} {
  }
`;
const DspFlex = styled.div`
  display: flex;
  margin-top: ${({ mgt }) => (mgt ? mgt : null)};
  margin-bottom: ${({ mgb }) => (mgb ? mgb : null)};
  ${({ gap }) => {
    return gap ? `gap:${gap}` : `gap: 10px`;
  }};
  width: 100%;
`;
const JustifyCenter = styled(DspFlex)`
  justify-content: center;
`;
const AlignCenter = styled(DspFlex)`
  align-items: center;
`;
const JustifyBetween = styled(DspFlex)`
  justify-content: space-between;
  align-items: center;
`;
const JustifyBetween2 = styled(DspFlex)`
  justify-content: space-between;
`;
const FlexBox = styled(DspFlex)`
  align-items: center;
  justify-content: flex-start;
  width: ${({ width }) => width && width};
  ${theme.device.responsive} {
    ${({ mobDirection }) => {
      return (
        mobDirection === 'column' &&
        `
        flex-direction: column;
      `
      );
    }};
  }
`;
const ColumnBox = styled(DspFlex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
