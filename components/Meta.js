import { Fragment } from "react";
import Head from "next/head";

/**
 * Meta data component
 */
const Meta = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "Restaurant",
              "image": "https://images.prismic.io/raadselvandewadden/ad3a96fd-9f0d-498f-b4fe-3d69a8bc8d6b_IMG_4778-kopie.jpg?auto=compress,format&amp;rect=0,313,2048,910&amp;w=1800&amp;h=800",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anjum",
                "postalCode": " 9133 DT",
                "streetAddress": "Oostmahorn 31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "307"
              },
              "name": "Het Raadsel van de Wadden",
              "acceptsReservations": true,
              "telephone": "06 12069380",
              "url": "https://restaurantlauwersmeer.nl"
            }`,
          }}
        />
      </Head>
    </Fragment>
  );
};

export default Meta;
