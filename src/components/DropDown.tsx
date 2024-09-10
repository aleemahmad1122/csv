"use client";
import { serviceCards } from "@/constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const path: string[] = pathname.split("/");

  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 500);
  }, [pathname]);

  return (
    <div
      className={` ${isOpen && "group-hover:h-[80dvh] group-hover:p-8"}
        rounded-md fixed  w-0 bg-gray-100 shadow-md  translate-y-6 z-[200] overflow-hidden duration-300 transition-all h-0 group-hover:w-[85dvw] left-1/2 -translate-x-1/2`}
    >
      <div className="w-full h-full overflow-y-auto flex flex-wrap gap-8">
        {serviceCards.length > 0 &&
          serviceCards.flatMap((v, i) => (
            <div key={i} className="w-[20rem]">
              <h1 className="font-bold text-2xl capitalize mb-4 text-TDarkBlue">
                {v.heading}
              </h1>

              <ul className="flex flex-wrap gap-6 items-center justify-between">
                {v.services.length > 0 &&
                  v.services.map((v, index) => (
                    <li
                      key={index}
                      className={`${
                        path.includes(v.url) ? "text-Tblue" : "text-gray-800"
                      }  cursor-pointer  w-full transition-all duration-300 hover:text-Tblue`}
                    >
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={
                          path.includes("service") ? v.url : `service/${v.url}`
                        }
                      >
                        {v.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDown;
