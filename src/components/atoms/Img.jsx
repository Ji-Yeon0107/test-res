import styled, { css } from 'styled-components';
import Image from 'next/image';

const Img = ({
  pc = null,
  tablet = null,
  mobile = null,
  responsive = null,
  objectFit,
  src,
  alt,
  bgc,
  inlineBlock,
  ml,
  mr,
  reviewImg,
  center,
  radius,
  height100,
  margin,
  rowCenter,
  mobImgCover,
  mobRadius,
}) => {
  return (
    <ImgWrap
      pc={pc}
      tablet={tablet}
      mobile={mobile}
      responsive={responsive}
      bgc={bgc}
      inlineBlock={inlineBlock}
      ml={ml}
      mr={mr}
      reviewImg={reviewImg}
      center={center}
      radius={radius}
      height100={height100}
      margin={margin}
      rowCenter={rowCenter}
      mobImgCover={mobImgCover}
      mobRadius={mobRadius}
    >
      <Image
        width="100%"
        height="100%"
        layout="responsive"
        objectFit={objectFit}
        src={src}
        alt={alt}
      />
    </ImgWrap>
  );
};

const ImgWrap = styled.div`
  position: relative;
  display: block;
  background-color: transparent;
  ${({ theme }) => {
    return css`
      ${({ bgc }) => {
        return bgc && `background-color: ${bgc}`;
      }};
      ${({ radius }) => {
        return (
          radius &&
          css`
            border-radius: ${radius};
            overflow: hidden;
          `
        );
      }};
      ${({ ml }) => {
        return ml && `margin-left: ${ml}`;
      }};
      ${({ mr }) => {
        return mr && `margin-right: ${mr}`;
      }};
      ${({ margin }) => {
        return margin && `margin: ${margin}`;
      }};
      ${({ pc }) => {
        return (
          pc &&
          `width :${pc.width};height:${pc.height}; min-width:${pc.minWidth};`
        );
      }};
      ${theme.device.tablet} {
        ${({ tablet }) => {
          return tablet && `width :${tablet.width};height:${tablet.height};`;
        }};
      }
      ${theme.device.mobile} {
        ${({ mobile }) => {
          return mobile && `width :${mobile.width};height:${mobile.height};`;
        }};
      }
      ${theme.device.responsive} {
        ${({ responsive }) => {
          return (
            responsive &&
            `width :${responsive.width};height:${responsive.height}; 
            left: ${responsive.left}; transform: ${responsive.transform};
            min-width: ${responsive.minWidth}; margin: ${responsive.margin};
            `
          );
        }};
        ${({ mobRadius }) => {
          return (
            mobRadius &&
            css`
              border-radius: ${mobRadius};
            `
          );
        }};
      }
      ${({ inlineBlock }) => {
        if (inlineBlock) {
          return css`
            display: inline-Block;
            vertical-align: middle;
          `;
        }
      }}
      ${({ reviewImg }) => {
        if (reviewImg) {
          return css`
            margin-right: 2rem;
            margin-bottom: 2rem;
            &:nth-of-type(5n) {
              margin-right: 0;
            }
          `;
        }
      }}
      ${({ rowCenter }) => {
        if (rowCenter) {
          return css`
            margin: 0 auto;
          `;
        }
      }}
      ${({ center }) => {
        if (center) {
          return css`
            & > span {
              top: 50%;
              transform: translateY(-50%);
            }
          `;
        }
      }}
      ${({ height100 }) => {
        if (height100) {
          return css`
            & > span {
              height: 100% !important;
            }
          `;
        }
      }}
      ${({ mobImgCover }) => {
        if (mobImgCover) {
          return css`
            ${theme.device.responsive} {
              & > span > img {
                object-fit: cover;
              }
            }
          `;
        }
      }}
      ${({ mobRadius }) => {
        return (
          mobRadius &&
          css`
            border-radius: ${mobRadius};
            overflow: hidden;
          `
        );
      }};
    `;
  }}
`;
export default Img;
