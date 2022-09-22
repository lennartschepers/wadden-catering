import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { HeaderMenu } from "../components/menu";
import Link from "next/link";
import Head from "next/head";

export const Layout = ({ page, children, menu, footer }) => {
    return (
        <>
            <Head>
                <title>{page.data.seo_title}</title>
                <meta property="og:title" content={page.data.seo_title} />
                <meta property="og:type" content="restaurant" />
                <meta property="og:description" content={page.data.seo_description} />
                <meta property="og:image" content={page.data.seo_image.url} />
                <meta property="twitter:title" content={page.data.seo_title} />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="twitter:description"
                    content={page.data.seo_description}
                />
                <meta property="twitter:image" content={page.data.seo_image.url} />
            </Head>
            <Meta />
            <header className="z-20 w-full border-b border-gray-200 border-solid lg:bg-white">
                <div className="container z-20 flex flex-row items-center lg:items-stretch justify-between px-4 mx-auto lg:relative">
                    <Link href="/">
                        <img
                            alt="Logo van Het Raadsel van de Wadden"
                            src="/images/RVDWGoudRond.png"
                            className="h-24 ml-2 my-2 md:ml-0 cursor-pointer"
                        />
                    </Link>
                    <HeaderMenu menu={menu} />
                </div>
            </header>
            <main>{children}</main>
            <Footer footer={footer} />
        </>
    );
};