import MypageSidebar from 'components/organisms/MypageSidebar';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import * as Table from 'components/organisms/Table';
import MypageInfo from 'components/organisms/MypageInfo';
import Div from 'components/atoms/Div';
import Span from 'components/atoms/Span';
import Img from 'components/atoms/Img';
import Modal from 'components/organisms/Modal';
import { Btn } from 'components/atoms/Button';
import { useState } from 'react';
import Paging from 'components/atoms/Paging';
import MoTitleBox from 'components/atoms/MoTitleBox';

const Center = styled.div`
  ${theme.common.center};
  padding-bottom: 10rem;
  ${theme.device.tablet} {
    box-sizing: border-box;
    width: fit-content;
    padding: 0 25px 0 25px;
  }
  ${theme.device.responsive} {
    min-width: 37.5rem;
    padding-bottom: 4rem;
  }
`;
const DetailWrap = styled.section`
  max-width: 1300px;
  margin: 4rem auto 0;
  display: flex;
  gap: 8rem;
  ${theme.device.responsive} {
    min-width: 37.5rem;
    margin-top: 2rem;
  }
`;
const ContWrap = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  ${theme.device.tablet} {
    width: 75%;
  }
  ${theme.device.responsive} {
    min-width: 37.5rem;
  }
`;
const ImgWrap = styled.div`
  background-color: ${theme.color.primary.bgGray};
  border-radius: 5px;
  min-width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export default function MyEventList() {
  return (
    <>
      <Center>
        <MoTitleBox tit={'응모한 이벤트'} />
        <PageNavigator>
          <a href="#">
            <span>홈</span>
          </a>
          <Img
            pc={{ width: '14px', height: '14px' }}
            src={`/icons/arrow-right.svg`}
            alt="arrow-right"
          ></Img>
          <a href="#">
            <span>마이페이지</span>
          </a>
          <Img
            pc={{ width: '14px', height: '14px' }}
            src={`/icons/arrow-right.svg`}
            alt="arrow-right"
          ></Img>
          <a href="#" className="active">
            <span>주문 탑승편 정보 변경</span>
          </a>
        </PageNavigator>

        {/* 마이페이지 상단 정보 */}
        <MypageInfo />

        <DetailWrap>
          {/* 사이드바 */}
          <MypageSidebar />

          {/* 컨텐츠 영역 */}
          <ContWrap>
            <ContTit>응모한 이벤트</ContTit>

            <Div
              dsp="flex"
              align="center"
              mgb="4rem"
              mobWidth="95%"
              mobMg="0 auto 4rem"
              mobDirection="column"
              mobAlign="flex-start"
            >
              <Span fontWeight="500" lineHeight="38px">
                고객님께서 응모하신 이벤트 내역입니다.
              </Span>
              <Div as="button" mgl="1rem" dsp="flex" align="center" mobMgl="0">
                <Div borderBottom borderColor="black" mgr=".8rem">
                  <Span fontWeight="700" size="1.4rem">
                    응모가능 이벤트 보기
                  </Span>
                </Div>
                <Img
                  pc={{ width: '4px', height: '8px' }}
                  src={`/assets/icons/icon-arrow-right-fill-bk.png`}
                  alt="arrow-right"
                  height100
                  center
                ></Img>
              </Div>
            </Div>

            <Table.HeadTableWrap>
              <Table.TableTitle>
                <Div
                  dsp="flex"
                  justify="space-between"
                  align="center"
                  mobWidth="95%"
                  mobMg="auto"
                >
                  <Span fontWeight="500" size="16px">
                    총 3건
                  </Span>
                  <Div>
                    <Select style={{ marginRight: '2rem' }}>
                      <option value="전체">전체</option>
                    </Select>
                    <Select>
                      <option value="1개월">1개월</option>
                    </Select>
                  </Div>
                </Div>
              </Table.TableTitle>
              <Table.HeadTable>
                <thead>
                  <Table.HeadTableTr>
                    <Table.HeadTableTh width="650px">
                      이벤트 정보
                    </Table.HeadTableTh>
                    <Table.HeadTableTh width="150px">응모일</Table.HeadTableTh>
                    <Table.HeadTableTh width="100px">선택</Table.HeadTableTh>
                    <Table.HeadTableTh width="100px">
                      당첨확인
                    </Table.HeadTableTh>
                  </Table.HeadTableTr>
                </thead>
                <tbody>
                  <Table.HeadTableTr>
                    <Table.HeadTableTd textAlign="left" padding="1rem 0">
                      <Div
                        as="a"
                        href=""
                        dsp="flex"
                        gap="20px"
                        textAlign="left"
                      >
                        <Img
                          pc={{
                            width: '120px',
                            height: '120px',
                            minWidth: '120px',
                          }}
                          responsive={{ minWidth: '120px' }}
                          src={`/assets/images/event01.png`}
                          alt="상품 사진"
                          height100
                          center
                        ></Img>
                        <Div
                          dsp="flex"
                          direction="column"
                          justify="space-between"
                          align="flex-start"
                          gap=".5rem"
                        >
                          <Span fontWeight="700" lineHeight="30px" textLine="2">
                            SKYSHOP SMS 수신동의 이벤트명은 두줄까지 표현되고
                            …처리​ SKYSHOP SMS 수신동의 이벤트명은 두줄까지
                            표현되고 …처리​ SKYSHOP SMS 수신동의 이벤트명은
                            두줄까지 표현되고 …처리​
                          </Span>
                          <Span color="#666" lineHeight="30px">
                            2022.08.05 ~ 2022.08.31​
                          </Span>
                        </Div>
                      </Div>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="응모일">
                      <TdWrap
                        dsp="flex"
                        direction="column"
                        align="center"
                        justify="center"
                        gap=".8rem"
                      >
                        <Span color="#666">2022.08.16</Span>
                      </TdWrap>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="상태">
                      <Span color="#666" mobTextAlign="right">
                        진행중
                      </Span>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="당첨확인">
                      <Span color="#666">-</Span>
                    </Table.HeadTableTd>
                  </Table.HeadTableTr>
                  <Table.HeadTableTr>
                    <Table.HeadTableTd textAlign="left" padding="1rem 0">
                      <Div
                        as="a"
                        href=""
                        dsp="flex"
                        gap="20px"
                        textAlign="left"
                      >
                        <Img
                          pc={{
                            width: '120px',
                            height: '120px',
                            minWidth: '120px',
                          }}
                          responsive={{ minWidth: '120px' }}
                          src={`/assets/images/event01.png`}
                          alt="상품 사진"
                          height100
                          center
                        ></Img>
                        <Div
                          dsp="flex"
                          direction="column"
                          justify="space-between"
                          align="flex-start"
                          gap=".5rem"
                        >
                          <Span fontWeight="700" lineHeight="30px" textLine="2">
                            SKYSHOP SMS 수신동의 이벤트​
                          </Span>
                          <Span color="#666" lineHeight="30px">
                            2022.08.05 ~ 2022.08.31​
                          </Span>
                        </Div>
                      </Div>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="응모일">
                      <TdWrap
                        dsp="flex"
                        direction="column"
                        align="center"
                        justify="center"
                        gap=".8rem"
                      >
                        <Span color="#666">2022.08.16</Span>
                      </TdWrap>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="상태">
                      <Span color="#666" mobTextAlign="right">
                        진행중
                      </Span>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="당첨확인">
                      <Span color="#666">-</Span>
                    </Table.HeadTableTd>
                  </Table.HeadTableTr>
                  <Table.HeadTableTr>
                    <Table.HeadTableTd textAlign="left" padding="1rem 0">
                      <Div
                        as="a"
                        href=""
                        dsp="flex"
                        gap="20px"
                        textAlign="left"
                      >
                        <Img
                          pc={{
                            width: '120px',
                            height: '120px',
                            minWidth: '120px',
                          }}
                          responsive={{ minWidth: '120px' }}
                          src={`/assets/images/event01.png`}
                          alt="상품 사진"
                          height100
                          center
                        ></Img>
                        <Div
                          dsp="flex"
                          direction="column"
                          justify="space-between"
                          align="flex-start"
                          gap=".5rem"
                        >
                          <Span fontWeight="700" lineHeight="30px" textLine="2">
                            SKYSHOP SMS 수신동의 이벤트​
                          </Span>
                          <Span color="#666" lineHeight="30px">
                            2022.08.05 ~ 2022.08.31​
                          </Span>
                        </Div>
                      </Div>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="응모일">
                      <TdWrap
                        dsp="flex"
                        direction="column"
                        align="center"
                        justify="center"
                        gap=".8rem"
                      >
                        <Span color="#666">2022.08.16</Span>
                      </TdWrap>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="상태">
                      <Span color="#666" mobTextAlign="right">
                        종료
                      </Span>
                    </Table.HeadTableTd>
                    <Table.HeadTableTd padding="1rem 0" data-title="당첨확인">
                      <Span color="#666">미당첨</Span>
                    </Table.HeadTableTd>
                  </Table.HeadTableTr>
                </tbody>
              </Table.HeadTable>
            </Table.HeadTableWrap>
            <Paging />
            {/* 관련 문의 사항 */}
            <ProductTit>
              <h2>관련 문의 사항이 있나요?</h2>
            </ProductTit>
            <QnaBtnWrap>
              <QnaBtn>FAQ로 이동</QnaBtn>
              <QnaBtn>1:1 문의 남기기</QnaBtn>
            </QnaBtnWrap>
          </ContWrap>
        </DetailWrap>
      </Center>
    </>
  );
}

