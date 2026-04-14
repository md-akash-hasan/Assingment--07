import React from "react";

export default function Hero() {
  return (
    <div className="container m-auto my-10">
      <div className="text text-center   ">
        <h1 className="text-4xl font-bold capitalize">
          Friends to keep close in your life
        </h1>
        <p className="mt-4 text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white font-semibold mt-5">
          + Add a Friend
        </button>
      </div>
      <div className="containers md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid gap-5 my-10">
        <div className="content shadow rounded-xl py-5 px-8 text-center">
          <h1 className="text-2xl font-bold">10</h1>
          <p className="text-gray-500 font-semibold">Total Friends</p>
        </div>
        <div className="content shadow rounded-xl py-5 px-8 text-center">
          <h1 className="text-2xl font-bold">3</h1>
          <p className="text-gray-500 font-semibold">On Track</p>
        </div>
        <div className="content shadow rounded-xl py-5 px-8 text-center">
          <h1 className="text-2xl font-bold">6</h1>
          <p className="text-gray-500 font-semibold">Need Altention</p>
        </div>
        <div className="content shadow rounded-xl py-5 px-8 text-center">
          <h1 className="text-2xl font-bold">12</h1>
          <p className="text-gray-500 font-semibold">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
}
