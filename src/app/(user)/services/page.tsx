import * as C from '@/components/index'
import { companyName, serviceCards } from '@/constants/index'


const Services = () => <><C.Hero
  text="enterprises growth companies startups"
  url="#contact-form"
  btn={'tell us about your project'}
  heading=" Discover Our Comprehensive Range of Services"
  poster="/banner-1.png" />

  <h1 className='text-xl sm:text-6xl text-TDarkBlue text-center font-bold capitalize pt-20'>what we do</h1>
  {serviceCards.length > 0 && serviceCards.map((v, i) => <C.Services key={i} bg={v.bg}
    description={v.description} heading={v.heading} services={v.services}
  />)}</>

export default Services



export const metadata = {
  title:`Services | ${companyName}`,
}