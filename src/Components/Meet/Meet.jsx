import { Meetdata } from "./Meetdata";
import React from "react";
import { Star } from "lucide-react";
import { img2, img3, img4, img5, img6 } from "../../assets/image";

const logos = [img2, img3, img4, img5, img6];

export default function Instructor() {
  const { title, name, bio, image, stats } = Meetdata;

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <img
          src={image}
          alt={name}
          className="w-[520px] rounded-2xl object-cover"
        />

        <div className="p-3">
          <h2 className="text-5xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-300 font-semibold text-md leading-relaxed mb-6 whitespace-pre-line">
            {bio}
          </p>

          {/* Stats */}
          <div className="space-y-4 gap-6 mb-8">
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Star size={16} className="text-purple-500" />
                <span className="font-semibold">{item.value}</span>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          {/*  */}
          <div className="overflow-hidden w-full  max-w-6xl mx-auto">
            <h1 className="text-gray-500 font-semibold mb-4 ">
              BRANDS EDUCATED
            </h1>
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((log) => {
                return <img src={log} alt="" className="h-8 px-6" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
