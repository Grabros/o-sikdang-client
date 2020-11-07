import React, { Fragment } from "react";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactChild;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
