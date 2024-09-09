"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Pros {
  heading: string;
  url?: string;
  btn?: string;
  video?: string;
  poster: string;
  text?: string;
}

const Hero: React.FC<Pros> = ({ heading, url, btn, video, poster, text }) => {
  const p: string[] | undefined = text?.split(" ");

  return (
    <section className="relative">
      <div className="w-full h-screen bg-black">
        <video
          className="object-cover w-full h-full relative opacity-50"
          autoPlay={true}
          playsInline={true}
          loop={true}
          muted={true}
          poster={poster}
        >
          {video && <source src={video} type="video/mp4" />}
        </video>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white capitalize text-2xl sm:text-[4dvw] text-center flex-col gap-3">
        {heading && (
          <h1 className="font-bold leading-tight px-4 md:px-8 ">{heading}</h1>
        )}

        {text && (
          <h6 className="text-2xl flex justify-center items-center flex-wrap gap-3 capitalize text-center">
            {p![0]} <div className="bg-white rounded-full w-2 h-2 mt-2" />{" "}
            {p![1]}
            <div className="bg-white rounded-full w-2 h-2 mt-2" />
            {p?.splice(2).join(" ")}
          </h6>
        )}

        {btn && url && (
          <Link href={url}>
            <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
              {btn}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
