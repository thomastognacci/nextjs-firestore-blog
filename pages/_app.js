import React from "react";
import App, {Container} from "next/app";
import Page from "../components/Page";
import {auth} from "../lib/firebase";

export default class MyApp extends App {
  state = {
    isAdmin: false,
    uid: null,
  };

  handleAdminSignIn = (uid) => {
    if (uid) {
      this.setState({isAdmin: true, uid});
    } else {
      this.setState({isAdmin: false, uid: null});
    }
  };

  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.handleAdminSignIn(user);
      }
    });
  }

  render() {
    const {Component, pageProps} = this.props;
    const {uid, isAdmin} = this.state;
    return (
      <Container>
        <Page isAdmin={isAdmin}>
          <Component isAdmin={isAdmin} {...pageProps} handleAdminSignIn={this.handleAdminSignIn} />
        </Page>
      </Container>
    );
  }
}
