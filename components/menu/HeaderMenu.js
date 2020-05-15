import React from "react";
import Link from "next/link";

const HeaderMenu = ({ pages }) => {
  if (pages) {
    return (
      <menu>
        {pages.map((page) => (
          <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
            <a>{page.uid}</a>
          </Link>
        ))}
      </menu>
    );
  }
};

export default HeaderMenu;
