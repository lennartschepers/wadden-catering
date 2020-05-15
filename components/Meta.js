import { Fragment } from 'react'
import Head from 'next/head'

/**
 * Meta data component
 */
const Meta = () => {

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
    </Fragment>
  )
}

export default Meta
