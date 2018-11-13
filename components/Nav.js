import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span> | </span>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
    </nav>
  );
};

export default Nav;
