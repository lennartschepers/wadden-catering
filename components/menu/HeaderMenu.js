import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react'

import { useRouter } from "next/router";

const HeaderMenu = ({ menu }) => {
  const router = useRouter();

  useEffect(() => {
    if (toggleClass) {
      setToggleClass(false);
    }
  }, [router.asPath]);

  const [toggleClass, setToggleClass] = useState(false);

  const menuItems = menu[0]?.data?.nav;

  if (menuItems) {
    return (
      <>
        <button
          onClick={() => setToggleClass(true)}
          className="h-full px-4 py-4 text-white border border-white rounded-md bg-brown lg:px-0 lg:text-black lg:hidden"
        >
          Menu
        </button>
        <menu
          className={`${toggleClass ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 transform fixed right-0 top-0 text-brown flex flex-col p-8 m-0 h-screen w-2/3 bottom-0 shadow-2xl 
          lg:h-auto lg:p-0 lg:text-white lg:shadow-none bg-white lg:bg-transparent lg:w-auto lg:translate-x-0 lg:relative lg:grid lg:gap-8 grid-flow-col lg:items-center capitalize z-20`}
        >
          <button
            onClick={() => setToggleClass(false)}
            className="self-end px-3 py-2 text-xs border border-white rounded-md text-brown lg:hidden bg-darkBrown"
          >
            X
          </button>

          <div className="block w-full mt-4 mb-6 border-t border-gray-800 md:hidden"></div>

          <nav className="h-full">
            <ul className="flex h-full flex-col space-y-6 lg:space-x-12 lg:items-center lg:space-y-0 lg:flex-row">
              {menuItems.map((item) => (
                <li className="lg:group relative lg:h-full " key={`${item.primary.uid}`}>
                  {item?.primary?.link?.link_type === 'Document' 
                  ?
                    <PrismicLink field={item.primary.link} className="text-gray-600 lg:h-full inline-flex items-center hover:underline">
                      <PrismicText field={item.primary.label} />
                    </PrismicLink> 
                  : 
                    <span className="text-gray-600 lg:h-full inline-flex items-center hover:underline">
                      <PrismicText field={item.primary.label} />
                    </span>
                  }
                  {item.items[0]?.sub_nav_link_label?.length > 0 && (
                    <ul className="mt-4 lg:absolute lg:hidden lg:object-right-bottom lg:group-hover:block lg:bg-white lg:py-3 px-5 lg:rounded-b-lg lg:border-t lg:border-brown lg:shadow-lg min-w-[200px]">
                      {item.items.map((item) => (
                        <li className="flex gap-2 lg:gap-0 lg:block" key={`${item.sub_nav_link_label}`}>
                         <span>- </span> <PrismicLink field={item.sub_nav_link} className="text-gray-600 hover:underline whitespace-nowrap">
                            <PrismicRichText field={item.sub_nav_link_label} />
                          </PrismicLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
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
      </>
    );
  }
};

export default HeaderMenu;
