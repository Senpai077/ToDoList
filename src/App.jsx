import React from "react";
import { RouterProvider } from "react-router-dom";
import "./global.css"
import route from "./Component/Routes";

const App = () => {
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
