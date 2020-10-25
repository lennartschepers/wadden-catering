import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "prismic-configuration";
import { customLink } from "utils/prismicHelpers";

/**
 * Text slice component
 */
const TextWithImage = ({ slice }) => (
  <div className="container mx-auto md:grid grid-cols-3 gap-8 py-16">
    <div className="col-span-1">
      {slice.items.map((image, index) => {
        return (
          <img
            className="w-auto hidden md:block"
            alt={image.tekst_fotos.alt}
            loading="lazy"

            src={image.tekst_fotos.url}
            key={index}
          />
        );
      })}
    </div>
    <div className="col-span-2 text-gray-800 leading-relaxed px-8">
      <h2>{RichText.asText(slice.primary.title)}</h2>
      {RichText.render(slice.primary.homepage_tekst)}
    </div>
  </div>
);

export default TextWithImage;
