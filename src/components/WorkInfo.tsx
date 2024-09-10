import Image from "next/image";
import Link from "next/link";
import React from "react";
import { workCards } from "@/constants/index";
import { Button } from "./ui/button";
import Hero from "./Hero";

const WorkInfo = () => {
  const content = [
    {
      link: "/v1.mp4",
      title: "why we're the partner of choice for our clients",
      des: "why we're the partner of choice for our clients why we're the partner of choice for our clients why we're the partner of choice for our clients",
    },
    {
      link: "/v2.mp4",
      title: "why we're the partner of choice for our clients",
      des: "why we're the partner of choice for our clients why we're the partner of choice for our clients why we're the partner of choice for our clients",
    },
    {
      link: "/v3.mp4",
      title: "why we're the partner of choice for our clients",
      des: "why we're the partner of choice for our clients why we're the partner of choice for our clients why we're the partner of choice for our clients",
    },
    {
      link: "/v4.mp4",
      title: "why we're the partner of choice for our clients",
      des: "why we're the partner of choice for our clients why we're the partner of choice for our clients why we're the partner of choice for our clients",
    },
  ];

  return (
    <section>
      <div className="container relative mx-auto px-4  pt-20   gap-6">
        <h1 className="capitalize text-center font-bold sm:text-4xl text-TDarkBlue lg:w-[45%] sm:leading-relaxed mx-auto my-6">
          why we&apos;re the partner of choice for our clients
        </h1>
      </div>

      <div className="flex items-start justify-center px-4 flex-col gap-8 py-10">
        {content.map((v) => (
          <div key={v.link} className=" w-full flex flex-wrap gap-6">
            <div className="w-full  md:flex-1">
              <h1 className="capitalize font-bold text-TDarkBlue mb-3 md:text-3xl">
                {v.title}
              </h1>
              <p className="capitalize text-gray-600">{v.des}</p>
            </div>

            <div className="w-full md:w-[50%] overflow-hidden rounded-lg md:h-[30rem]">
              <video
                controls
                loop={true}
                muted={false}
                autoPlay={true}
                poster={"/contact-bg.png"}
                className="object-cover w-full h-full relative "
              >
                <source src={v.link} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkInfo;
