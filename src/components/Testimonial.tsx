import { testimonial } from "@/constants/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const Testimonial = () => (
  <section className="py-20 bg-gray-100">
    <h1 className="md:text-4xl text-xl pb-10 font-bold text-TDarkBlue capitalize text-center">
      our testimonial
    </h1>

    <div className="flex items-center justify-center overflow-x-hidden  mx-auto  px-4 ">
      <div className="w-[80%]">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonial &&
              testimonial.map((v, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="sm:p-6 p-3 border-gray-400 border h-72 overflow-y-auto   w-full rounded-lg">
                    <span className="text-Tblue text-2xl">
                      <v.Icon />
                    </span>

                    <p className="my-4 text-gray-500 capitalize text-xs w-full h-20 overflow-x-hidden overflow-y-auto text-wrap">
                      {v.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <figure>
                        <Image
                          src={v.image}
                          alt="error..."
                          width={50}
                          height={50}
                          className="rounded-full border border-Tblue p-1 object-cover"
                        />
                      </figure>
                      <div className="mt-auto">
                        <h1 className="sm:text-2xl text-TDarkBlue font-semibold text-xs">
                          {v.heading}
                        </h1>
                        <p className="text-xs text-gray-500">{v.tagLine}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
);

export default Testimonial;
