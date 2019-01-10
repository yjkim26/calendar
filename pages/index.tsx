import Link from "next/link";
import Layout from "@/components/Layout";
import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { IRootState, RootActions } from "@/store";
import { login, logout } from "@/store/auth";

interface IIndexProps {
  isLoggedIn: boolean;
  login(): void;
  logout(): void;
}
class Index extends React.Component<IIndexProps> {
  render() {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        {this.props.isLoggedIn ? (
          <button onClick={this.props.logout}>Logout</button>
        ) : (
          <button onClick={this.props.login}>Login</button>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, RootActions>
) => ({
  login: () => {
    dispatch(login());
  },
  logout: () => {
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
