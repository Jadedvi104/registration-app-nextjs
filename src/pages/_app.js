import "@/styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import { useContext, createContext, useState } from "react";
import DataProvider from "@/components/context";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
