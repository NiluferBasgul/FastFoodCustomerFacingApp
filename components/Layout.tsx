import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import Footer from "./Footer/Footer";
import { themeColor } from "config/storeConfig";
import ContinueToShoppingModal from "./Modals/ContinueToShoppingModal";

type Props = {
  children?: ReactNode;
  title?: string;
  disableFooter?: boolean;
};

const Layout = ({ children, title = "Cucina Pizza By Design | Order Online Pizza, Pasta, Panini, Wrap, Dinners, Desserts, Juices, Coffee - Skopje, Macedonia", disableFooter = false }: Props) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={themeColor} />
        {/* <link rel="icon" href="/favicon/favicon.ico" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>" />
      </Head>
      <Header />
      <main className='min-vh-100 position-relative'>{children}</main>
      {!disableFooter && <Footer />}
      <ContinueToShoppingModal />
    </>
  )
};

export default Layout;
