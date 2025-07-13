"use client";

import React from "react";
import { PageInfo } from "types.ds";

const interests = [
  {
    title: "Coding",
    url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388",
  },
  {
    title: "Naruto",
    url: "https://cdn140.picsart.com/355182439052201.jpg",
    link: "https://naruto.fandom.com/wiki/Naruto_Uzumaki",
  },
  {
    title: "One Piece",
    url: "https://i.pinimg.com/736x/81/b8/1b/81b81b38c72e148ce4ddfcae172733f0.jpg",
    link: "https://en.wikipedia.org/wiki/One_Piece",
  },
  {
    title: "Gaming",
    url: "https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg",
  },
];

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <section
      id="about"
      className="pt-10 overflow-hidden dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">


          <div className="relative hidden md:flex justify-end">
            <div className="absolute inset-0 rounded-3xl z-0" />

            <img
              className="absolute bottom-0 -mb-36 mr-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <div className="relative z-10  
             w-full max-w-lg  mt-8 mr-6 overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/self3.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-yellow-600
             dark:text-white tracking-[5px]">
              About me
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-white dark:text-gray-300 md:mt-8">
              {pageInfo?.aboutMe ||
                "I’m a passionate developer who loves turning ideas into real experiences — while drawing inspiration from anime, gaming, nature, and tech!"}
            </p>

            <p className="mt-4 text-xl text-white dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900 opacity-30"></span>
                <span className="relative text-yellow-600 dark:text-yellow-400 font-semibold">
                  Things I Like
                </span>
              </span>
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mt-6">
              {interests.map(({ title, url, link }, idx) => (
                <a
                  key={idx}
                  href={link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={url}
                    alt={title}
                    title={title}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 grayscale group-hover:grayscale-0 shadow-md"
                  />
                  <p className="text-xs text-yellow-300 text-center mt-2 font-mono">
                    {title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
