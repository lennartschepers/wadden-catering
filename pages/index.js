import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";

import { SliceZone } from "../components/page";

// Project components & functions
import DefaultLayout from "../layouts";
import { Client } from "../utils/prismicHelpers";

/**
 * Homepage component
 */
const Home = ({ doc, pages, footer }) => {
  if (doc) {
    return (
      <DefaultLayout pages={pages} footer={footer}>
        <Head>
          <title>{doc.data.seo_title}</title>
          <meta name="description" content={doc.data.seo_description} />
          <meta property="og:title" content={doc.data.seo_title} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:description" content={doc.data.seo_description} />
          <meta property="og:image" content={doc.data.seo_image.url} />
          <meta property="twitter:title" content={doc.data.seo_title} />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:description"
            content={doc.data.seo_description}
          />
          <meta property="twitter:image" content={doc.data.seo_image.url} />
        </Head>

        <SliceZone sliceZone={doc.data.body} />

      </DefaultLayout>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = Client();

  const { ref } = previewData;

  // Retrieve the homepage document
  const doc = await client.getSingle("homepage", ref ? { ref } : null);
  const footer = await client.getSingle("footer", ref ? { ref } : null);

  // Retrieve the blog posts organized in descending chronological order
  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas"),
    {
      ...(ref ? { ref } : null),
    }
  );

  return {
    props: {
      doc,
      footer,
      pages: pages ? pages.results : [],
      preview,
    },
    revalidate: 1,
  };
}

export default Home;
