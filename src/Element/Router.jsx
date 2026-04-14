import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import TimeLine from "../Page/TimeLine";
import Stats from "../Page/Stats";
import Root from "../Root";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "timeline", element: <TimeLine /> },
      { path: "stats", element: <Stats /> },
    ],
  },
]);
