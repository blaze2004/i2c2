import "../src/styles/globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from "next/head";
import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/utils/createEmotionCache';
import { theme } from '../src/utils/theme';
import { ThemeProvider, CssBaseline } from "@mui/material";

const clientSideEmotionCache=createEmotionCache();

function MyApp({ Component, emotionCache=clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>I2C2 Hackathon | Ideate-Innovate-Code-Compete</title>
        <meta name="description" content="Ideate, Innovate, Code, Compete is an ideathon organised under the collaboration of Befikra, Code8 and Codedu communities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
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