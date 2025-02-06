import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutMe from "../components/HomeComponents/AboutMe";
import Contact from "../components/HomeComponents/Contact";
import AllProject from "../pages/AllProject";
import ViewDetails from "../components/ViewDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allProject",
        element: <AllProject></AllProject>,
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/project.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
    ],
  },
]);

export default Router;
