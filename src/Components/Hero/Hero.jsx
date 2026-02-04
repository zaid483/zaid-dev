import React from "react";
import { Video, CheckCheck, ShieldCheck } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const testimonials = [
  {
    name: "Jakob Geidt",
    role: "UI Designer @ Microsoft",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Aspen Geidt",
    role: "Visual Designer @ Netflix",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Daniel Novak",
    role: "Junior Designer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

export default function HeroPage() {
  return (
    <div className="bg-black w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-10">
          {/* Hero Text */}
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-[#2b2b2b] px-2 py-1 rounded-full mb-4">
              <button className="bg-[#cfd8ff] px-3 py-1 rounded-full text-sm font-medium">
                New
              </button>
              <p className="text-white text-sm">Registrations are now open!</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Master UI Design <br /> From Scratch
            </h1>

            <p className="font-semibold text-lg text-gray-200 mb-10">
              The only design course you need to be among top 1% designers.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button className="px-4 py-2 rounded-md text-white bg-[#6241eb]">
                Enroll Now
              </button>
              <button className="px-4 py-2 rounded-md text-black bg-white">
                See Curriculum
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <p className="text-white flex gap-1 items-center">
                <Video size={24} color="white" /> ONLINE
              </p>
              <p className="text-white flex gap-1 items-center">
                <CheckCheck size={24} color="white" /> HANDS-ON
              </p>
              <p className="text-white flex gap-1 items-center">
                <ShieldCheck size={24} color="white" /> CERTIFICATE
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="lg:w-1/2">
            <Splide
              options={{
                type: "loop",
                perPage: 2,
                focus: "center",
                gap: "1rem",
                autoplay: true,
                interval: 1000,
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                breakpoints: {
                  1024: { perPage: 2 },
                  768: { perPage: 1 },
                  640: { perPage: 1 },
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="relative rounded-2xl overflow-hidden h-[420px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-300">{item.role}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
