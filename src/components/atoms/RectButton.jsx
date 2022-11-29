import styled from 'styled-components';

export const RectButton = ({ text, ...rest }) => {
    return <StyledButton {...rest}>{text}</StyledButton>;
};
export const StyledButton = styled.button`
    width: 200px;
    height: 48px;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 0;
    line-height: 1.8rem;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-right: 10px;
    transition: all 350ms;

    ${props => `
        ${
            props.variant === 'contained'
                ? `
            color:${props.theme.color.common.white};
            background-color:${props.theme.color.common.black};
            :hover {
                color:${props.theme.color.common.black};
                background-color:${props.theme.color.common.white};
                border: 1px solid ${props.theme.color.common.black} ;
            }
            `
                : `
            color:${props.theme.color.common.black};
            background-color:${props.theme.color.common.white};
            border: 1px solid ${props.theme.color.common.black} ;
            :hover {
                color:${props.theme.color.common.white};
                background-color:${props.theme.color.common.black};
            border: 1px solid ${props.theme.color.common.black} ;
            }
            `
        }
}
`}
`;
