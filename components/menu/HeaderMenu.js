import React from "react";
import Link from "next/link";

const HeaderMenu = ({ pages }) => {
  if (pages) {
    return (
      <menu className="m-0 p-0 grid gap-8 grid-flow-col">
        {pages.map((page) => (
          <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
            <a className="py-3 px-4 capitalize">{page.uid}</a>
          </Link>
        ))}
          <a className="bg-brown text-white py-3 px-4 rounded-md" href="#">Reserveren</a>
      </menu>
    );
  }
};

export default HeaderMenu;
