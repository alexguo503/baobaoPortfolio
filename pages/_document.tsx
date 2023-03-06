// _document.tsx 只在服务端渲染时候才会执行
// 因为服务端渲染会用到 getInitialProps 方法, 这个方法来自 _Document.tsx
// static getInitialProps = async (ctx) => {const props = await Document.getInitialProps(ctx) ...}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
     
      <body className="bg-gradient-to-r from-pink-300 to-blue-200 dark:from-dark-500 dark:to-dark-700 dark:text-white">
      
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
