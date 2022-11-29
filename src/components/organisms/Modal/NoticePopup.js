import styled from 'styled-components';
import theme from 'styles/theme';
import { Btn } from 'components/atoms/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import SwiperCore, { Pagination } from 'swiper';
import { useState } from 'react';

SwiperCore.use([Pagination]);

export default function NoticePopup() {
    const swiperParams = {
        pagination: { type: 'fraction' },
        loop: true,
    };
    const [checked, setChecked] = useState(false);
    const setCheck = () => setChecked(prev => !prev);
    console.log(checked);
    return (
        <>
            <Popup>
                <MySwiper {...swiperParams}>
                    <SwiperSlide>
                        <a href="#none">
                            <img
                                src="https://cdn.aitimes.com/news/photo/202204/143854_149286_5624.png"
                                alt=""
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#none">
                            <img
                                src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
                                alt=""
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#none">
                            <img
                                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
                                alt=""
                            />
                        </a>
                    </SwiperSlide>
                </MySwiper>
                <PopupSet>
                    <div>
                        <CheckBox type="checkbox" id="no-view" />
                        <CheckBoxLabel
                            htmlFor="no-view"
                            checked={checked}
                            onClick={setCheck}
                        >
                            오늘 하루 보지 않기
                        </CheckBoxLabel>
                    </div>
                    <Btn btnBlack width="4.6rem" lh="3.8rem" fz="1.5rem">
                        닫기
                    </Btn>
                </PopupSet>
            </Popup>
        </>
    );
}

const Popup = styled.div`
    z-index: 9999;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 36rem;
    background-color: #fff;
    transform: translate(-50%, -50%);
`;

const MySwiper = styled(Swiper)`
    position: relative;
    .swiper-slide {
        &:before {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
        & img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .swiper-pagination {
        max-width: 4.5rem;
        left: calc(100% - 10px);
        bottom: calc(100% - 12px);
        font-size: 1.2rem;
        color: ${theme.color.common.white};
        line-height: 2rem;
        padding: 0 8px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        transform: translate(-100%, 100%);
    }
`;
const PopupSet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;
const CheckBox = styled.input`
    display: none;
`;
const CheckBoxLabel = styled.label`
    position: relative;
    padding-left: 3rem;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 2rem;
        height: 2rem;
        border: ${props =>
            props.checked
                ? `1px solid ${theme.color.common.black}`
                : `1px solid ${theme.color.gray.gray45}`};
        border-radius: 5px;
        transform: translateY(-50%);
    }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;
