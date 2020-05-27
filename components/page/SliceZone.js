import React from "react";
import { Text, Menu, Photogallery, Hero, TextWithImage } from "./slices";

/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "menu":
        return <Menu slice={slice} key={`slice-${index}`} />;
      case "tekstblok":
        return <Text slice={slice} key={`slice-${index}`} />;
      case "tekst_met_foto":
        return <TextWithImage slice={slice} key={`slice-${index}`} />;
      case "foto_galerij":
        return <Photogallery slice={slice} key={`slice-${index}`} />;
      case "hero":
        return <Hero slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });

export default SliceZone;
