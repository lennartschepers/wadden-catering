import React from "react";
import Link from "next/link";
import { useState } from "react";

const HeaderMenu = ({ pages }) => {
  const [toggleClass, setToggleClass] = useState(false);

  if (pages) {
    return (
      <div>
        <button
          onClick={() => setToggleClass(true)}
          className="md:hidden border border-white rounded-md px-4 h-full"
        >
          Menu
        </button>
        <menu
          className={`${toggleClass ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 transform fixed right-0 top-0 text-brown flex flex-col p-8 md:p-0 md:text-white h-screen w-2/3 bottom-0 shadow-lg md:shadow-none bg-white md:bg-transparent md:w-auto md:translate-x-0 md:h-auto md:relative m-0 md:grid md:gap-8 grid-flow-col md:items-center capitalize z-10`}
        >
          <button
            onClick={() => setToggleClass(false)}
            className="md:hidden border border-white rounded-md bg-darkBrown py-2 px-3 text-white self-end text-xs"
          >
            X
          </button>
          <div className="md:hidden w-full mt-4 mb-2 border-t border-gray-800 block"></div>
          {pages.map((page) => (
            <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
              <a className="py-3 w-full md:w-auto md:px-4 mb-4 md:mb-0 border-b border-gray-300 md:border-0">
                {page.uid}
              </a>
            </Link>
          ))}
          <a
            className="bg-brown text-white py-3 px-4 rounded-md mb-4 md:mb-0 "
            href="#ft-open"
          >
            Reserveren
          </a>
          <p><a href="tel:+31851309156">+31 (0)85 13 09 156</a></p>
        </menu>
      </div>
    );
  }
};

export default HeaderMenu;
