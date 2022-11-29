const theme = {
  font: {
    family: {
      base: 'Pretendard, sans-serif',
      sub: 'Libre Baskerville, serif',
    },
    size: {
      sm: '1.3rem',
      ml: '1.6rem',
      base: '1.8rem',
      lg: '2rem',
      xl: '2.2rem',
      xl2: '2.4rem',
      title: {
        base: '4rem',
        lg: '5.2rem',
        xl1: '8rem',
        xl2: '12rem',
        h1: '12rem',
        h2: '9rem',
        h3: '5.2rem',
        subTitle1: '4rem',
        subTitle2: '2.8rem',
      },
    },
  },
  color: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      fontWhite: '#fff',
      fontBlack: '#333',
      fontGray: '#666',
      fontRed: '#e1251b',
      fontBlue: '#5ba6d2',
      brown: '#a6834c',
      gray: '#dfdfdf',
      bgGray: '#f5f5f5',
      bgGrayligth: '#f7f7f8',
    },
    gray: {
      gray90: '#5d5d5d',
      gray88: '#666',
      gray85: '#707070',
      gray80: '#797979',
      gray75: '#828282',
      gray70: '#959595',
      gray65: '#999',
      gray60: '#a1a1a1',
      gray58: '#aaa',
      gray55: '#a5a5a5',
      gray50: '#bdbdbd',
      gray45: '#ccc',
      blueGrayDark: '#adb3bc',
      blueGray: '#d1d5db',
      gray40: '#ddd',
      gray35: '#e4e4e4',
      gray30: '#e6e6e6',
      gray25: '#c6c6c6',
      gray20: '#d5d5d5',
    },
    etc: {
      pink: '#fcc',
      navy: '#39457a',
      oatmeal: '#f1efe4',
      yellow: '#fc0',
      blueLight: '#e6f6ff',
      blue: '#39457a',
      blueDark: '#356da6',
      blueGreen: '#007898',
      green: '#2fb596',
      ivory: '#fcfae8',
    },
  },
  radius: {
    basic: '15px',
  },
  margins: {},
  paddings: {},
  common: {
    center: `
          width:100%;
          max-width:1300px;
          margin:0 auto;
      `,
    flexCenter: `
          display:flex;
          justify-content:space-between;
          align-items:center;
      `,
    blind: `
          position:absolute;
          left:-9999px;
      `,
    imgWrap: `
          position:relative;
          border: 1px solid #eee; /* 나중에 지우기 */
          overflow:hidden;
      `,
    img: `
      position:absolute;
      top:50%;
      left:50%;
      width:100%;
      transform:translate(-50%, -50%);
    `,
    ellipsis: `
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;`,
  },
  device: {
    mobile: `@media only screen and (max-width: 425px)`,
    tablet: `@media only screen and (max-width: 1299px) and (min-width: 431px)`,
    layoutTablet: `@media only screen and (max-width: 1299px)`,
    desktop: `@media only screen and (max-width: 1440px)`,
    // desktopBP: `@media only screen and (min-width:1024px) and (max-width: 1599px)`,
    responsive: `@media only screen and (max-width: 430px)`,
  },
};

export default theme;
