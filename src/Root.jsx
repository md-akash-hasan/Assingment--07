import React from "react";
import Nav from "./Element/Nav";
import { Outlet } from "react-router";
import Footer from "./Element/Footer";

export default function Root() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
