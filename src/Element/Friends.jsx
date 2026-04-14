import React from "react";
import UsedataHook from "./UsedataHook";
import { ClockLoader } from "react-spinners";
import Friend from "./Friend";

export default function Friends() {
  let { loader, OutData } = UsedataHook();

  return (
    <div>
      {loader ? (
        <ClockLoader />
      ) : (
        <div className="container m-auto">
          <div>
            <h1 className="font-semibold text-2xl my-10">Your Friend</h1>
          </div>
          <div className="lg:grid-cols-4 grid gap-5 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 ">
            {OutData.map((Data) => (
              <Friend key={Data.id} Data={Data}></Friend>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
