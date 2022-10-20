import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import DefaultLayout from "../layouts";
import Head from "next/head";

const Page = ({ metaTitle, metaDescription, page, menu, footer }) => {
  return (
    <DefaultLayout page={page} menu={menu} footer={footer}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <SliceZone slices={page.data.body} components={components} />
    </DefaultLayout>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage');
  const footer = await client.getSingle("footer");
  const menu = await client.getAllByType('navigation');

  return {
    props: {
      page,
      metaTitle: page.data.seo_title,
      metaDescription: page.data.seo_description,
      footer,
      menu
    },
    revalidate: 10
  }
}
