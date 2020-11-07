import React, { Fragment } from "react";
import Head from "next/head";

import GlobalStyle from "../styles/GlobalStyle";

import Layout from "../components/Reusable/Layout";

const index = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout></Layout>
    </Fragment>
  );
};

export default index;
