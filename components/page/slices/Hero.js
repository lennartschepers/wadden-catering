import React from "react";
import { RichText, Link } from "prismic-reactjs";

/**
 * Text slice component
 */
const Hero = ({ slice }) => (
  <div className="relative flex justify-center items-center h-75-screen bg-black">
    <img
      className="absolute w-full h-75-screen object-cover opacity-50"
      src={slice.primary.homepage_header.hero.url}
      alt={slice.primary.homepage_header.alt}
    />

    <div className="w-1/2 leading-loose text-white text-center z-10">
      <h1>{RichText.asText(slice.primary.header_titel)}</h1>
      {RichText.render(slice.primary.header_tekst)}

      <div className="flex space-x-3 justify-center py-4">
        {slice.items.map((button, key) => (
          <a
            className="rounded-full shadow-xs py-2 px-4 bg-brown hover:shadow-md duration-200 transition-all"
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
