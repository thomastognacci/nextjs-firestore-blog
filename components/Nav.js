import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0.5em 2em;
  background-color: ${(props) => (props.isAdmin ? "#009688" : "#ffeb3b")};

  li {
    list-style: none;
    font-weight: bold;

    &:after {
      content: "|";
      position: relative;
      margin: 1rem;
    }
    &:nth-last-child(1):after,
    &:nth-last-child(2):after {
      display: none;
    }
    &:last-child {
      padding-left: 2em;
      margin-left: auto;
      font-weight: normal;
    }
  }
  a {
    color: ${(props) => (props.isAdmin ? "#FFFFFF" : "#3b60d0")};
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: #e21e60;
    }
  }
`;

const Nav = (props) => {
  return (
    <StyledNav isAdmin={props.isAdmin}>
      {console.log(props)}
      <li>
        <Link href="/">
          <a>View Posts</a>
        </Link>
      </li>
      <li>
        <Link href="/post">
          <a>Write a Post</a>
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </li>
    </StyledNav>
  );
};

export default Nav;
