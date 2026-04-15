import React from "react";
import { NavLink } from "react-router";

export default function Friend({ Data }) {
  return (
    <NavLink to={`detels/${Data.id}`} className="p-5 shadow-md rounded-xl">
      <div className="img">
        <img
          className="h-20 m-auto rounded-full mb-3"
          src={Data.picture}
          alt=""
          srcset=""
        />
      </div>
      <div className="text text-center space-y-3">
        <h1 className="font-bold text-xl">{Data.name}</h1>
        <p className="font-semibold text-gray-500">
          {Data.days_since_contact}d ago
        </p>
        <div className="flex gap-3 justify-center">
          {Data.tags.map((tag, index) => (
            <p
              key={index}
              className="bg-green-100 text-green-500 py-1 px-3 rounded capitalize font-semibold line-clamp-1"
            >
              {tag}
            </p>
          ))}
        </div>
        <div>
          <p
            className={` ${Data.status == "almost due" ? "bg-[#EFAD44]" : Data.status == "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"} text-white py-1 px-3 rounded capitalize font-semibold inline-block`}
          >
            {Data.status}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
