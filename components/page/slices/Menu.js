import React from "react";
import { RichText } from "prismic-reactjs";

/**
 * Menu slice component
 */
const Menu = ({ slice }) => (
  <div className="container px-4 mx-auto">
    <div className="py-16">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-4xl text-brown">{RichText.asText(slice.primary.menu_naam)}</h2>
        {RichText.render(slice.primary.menu_omschrijving)}
      </div>
      <section className="grid gap-6 md:grid-cols-2 ">
        {slice.items.map((menu_item, index) => (
          <div
            className="flex py-4 border-t border-gray-400 border-dashed"
            key={index}
          >
            <div className="flex-1">
              <p className="text-lg font-bold">
                {RichText.asText(menu_item.naam)}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {RichText.asText(menu_item.ingredienten)}
              </p>
            </div>
            <p className="font-semibold alt-font">{menu_item.prijs}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default Menu;
