import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Contact({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative overflow-hidden  h-screen 
             text-left
             md:flex-row
             max-w-full
             md:px-10
             justify-evenly
             mx-auto
             items-center
            "
    >
      <h3 className="absolute header-title">
        Contact
      </h3>


      <div className="relative w-full justify-center   flex items-center ">
        <img
        className="w-full md:w-1/2 object-center	"
        src={urlFor(pageInfo?.cityImage).url()} />
        <div className="absolute bottom-0 left-0 right-0 px-4   opacity-90 py-20">
        <div className="flex flex-col  space-y-10 px-8 ">
        <h4 className="text-2xl font-semibold text-center ">
         Contact 
          <span className="decoration-secondary/50 underline text-[#F7ab0A]"> ME </span>
        </h4>

        <div className="flex flex-col items-center py-4 p-8 justify-center ">
          <div className="contact-container">
            <PhoneIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className=" contact-font">{pageInfo?.mobileNo}</p>
          </div>

          <div className="contact-container">
            <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="contact-font">{pageInfo?.emailId}</p>
          </div>
          <div className="contact-container">
            <MapIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="contact-font">{pageInfo?.address}</p>
          </div>
        </div>
      </div>
        </div>
    </div>

      
    </motion.div>
  );
}
