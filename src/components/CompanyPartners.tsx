import { companyCard } from '@/constants/index'

const CompanyPartners = () => {
  return (
    <section>
      <div className="contianer mx-auto px-4 bg-gray-100 py-20">
        <h1 className='capitalize text-center font-bold sm:text-4xl text-TDarkBlue lg:w-[45%] sm:leading-relaxed mx-auto my-6'>
          why we&apos;re the partner of choice for our clients
        </h1>
        <div className="flex gap-4 flex-wrap">
          {
            companyCard.length > 0 && companyCard.map((v, i) => (
              <div key={i} className='bg-white p-14 border border-gray-300 flex-1 group hover:bg-TDarkBlue transition-all duration-300'>
                <div className='flex items-center gap-3 mb-5'> <span className='text-4xl text-TLightBlue'><v.Icon /></span> <h1 className='font-semibold text-TDarkBlue capitalize group-hover:text-white duration-300 transition-all'>{v.heading}</h1> </div>
                <div>
                  <p className='capitalize text-gray-600 text-xs leading-relaxed ps-4 border-0 border-s border-TDarkBlue group-hover:border-white duration-300 transition-all group-hover:text-gray-200'>{v.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div> 
    </section>
  )
}

export default CompanyPartners