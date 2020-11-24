import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { HeaderMenu } from "../components/menu";
import Link from "next/link";

/**
 * Default layout component
 */
const DefaultLayout = ({ children, pages, footer }) => (
  <div>
    <Meta />
    <header className="absolute top-0 z-20 w-full lg:bg-white lg:relative text-">
      <div className="container z-20 flex items-center justify-between px-4 py-2 mx-auto lg:relative">
        <div>
          <Link href="/">
            <a aria-label="Link naar de homepagina">
              <img
                alt="Logo van Het Raadsel van de Wadden"
                src="/images/logoRondGoud.png"
                loading="lazy"
                className="h-24 ml-2 md:ml-0"
              />
            </a>
          </Link>
        </div>

        <HeaderMenu pages={pages} />
      </div>
    </header>
    <main>{children}</main>
    <Footer footer={footer} />
  </div>
);

export default DefaultLayout;
