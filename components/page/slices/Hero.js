import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

/**
 * Text slice component
 */
const Hero = ({ slice }) => (
  <div className="relative flex items-center justify-center bg-black">
    <Image
      layout="fill"
      src={slice.primary.homepage_header.hero.url}
      alt={slice.primary.homepage_header.alt}
      className="top-0 left-0 object-cover w-full h-full opacity-50"
    />

    <div className="z-10 flex flex-col items-center justify-center w-11/12 h-screen leading-loose text-center text-white lg:h-auto lg:py-64 md:w-1/2">
      <div>
        <img
          src="../images/logoRondWit.png"
          className="h-48 mx-auto lg:hidden"
        />
        <h2 className="mb-4 font-serif text-4xl text-white">
          {RichText.asText(slice.primary.header_titel)}
        </h2>
        <span className="text-md lg:text-lg">
          {RichText.render(slice.primary.header_tekst)}
        </span>

        <div className="flex justify-center py-4 space-x-3">
          {slice.items.map((button, key) => (
            <a
              className="w-32 px-4 py-2 text-gray-900 transition-all duration-200 bg-white rounded-full shadow-xs hover:shadow-lg hover:bg-brown hover:text-white"
              href={button.buttons[0].spans[0].data.url.replace(
                /^https?:\/\//,
                ""
              )}
              key={key}
            >
              {button.buttons[0].text}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
