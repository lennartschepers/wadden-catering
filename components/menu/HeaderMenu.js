import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RichText } from "prismic-reactjs";

const HeaderMenu = ({ pages }) => {
  const [toggleClass, setToggleClass] = useState(false);

  if (pages) {
    return (
      <div>
        <button
          onClick={() => setToggleClass(true)}
          className="h-full px-4 py-4 text-white border border-white rounded-md bg-brown md:px-0 lg:text-black md:hidden"
        >
          Menu
        </button>
        <menu
          className={`${
            toggleClass ? "translate-x-0" : "translate-x-full"
          } transition-all duration-200 transform fixed right-0 top-0 text-brown flex flex-col p-8 md:p-0 md:text-white h-screen w-2/3 bottom-0 shadow-lg md:shadow-none bg-white md:bg-transparent md:w-auto md:translate-x-0 md:h-auto md:relative m-0 md:grid md:gap-8 grid-flow-col md:items-center capitalize z-20`}
        >
          <button
            onClick={() => setToggleClass(false)}
            className="self-end px-3 py-2 text-xs border border-white rounded-md text-brown md:hidden bg-darkBrown"
          >
            X
          </button>
          <div className="block w-full mt-4 mb-2 border-t border-gray-800 md:hidden"></div>
          <Link href="/" as={`/`} key={`/`}>
            <a className="w-full py-3 mb-4 text-black border-b border-gray-300 md:w-auto md:px-4 md:mb-0 md:border-0">
              Home
            </a>
          </Link>
          {pages.map((page) => (
            <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
              <a className="w-full py-3 mb-4 text-black border-b border-gray-300 md:w-auto md:px-4 md:mb-0 md:border-0">
                {RichText.asText(page.data.pagina_titel)}
              </a>
            </Link>
          ))}
          <a
            className="px-4 py-3 mb-4 text-white rounded-md bg-brown md:mb-0 "
            href="#ft-open"
          >
            Reserveren
          </a>
          <p>
            <a className="text-black" href="tel:+31851309156">
              +31 (0)85 13 09 156
            </a>
          </p>
        </menu>
      </div>
    );
  }
};

export default HeaderMenu;
