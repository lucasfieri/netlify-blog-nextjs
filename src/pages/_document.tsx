import React, { ReactElement } from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { AppProps } from "next/app";
import { ServerStyleSheet } from 'styled-components'

export type DocumentProps = {
  styleTags: any
}
export default class CustomDocument extends Document<DocumentProps> {
  static getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App: any) => (props: AppProps): ReactElement => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
