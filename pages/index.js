import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

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
      <DefaultLayout pages={pages}>
        <Head>
          <title>{RichText.asText(doc.data.page_title)}</title>
        </Head>
    
        <SliceZone sliceZone={doc.data.body} />
        
      </DefaultLayout>
    );
  }

  // Message when repository has not bee  n setup yet
};

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = Client();

  const { ref } = previewData


  // Retrieve the homepage document
  const doc = await client.getSingle("homepage", ref ? { ref } : null);

  // Retrieve the blog posts organized in descending chronological order
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas"), {
      ...(ref ? { ref } : null)
    }
  );

  return {
    props: {
      doc,
      pages: pages ? pages.results : [],
      preview
    },
  };
}

export default Home;