const ContTit = styled.h1`
  font-size: 52px;
  text-align: center;
  width: 100%;
  padding: 0 0 6rem;
  font-family: 'PretendardBold';
  ${theme.device.tablet} {
    font-size: 5.2rem;
  }
  ${theme.device.responsive} {
    display: none;
  }
`;
const PageNavigator = styled.div`
  padding: 40px 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  .active {
    font-family: 'PretendardBold';
  }
  ${theme.device.responsive} {
    display: none;
  }
`;
const ProductTit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 6rem 0 2rem 0;
  h2 {
    font-size: 20px;
    font-family: 'PretendardBold';
    vertical-align: middle;
  }
  .icon {
    width: 20px;
    height: 20px;
    background-color: #ccc;
  }
  ${theme.device.responsive} {
    width: 95%;
    margin: 4rem auto 2rem;
  }
`;
const CancleBtn = styled.button`
  border: 1px solid ${theme.color.primary.fontRed};
  border-radius: 4px;
  font-size: 12px;
  width: 80px;
  height: 27px;
  color: ${theme.color.primary.fontRed};
`;
const BasicBtn = styled(CancleBtn)`
  width: 80px;
  border: 1px solid ${theme.color.common.black};
  color: ${theme.color.common.black};
  margin-bottom: ${props => props.mb || '0'};
  border-color: ${theme.color.gray.gray85};
