import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react'

import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import * as prismicH from '@prismicio/helpers'
import DefaultLayout from "../layouts";
import Head from "next/head";


const Page = ({ metaTitle, metaDescription, slices, sidebar, staticContent, menu, footer }) => {
  return (
  <DefaultLayout menu={menu} footer={footer}>
     <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
     <div className="container">
          {staticContent.content.length !== 0 ?
            <div>
                <h1 className="mt-4 mb-6 font-serif text-5xl text-brown">
                  <PrismicText field={staticContent.pagina_titel} />
                </h1>
                <div className="mb-12 prose max-w-none">
                  <PrismicRichText field={staticContent.content} />
                </div>
              </div>
         : ''}
        <div className={`grid grid-cols-1 ${sidebar.length ? 'lg:grid-cols-12' : ''}`}>
          <div className={`order-2 lg:order-1 ${sidebar.length ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            <SliceZone slices={slices} components={components} />
          </div>
          {sidebar.length >= 1 &&
            <div className="lg:col-span-3 order-1 lg:order-2">
              <SliceZone slices={sidebar} components={components} />
            </div>
          }
        </div>
      </div>
  </DefaultLayout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('paginas', params.uid);
  const footer = await client.getSingle("footer");
  const menu = await client.getAllByType('navigation');

  return {
    props: {
      staticContent: page.data,
      metaTitle: page.data.seo_title,
      metaDescription: page.data.seo_description,
      slices: page.data.body,
      sidebar: page.data.slices1,
      menu,
      footer
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('paginas')  

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}