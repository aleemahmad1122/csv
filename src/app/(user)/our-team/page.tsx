"use client";
import * as C from "@/components/index";
import { FaLinkedin } from "react-icons/fa";
import ourTeam from "@/utils/ourTeam";

const page = () => {
  return (
    <main>
      <C.Hero
        url="#contact-form"
        btn={"tell us about your project"}
        heading="Unveiling Our Diverse Portfolio of Success Stories"
        poster="/banner-1.png"
      />

      <section className="bg-white  ">
        <div className="pt-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-TDarkBlue capitalize ">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl  ">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ourTeam.length > 0 &&
              ourTeam.map((v, i) => (
                <div key={i} className="text-center text-gray-500  ">
                  <img
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src={v.image}
                    alt="Bonnie Avatar"
                  />
                  <h3
                    onClick={() => window.open(v.url, "_blank")}
                    className="mb-1 text-2xl cursor-pointer hover:underline font-bold tracking-tight text-gray-900 uppercase"
                  >
                    {v.name}
                  </h3>
                  <p className="capitalize">{v.text}</p>
                  <ul className="flex justify-center mt-4 space-x-4">
                    <li
                      onClick={() => window.open(v.url, "_blank")}
                      className="text-Tblue capitalize hover:text-gray-900 cursor-pointer"
                    >
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
