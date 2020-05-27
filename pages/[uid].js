import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { SliceZone } from "components/page";

import { queryRepeatableDocuments } from "utils/queries";

// Project components
import DefaultLayout from "layouts";

// Project functions & styles
import { Client } from "utils/prismicHelpers";

/**
 * Post page component
 */
const Page = ({ page }) => {
  if (page) {
    const hasTitle = RichText.asText(page.data.pagina_titel).length !== 0;
    const title = hasTitle ? RichText.asText(page.data.pagina_titel) : "Untitled";

    return (
      <DefaultLayout>
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
  const page = await Client().getByUID("paginas", params.uid);
  return {
    props: {
      page,
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
