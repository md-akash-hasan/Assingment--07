import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import TimeLine from "../Page/TimeLine";
import Stats from "../Page/Stats";
import Root from "../Root";
import Detles from "./Detles";
import Page404 from "./Page404";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "timeline", element: <TimeLine /> },
      { path: "stats", element: <Stats /> },
      { path: "detels/:id", element: <Detles /> },
    ],
  },
  { path: "*", element: <Page404 /> },
]);
