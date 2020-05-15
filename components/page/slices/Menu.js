import React from "react";
import { RichText } from "prismic-reactjs";

/**
 * Menu slice component
 */
const Menu = ({ slice }) => (
  <div className="py-16">
    <div className="text-center mb-8">
      {RichText.render(slice.primary.menu_naam)}
      {RichText.render(slice.primary.menu_omschrijving)}
    </div>
    <section className="grid gap-6 md:grid-cols-2 ">
      {slice.items.map((menu_item) => (
        <div className="flex py-4 border-dashed border-t border-gray-400">
          <div className="flex-1">
            <p className="font-bold text-lg">
              {RichText.asText(menu_item.naam)}
            </p>
            <p className="text-gray-600 text-sm mt-2">{RichText.asText(menu_item.ingredienten)}</p>
          </div>
          <p className="alt-font font-semibold">{menu_item.prijs}</p>
        </div>
      ))}
    </section>
  </div>
);

export default Menu;
