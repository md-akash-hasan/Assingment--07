import React from "react";
import { NavLink } from "react-router";

export default function Page404() {
  return (
    <div className="text-center flex flex-col justify-center items-center my-30 space-y-5">
      <h1 className="text-5xl font-bold ">404 Page Not Found</h1>
      <p>The page youre Looking for doesn't exist</p>
      <NavLink to={"/"} className="btn-primary btn w-30">
        Back Home
      </NavLink>
    </div>
  );
}
