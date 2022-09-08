import React from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'

/**
 * Menu slice component
 */
const Menu = ({ slice }) => (
  <div className="container px-4 mx-auto">
    <div className="py-4 lg:py-16">
      <div className="mb-4 text-left lg:mb-8 lg:text-center">
        <h2 className="font-serif text-4xl text-brown">
        <PrismicText field={slice.primary.title} />
        </h2>
        <PrismicRichText field={slice.primary.description} />
      </div>
      <section className="grid gap-6 md:grid-cols-2 ">
        {slice?.items?.map((item, index) => (
          <div
            className="flex py-4 border-t border-gray-400 border-dashed"
            key={index}
          >
            <div className="flex-1">
              <p className="text-lg font-bold">
                <PrismicText field={item.name} />
              </p>
              <p className="mt-2 text-sm text-gray-500">
              <PrismicText field={item.ingredients} />
              </p>
            </div>
            <p className="font-serif font-bold">
               <PrismicText field={item.price} />
            </p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default Menu