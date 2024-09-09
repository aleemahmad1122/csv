import Image from "next/image"

const CompanyValues = () => <section className="bg-TDarkBlue">
      <div className="container mx-auto px-4 py-20 h-screen flex flex-col gap-10">
        <h1 className="text-white capitalize text-center font-semibold text-4xl">Values that drive us</h1>
        <figure className="w-full h-full relative">
          <Image src={'/values.png'} alt="error"  fill className="object-contain" />
        </figure>
      </div>
    </section>

export default CompanyValues