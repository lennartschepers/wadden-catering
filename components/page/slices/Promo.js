import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

/**
 * Text slice component
 */
const PromoItem = ({ slice }) => (
  <div className="container">
    <div className="gap-8 p-6 mx-auto my-12 lg:p-12 lg:grid-cols-3 bg-opacity-10 bg-brown md:grid">
      <div className="relative w-full h-64 mb-8 lg:h-auto lg:mb-0 lg:w-auto lg:col-span-1">
        <Image
          className="w-full h-64 lg:w-auto md:block"
          alt={slice.primary.foto?.alt}
          layout="fill"
          className="object-cover"
          src={slice.primary.foto.url}
        />
      </div>
      <div className="col-span-2 px-2 leading-relaxed text-gray-800 lg:px-8">
        <p className="mb-4 font-serif text-4xl">
          {RichText.asText(slice.primary.titel)}
        </p>
        <p className="text-base leading-loose">
          {RichText.render(slice.primary.omschrijving)}
        </p>
      </div>
    </div>
  </div>
);

export default PromoItem;
