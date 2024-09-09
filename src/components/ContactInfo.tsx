import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactInfo: React.FC = () => (
  <section className="py-20 bg-gray-100">
    <div className="container px-4 mx-auto">
      <h1 className="text-xl text-TDarkBlue md:text-5xl text-center font-bold capitalize">Keep in Touch with Us</h1>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="w-full h-fit">

          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full border-0 grayscale rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1798521443284!2d73.03429577453048!3d33.65250143873412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95d9200b7931%3A0x4cf6b7c45b15660c!2sCyber%20Soft%20Vantage%20-%20CSV!5e0!3m2!1sen!2s!4v1714129438717!5m2!1sen!2s"
              width="100%"
              height={480}
              loading="lazy"
            />
          </div>

          <div className="max-w-full pt-8 mx-auto rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="">
              <div className="py-4">
                <h3 className="text-5xl text-gray-900 font-bold">Contact</h3>
                <div className="my-8 capitalize text-gray-900 text-3xl font-semibold">
                  Pakistan
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2"><IoMail /></div>

                <div className="">
                  <p className="mt-1 text-gray-600">
                    <a href="mailto:info@cybersoftvantage.com">Email: info@cybersoftvantage.com</a>
                  </p>
                  <p className="mt-1 text-gray-600">
                    <a href="mailto:hr@cybersoftvantage.com">Email: hr@cybersoftvantage.com</a>
                  </p>
                </div>
              </div>



              <div className="flex flex-wrap items-center gap-4 my-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2"><FaPhoneAlt /></div>

                <div className="">
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+92-51-613-1111">Phone: +92-51-613-1111</a>
                  </p>
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+92-51-613-1111">Phone: +92-333-561-4455</a>
                  </p>
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+92-51-613-1111">Phone: +92-332-531-2130</a>
                  </p>
                </div>
              </div> 


              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2">
                  <FaLocationDot /></div>

                <div className="">
                  <p className=" text-gray-600">
                    94-A, Street #07, Sector I-10/3, Islamabad, Pakistan, 44000.
                  </p>
                </div>
              </div> 

            </div>
            

            
            <div className="">
              <div className="py-4">
                <h3 className="text-5xl text-transparent font-bold">Contact</h3>
                <div className="my-8 capitalize text-gray-900 text-3xl font-semibold">
          USA
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2"><IoMail /></div>

                <div className="">
                  <p className="mt-1 text-gray-600">
                    <a href="mailto:info@cybersoftvantage.com">Email: info@cybersoftvantage.com</a>
                  </p>
                  <p className="mt-1 text-gray-600">
                    <a href="mailto:hr@cybersoftvantage.com">Email: hr@cybersoftvantage.com</a>
                  </p>
                </div>
              </div>

 


              <div className="flex flex-wrap items-center gap-4 my-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2"><FaPhoneAlt /></div>

                <div className="">
                  <p className=" text-gray-600">
                    <a href="tel:+1-703-770-8059">Phone: +1-703-770-8059</a>
                  </p>
                </div>
              </div>

 

              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-full h-8 w-8 border-TDarkBlue text-TDarkBlue flex flex-wrap items-center justify-center border-2"><FaLocationDot /></div>

                <div className="">
                  <p className="mt-1 text-gray-600">
                    Renova Terrace, Ashburn, VA, USA, 20147.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
);

export default ContactInfo;
