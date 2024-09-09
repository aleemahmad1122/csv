import Image from "next/image"
import { teamCards } from "@/constants/index"
import Link from "next/link"
interface Pros {

}

const ServiceWorkCard = ({ }: Pros) => <section className="py-20">
    <div className="container mx-auto px-4">

        <h1 className="text-TDarkBlue font-bold md:text-3xl text-xl capitalize mb-10">
            what works <span className="text-Tblue">best for you?</span>
        </h1>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {teamCards.length > 0 && teamCards.map((v, i) => <div key={i} className="items-center bg-gray-50 rounded-lg duration-300 transition-all sm:flex group shadow-md hover:shadow-TDarkBlue overflow-hidden h-80 ">
                <figure className="w-full h-36 sm:h-full relative ">
                    <Image
                        fill
                        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover invert-0 object-top group-hover:scale-105 duration-300 transition-all"
                        src={v.image}
                        alt={v.heading}
                    />
                </figure>
                <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 capitalize">
                        {v.heading}
                    </h3>
                    <span className="text-gray-500 capitalize">
                        {v.tagline}
                    </span>
                    <p className="mt-3 mb-4 font-light text-gray-500 capitalize">
                        {v.description}
                    </p>

                    <Link href={''} className="">

                    </Link>

                </div>
            </div>
            )}
        </div>

    </div>

</section>


export default ServiceWorkCard