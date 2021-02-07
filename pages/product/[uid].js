import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";

// Project components & functions
import DefaultLayout from "../../layouts";
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from "../../utils/queries";
import { RichText, Date } from "prismic-reactjs";
import Image from "next/image";

import { useForm } from "react-hook-form";

/**
 * Homepage component
 */
const Product = ({ product, pages, footer }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        amount: product?.data?.price,
        quantity: 1,
        product_name: RichText.asText(product.data.product_name),
        deliver: data.deliveryOption,
        name: data.name,
        email: data.email,
        phone: data.phone,
        text: data.text
      }),
    };

    fetch("/api/mollie", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        window.location.replace(responseData.toString());
      });
  };

  if (product && pages) {
    return (
      <DefaultLayout pages={pages} footer={footer}>
        <Head>
          <title>{product.data.seo_title}</title>
          <meta name="description" content={product.data.seo_description} />
          <meta property="og:title" content={product.data.seo_title} />
          <meta property="og:type" content="restaurant" />
          <meta
            property="og:description"
            content={product.data.seo_description}
          />
          <meta property="og:image" content={product.data.seo_image.url} />
          <meta property="twitter:title" content={product.data.seo_title} />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:description"
            content={product.data.seo_description}
          />
          <meta property="twitter:image" content={product.data.seo_image.url} />
        </Head>

        <div className={"container mx-auto p-16"}>
          <div className={"flex space-x-8"}>
            <div>
              <h1 className={"text-4xl font-bold font-serif text-brown mb-2"}>
                {RichText.asText(product.data.product_name)}
              </h1>
              <div className="inline-flex items-center p-2 mt-2 mb-4 text-sm leading-none bg-white border border-gray-100 rounded-full shadow-md text-brown-600">
                <span className="inline-flex items-center justify-center h-6 px-3 text-white rounded-full bg-brown ">
                  Let op
                </span>
                <span className="inline-flex px-2">
                  Op is op en te bestellen tot 12 februari!
                </span>
              </div>
              {RichText.render(product.data.product_description)}
              <p className={"text-xl font-bold"}>
                Bestel nu voor €{product.data.price}
              </p>
              <hr className={"my-4"} />

              <h2 className={"font-bold mb-2 text-lg"}>
                Bestel nu jouw {RichText.asText(product.data.product_name)}:
              </h2>

              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={"w-full"}>
                  <label className={"block"}>Naam</label>
                  <input
                    className={
                      "block w-full mb-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    }
                    type="text"
                    name="name"
                    ref={register({ required: true })}
                  />
                </div>
                <div className={"flex space-x-4 w-full"}>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className={"w-1/2"}>
                    <label className={"block"}>Email</label>
                    <input
                      className={
                        "block w-full mb-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      }
                      type="email"
                      name="email"
                      ref={register({ required: true })}
                    />
                  </div>

                  <div className={"w-1/2"}>
                    <label className={"block"}>Telefoon</label>
                    <input
                      className={
                        "block w-full mb-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      }
                      type="text"
                      name="phone"
                      ref={register({ required: true })}
                    />
                  </div>
                  
                </div>
                <div className={"w-full"}>
                  <label className={"block"}>Tekst voor op snijplank</label>
                  <input
                    className={
                      "block w-full mb-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    }
                    type="text"
                    name="text"
                    ref={register({ required: true })}
                  />
                </div>
                <p className="text-sm italic text-gray-700">* Vul 2 namen in voor een hartje in het midden</p>
                <hr className={"my-4"} />

                <div>
                  <label className={"block"}>Ophalen/bezorgen</label>
                  <select
                    name="deliveryOption"
                    ref={register({ required: true })}
                    className={
                      "block w-full mt-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    }
                  >
                                            <option disabled value selected> -- Kies optie -- </option>

                    {product?.data?.body.map((slice) => {
                      if (slice?.slice_type === "delivery_options") {

                        const selectOptions = slice.items.map((slot, index) => (
                          <option
                            value={
                              slice?.primary?.type +
                              ": " +
                              slice?.primary?.location +
                              "| " +
                              RichText.asText(slot.datum) +
                              "-" +
                              RichText.asText(slot.starttijd) +
                              "-" +
                              RichText.asText(slot.eindtijd)
                            }
                            key={index}
                          >
                            {slice?.primary?.type}: {slice?.primary?.location} |{" "}
                            {RichText.asText(slot.datum)}{" "}
                            {RichText.asText(slot.starttijd)} en{" "}
                            {RichText.asText(slot.eindtijd)}
                          </option>
                        ));
                        return selectOptions;
                      }
                    })}
                  </select>
                  <p className={"text-gray-600 italic"}>
                    Bij bezorging zullen we u bellen voor het bezorgadres
                  </p>
                </div>
                <input
                  type="submit"
                  className={
                    "w-full p-4 bg-brown text-white rounded-xl text-xl mt-4 cursor-pointer outline-none hover:shadow-xl hover:bg-darkBrown duration-300 transform"
                  }
                  value="Bestel en betaal"
                />
              </form>
            </div>
            <div className="object-cover w-full md:block">
              <Image
                className="object-cover"
                alt={product?.data?.product_image?.alt}
                height={600}
                width={600}
                src={product?.data?.product_image?.url}
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
  return "404";
};

export async function getStaticProps({ params }) {
  const client = Client();

  const footer = await client.getSingle("footer");

  const product = await client.getByUID("product", params.uid);

  // Retrieve the blog posts organized in descending chronological order
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas")
  );

  return {
    props: {
      product,
      footer,
      pages: pages ? pages.results : [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "product"
  );
  return {
    paths: documents.map((doc) => `/product/${doc.uid}`),
    fallback: true,
  };
}

export default Product;
