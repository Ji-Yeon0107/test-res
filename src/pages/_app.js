import { ThemeProvider } from 'styled-components';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useMediaQuery } from '../../node_modules/@mui/material/index';

import Layout from 'components/layout';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import 'styles/reset.css';
import 'styles/swiperCustom.css';

function MyApp({ Component, pageProps }) {
  const isMob = useMediaQuery('(max-width:1024px)');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProSidebarProvider>
        <Layout>
          <Component isMob={isMob} {...pageProps} />
        </Layout>
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
