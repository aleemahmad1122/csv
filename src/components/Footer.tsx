"use client";
import { socialLinks, serviceCards } from "@/constants/index";
import { Logo } from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const path: string[] = pathname.split("/");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative mt-16 bg-Tblue">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-Tblue"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12  container mx-auto">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <figure className="flex items-center gap-2">
              <Image
                width={30}
                height={30}
                alt=""
                src={"/3dlogo.png"}
                className="object-contain"
              />
              <Logo color={false} />
            </figure>
            <div className="mt-4 lg:max-w-sm">
              <p className=" text-gray-300 text-sm">
                We specialize in assisting start-ups, SMEs, and enterprises in
                business growth through embedded engineers and outsourced
                software development services.
              </p>
              <p className="mt-4  text-gray-300 text-sm">
                CSV cultivates strategic partnerships with top technology
                providers to enhance our solutions significantly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {serviceCards.slice(0, 4).map((category, index) => (
              <div key={index}>
                <p className="font-bold mb-2 tracking-wide text-white text-xl">
                  {category.heading}
                </p>
                <ul className="mt-2 space-y-2">
                  {category.services.slice(0, 6).map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={
                          path.includes("service")
                            ? link.url
                            : `service/${link.url}`
                        }
                        className="transition-colors duration-300 text-gray-300 hover:text-white text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className=" text-gray-100 text-sm">
            © Copyright {currentYear} CyberSoft Vantage. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ul className="flex flex-wrap items-center sm:gap-4 gap-3">
              {socialLinks.length > 0 &&
                socialLinks.map((v, i) => (
                  <li
                    key={i}
                    className="w-fit h-fit hover:bg-TLightBlue text-white rounded-full hover:text-TDarkBlue duration-300 transition-all"
                  >
                    <Link
                      href={v.url}
                      target="_blank"
                      className="text-xs sm:text-xl flex items-center justify-center sm:p-2 sm:h-8 h-5 sm:w-8 w-5"
                    >
                      <v.Icon />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
