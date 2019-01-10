import React from "react";

import App, { Container, NextAppContext } from "next/app";

import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/styledComponents";

import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import { initStore, IRootState } from "@/store";

interface IReduxStoreProps {
  store: Store<IRootState>;
}
export default withRedux(initStore)(
  class MyApp extends App<IReduxStoreProps> {
    static async getInitialProps({ Component, ctx }: NextAppContext) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Container>
          <GlobalStyles />
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
