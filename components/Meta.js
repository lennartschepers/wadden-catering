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
        "openingHours": [
          "Mo-Fr 17:00-22:00",
          "Sa-Su 12:00-16:00",
          "Sa-Su 17:00-22:00",
        ],
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
