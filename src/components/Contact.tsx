import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "types.ds";

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
             px-10
             justify-evenly
             mx-auto
             items-center
            "
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500  text-2xl">
        Contact
      </h3>

      <div className="flex flex-col  space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I Have Got what u need
          <span className="decoration-[#F7AB0A]/50 underline"> Lets Talk</span>
        </h4>

        <div className="flex flex-col items-center py-4 justify-center">
          <div className="flex items-center   space-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" px-4 text-2xl">{pageInfo?.mobileNo}</p>
          </div>

          <div className="flex items-center   space-5 py-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="px-4 text-2xl">{pageInfo?.emailId}</p>
          </div>
          <div className="flex items-center   space-5  py-4  justify-center">
            <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl px-4">{pageInfo?.address}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
