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
        <meta
          name="application-name"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta
          name="description"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://restaurantlauwersmeer.nl" />
        <meta name="twitter:title" content="Restaurant Het Raadsel van de Wadden" />
        <meta
          name="twitter:description"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta
          name="twitter:image"
          content="https://restaurantlauwersmeer.nl/icons/android-icon-192x192.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta
          property="og:description"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta
          property="og:site_name"
          content="Restaurant Het Raadsel van de Wadden"
        />
        <meta property="og:url" content="https://restaurantlauwersmeer.nl" />
        <meta
          property="og:image"
          content="https://restaurantlauwersmeer.nl/icons/apple-icon.png"
        />

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
              "telephone": "+31(0)851309156",
              "url": "https://restaurantlauwersmeer.nl"
            }`,
          }}
        />
      </Head>
    </Fragment>
  );
};

export default Meta;
