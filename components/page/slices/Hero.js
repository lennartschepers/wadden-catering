import React from "react";
import { RichText, Link } from "prismic-reactjs";

/**
 * Text slice component
 */
const Hero = ({ slice }) => (
  <div className="relative flex justify-center items-center bg-black">
    <img
      className="absolute w-full h-full object-cover opacity-50"
      src={slice.primary.homepage_header.hero.url}
      alt={slice.primary.homepage_header.alt}
    />

    <div className="w-11/12 md:w-1/2 leading-loose text-white text-center z-10 pb-12 pt-32 md:pb-24 md:pt-64">
      <h1 className="text-2xl md:text-3xl">{RichText.asText(slice.primary.header_titel)}</h1>
      <span className="text-sm md:text-base">{RichText.render(slice.primary.header_tekst)}</span>

      <div className="flex space-x-3 justify-center py-4">
        {slice.items.map((button, key) => (
          <a
            className="rounded-full shadow-xs py-2 px-4 bg-white text-gray-900 hover:shadow-lg hover:bg-brown hover:text-white duration-200 transition-all"
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
);

export default Hero;
