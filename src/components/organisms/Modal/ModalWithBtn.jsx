import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';
import PopupBtnSet from 'components/molecules/PopupBtnSet';

export default function ModalWithBtn({
    children,
    noTitle,
    closeBtn,
    title,
    description,
    open,
    setOpen,
    width,
    height,
    contentHeight,
    styleProps,
    customBtnText,
    ...rest
}) {
    useEffect(() => {
        if (!open) return;
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';

        return () => body.style.removeProperty('overflow');
    }, [open]);

    const closeModal = e => {
        if (e.target !== e.currentTarget) return;
        setOpen(false);
    };

    return (
        <>
            {open && (
                <Bg onClick={closeModal}>
                    <StyledModal onClick={closeModal}>
                        <Inner
                            bgColor={styleProps?.bgColor}
                            {...rest}
                            width={width}
                            height={height}
                        >
                            {closeBtn && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 10,
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            zIndex: '1400',
                                            color: 'common.white',
                                        }}
                                        onClick={closeModal}
                                    >
                                        <CloseIcon
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '2.8rem',
                                                color: 'common.black',
                                            }}
                                            onClick={closeModal}
                                        />
                                    </IconButton>
                                </div>
                            )}
                            {noTitle || (
                                <Container pt={30} pb={21}>
                                    <FlexBox>
                                        <div>
                                            <Title>{title}</Title>
                                            <Description>
                                                {description}
                                            </Description>
                                        </div>
                                    </FlexBox>
                                </Container>
                            )}

                            <MainContent contentHeight={contentHeight}>
                                {children}
                            </MainContent>
                            <ButtonContainer>
                                <PopupBtnSet customBtnText={customBtnText} />
                            </ButtonContainer>
                        </Inner>
                    </StyledModal>
                </Bg>
            )}
        </>
    );
}

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Bg = styled.div`
    position: absolute;
    z-index: 20000;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 25, 25, 0.63);
`;
const ButtonContainer = styled.div`
    position: absolute;
    bottom: 30px;
`;
const StyledModal = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1000;
    left: 0;
    bottom: 0;
`;

const MainContent = styled.div`
    width: 100%;
    word-break: normal;
    text-align: center;
    // overflow: scroll;
`;

const WidthLimit = styled.div`
    max-width: auto;
    width: 1200px;
`;

const Inner = styled(WidthLimit)`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    padding-left: 30px;
    padding-right: 30px;
    margin: auto;
    border-radius: 6px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
`;

const Container = styled.div`
    width: 100%;
    position: relative;
    padding-top: ${({ pt }) => pt}px;
    padding-bottom: ${({ pb }) => pb}px;
    background-color: #fff;
    border-radius: ${({ borderRadius }) =>
        borderRadius === 'none' ? 0 : '20px 20px 0 0'};
`;

const Title = styled.div`
    font-family: NanumSquareBold;
    font-size: 16px;
`;
const Description = styled.div`
    margin-top: 5px;
    font-family: NanumSquareBold;
    font-size: 10px;
    color: rgba(0, 195, 137, 1);
`;
