"use client";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { teamCards } from "@/constants/index";

const Team = () => (
  <section className="bg-white  ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 md:text-5xl text-3xl tracking-tight font-extrabold text-TDarkBlue">
          Our Team
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {teamCards.length > 0 &&
          teamCards.map((v, i) => (
            <div
              key={i}
              className="items-center bg-gray-50 rounded-lg duration-300 transition-all sm:flex group shadow-md hover:shadow-TDarkBlue overflow-hidden md:h-80 h-fit "
            >
              <figure className="w-full md:w-[600px] h-96 sm:h-full relative bg-gray-200">
                <Image
                  fill
                  className="w-full grayscale group-hover:grayscale-0 rounded-lg sm:rounded-none sm:rounded-l-lg object-cover invert-0 object-top group-hover:scale-105 duration-300 transition-all"
                  src={v.image}
                  alt={v.heading}
                />
              </figure>
              <div className="p-5 h-full lg:w-[90%]">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 capitalize">
                  {v.heading.toLowerCase()}
                </h3>
                <span className="text-gray-500 uppercase text-xs">
                  {v.tagline}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 capitalize ">
                  {v.description}
                </p>
                <FaLinkedinIn
                  onClick={() => window.open(v.linkedin, "_blank")}
                  className="cursor-pointer opacity-70 duration-300 transition-all hover:opacity-100"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Team;
