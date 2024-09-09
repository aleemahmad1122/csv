import { jobsCard } from "@/constants/index";
import Link from "next/link";

const Jobs = () => {
  return (
    <section className="w-full h-fit">
      <div className="container mx-auto px-4 bg-white py-20 w-full h-fit">
        <div className="flex gap-4 flex-wrap items-center justify-center w-full h-fit">
          {jobsCard.length > 0 &&
            jobsCard.map((v, i) => (
              <Link
                href={`careers/${v.url}`}
                key={i}
                className="block flex-1 h-52 bg-gray-100 py-14 px-8 border border-gray-300  group hover:bg-TDarkBlue transition-all duration-300 hover:rounded-md hover:scale-105"
              >
                <div className="flex justify-between h-full w-full">
                  <h1 className="font-bold   capitalize duration-300 transition-all group-hover:text-white">
                    {v.heading}
                  </h1>{" "}
                  <span
                    className="text-TDarkBlue w-10 group-hover:text-TLightBlue transition-all duration-300  items-center flex justify-end 
                  "
                  >
                    <v.Icon />
                  </span>
                </div>
                {/* <p className='text-gray-600 text-xs transition-all duration-300 group-hover:text-gray-300'>{v.location}</p> */}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
