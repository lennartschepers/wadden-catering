import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

const HeaderMenu = ({ pages }) => {
  const router = useRouter();

  useEffect(() => {
    if (toggleClass) {
      setToggleClass(false);
    }
  }, [router.asPath]);

const [toggleClass, setToggleClass] = useState(false);

  if (pages) {
    return (
      <div>
        <button
          onClick={() => setToggleClass(true)}
          className="h-full px-4 py-4 text-white border border-white rounded-md bg-brown lg:px-0 lg:text-black lg:hidden"
        >
          Menu
        </button>
        <menu
          className={`${
            toggleClass ? "translate-x-0" : "translate-x-full"
          } transition-all duration-200 transform fixed right-0 top-0 text-brown flex flex-col p-8 lg:p-0 lg:text-white h-screen w-2/3 bottom-0 shadow-2xl lg:shadow-none bg-white lg:bg-transparent lg:w-auto lg:translate-x-0 lg:h-auto lg:relative m-0 lg:grid lg:gap-8 grid-flow-col lg:items-center capitalize z-20`}
        >
          <button
            onClick={() => setToggleClass(false)}
            className="self-end px-3 py-2 text-xs border border-white rounded-md text-brown lg:hidden bg-darkBrown"
          >
            X
          </button>
          <div className="block w-full mt-4 mb-6 border-t border-gray-800 md:hidden"></div>
          <div className="flex flex-col space-y-6 lg:space-x-12 lg:items-center lg:space-y-0 lg:flex-row">
            <Link href="/" as={`/`} key={`/`}>
              <a className="text-gray-600">Home</a>
            </Link>
            {pages.map((page) => (
              <Link href="[uid]" as={`/${page.uid}`} key={`${page.uid}`}>
                <a className="text-gray-600">
                  {RichText.asText(page.data.pagina_titel)}
                </a>
              </Link>
            ))}
          </div>
          <a
            className="px-4 py-3 my-4 text-white rounded-md md:m-0 bg-brown lg:mb-0 "
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
