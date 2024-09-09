"use client";
import Image from "next/image";
import Link from "next/link" 

const Logo = ({ color }: { color: boolean }) => {

    const logo: string = 'CyberSoft Vantage'


    return (
        <Link href={'/'}>

            <figure
                className='flex items-center h-fit w-fit gap-1'>
             {false && <Image
                    alt={logo}
                    width={50}
                    height={50}
                    className='object-contain'
                    src={'/white-logo.png'} />}
                <figcaption
                    className={`${color ? 'text-Tblue' : 'text-white'} font-bold text-2xl `}>CyberSoft <span className='text-primary text-white'> Vantage</span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default Logo