import React from "react";
import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = (props) => {
  const {isAdmin} = props;
  return (
    <header>
      <Nav isAdmin={isAdmin} />
    </header>
  );
};

export default Header;
