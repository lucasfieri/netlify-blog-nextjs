import React from "react";
import NextApp, { AppContext } from "next/app";
import Layout from "../components/Layout";

interface AppProps {
  pageProps: any;
}

export default class App extends NextApp<AppProps> {
  render() {
    const { pageProps, Component } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve());

    const [pageProps] = await Promise.all([
      componentGetInitialProps(ctx),
    ]);

    return {
      pageProps
    };
  }
}
