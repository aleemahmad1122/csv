import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Info = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src={"/bnr2.png"}
        alt="banner"
        fill
        className="absolute top-0 left-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex justify-center flex-col px-4 md:px-8 text-white">
        <h1 className="text-TLightBlue md:text-4xl text-2xl font-semibold">
          Why Choose CyberSoft Vantage?
        </h1>

        <p className="py-8 md:w-[50%] text-justify">{`We embrace the future and are committed to helping you bring your vision to life. We give you an unfair advantage with access to 100+ passionate engineers with experience in 100+ technologies, in your timezone. Our tenacity and commitment to our customers’ success has been the cornerstone in helping them reach new levels of innovation and growth.`}</p>

        <Link href={"#contact-form"}>
          <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
            contact us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Info;
