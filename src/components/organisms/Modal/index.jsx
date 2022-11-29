import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import PopupBtnSet from 'components/molecules/PopupBtnSet';
export default function Modal({
  children,
  noTitle,
  closeBtn,
  title,
  description,
  open,
  setOpen,
  styleProps,
  overY,
  textAlign,
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
  const closeModalBtn = e => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <Bg onClick={closeModal}>
          <StyledModal onClick={closeModal}>
            <Inner bgColor={styleProps?.bgColor} {...rest}>
              {closeBtn && (
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: '1400',
                    color: 'common.white',
                  }}
                  onClick={closeModalBtn}
                >
                  <CloseIcon
                    sx={{
                      fontWeight: 300,
                      fontSize: '24px',
                      color: 'common.black',
                    }}
                  />
                </IconButton>
              )}
              {noTitle || (
                <Container pt={50} pb={21}>
                  <FlexBox>
                    <div>
                      <Title>{title}</Title>
                      <Description>{description}</Description>
                    </div>
                  </FlexBox>
                </Container>
              )}
              <MainContent overY={overY} textAlign={textAlign}>
                {children}
              </MainContent>
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
  position: fixed;
  z-index: 20000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 25, 0.63);
`;
const StyledModal = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  bottom: 0;
  width: 100%;
`;
const MainContent = styled.div`
  width: 100%;
  overflow-y: ${({ overY }) => overY || 'auto'};
  font-family: ${props => props.fontFamily || 'PretendardMedium'};
  text-align: ${props => props.textAlign || 'center'};
`;
const WidthLimit = styled.div`
  display: ${props => props.display || 'block'};
  max-width: auto;
  height: ${props => props.height || '648px'};
  width: ${props => props.width || '1200px'};
`;
const Inner = styled(WidthLimit)`
  position: relative;
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
