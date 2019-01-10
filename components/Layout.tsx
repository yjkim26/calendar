import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Layout: React.SFC<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    {process.env.TEST}
    {children}
    <footer>
      <TestComponent>I'm here to stay</TestComponent>
    </footer>
  </div>
);

const TestComponent = styled.div`
  color: ${p => p.theme.color.black};
  background: red;
`;

export default Layout;
