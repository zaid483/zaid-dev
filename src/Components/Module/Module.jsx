import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Moduledata } from "./Moduledata";
import { img10 } from "../../assets/image";

export default function CourseOverview() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-5 mt-10">
      <div className="text-center mb-12 mt-5">
        <button className="mt-10 px-4 py-2 rounded-full mb-5 text-white bg-[#6241eb] whitespace-nowrap">
          Why Educore?
        </button>
        <h1 className="font-bold text-4xl">Why you should choose us</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-10 justify-center">
        <div className="w-full lg:w-2/4">
          <h2 className="text-3xl font-semibold mb-6">
            What you’ll learn in this course
          </h2>

          <div className="space-y-3">
            {Moduledata.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-lg">
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.title}</span>
                  <Plus
                    className={`transition ${
                      active === index ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-5 pb-4 text-sm text-gray-400">
                    {item.lessons}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="bg-indigo-600 rounded-xl p-6 w-full ">
            <p className="text-xl font-bold opacity-80 mb-1">Course</p>
            <h3 className="text-5xl font-bold mb-2">$99</h3>
            <h4 className="text-sm font-bold opacity-80 mb-4">
              2 days left at this price
            </h4>

            <div className="bg-gray-300 text-black rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-1">
                Design Mastery: The Ultimate UX/UI
              </h4>
              <p className="text-sm text-gray-800">
                Learn UX/UI design from scratch with real-world projects.
              </p>
            </div>

            <ul className="text-sm space-y-3 mb-6">
              <li>✔ Lifetime access</li>
              <li>✔ Downloadable resources</li>
              <li>✔ Certificate of completion</li>
              <li>✔ Certificate of completion</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90">
              Enroll Now
            </button>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
}
