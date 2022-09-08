import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from "../components/Layout";

const Page = ({ page, pages, footer }) => {
  return (
    <Layout page={page} pages={pages} footer={footer}>
      <SliceZone slices={page.data.body} components={components} />
    </Layout>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage');
  const footer = await client.getSingle("footer");
  const pages = await client.getAllByType('paginas')

  return {
    props: {
      page,
      footer,
      pages
    },
  }
}