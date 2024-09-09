import Image from "next/image";
import Link from "next/link";
import React from "react";
import { workCards } from "@/constants/index";
import { Button } from "./ui/button";

const WorkInfo = () => (
  <section>
    <div className="container relative mx-auto px-4 flex justify-between items-start pt-20 flex-wrap gap-6">
      <div className="md:w-[38rem] md:pe-20 xl:sticky top-32 left-0">
        <h1 className="sm:text-4xl text-2xl text-TDarkBlue font-bold capitalize leading-relaxed">
          Creating value for your business
        </h1>
        <p className="font-extralight mt-6">
          We believe in the possibility of what can be. Our experts have been
          providing solutions over the last Year that have helped businesses
          like yours expand at a rapid scale.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:w-[38rem] gap-4">
        {workCards.length > 0 &&
          workCards.map((v, i) => (
            <div
              key={i}
              className="flex flex-1 md:w-72 group flex-col items-center p-8 border border-gray-300 justify-between rounded-md duration-300 transition-all hover:rounded-lg hover:scale-105"
            >
              <Image src={v.image} alt="error" width={150} height={150} />
              <p className="text-xs overflow-x-hidden overflow-y-auto h-24 flex justify-center flex-col">
                {v.text.slice(0, 70)}...
              </p>

              <Link href={v.url}>
                <Button className="capitalize transition-all duration-300 group-hover:bg-TDarkBlue">
                  {"view case study"}
                </Button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default WorkInfo;
