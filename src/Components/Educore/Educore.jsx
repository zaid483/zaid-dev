import React from "react";
import { Educoredata } from "./Educoredata";

export default function Educore() {
  return (
    <div className="w-full px-4">
      <div className="text-center mb-5">
        <button className="px-4 py-2 rounded-full mb-5 text-white bg-[#6241eb] whitespace-nowrap">
          Why Educore?
        </button>
        <h1 className="font-bold text-4xl">Why you should choose us</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:max-w-7xl + lg:mx-auto">
        {Educoredata.map((edu, index) => (
          <div key={index} className="w-full sm:w-[48%] lg:w-[32%] p-5">
            <div className="flex  gap-4">
              <img src={edu.img} alt="" className="w-[35px] h-[35px] " />

              <div className="">
                <h3 className="text-xl font-semibold leading-tight mb-2">
                  {edu.title}
                </h3>
                <p className="text-gray-600 ">{edu.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
