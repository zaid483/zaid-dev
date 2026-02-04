import React from "react";
import { img1 } from "../../assets/image";
import { Navdata } from "./Navdata";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full px-4 md:px-10 lg:px-20 lg:max-w-7xl lg:mx-auto py-4">
        <div className="flex justify-between items-center bg-white shadow-lg rounded-lg px-4 py-3">
          <img src={img1} alt="logo" className="h-8 sm:h-10" />

          <div className="hidden lg:flex items-center gap-5">
            {Navdata.map((data, index) => (
              <span key={index} className="text-black cursor-pointer">
                {data.title}
              </span>
            ))}
          </div>

          <button className="px-4 py-2 rounded-md text-white bg-[#6241eb] whitespace-nowrap">
            Enroll Now
          </button>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
