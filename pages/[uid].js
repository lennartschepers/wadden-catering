import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react'

import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import * as prismicH from '@prismicio/helpers'
import { Layout } from "../components/Layout";


const Page = ({ page, pages, footer }) => {
  return (
  <Layout page={page} pages={pages} footer={footer}>
     <div className="container mx-auto">
          {page.data.content.length !== 0 ?
            <div>
                <h1 className="mt-4 mb-6 font-serif text-5xl text-brown">
                  <PrismicText field={page.data.pagina_titel} />
                </h1>
                <div className="mb-12 prose max-w-none">
                  <PrismicRichText field={page.data.content} />
                </div>
              </div>
         : ''}
        </div>
    <SliceZone slices={page.data.body} components={components} />
  </Layout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('paginas', params.uid);
  const footer = await client.getSingle("footer");
  const pages = await client.getAllByType('paginas');


  return {
    props: {
      page,
      pages,
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