import * as T from '@/types/index'
import { ServiceDetailCard } from '@/components/index'
import Image from 'next/image'

interface Pros {
    data: T.ServiceDetailCard
}


const ServiceDetailInfo = ({ data }: Pros) => <>


    <div className="container mx-auto px-8 md:px-20 flex flex-wrap items-center justify-center lg:justify-between">

        <div className='w-full lg:w-[60%]'>
            {data.heading && <h1 className="font-bold sm:text-4xl text-TDarkBlue capitalize pt-20">{data.heading}</h1>}

            {data.description && <p className="sm:text-2xl text-xs sm:leading-relaxed text-gray-600 my-6">{data.description}</p>}
        </div>

        <figure className='h-96 w-96 relative'>
            <Image className='w-full h-full top-0 left-0 object-contain' src={'/service.png'} alt='error' fill />
        </figure>

    </div>
    {data.cardsData.map((v, i) => <ServiceDetailCard cardData={v} key={i} />)}

</>

export default ServiceDetailInfo