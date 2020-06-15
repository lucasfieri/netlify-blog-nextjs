import React from "react";
import NextApp from "next/app";
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
}