`;
const AllBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0 2rem 0;
  ${theme.device.responsive} {
    width: 95%;
    margin: 4rem auto 0;
  }
`;
const AllBtn = styled.button`
  width: 288px;
  border: 1px solid ${theme.color.common.black};
  line-height: 30px;
  height: 50px;
  img {
    margin: 8px 0 0 10px;
  }
  ${theme.device.responsive} {
    border-radius: 0.4rem;
  }
`;
const QnaBtnWrap = styled(AllBtnWrap)`
  justify-content: space-between;
  margin-top: 2rem;
  gap: 20px;
`;
const QnaBtn = styled(AllBtn)`
  font-family: 'PretendardBold';
  width: 490px;
`;
const ModalBox = styled(Modal)`
  display: flex;
  width: ${props => props.width || ''};
  height: ${props => props.height || ''};
  text-align: center;
  align-items: center;
  padding: 30px;
`;
const Select = styled.select`
  border: none;
  font-family: 'PretendardMedium';
  font-size: 1.6rem;
  line-height: 3rem;
  padding: 0.2rem 2rem 0.2rem 0.2rem;
  background: url(/assets/gnb/icon-arrow-select-filled-bk.svg) no-repeat right
    2px center;
  background-size: 0.8rem;
`;
const TdWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const StyledTableHead = styled(Table.HeadTableTr)``;
