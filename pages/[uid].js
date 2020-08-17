import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { SliceZone } from "components/page";
import Prismic from "prismic-javascript";

import { queryRepeatableDocuments } from "utils/queries";

// Project components
import DefaultLayout from "layouts";

// Project functions & styles
import { Client } from "utils/prismicHelpers";

/**
 * Post page component
 */
const Page = ({ page, pages }) => {
  if (page && pages) {
    return (
      <DefaultLayout pages={pages}>
        <Head>
          <title>{page.data.seo_title}</title>
          <meta property="og:title" content={page.data.seo_title} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:description" content={page.data.seo_description} />
          <meta property="og:image" content={page.data.seo_image.url} />
          <meta property="twitter:title" content={page.data.seo_title} />
          <meta name="twitter:card" content="summary" />
          <meta property="twitter:description" content={page.data.seo_description} />
          <meta property="twitter:image" content={page.data.seo_image.url} />
        </Head>
        <SliceZone sliceZone={page.data.body} />
      </DefaultLayout>
    );
  }
  return "404";
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const client = Client();
  const { ref } = previewData;

  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas")
  );

  const page = await client.getByUID(
    "paginas",
    params.uid,
    ref ? { ref } : null
  );

  return {
    props: {
      preview,
      page,
      pages: pages ? pages.results : [],
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "paginas"
  );
  return {
    paths: documents.map((doc) => `/${doc.uid}`),
    fallback: true,
  };
}

export default Page;
