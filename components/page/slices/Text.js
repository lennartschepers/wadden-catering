import React from "react";
import { RichText } from "prismic-reactjs";

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className="relative flex items-center justify-center w-full text-center bg-darkBrown">
    <img
      src="./images/menuBackground.jpg"
      loading="lazy"
      className="absolute object-cover w-full h-full opacity-50"
    />
    <div className="z-10 w-10/12 py-12 lg:py-24">
      <h1 className="mb-4 font-serif text-5xl text-white">
        {RichText.asText(slice.primary.titel)}
      </h1>
      <span className="text-white">{RichText.render(slice.primary.tekst)}</span>
    </div>
  </div>
);

export default Text;
