import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  text-align: center;
`;
const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span> | </span>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
      <span> | </span>
      <Link href="/post">
        <a>Create a post</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
