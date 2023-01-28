import "/styles/globals.css";
import Head from "./head";

import Footer from "@components/layouts/Footer/Footer";
import Header from "@components/layouts/Header/Header";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <html>
        <Head />
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
