import React from "react";
import { img2, img3, img4, img5, img6 } from "../../assets/image";
import { Reviewsdata } from "./Reviewsdata";

const logos = [img2, img3, img4, img5, img6];

export default function Reviews() {
  return (
    <div className="mx-w-7xl mx-auto">
      <div className="text-center mb-12 mt-5 w-full sm:w-full lg:w-1/2 mx-auto">
        <button className="mt-10 px-4 py-2 rounded-full mb-5 text-white bg-[#6241eb] whitespace-nowrap">
          Why Educore?
        </button>
        <h1 className="font-bold text-4xl mb-5">
          Our Alumni work at companies like Google, Nike, and Duolingo
        </h1>
        <p className="font-semibold text-gray-700">
          Our alumni of students means everything to us and we're grateful to
          have placed designers in Nasa, Google, Revolut and more amazing teams
          around the world
        </p>
        <div className="flex flex-wrap items-center justify-center mt-10 gap-3 mb-10">
          <button className="px-4 py-2 rounded-md text-white bg-[#6241eb]">
            Enroll Now
          </button>
          <button className="px-4 py-2 rounded-md text-black bg-white">
            See Curriculum
          </button>
        </div>
      </div>
      {/*  */}
      <div className="overflow-hidden w-full max-w-6xl mx-auto bg-white ">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-8 px-8 object-contain flex-shrink-0 filter grayscale brightness-0"
            />
          ))}
        </div>
      </div>
      {/* bleed layout ended */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-3 items-center justify-center mt-10">
          {Reviewsdata.map((Rev, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-[42%] lg:w-[30%] shadow-xl p-10 rounded-md flex flex-col"
              >
                <img src={Rev.img} alt="" width={120} className="mb-3" />

                <p className="text-gray-700 font-semibold mb-5">{Rev.para}</p>

                <div className="flex items-center gap-3 mt-auto">
                  <img src={Rev.img2} alt="" />
                  <div>
                    <h4 className="font-semibold">{Rev.name}</h4>
                    <p className="text-gray-700">{Rev.career}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
