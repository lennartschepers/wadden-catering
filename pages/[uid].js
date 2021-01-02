import React from "react";
import Head from "next/head";
import { SliceZone } from "../components/page";
import Prismic from "prismic-javascript";

import { queryRepeatableDocuments } from "../utils/queries";

// Project components
import DefaultLayout from "../layouts";

// Project functions & styles
import { Client } from "../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";

/**
 * Post page component
 */
const Page = ({ page, pages, footer }) => {
  if (page && pages) {
    return (
      <DefaultLayout pages={pages} footer={footer}>
        <Head>
          <title>{page.data.seo_title}</title>
          <meta property="og:title" content={page.data.seo_title} />
          <meta property="og:type" content="restaurant" />
          <meta property="og:description" content={page.data.seo_description} />
          <meta property="og:image" content={page.data.seo_image.url} />
          <meta property="twitter:title" content={page.data.seo_title} />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:description"
            content={page.data.seo_description}
          />
          <meta property="twitter:image" content={page.data.seo_image.url} />
        </Head>
        
        <div className="container mx-auto">
          {page.data.content.length !== 0 && (
            <div>
              <h1 className="mt-4 mb-6 font-serif text-5xl text-brown">
                {RichText.asText(page.data.pagina_titel)}
              </h1>
              <div className="mb-12">{RichText.render(page.data.content)}</div>
          </div>
        )}
        </div>

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

  const footer = await client.getSingle("footer", ref ? { ref } : null);

  const page = await client.getByUID(
    "paginas",
    params.uid,
    ref ? { ref } : null
  );

  return {
    props: {
      preview,
      page,
      footer,
      pages: pages ? pages.results : [],
    },
    revalidate: 1,
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
