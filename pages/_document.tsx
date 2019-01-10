import * as React from "react";
import Document, {
  NextDocumentContext,
  RenderPageResponse,
  PageProps,
  Enhancer
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    const enhancer: Enhancer<PageProps, {}> = App => props =>
      sheet.collectStyles(<App {...props} />);
    ctx.renderPage = (): RenderPageResponse => originalRenderPage(enhancer);

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...sheet.getStyleElement()]
    };
  }
}
