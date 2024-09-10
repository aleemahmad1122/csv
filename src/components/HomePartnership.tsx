import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Pros {
  heading: string;
  description: string;
  image: string;
  className?: string;
  btn?: string;
  url?: string;
}

const HomePartnership = ({
  heading,
  description,
  image,
  className,
  btn,
  url = "",
}: Pros) => (
  <section>
    <div
      className={`container mx-auto px-4 flex flex-wrap items-center pt-20 sm:gap-4 ${
        className && className
      }`}
    >
      <div className=" flex-1">
        <h1 className="sm:text-4xl font-bold text-TDarkBlue capitalize">
          {heading}
        </h1>
        <p className="text-gray-500 text-xs sm: my-4">{description}</p>
        {btn && (
          <Link href={url}>
            <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
              {btn}
            </Button>
          </Link>
        )}
      </div>
      <figure className="relative w-full sm:flex-1 h-96 ">
        <Image src={image} alt={image} fill className="object-contain" />
      </figure>
    </div>
  </section>
);

export default HomePartnership;
