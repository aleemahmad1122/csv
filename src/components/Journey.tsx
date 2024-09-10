"use client";
import { journey } from "@/constants/index";
import Image from "next/image";
import CountUp from "react-countup";

const Journey = () => {
  return (
    <section className=" ">
      <div className="container mx-auto   py-20 flex flex-wrap items-start justify-center md:justify-between gap-5 h-fit  px-0 ">
        <div className="w-full md:w-[40%]  h-[35rem] ">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 leading-relaxed md:leading-relaxed text-TDarkBlue  ">
            Realize your Vision Through Exceptional Customer Satisfaction
          </h1>

          <figure className="w-full h-[76%] relative ">
            <Image
              src={"/homeT.png"}
              alt="error"
              fill
              className="object-cover top-0 left-0 w-full h-full object-left"
            />
          </figure>
        </div>

        <div className="w-full md:w-[40%]    h-[35rem]">
          <h6 className="font-bold text-2xl text-TLightBlue leading-relaxed">{`We specialize in assisting start-ups, SMEs, and enterprises in business growth through embedded engineers and outsourced software development services.`}</h6>

          <p className=" my-4 text-justify">{`We excel in translating your vision into digital reality. Since 2019, we've been dedicated to providing top-tier custom services aimed at empowering you to innovate, expand, and lead within your industry.`}</p>

          <ul className="flex flex-wrap items-center md:justify-between justify-center px-10 gap-4  ">
            {journey.length > 0 &&
              journey.map((v, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 w-40"
                >
                  <span className="text-TLightBlue text-4xl">
                    <v.Icon />
                  </span>
                  <h1 className="text-4xl font-semibold text-TDarkBlue">
                    <CountUp
                      start={0}
                      end={v.count}
                      duration={4}
                      decimals={v.decimal ? 1 : 0}
                    />
                    {v.plus && "+"}
                  </h1>
                  <p className="text-xs text-gray-500 capitalize">{v.p}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
