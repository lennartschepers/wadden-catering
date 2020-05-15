import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { HeaderMenu } from "components/menu";

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
        <HeaderMenu pages={pages} />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
};

/**
 * Query the homepage document and blog posts from Prismic when the page is loaded
 */
Home.getInitialProps = async function ({ req }) {
  try {
    // Retrieve the homepage document
    const doc = await Client(req).getSingle("homepage");

    // Retrieve the blog posts organized in descending chronological order
    const pages = await Client(req).query(
      Prismic.Predicates.at("document.type", "paginas")
    );

    return {
      doc,
      pages: pages ? pages.results : [],
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Home;
