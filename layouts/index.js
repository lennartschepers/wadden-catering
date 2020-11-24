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
    <header className="top-0 w-full bg-white text-">
      <div className="container absolute z-20 flex items-center justify-between px-4 py-2 mx-auto lg:relative">
        <div>
          <Link href="/">
            <a aria-label="Link naar de homepagina">
              <img
                alt="Logo van Het Raadsel van de Wadden"
                src="/images/logoRondGoud.png"
                loading="lazy"
                className="hidden h-24 ml-2 lg:block md:ml-0"
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
