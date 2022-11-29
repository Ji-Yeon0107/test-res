import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { Btn } from 'components/atoms/Button';
import { useState } from 'react';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export default function Inform({ open }) {
    return (
        <>
            {open && (
                <Center>
                    <Content>
                        <CloseBtn>
                            <img src="icons/icon-close-arrow.svg" alt="" />
                        </CloseBtn>
                        <ConHeader>
                            <Title>알림</Title>
                            <button>
                                <img src="" alt="닫기버튼" />
                            </button>
                        </ConHeader>
                        <ConMenuWrap>
                            <Swiper slidesPerView={5.5}>
                                <SwiperSlide>
                                    <ConMenuLi active>
                                        <a href="#none">전체</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi>
                                        <a href="#none">쇼핑</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi>
                                        <a href="#none">주문</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi>
                                        <a href="#none">재입고</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi>
                                        <a href="#none">혜택</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi>
                                        <a href="#none">고객</a>
                                    </ConMenuLi>
                                </SwiperSlide>
                            </Swiper>
                        </ConMenuWrap>
                        <ConMenuWrap>
                            <Swiper slidesPerView={6}>
                                <SwiperSlide>
                                    <ConMenuLi02 active>
                                        <a href="#none">전체</a>
                                    </ConMenuLi02>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi02>
                                        <a href="#none">구분1</a>
                                    </ConMenuLi02>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ConMenuLi02>
                                        <a href="#none">구분2</a>
                                    </ConMenuLi02>
                                </SwiperSlide>
                            </Swiper>
                        </ConMenuWrap>
                        <ContentInner>
                            <InformNum>
                                전체 <span>12</span>건
                            </InformNum>
                            <InformList>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                                <InformListItem>
                                    <a href="#none">
                                        <p>[주문]주문상품 수령지 장소 변경</p>
                                        <p>22.08.03</p>
                                    </a>
                                </InformListItem>
                            </InformList>
                        </ContentInner>
                        <Btn
                            display="block"
                            width="20rem"
                            bgc="#000"
                            mt="2rem"
                            mr="auto"
                            ml="auto"
                        >
                            닫기
                        </Btn>
                    </Content>
                </Center>
            )}
        </>
    );
}

const Center = styled.div`
    z-index: 9999;
    position: relative;
    max-width: 1680px;
    width: 100%;
    margin: 0 auto;
`;
const Content = styled.section`
    position: absolute;
    right: 0;
    width: 100%;
    max-width: 500px;
    padding: 3rem;
    border-radius: 8px;
    margin-left: auto;
    background-color: #fff;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
`;
const CloseBtn = styled.button`
    position: absolute;
    top: 45%;
    left: 0;
    width: 4rem;
    height: 10rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #fff;
    transform: translateX(-100%);
`;
const ConHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 2rem;
`;
const Title = styled.p`
    font-size: ${theme.font.size.title.subTitle2};
    font-family: 'PretendardSemiBold';
`;
const ConMenuWrap = styled.div`
    width: 100%;
    overflow-x: auto;
`;
const ConMenu = styled.ul`
    position: relative;
    display: flex;
    width: auto;
`;
const ConMenuLi = styled.li`
    min-width: 8rem;
    flex-grow: 1;
    font-size: 1.5rem;
    line-height: 5rem;
    text-align: center;
    background-color: ${props => (props.active ? '#fff' : '#f4f4f4')};
    a {
        display: block;
    }
`;
const ConMenuLi02 = styled(ConMenuLi)`
    min-width: 7rem;
    flex-grow: 0;
    font-family: ${props => (props.active ? 'PretendardBold' : 'Pretendard')};
    background-color: #fff;
`;
const ContentInner = styled.div`
    padding: 2rem;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
`;
const InformNum = styled.p`
    font-size: 1.2rem;
    font-family: 'PretendardMedium';
    span {
        color: ${theme.color.primary.blue};
    }
`;
const InformList = styled.ul`
    height: 21rem;
    padding-right: 15px;
    margin-top: 1.2rem;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 5px;
        border-radius: 10px;
        background: ${theme.color.gray.gray45};
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${theme.color.common.black};
    }
`;
const InformListItem = styled.li`
    border-bottom: 1px solid #dfdfdf;
    a {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
        padding: 1rem 0;
    }
`;
