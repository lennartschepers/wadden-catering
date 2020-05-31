import Meta from "components/Meta";
import Footer from "components/Footer";
import { HeaderMenu } from "components/menu";
import Link from "next/link";

/**
 * Default layout component
 */
const DefaultLayout = ({ children, pages }) => (
  <div>
    <Meta />
    <header className="w-full absolute top-0 left-0 z-50 bg-black text-white bg-opacity-75">
      <div className="container flex mx-auto py-4 px-4">
        <div>
          <Link href="/">
            <a>
              <img src="/images/logoWit.png" className="h-12 ml-2 md:ml-0" />
            </a>
          </Link>
        </div>
        
        <HeaderMenu pages={pages} />
      </div>
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
