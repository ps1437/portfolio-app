import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20  uppercase tracking-[20px] text-gray-500  text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
        mt-24 -mb-10 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
        md:rounded-lg
        md:w-64
        md:h-96
        xl:w-[500px]
        xl:h-[500px]"
        alt="my pic"
        src={urlFor(pageInfo?.profilePic).url()}
      ></motion.img>
      <div className="space-y-10 px-0 mt-8 md:px-10">
        <h4 className="text-2xl md:text-3xl font-semibold">
          Here is a
          <span className="underline decoration-[#f7ab0a]/50"> little </span>
          background
        </h4>
        <p className="text-base">{pageInfo?.aboutMe}</p>
        <p className="text-base">
          <h3 className="text-2xl font-semibold"> What i like?</h3>
          <div className="flex justify-center items-center mt-4 md:items-center md:justify-center">
            <div>
            <img
              title="Coding"
              className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388"
              alt="coding"
            /></div>  <div>
            <a
              target="_blank"
              href="https://naruto.fandom.com/wiki/Naruto_Uzumaki"
            >
              <img
                title="Naruto"
                className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
                src="https://cdn140.picsart.com/355182439052201.jpg?to=crop&type=webp&r=310x310&q=75"
                alt="naruto"
              />
            </a></div>
<div>
            <a target="_blank" href="https://en.wikipedia.org/wiki/One_Piece ">
              <img
                title="One Piece"
                className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
                src="https://i.pinimg.com/736x/81/b8/1b/81b81b38c72e148ce4ddfcae172733f0.jpg"
                alt="OnePiece"
              />
            </a> 
            </div><div>
            <img
              title="Gaming"
              className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
              src="https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?w=2000"
              alt="Gaming"
            />
      </div><div>
            <img
              title="WaterFalls"
              className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
              src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="WaterFalls"
            />
      </div><div>
            <img
              title="Bike Riding"
              className=" w-20 h-20 border border-white border-2   filter grayscale hover:grayscale-0"
              src="https://www.carmycar.com/wp-content/uploads/2021/04/Bike-Riding.jpg"
              alt="Bike Riding"
            />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
