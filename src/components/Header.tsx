"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo, MobileMenu, DropDown } from "@/components/index";
import { navLinks, socialLinks } from "@/constants/index";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled && "glass py-2"
      } fixed inset-x-0 z-50 duration-300 transition-all`}
    >
      <nav className="py-2.5 ">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 ">
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
          <div className="flex items-center lg:order-2">
            <div className="hidden lg:flex">
              <Button
                onClick={() => router.push("/contact-us")}
                className="bg-Tblue hover:bg-TDarkBlue hidden sm:block"
              >
                Contact Us
              </Button>
              <ul className="flex flex-wrap items-center sm:gap-4 gap-3 ml-3">
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
            <HiOutlineMenuAlt3
              color="white"
              className="font-bold text-4xl cursor-pointer lg:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />

            <MobileMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              navLinks={navLinks}
            />
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.length > 0 &&
                navLinks.map((v, i) => (
                  <li
                    key={i}
                    className={`${
                      v.link == pathname
                        ? "text-TLightBlue font-bold"
                        : "nav text-white"
                    }  cursor-pointer capitalize duration-300 transition-all relative before:h-1 before:bg-Tblue before:absolute before:-bottom-1 before:duration-300 before:w-0 before:transition-all before:left-0 before:rounded-full hover:before:w-full group`}
                  >
                    <span
                      className="w-full h-full"
                      onClick={() => router.push(v.link)}
                    >
                      {" "}
                      {v.title}
                    </span>
                    {v.menu && <DropDown />}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
