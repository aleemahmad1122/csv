import Image from 'next/image'
import React from 'react'
import * as T from '@/types/index'

const CompanyAbout = ({ heading, description, tagline, image }: T.CompanyAbout) => <section className='py-20 px-10'>

  <div className="container mx-auto md:px-20 px-8 rounded-md bg-black/90  flex flex-wrap justify-between">

    <div className='text-white capitalize w-96 py-32'>
      <h1 className='text-3xl font-bold'>{heading}</h1>
      <p className='text-xs my-6 leading-relaxed font-light'>{description}</p>
      <p className='uppercase'>{tagline}</p>
    </div>

    <figure className="relative w-96 h-[32rem] pt-8 hidden md:block mt-auto">

      <Image src={image} alt='error' className='object-cover h-full w-full bottom-0 ' fill />
    </figure>
  </div>

</section>

export default CompanyAbout