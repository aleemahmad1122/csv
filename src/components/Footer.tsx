import { socialLinks, companyName } from "@/constants/index";
import { Logo } from "@/components/index";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit bg-gradient-to-r from-TDarkBlue via-Tblue to-TLightBlue text-white py-2">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap items-center justify-between pb-8">
          <div className="w-[20rem] flex flex-col gap-4 pt-2">
            <figure className="flex items-center gap-2">
              <Image
                width={30}
                height={30}
                alt=""
                src={"/logo.png"}
                className="object-contain"
              />
              <Logo color={false} />
            </figure>
            <p className="w-full font-light text-sm text-justify">
              {companyName} is a software development and consulting company
              that builds, designs, and helps companies deliver market-leading
              experiences.
            </p>
          </div>

          <div>
            <Image
              width={200}
              height={200}
              alt=""
              src={"/mail.png"}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap py-10 border-0 border-gray-500 border-t-2 gap-2">
          <p>
            {" "}
            &copy; {currentYear} {companyName} all rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ul className="flex flex-wrap items-center sm:gap-4 gap-3">
              {socialLinks.length > 0 &&
                socialLinks.map((v, i) => (
                  <li
                    key={i}
                    className="w-fit h-fit bg-TDarkBlue rounded-full hover:bg-Tblue duration-300 transition-all"
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
