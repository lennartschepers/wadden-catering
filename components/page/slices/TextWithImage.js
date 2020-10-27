import React from "react";
import { RichText } from "prismic-reactjs";
import Image from 'next/image';

/**
 * Text slice component
 */
const TextWithImage = ({ slice }) => (
  <div className="container mx-auto md:grid grid-cols-3 gap-8 py-16">
    <div className="col-span-1">
      {slice.items.map((image, index) => {
        return (
             <Image
            className="w-auto hidden md:block"
            alt={image.tekst_fotos.alt}
            loading="lazy"
            unsized
            src={image.tekst_fotos.url}
            key={index}
          />
        );
      })}
    </div>
    <div className="col-span-2 text-gray-800 leading-relaxed px-8">
      <h1 className="mb-4">{RichText.asText(slice.primary.title)}</h1>
      {RichText.render(slice.primary.homepage_tekst)}
    </div>
  </div>
);

export default TextWithImage;
