import * as Con from '@/constants/index'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const SuccessSnippets = () => <section className='flex flex-col items-center gap-5 capitalize pt-20'>
    <h1 className='text-TDarkBlue text-xl sm:text-6xl font-bold capitalize'>success snippets</h1>
    <Marquee pauseOnHover={true}>
        <figure className='flex items-center py-20 mx-auto'>
            {Con && Con.marqueeImageLinks.map((v, i) => <Image
                width={130}
                height={130}
                alt='erro'
                key={i}
                src={v}
                className='mx-8 opacity-50 hover:opacity-100 duration-300 transition-all aspect-auto object-contain flex items-center justify-center object-center'
            />
            )}
        </figure>
    </Marquee>
</section>

export default SuccessSnippets