"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import Link from "next/link";

interface ExampleContentProps {
  h: string;
  p1: string;
  p2: string;
  btn: string;
  url: string;
}

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="/bnr2.png"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent
          btn="contact us"
          h="Why Choose CyberSoft Vantage?"
          p1="We embrace the future and are committed to helping you bring your vision to life. We give you an unfair advantage with access to 100+ passionate engineers with experience in 100+ technologies, in your timezone. Our tenacity and commitment to our customers’ success has been the cornerstone in helping them reach new levels of innovation and growth."
          p2=""
          url="/contact-us"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent
          btn="learn more!"
          h="Discover Our Stellar Team at CSV"
          p1="CSV is fueled by a diverse team of more than 100 professionals spread across two global offices. With a track record of over 150 successful projects and an outstanding rating of 4.9, we are recognized for our unwavering commitment to excellence."
          p2="Our team blends expertise from diverse backgrounds, united by a common goal of pioneering innovation and surpassing client aspirations. Each success story at CSV is crafted by talented individuals who form the cornerstone of our accomplishments. Join us as we embark on a journey of innovation and unparalleled achievement"
          url="/company"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ btn, h, p1, p2, url }: ExampleContentProps) => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{h}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{p1}</p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">{p2}</p>
        <Link href="/contact-us" className="block">
          <Button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit capitalize text-center flex items-center justify-center gap-4">
            {btn} <FiArrowUpRight className="inline" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TextParallaxContentExample;
