import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const Span = styled.span`
  ${({ theme }) => {
    return css`
      ${({ dsp }) => {
        return dsp && `display:${dsp}`;
      }};
      ${({ mg }) => {
        return mg && `margin: ${mg}`;
      }};
      ${({ mgr }) => {
        return mgr && `margin-right: ${mgr}`;
      }};
      ${({ mgt }) => {
        return mgt && `margin-top:${mgt}`;
      }};
      ${({ mgb }) => {
        return mgb && `margin-bottom:${mgb}`;
      }};
      ${({ mgl }) => {
        return mgl && `margin-left:${mgl}`;
      }};
      ${({ padding }) => {
        return padding && `padding: ${padding}`;
      }};
      ${({ cursorPointer }) => {
        return cursorPointer && `cursor: pointer;`;
      }};
      ${({ bold }) => {
        return bold && `font-family: 'PretendardBold'`;
      }};
      ${({ textDecoration }) => {
        return textDecoration && `text-decoration: ${textDecoration}`;
      }};
      ${({ underline }) => {
        return underline && `text-decoration: underline`;
      }};
      ${({ textAlign }) => {
        return textAlign && `text-align: ${textAlign}`;
      }};
      ${({ letterSpacing }) => {
        return letterSpacing && `letter-spacing: ${letterSpacing}`;
      }};
      ${({ color }) => {
        return color === 'red'
          ? `color:${theme.color.primary.fontRed}`
          : color === 'blue'
          ? `color:${theme.color.primary.fontBlue}`
          : color === 'black'
          ? `color:${theme.color.common.black}`
          : color === 'gray'
          ? `color:${theme.color.primary.fontGray}`
          : `color: ${color}`;
      }};
      ${({ size }) => {
        return size === 'sm'
          ? `font-size:${theme.font.size.sm}`
          : size === 'ml'
          ? `font-size:${theme.font.size.ml}`
          : size === 'base'
          ? `font-size:${theme.font.size.base}`
          : size === 'lg'
          ? `font-size:${theme.font.size.lg}`
          : size === 'xl'
          ? `font-size:${theme.font.size.xl}`
          : size === 'xl2'
          ? `font-size:${theme.font.size.xl2}`
          : size === 'titleBase'
          ? `font-size:${theme.font.size.title.base}`
          : size === 'titleLg'
          ? `font-size:${theme.font.size.title.lg}`
          : size === 'titleXl1'
          ? `font-size:${theme.font.size.title.xl1}`
          : size === 'titleXl2'
          ? `font-size:${theme.font.size.title.xl2}`
          : size === 'h1'
          ? `font-size:${theme.font.size.title.h1}`
          : size === 'h2'
          ? `font-size:${theme.font.size.title.h2}`
          : size === 'h3'
          ? `font-size:${theme.font.size.title.h3}`
          : size === 'subTitle1'
          ? `font-size:${theme.font.size.title.subTitle1}`
          : size === 'subTitle2'
          ? `font-size:${theme.font.size.title.subTitle2}`
          : `font-size:${size}`;
      }};
      ${({ fontWeight }) => {
        return fontWeight === '300'
          ? `font-family: 'PretendardLight'`
          : fontWeight === '400'
          ? `font-family: 'Pretendard'`
          : fontWeight === '500'
          ? `font-family: 'PretendardMedium'`
          : fontWeight === '600'
          ? `font-family: 'PretendardSemiBold'`
          : fontWeight === '700'
          ? `font-family: 'PretendardBold'`
          : null;
      }};
      ${({ sideBar }) => {
        return (
          sideBar &&
          `
                    position:relative;
                    &:before {
                        content:"";
                        display:block;
                        width:1px;
                        height:16px;
                        position:absolute;
                        right:0;
                        top:50%;
                        transform:translateY(-50%);
                        background-color: ${theme.color.primary.gray};
                    }
                `
        );
      }};
      ${({ lineHeight }) => {
        return lineHeight && `line-height:${lineHeight}`;
      }};
      ${({ textLine }) => {
        return (
          textLine &&
          `
                overflow: hidden;
                -webkit-line-clamp: ${textLine};
                -webkit-box-orient: vertical;
                display: -webkit-box;
                `
        );
      }};
      ${({ hoverLine }) => {
        return (
          hoverLine &&
          `
                    cursor:pointer;
                    &:hover{
                        text-decoration:underline;
                    }
                    `
        );
      }};
      > em {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          top: 2px;
          right: -6px;
        }
      }
      ${theme.device.responsive} {
        //width & height
        ${({ mobMaxWidth }) => {
          return mobMaxWidth && `max-width: ${mobMaxWidth}px;`;
        }};
        ${({ mobMinWidth }) => {
          return mobMinWidth && `min-width: ${mobMinWidth}px;`;
        }};
        ${({ mobWidth }) => {
          return mobWidth && `width: ${mobWidth};`;
        }};
        ${({ mobMinHeight }) => {
          return mobMinHeight && `min-height: ${mobMinHeight}px;`;
        }};
        ${({ mobMaxHeight }) => {
          return mobMaxHeight && `max-height: ${mobMaxHeight}px;`;
        }};
        ${({ mobHeight }) => {
          return mobHeight && `height: ${mobHeight};`;
        }};

        //display
        ${({ mobDsp }) => {
          return mobDsp && `display:${mobDsp}`;
        }};

        //margin
        ${({ mobMg }) => {
          return mobMg && `margin: ${mobMg}`;
        }};
        ${({ mobMgr }) => {
          return mobMgr && `margin-right: ${mobMgr}`;
        }};
        ${({ mobMgl }) => {
          return mobMgl && `margin-left: ${mobMgl}`;
        }};
        ${({ mobMgt }) => {
          return mobMgt && `margin-top:${mobMgt}`;
        }};
        ${({ mobMgb }) => {
          return mobMgb && `margin-bottom:${mobMgb}`;
        }};

        //padding
        ${({ mobPadding }) => {
          return mobPadding && `padding: ${mobPadding}`;
        }};

        //text 요소
        ${({ mobColor }) => {
          return mobColor && `color:${mobColor}`;
        }};
        ${({ mobTextAlign }) => {
          return mobTextAlign && `text-align: ${mobTextAlign}`;
        }};
        ${({ mobLineHeight }) => {
          return mobLineHeight && `line-height:${mobLineHeight}`;
        }};
        ${({ mobSize }) => {
          return mobSize && `font-size:${mobSize}`;
        }};
        ${({ mobFontWeight }) => {
          return mobFontWeight === '300'
            ? `font-family: 'PretendardLight'`
            : mobFontWeight === '400'
            ? `font-family: 'Pretendard'`
            : mobFontWeight === '500'
            ? `font-family: 'PretendardMedium'`
            : mobFontWeight === '600'
            ? `font-family: 'PretendardSemiBold'`
            : mobFontWeight === '700'
            ? `font-family: 'PretendardBold'`
            : null;
        }};
      }
    `;
  }}
`;
export default Span;
