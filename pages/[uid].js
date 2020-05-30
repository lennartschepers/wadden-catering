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
    const hasTitle = RichText.asText(page.data.pagina_titel).length !== 0;
    const title = hasTitle
      ? RichText.asText(page.data.pagina_titel)
      : "Untitled";

    return (
      <DefaultLayout pages={pages}>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="container mx-auto">
          <SliceZone sliceZone={page.data.body} />
        </div>
      </DefaultLayout>
    );
  }
  return "404";
};

export async function getStaticProps({ params }) {
  const client = Client();

  const pages = await client.query(
    Prismic.Predicates.at("document.type", "paginas")
  );

  const page = await client.getByUID("paginas", params.uid);

  return {
    props: {
      page,
      pages: pages ? pages.results : [],
    },
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
