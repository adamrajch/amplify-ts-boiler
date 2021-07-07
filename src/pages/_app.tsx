import Amplify from "aws-amplify";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Your Amplify App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthContext>
        <>
          <Component {...pageProps} />
        </>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
