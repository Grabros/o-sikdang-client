import React, { Fragment } from "react";
import Head from "next/head";

import GlobalStyle from "../styles/GlobalStyle";

import Layout from "../components/Reusable/Layout";
import Search from "../components/Search/Search";

import { GetStaticProps } from "next";

function index() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <>
          <Search />
        </>
      </Layout>
    </Fragment>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { params, preview, previewData } = context;
//   const res = await fetch("");
//   const data = await res.json();

//   return {
//     props: {
//       data: data,
//     },
//   };
// };

export default index;
