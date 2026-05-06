"use client";

import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  subdomain?: string;
};

const ClientComponent = ({ children, subdomain }: Props) => {
  const hideNavFoo = subdomain === "gwr";

  return (
    <>
      {!hideNavFoo && <Navbar />}
      {children}
      {/* {!hideNavFoo && <Footer />} */}
    </>
  );
};

export default ClientComponent;
