import React from "react";
import { RichText } from "prismic-reactjs";

/**
 * Text slice component
 */
const TextWithImage = ({ slice }) => (
  <div className="container hidden">
    <div className="w-2/3 py-24 mx-auto text-center">
      <div className="col-span-2 px-8 leading-relaxed text-gray-800">
        <h1 className="mb-4">{RichText.asText(slice.primary.title)}</h1>
        {RichText.render(slice.primary.homepage_tekst)}
      </div>
    </div>
  </div>
);

export default TextWithImage;
