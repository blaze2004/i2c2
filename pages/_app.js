import "../src/styles/globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from "next/head";
import Script from "next/script";
import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/utils/createEmotionCache';
import { theme } from '../src/utils/theme';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const clientSideEmotionCache=createEmotionCache();

function MyApp({ Component, emotionCache=clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Script id="google_analytics" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google_analytics_tag" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>I2C2 Hackathon | Ideate-Innovate-Code-Compete</title>
        <meta name="description" content="Ideate, Innovate, Code, Compete is an ideathon organised under the collaboration of Befikra, Code8 and Codedu communities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Script defer async src="https://apply.devfolio.co/v2/sdk.js"></Script>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes={
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};