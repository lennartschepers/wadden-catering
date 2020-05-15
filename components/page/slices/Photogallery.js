import React from "react";

/**
 * Menu slice component
 */
const Photogallery = ({ slice }) => (
  <div className="flex space-x-2 w-full">
    {slice.items.map((image, imageIndex) => (
      <img className="w-auto" alt={image.galerij_foto.alt} src={image.galerij_foto.formatted.url} />
    ))}
  </div>
);

export default Photogallery;
