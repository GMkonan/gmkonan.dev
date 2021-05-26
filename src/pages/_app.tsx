import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>GMKonan</title>
        <meta name="viewport" content="width=device-width, user-scalable=yes"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        <CssBaseline />
        <Component {...pageProps} />
    </React.Fragment>
  );
}
