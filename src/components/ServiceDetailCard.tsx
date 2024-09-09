import { CardsData } from '@/types/index'

interface Pros {
    cardData: CardsData
}

const ServiceDetailCard = ({ cardData }: Pros) => <section
    className={`${cardData.bg && 'bg-gray-100'} pt-20 px-4 `}>

    {cardData.heading && <h1 className='text-Tblue md:text-3xl font-bold text-center pb-14'>{cardData.heading}</h1>}
    {cardData.description && <p className=' font-semibold my-6 capitalize text-sm md:text-2xl md:leading-relaxed text-gray-800 pb-5 md:px-4 '>{cardData.description}</p>}
    <ul className='flex flex-wrap justify-center items-center gap-8 my-6'>
        {cardData.data.length > 0 && cardData.data.map((v, i) => <li key={i} className='w-96 h-80 border border-gray-600 p-4 md:p-8 rounded-lg bg-gray-200 overflow-hidden overflow-y-auto pb-2'>

            <span className='text-Tblue md:text-3xl text-2xl'><v.Icon /></span>
            <h1 className='font-semibold md:text-2xl text-xl my-4'>{v.title}</h1>
            <p className=''>{v.description}</p>

        </li>)}
    </ul>

</section>


export default ServiceDetailCard