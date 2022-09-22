import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from "../components/Layout";

const Page = ({ page, menu, footer }) => {
  return (
    <Layout page={page} menu={menu} footer={footer}>
      <SliceZone slices={page.data.body} components={components} />
    </Layout>
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
      footer,
      menu
    },
    revalidate: 10
  }
}