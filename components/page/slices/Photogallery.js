import React from "react";
import Image from "next/image";

/**
 * Menu slice component
 */
const Photogallery = ({ slice }) => (
  <div className="container mx-auto">
    <div className="grid grid-cols-2 gap-4 my-24 lg:grid-cols-3">
      {slice.items.map((image, imageIndex) => (
        <Image
          height={image.foto?.formatted?.dimensions.height}
          width={image.foto?.formatted?.dimensions.width}
          className="object-cover w-full h-48"
          alt={image.foto?.alt}
          src={image?.foto?.formatted?.url}
          key={imageIndex}
        />
      ))}
    </div>
  </div>
);

export default Photogallery;
