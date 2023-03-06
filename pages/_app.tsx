import "../styles/globals.css";

import Particles from "react-tsparticles";
import config from "../components/particlesConfig.json";

import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>BaoBao Portfoilo</title>
        <meta name="description" content="learn sth." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        
        <div className="grid grid-cols-12 gap-6 px-5 my-28 lg:mb-0 md:mb-16 sm:px-20 lg:px-36 xl:px-48">
          <ThemeProvider attribute="class">
            <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
          </ThemeProvider>
          <div className="col-span-12 bg-white rounded-2xl lg:col-span-9 flex flex-col dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
            <Navbar />

            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
       
      </Layout>
      <Particles options={config}  id="particles-here" />
    </>
  );
}
