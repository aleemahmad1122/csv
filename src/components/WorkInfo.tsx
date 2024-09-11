import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkInfo = () => {
  const content = [
    {
      link: "/v1.mp4",
      title: "GEMINI ENERGY SOLUTIONS",
      des: "With increased focus on clean energy, CSV has worked with California based Green Energy Satrtup called Gemini Emergy Solutions for which we have developed a web application from that provides energy consultancy to corporate and residential clients with use of IoTs and Machine Learning",
    },
    {
      link: "/v2.mp4",
      title: "CARGOMATIC",
      des: `Our team of Solution Architects and Engineers played a crucial role towards development of one of the leading cargo management apps in the US called Cargomatic.

Cargomatic connects shippers with available truck drivers to move goods efficiently within short distances.

From architecture design, to both frontend and backend development, and databse design our team significantly contributed towards the product development.`,
    },
    {
      link: "/v3.mp4",
      title: "DrFirst",
      des: "Worked on a Electronic Health Record app that is integrated with various medical data sources to provide more accurate real time data for medical practitioners. In later iterations of the app, used AI tools to embed medical imagining and diagnostics features.",
    },
    {
      link: "/v4.mp4",
      title: "Digital Desk",
      des: "Digital Desk, a US EdTech startup,  developed a patent-protected virtual exam and invigilation technology with the help of our team.",
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
        {content.map((v, i) => (
          <div key={v.link} className=" w-full flex flex-wrap gap-6">
            <div className={`w-full  md:flex-1 ${i % 2 !== 0 && "order-2"}`}>
              <h1 className="capitalize font-bold text-TDarkBlue mb-3 md:text-3xl text-justify">
                {v.title}
              </h1>
              <p className="capitalize text-gray-600 text-justify ">{v.des}</p>
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
