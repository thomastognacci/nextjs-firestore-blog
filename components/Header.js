import React from "react";
import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  console.log("start");

  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log("done");

  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <header>
      <Nav />
    </header>
  );
};

export default Header;
