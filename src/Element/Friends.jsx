import React, { useContext } from "react";
import UsedataHook from "./UsedataHook";
import { ClockLoader } from "react-spinners";
import Friend from "./Friend";
import { UseContext } from "./UseContext";

export default function Friends() {
  let { setDataContext, DataContext } = useContext(UseContext);
  let { loader, OutData } = UsedataHook();
  if (loader == false) {
    setDataContext(OutData);
  }

  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-[30vh]">
          <ClockLoader />
        </div>
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
