import styled from 'styled-components';

export default function BrandLogo() {
    return (
        <BrandWrap>
            <BrandImgWrap>
                <img
                    src="https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5a471139/images/large/637758168312267969-2289921.png?sw=350&sh=350&sm=fit&sfrm=png"
                    alt=""
                />
            </BrandImgWrap>
            <LogoImgWrap>
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/10/Cartier-logo-500x240.png"
                    alt="cartier"
                />
            </LogoImgWrap>
        </BrandWrap>
    );
}
const BrandWrap = styled.div`
    display: inline-block;
    max-width: 42rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    margin-left: 2rem;
`;
const BrandImgWrap = styled.div`
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    &:before {
        content: '';
        display: block;
        padding-top: 50%;
    }
    & img {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const LogoImgWrap = styled.div`
    margin-top: 1rem;
    img {
        width: 34%;
    }
`;
