import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const Div = styled.div`
  ${({ theme }) => {
    return css`
      /* background-color: ${theme.color.common.white}; */
      ${({ autoYScroll }) => {
        return (
          autoYScroll &&
          `overflow-y:auto;
                    ::-webkit-scrollbar {
                        width: 3px;
                        height: 1px;
                    }
                    ::-webkit-scrollbar-track {
                        background-color: transparent;
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: ${theme.color.gray.gray50};
                    }
                `
        );
      }};
      ${({ bgColor }) => {
        return bgColor && `background-color:${bgColor}`;
      }};
      ${({ bgImage }) => {
        return (
          bgImage &&
          `
                    background-repeat:no-repeat;
                    background-size:${bgImage.size};
                    background-position:center;
                `
        );
      }};
      ${({ maxWidth }) => {
        return maxWidth && `max-width: ${maxWidth}px;`;
      }};
      ${({ minWidth }) => {
        return minWidth && `min-width: ${minWidth}px;`;
      }};
      ${({ width }) => {
        return width && `width: ${width};`;
      }};
      ${({ minHeight }) => {
        return minHeight && `min-height: ${minHeight}px;`;
      }};
      ${({ maxHeight }) => {
        return maxHeight && `max-height: ${maxHeight}px;`;
      }};
      ${({ height }) => {
        return height && `height: ${height};`;
      }};
      ${({ border }) => {
        return border && `border: 1px solid ${theme.color.primary.gray};`;
      }};
      ${({ borderWidth }) => {
        return borderWidth && `border-width: ${borderWidth};`;
      }};
      ${({ borderLeft }) => {
        return (
          borderLeft && `border-left: 1px solid ${theme.color.primary.gray};`
        );
      }};
      ${({ borderRight }) => {
        return (
          borderRight && `border-right: 1px solid ${theme.color.primary.gray};`
        );
      }};
      ${({ borderTop }) => {
        return (
          borderTop && `border-top: 1px solid ${theme.color.primary.gray};`
        );
      }};
      ${({ borderBottom }) => {
        return (
          borderBottom &&
          `border-bottom: 1px solid ${theme.color.primary.gray};`
        );
      }};
      ${({ borderRadius }) => {
        return borderRadius && `border-radius: ${borderRadius};`;
      }};
      ${({ direction }) => {
        return direction && `flex-direction: ${direction}`;
      }};
      ${({ bgNone }) => {
        return bgNone && `background-color:transparent`;
      }};
      ${({ paddingNone }) => {
        return paddingNone && `padding: 0`;
      }};
      ${({ full }) => {
        return full && `width:100%`;
      }};
      ${({ gap }) => {
        return gap && `gap:${gap}`;
      }};
      ${({ dsp }) => {
        return dsp && `display:${dsp}`;
      }};
      ${({ align }) => {
        return align && `align-items:${align}`;
      }};
      ${({ justify }) => {
        return justify && `justify-content:${justify}`;
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
      ${({ mgr }) => {
        return mgr && `margin-right:${mgr}`;
      }};
      ${({ mgAuto }) => {
        return mgAuto && `margin:auto`;
      }};
      ${({ pdl }) => {
        return pdl && `padding-left:${pdl}`;
      }};
      ${({ pdr }) => {
        return pdr && `padding-right:${pdr}`;
      }};
      ${({ pdt }) => {
        return pdt && `padding-top:${pdt}`;
      }};
      ${({ pdb }) => {
        return pdb && `padding-bottom:${pdb}`;
      }};
      ${({ padding }) => {
        return padding && `padding:${padding}`;
      }};
      ${({ line }) => {
        return (
          line === 'true' &&
          `
                        position:relative;
                        &:before 
                        {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width: calc(100% - 2.876rem);
                            height: 1px;
                            background-color: ${theme.color.primary.gray};
                        }
                    `
        );
      }};
      ${({ fullLine }) => {
        return (
          fullLine &&
          `
                        position:relative;
                        &:before 
                        {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width:100%;
                            height: 1px;
                            background-color: ${theme.color.primary.gray};
                        }
                    `
        );
      }};
      ${({ whiteSpace }) => {
        return whiteSpace && `white-space:${whiteSpace}`;
      }};
      ${({ lineHeight }) => {
        return lineHeight && `line-height:${lineHeight}`;
      }};
      ${({ flexWrap }) => {
        return flexWrap && `flex-wrap:${flexWrap}`;
      }};
      ${({ radius }) => {
        return radius && `border-radius:${radius}`;
      }};
      ${({ position, top, bottom, left, right }) => {
        return (
          position &&
          `position:${position};top:${top};left:${left};bottom:${bottom};right:${right}`
        );
      }};
      ${({ scroll }) => {
        return (
          scroll &&
          `               
                    overflow-y: auto; 
                    ::-webkit-scrollbar {
                        width: 1px;
                        height: 1px;
                    }
                    ::-webkit-scrollbar-track {
                        background-color: transparent;
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: ${theme.color.common.black};
                    }
                `
        );
      }};
      ${({ color }) => {
        return color === 'red'
          ? `color:${theme.color.primary.fontRed};`
          : color === 'blue'
          ? `color:${theme.color.primary.fontBlue};`
          : color === 'black'
          ? `color:${theme.color.common.black};`
          : color === 'gray'
          ? `color:${theme.color.primary.gray};`
          : `color: ${color}`;
      }};
      ${({ borderColor }) => {
        return borderColor === 'red'
          ? `border-color:${theme.color.primary.fontRed};`
          : borderColor === 'blue'
          ? `border-color:${theme.color.primary.fontBlue};`
          : borderColor === 'black'
          ? `border-color:${theme.color.common.black};`
          : borderColor === 'gray'
          ? `border-color:${theme.color.primary.gray};`
          : `border-color:${borderColor};`;
      }};
      ${({ bgColor }) => {
        return bgColor === 'red'
          ? `background-color:${theme.color.primary.fontRed}};`
          : bgColor === 'blue'
          ? `background-color:${theme.color.primary.fontBlue};`
          : bgColor === 'black'
          ? `background-color:${theme.color.common.black};`
          : bgColor === 'gray'
          ? `background-color:${theme.color.primary.bgGray};`
          : bgColor === 'bg'
          ? `background-color:${theme.color.common.white};`
          : bgColor === 'transparent'
          ? `background-color: transparent;`
          : `background-color: ${bgColor};`;
      }};
      ${({ wordBreak }) => {
        return (
          wordBreak === 'true' &&
          `white-space: break-spaces;word-break: break-all;`
        );
      }};
      ${({ contentWrap }) => {
        return contentWrap === 'true' && `background-color:#F1F3F9`;
      }};
      ${({ responsiveBox }) => {
        return (
          responsiveBox &&
          `
                    position:relative;
                    &:before{
                        content:"";
                        display:block;
                        padding-bottom:${responsiveBox.height}%;
                        background-size:${responsiveBox.size};
                        background-repeat:no-repeat;
                        background-position:center;
                    }
                `
        );
      }};
      ${({ textAlign }) => {
        return textAlign && `text-align: ${textAlign}`;
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
      ${({ textDeco }) => {
        return textDeco && `text-decoration: ${textDeco}`;
      }};
      ${({ grid }) => {
        return (
          grid &&
          `
                        display: grid;
                        grid-template-columns: repeat(${grid.col}, 1fr);
                        grid-template-rows: repeat(${grid.row}, 1fr);
                    `
        );
      }};
      ${({ grid, noRepeatGrid }) => {
        return (
          grid &&
          noRepeatGrid &&
          `
                        display:grid;
                        grid-template-columns: ${grid.col};
                        grid-template-rows: ${grid.row}
                        
                    `
        );
      }};
      ${({ cursorPointer }) => {
        return cursorPointer && `cursor: pointer;`;
      }};

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

        //display flex
        ${({ mobGap }) => {
          return mobGap && `gap:${mobGap}`;
        }};
        ${({ mobDsp }) => {
          return mobDsp && `display:${mobDsp}`;
        }};
        ${({ mobAlign }) => {
          return mobAlign && `align-items:${mobAlign}`;
        }};
        ${({ mobJustify }) => {
          return mobJustify && `justify-content:${mobJustify}`;
        }};
        ${({ mobFlexWrap }) => {
          return mobFlexWrap && `flex-wrap:${mobFlexWrap}`;
        }};
        ${({ mobDirection }) => {
          return mobDirection && `flex-direction: ${mobDirection}`;
        }};

        //margin
        ${({ mobMgt }) => {
          return mobMgt && `margin-top:${mobMgt}`;
        }};
        ${({ mobMgb }) => {
          return mobMgb && `margin-bottom:${mobMgb}`;
        }};
        ${({ mobMgl }) => {
          return mobMgl && `margin-left:${mobMgl}`;
        }};
        ${({ mobMgr }) => {
          return mobMgr && `margin-right:${mobMgr}`;
        }};
        ${({ mobMg }) => {
          return mobMg && `margin:${mobMg}`;
        }};
        ${({ mobMgAuto }) => {
          return mobMgAuto && `margin:auto`;
        }};

        //padding
        ${({ mobPdl }) => {
          return mobPdl && `padding-left:${mobPdl}`;
        }};
        ${({ mobPdr }) => {
          return mobPdr && `padding-right:${mobPdr}`;
        }};
        ${({ mobPdt }) => {
          return mobPdt && `padding-top:${mobPdt}`;
        }};
        ${({ mobPdb }) => {
          return mobPdb && `padding-bottom:${mobPdb}`;
        }};
        ${({ mobPadding }) => {
          return mobPadding && `padding:${mobPadding}`;
        }};

        //border
        ${({ mobBorder }) => {
          return mobBorder && `border: 1px solid ${theme.color.primary.gray};`;
        }};
        ${({ mobBorderWidth }) => {
          return mobBorderWidth && `border-width: ${mobBorderWidth};`;
        }};
        ${({ mobBorderLeft }) => {
          return (
            mobBorderLeft &&
            `border-left: 1px solid ${theme.color.primary.gray};`
          );
        }};
        ${({ mobBorderRight }) => {
          return (
            mobBorderRight &&
            `border-right: 1px solid ${theme.color.primary.gray};`
          );
        }};
        ${({ mobBorderTop }) => {
          return (
            mobBorderTop && `border-top: 1px solid ${theme.color.primary.gray};`
          );
        }};
        ${({ mobBorderBottom }) => {
          return (
            mobBorderBottom &&
            `border-bottom: 1px solid ${theme.color.primary.gray};`
          );
        }};
        ${({ mobBorderRadius }) => {
          return mobBorderRadius && `border-radius: ${mobBorderRadius};`;
        }};
        ${({ mobBorderNone }) => {
          return (
            mobBorderNone &&
            `border: none;`
          );
        }};

        //position
        ${({ mobPosition }) => {
          return mobPosition && `position:${mobPosition};`;
        }};
        ${({ mobTop }) => {
          return mobTop && `top:${mobTop};`;
        }};
        ${({ mobBottom }) => {
          return mobBottom && `bottom:${mobBottom};`;
        }};
        ${({ mobLeft }) => {
          return mobLeft && `left:${mobLeft};`;
        }};
        ${({ mobRight }) => {
          return mobRight && `right:${mobRight};`;
        }};

        //font관련
        ${({ mobLineHeight }) => {
          return mobLineHeight && `line-height:${mobLineHeight}`;
        }};
      }
    `;
  }}
`;

export default Div;
