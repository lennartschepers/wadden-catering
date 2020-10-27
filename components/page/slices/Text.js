import React from "react";
import { RichText } from "prismic-reactjs";

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className="relative w-full h-96 flex justify-center text-center items-center bg-darkBrown">
    <img
      src="./images/menuBackground.jpg"
      loading="lazy"

      className="absolute w-full h-96 object-cover opacity-50"
    />
    <div className="z-10 pt-12">
      <h1 className="text-white alt-font">{RichText.asText(slice.primary.titel)}</h1>
      <span className="text-white">{RichText.render(slice.primary.tekst)}</span>
    </div>
  </div>
);

export default Text;
