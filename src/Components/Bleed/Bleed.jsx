import React from "react";
import { img2, img3, img4, img5, img6 } from "../../assets/image";

const logos = [img2, img3, img4, img5, img6];

export default function LogoMarquee() {
  return (
    <div className="bg-black py-10">
      <div className="overflow-hidden w-full  max-w-6xl mx-auto">
        <h1 className="text-gray-500 font-semibold mb-4 ">FEATURED ON</h1>
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-10 px-8 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
