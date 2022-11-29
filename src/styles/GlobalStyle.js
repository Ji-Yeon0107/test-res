import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';
import { Translate } from '@mui/icons-material';
// import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
// Baskervville (English)
// TODO Not wroking -> is replaced by 'link tag'

@font-face {
    font-family: 'LibreBaskervville';
    font-style: normal;
    src: url('fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf') format('ttf');
    font-display: swap;
}
@font-face {
    font-family: 'LibreBaskervvilleBold';
    font-style: normal;
    src: url('fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf') format('ttf');
    font-display: swap;
}
@font-face {
    font-family: 'LibreBaskervvilleItalic';
    font-style: normal;
    src: url('fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf') format('ttf');
    font-display: swap;
}

// Pretendard (Korean)
@font-face {
    font-family: 'Pretendard';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-Regular.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'PretendardMedium';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-Medium.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'PretendardSemiBold';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-SemiBold.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'PretendardBold';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-Bold.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'PretendardExtraBold';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-ExtraBold.woff') format('woff');
    font-display: swap;
}
@font-face {
    font-family: 'PretendardLight';
    font-style: normal;
    src: url('fonts/Pretendard/Pretendard-Light.woff') format('woff');
    font-display: swap;
}
    *{box-sizing:border-box;}
    html{
        width:100%;
        height:100%;
        font-size:62.5%;
    }
    body{ 
        width:100%;
        height:100%;
        font-family: 'Pretendard';
        font-size:1.6rem;
        color:#000;
        line-height:1.3;
        margin:0 auto;
        background:#fff;
    }
    @media screen and (min-width:1024px) {
        body{   
            min-width:1300px;
        }
    }
    @media screen and (max-width:1023px) {
        body{   
            min-width:375px;
        }
    }
    /* 사이드바 스타일 */
    .sidebar{
        border: 1px solid ${theme.color.gray.gray45} !important;
        padding: 2rem 0;
        height: fit-content;
        ${theme.device.responsive} {
            display: none;
        }
        .sidebar-inner{
            background-color: transparent;
            .menu{
                .sub-menu{
                    .menu-anchor {
                        height: 50px;
                        margin: 0 20px;
                        padding: 0 10px;
                        letter-spacing: -0.6px;
                        .menu-label {
                            font-size: ${theme.font.size.base};
                            font-weight: 800;
                            color: ${theme.color.primary.fontBlue};
                        }
                    }
                    .sub-menu-content {
                        .menu-anchor{
                            height: 40px;
                        }
                        .menu-label {
                            display: flex;
                            align-items: center;
                            gap: .5rem;
                            font-size: 16px;
                            line-height: 30px;
                            font-weight: normal;
                            color: ${theme.color.common.black};
                        }
                    }
                    .expand-icon {
                        width: 16px;
                        height: 16px;
                        background-image: url(/assets/icons/icon-arrow-up.svg);
                        span {
                            display: none;
                        }
                    }
                }
            }
        }
    }
    a{color:#000;}

    /* 아코디언 목록스타일 */
    .accordion {
        border: none;
        .accordion__item {
            border: none;
            .accordion__heading {
                .accordion__button {
                    height: 54px;
                    background-color: transparent;
                    padding: 1.5rem 2rem;
                    position: relative;
                    border-bottom: 1px solid ${theme.color.primary.gray};
                    &::before {
                        position: absolute;
                        right: 2rem;
                        transform: rotate(45deg);
                        margin-right: 0;
                        margin-top: .4rem;
                    }
                }
            }
            .accordion__panel {
                padding: 3rem 2rem;
                background-color: ${theme.color.primary.bgGray};
            }
        }
    }

    /* 제품 상세 썸네일 swiper */
    .product-detail {
        .swiper {
        width: 100%;
        height: 100%;
        }

        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }

        .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

        .swiper {
        width: 100%;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        }

        .swiper-slide {
        background-size: cover;
        background-position: center;
            ${theme.device.responsive} {
                /* width: 100% !important;
                margin-right: 0 !important; */
            }
        }

        .mySwiper2 {
        height: 80%;
        width: 100%;
        }

        .mySwiper {
        height: 20%;
        box-sizing: border-box;
        margin: 0;
        padding: 20px 0;
        }

        .mySwiper .swiper-slide {
        width: 80px;
        height: 100%;
        opacity: 1;
        border: 1px solid #dfdfdf;
        }

        .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
        border: 1px solid #000;

        }

        .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
        .swiper-pagination {
            background: rgba(0, 0, 0, 0.5);
            width: 40px;
            line-height: 20px;
            font-size: 1.2rem;
            border-radius: 10px;
            color: #fff;
            position: absolute;
            left: auto;
            right: 6vw;
            bottom: 6vw;
            display: none;
            ${theme.device.responsive} {
                display: block;
            }
        }
    }
    /* 제품 상세 아코디언  */
    .use-info-toggle {
        .accordion .accordion__item .accordion__heading .accordion__button {
            height: auto;
            padding: 0;
            padding-bottom: 6rem;
        }
        .accordion .accordion__item .accordion__heading .accordion__button::before {
            margin: 0;
            right: 1.2rem;
            width: 2.4rem;
            height: 2.4rem;
            transform: rotate(0deg);
            transform: ${hidden => (hidden ? 'rotate(45deg)' : 'rotate(0deg)')};
            border-width: 3px;
        }
        .accordion .accordion__item .accordion__panel {
            padding: 4rem 0;
            background: #fff;
        }
    }
    .qna-toggle {
        .accordion .accordion__item .accordion__heading .accordion__button {
            height: auto;
            padding: 0;
            /* padding-bottom: 6rem; */
        }
        .accordion .accordion__item .accordion__heading .accordion__button::before {
            display: none;
        }
        .accordion .accordion__item .accordion__panel {
            padding: 0;
            background: #fff;
        }
    }
`;

export default GlobalStyle;
