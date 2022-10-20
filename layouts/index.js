import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { HeaderMenu } from "../components/menu";
import Link from "next/link";

/**
 * Default layout component
 */
const DefaultLayout = ({ children, menu, footer }) => (
  <div>
    <Meta />
    <header className="z-20 w-full border-b border-gray-200 border-solid lg:bg-white">
      <div className="container z-20 flex flex-row items-center lg:items-stretch justify-between px-4 mx-auto lg:relative">
          <Link href="/">
              <img
                  alt="Logo van Wadden Catering"
                  src="/images/wadden-catering-logo.jpeg"
                  className="h-24 ml-2 my-2 md:ml-0 cursor-pointer"
              />
          </Link>
          <HeaderMenu menu={menu} />
      </div>
    </header>
    <main>{children}</main>
    <Footer footer={footer} />
  </div>
);

export default DefaultLayout;
