import React from "react";
import { Coursedata, online } from "./Coursedata";
import { CheckLine } from "lucide-react";
import { img7 } from "../../assets/image";

export default function Course() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full lg:w-1/2">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-black mb-10">
            The only design course you need to be among top 1% designers
          </p>

          <div className="flex gap-3 mb-10">
            <button className="px-5 py-2 rounded-md text-white bg-[#6241eb]">
              Enroll Now
            </button>
            <button className="px-5 py-2 rounded-md text-black bg-white shadow-xl">
              See Curriculum
            </button>
          </div>

          <div>
            {Coursedata.map((course, index) => (
              <div key={index} className="flex items-center gap-2 mb-3">
                <CheckLine className="text-[#6241eb]" />
                <p className="text-gray-800  text-base sm:text-lg">
                  {course.lists}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex ">
          <img src={img7} alt="" className="w-full rounded-xl" />
        </div>

        <div className="w-full lg:w-1/2 p-4">
          {online.map((on, index) => (
            <div key={index} className="mb-4">
              <img src={on.img} alt="" className="mb-2" />
              <h3 className="font-semibold text-lg mb-2">{on.title}</h3>
              <p className="text-gray-600 text-md font-semibold">{on.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <iframe
          width="1185"
          height="654"
          className="rounded-xl "
          src="https://www.youtube.com/embed/8AHPXm9Y6mI"
          title="That’s Framer: The pro site builder loved by designers"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
