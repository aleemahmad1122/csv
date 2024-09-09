"use client"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { formValidation, formInputs, formInfo } from '@/constants/index'
import { Button } from './ui/button';
import { FormValues } from '@/types/index'
import Image from 'next/image';
import emailjs from "@emailjs/browser"
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, handleBlur, touched, errors, values, } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
    validationSchema: Yup.object(formValidation),
    onSubmit: async (formValues) => {
      setIsLoading(true);
    
      const templateParams = {
        to_name: "tech flow team",
        from_name: `name: ${formValues.fullName}, email: ${formValues.email} and organization: ${formValues.organization}` ,
        message: formValues.message
      };
    
      try {
        const res = await emailjs.send(
          "service_l4tn9vr",
          "template_sbrpmb8",
          templateParams,
          "nHvx1qQWN8Rleb-Jm"
        ); 
        console.log(res);
        
        const { status } = res;
    
        if (status === 200) {  
          toast.success("Your message successfully submitted");
        } else {
          toast.error("Failed to submit message");
        }
        setIsLoading(false);
      } catch (error:any) {
        toast.error(error.message);
        setIsLoading(false);
      } 
    },
    
  });
  return <section className=' sm:pb-20' id='contact-form'>

    <div className="container mx-auto px-4 flex flex-wrap items-center">

      <div className='bg-gray-100 border-gray-200 border-1 sm:p-16 p-8 rounded-lg flex flex-col w-full gap-10 md:w-[60rem]'>
        <h1 className='font-semibold sm:text-3xl text-xl capitalize'>ready to get started?</h1>

        <form onSubmit={handleSubmit} className='flex gap-6 flex-wrap justify-between'>

          {formInputs.map((v, i) => <div key={i} className={`h-18 flex flex-col gap-1 w-full ${v.name === 'message' ? 'w-full' : 'md:w-[48%]'}`}>

            <v.field
              placeholder={v.label}
              type={v.type}
              name={v.name}
              id={v.name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values[v.name as keyof FormValues]}
              className={`bg-white w-full`}
            />
            {touched[v.name as keyof FormValues] && errors[v.name as keyof FormValues] && (
              <div className="text-red-500 text-xs">{errors[v.name as keyof FormValues]}</div>
            )}
          </div>)}

          <Button type='submit' disabled={isLoading} className={`bg-Tblue hover:bg-TDarkBlue w-full`}>
            {isLoading ? 'Sending' : 'Send'}
          </Button>
        </form>
      </div>

      <div className='p-10 md:flex-1 w-full relative'>
        <div className='flex gap-3 w-fit h-fit justify-center pt-10 border-0 border-gray-200 border-t-2 px-2 mx-auto'>
          <figure className='rounded-full w-10  h-10  overflow-hidden relative'>
            <Image src={formInfo.image} fill className='w-[60%] h-[60%] flex items-center justify-center object-contain absolute top-0 left-0' alt={formInfo.title} />
          </figure>
          <div className='capitalize'>
            <figcaption className='font-semibold'>{formInfo.title}</figcaption>
            {/* <p className='font-semibold text-xs text-gray-700'>{formInfo.heading}</p> */}
            <p onClick={() => window.open(`mailto:${formInfo.link.url}`, '_blank')} className='lowercase text-gray-500 text-xs mt-2 cursor-pointer hover:underline'>{formInfo.email}</p>
            <p onClick={() => window.open(`tel:${formInfo.phone}`, '_blank')} className='text-gray-500 text-xs cursor-pointer hover:underline my-1'>{formInfo.phone}</p>
            <p className='cursor-pointer hover:opacity-70' onClick={() => window.open(formInfo.link.url, '_blank')}><formInfo.link.Icon /></p>
          </div>
        </div>
      </div>

    </div>
    <Toaster />
  </section>

}

export default Form