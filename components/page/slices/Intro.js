import React from "react";
import { RichText } from "prismic-reactjs";

const Intro = ({ slice }) => (
  <div className="container my-24 text-center">
    <h1 className="mb-4 font-serif text-5xl text-brown">
      {RichText.asText(slice.primary.titel)}
    </h1>
    <p className="mt-8 text-lg leading-loose">
      {RichText.asText(slice.primary.korte_tekst)}
    </p>
    <a href={slice.primary.link.url} className="table px-8 py-4 mx-auto mt-6 text-white rounded-md bg-brown">{slice.primary.link_tekst}</a>
  </div>
);

export default Intro;
