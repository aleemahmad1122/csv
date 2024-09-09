"use client"
import { Logo } from '@/components/index'
import { IoClose } from "react-icons/io5";
import { NavLink } from '@/types/index'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
    isOpen: boolean,
    setIsOpen: Function,
    navLinks: NavLink[]
}

const MobileMenu = ({ isOpen, setIsOpen, navLinks }: Props) => <aside className={`fixed h-screen w-screen xs:w-72 top-0 right-0 bg-black/95 z-50 px-8 py-4 duration-300 transition-all ${isOpen && 'translate-x-full'}`}>

    <div className="flex items-center justify-between">
        <Logo color={true} />

        <IoClose color='white' className='font-bold text-4xl cursor-pointer' onClick={() => { setIsOpen(!isOpen) }} />
    </div>

    <div className='pt-10 h-[80%] flex justify-between flex-col'>
        <ul className='w-full h-fit flex flex-col gap-7 text-white font-bold capitalize text-2xl'>
            {navLinks.length > 0 && navLinks.map((v, i) => (
                <li key={i} className='hover:text-TDarkBlue duration-300 transition-all w-fit'>
                    <Link onClick={() => { setIsOpen(!isOpen) }} href={v.link}>{v.title}</Link>
                </li>
            ))}
        </ul>
        <Link
            onClick={() => { setIsOpen(!isOpen) }}
            href="/contact-us" >
            <Button className="bg-Tblue hover:bg-TDarkBlue ">Contact Us</Button>
        </Link>
    </div>
</aside>

export default MobileMenu