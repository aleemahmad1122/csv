import Image from "next/image";
import Link from "next/link";
import { ourPeople } from "@/constants/index";
import { Button } from "./ui/button";

const OurPeople = () => (
  <section className="py-20 h-fit">
    <div className="container mx-auto px-4 flex flex-wrap items-center gap-4 h-fit flex-col md:flex-row">
      <figure className="md:w-[49%] w-full h-96 relative md:-mr-16 overflow-hidden rounded-md hover:rounded-3xl transition-all duration-300 ">
        <Image
          src={ourPeople.image}
          alt={ourPeople.heading}
          fill
          className="object-top object-cover"
        />
      </figure>

      <div className="flex-1 bg-gray-100 md:p-20  p-6 rounded-md">
        <h1 className="font-bold text-TDarkBlue sm:text-4xl text-xl sm:leading-relaxed leading-relaxed capitalize">
          {ourPeople.heading}
        </h1>
        <p className="my-6 text-gray-600 sm:text-sm text-xs ">
          {ourPeople.description}
        </p>
        <Link href={ourPeople.url}>
          <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
            {ourPeople.btn}
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default OurPeople;
