import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#244D3F]">
      <div className="container m-auto">
        <div className="text-center text-white py-10 space-y-2">
          <h1 className="text-3xl font-bold">Keenkeeper</h1>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, <br />
            and nurture the relationships that matter most.
          </p>
          <p className="font-bold text-xl">Social Links</p>
          <div className="icon flex gap-5 justify-center text-3xl mt-5">
            <div className="ico">
              <FaInstagram />
            </div>
            <div className="ico">
              <FaFacebook />
            </div>
            <div className="ico">
              <FaXTwitter />
            </div>
          </div>
        </div>

        <div className=" text-white flex justify-between py-3">
          <div className="first">
            <h1>© 2026 Md Faruk. All rights reserved.</h1>
          </div>
          <div className="sec">
            <ul className=" flex gap-10">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
