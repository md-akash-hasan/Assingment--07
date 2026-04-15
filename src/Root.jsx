import React, { useState } from "react";
import Nav from "./Element/Nav";
import { Outlet } from "react-router";
import Footer from "./Element/Footer";
import { UseContext } from "./Element/UseContext";

export default function Root() {
  let [DataContext, setDataContext] = useState([]);

  return (
    <UseContext value={{ setDataContext, DataContext }}>
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </UseContext>
  );
}
