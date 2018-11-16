import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffeb3b;
  li {
    list-style: none;
    &:after {
      content: "|";
      position: relative;
      margin: 1rem;
    }
    &:last-child:after {
      display: none;
    }
  }
  a {
    color: #3b60d0;
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: #e21e60;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </li>
      <li>
        <Link href="/post">
          <a>Create a post</a>
        </Link>
      </li>
    </StyledNav>
  );
};

export default Nav;
