import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Update from "./Update";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage />,children:[{ path: "/update", element: <Update /> },] },
      
    ],
  },
]);

export default route;
