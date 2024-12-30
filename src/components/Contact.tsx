import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
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
      className="flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="relative w-full flex justify-center items-center mt-20">
        <img
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
          src={urlFor(pageInfo?.cityImage).url()}
          alt="City"
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
          <div className="flex flex-col space-y-10 px-8">
            <h4 className="text-3xl font-semibold text-center text-white">
              Get in <span className="underline decoration-secondary/50 text-[#F7ab0A]">Touch</span>
            </h4>

            <div className="flex flex-col items-center space-y-4">
              <div className="contact-container flex items-center space-x-4">
                <PhoneIcon className="text-secondary h-7 w-7 animate-pulse" />
                <p className="text-lg text-white">{pageInfo?.mobileNo}</p>
              </div>

              <div className="contact-container flex items-center space-x-4">
                <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
                <p className="text-lg text-white">{pageInfo?.emailId}</p>
              </div>

              <div className="contact-container flex items-center space-x-4">
                <MapIcon className="text-secondary h-7 w-7 animate-pulse" />
                <p className="text-lg text-white">{pageInfo?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}