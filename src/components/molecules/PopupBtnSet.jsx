import styled from 'styled-components';

import { RectButton } from 'components/atoms/RectButton';

export default function PopupBtnSet({ customBtnText }) {
    return (
        <PopupBox>
            <RectButton
                variant="outlined"
                text={customBtnText ? customBtnText?.first : '취소'}
            />
            <RectButton
                variant="contained"
                text={customBtnText ? customBtnText?.second : '확인'}
            />
        </PopupBox>
    );
}

const PopupBox = styled.div`
    display: flex;
    width: 100%;
`;
