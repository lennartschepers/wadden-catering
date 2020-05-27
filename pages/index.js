import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { HeaderMenu } from "components/menu";

import { SliceZone } from "components/page";

// Project components & functions
import DefaultLayout from "layouts";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage component
 */
const Home = ({ doc, pages }) => {
  if (doc) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.page_title)}</title>
        </Head>
        <header className="absolute top-0 left-0 w-full z-50 bg-black text-white bg-opacity-75">
          <div className="container flex mx-auto py-4">
            <div className="flex-1">
              <img src="/images/logoWit.png" className="h-12" />
            </div>
            <HeaderMenu pages={pages} />
          </div>
        </header>
        <SliceZone sliceZone={doc.data.body} />
      </DefaultLayout>
    );
  }

  // Message when repository has not bee  n setup yet
};

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
export async function getStaticProps() {
  const client = Client();

  // Retrieve the homepage document
  const doc = await client.getSingle("homepage");

  // Retrieve the blog posts organized in descending chronological order
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas")
  );

  return {
    props: {
      doc,
      pages: pages ? pages.results : [],
    },
  };
}

export default Home;
