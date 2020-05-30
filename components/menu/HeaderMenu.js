import React from "react";
import Link from "next/link";

const HeaderMenu = ({ pages }) => {
  if (pages) {
    return (
      <menu className="m-0 p-0 grid gap-8 grid-flow-col items-center  capitalize">
        {pages.map((page) => (
          <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
            <a className="py-3 px-4 ">{page.uid}</a>
          </Link>
        ))}
        <a className="bg-brown text-white py-3 px-4 rounded-md" href="#ft-open">
          Reserveren
        </a>
        <p>Bel: +31 (0)6 12 06 93 80</p>
      </menu>
    );
  }
};

export default HeaderMenu;
