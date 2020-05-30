import Meta from "components/Meta";
import Footer from "components/Footer";
import { HeaderMenu } from "components/menu";

/**
 * Default layout component
 */
const DefaultLayout = ({ children, pages }) => (
  <div>
    <Meta />
    <header className="absolute top-0 left-0 w-full z-50 bg-black text-white bg-opacity-75">
      <div className="container flex mx-auto py-4">
        <div className="flex-1">
          <img src="/images/logoWit.png" className="h-12" />
        </div>
        <HeaderMenu pages={pages} />
      </div>
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
