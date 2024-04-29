import React from "react";
import { Outlet } from "react-router-dom";
import Context from "./Context";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <Context>
      <Toaster />
      <Outlet />
    </Context>
  );
};

export default Layout;
