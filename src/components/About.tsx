import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "types.ds";
import { urlFor } from "../../sanity";
import AnimeCard from "./AnimeCard";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-4 justify-evenly mx-auto items-center text-white"
      style={{
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/1007/232/HD-wallpaper-one-piece-art-sleeve.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-600 via-black to-blue-900 opacity-60"></div>
      </div>
      <h3 className="absolute header-title text-yellow-400 font-anime z-10">About</h3>

    <AnimeCard />



      <div className="space-y-6 px-0 mt-8 md:px-10 z-10">
        <h4 className="text-2xl md:text-3xl font-anime text-yellow-300">
          Here is a <span className="underline decoration-yellow-500">little</span> background
        </h4>

        <p className="relative max-w-2xl text-yellow-300 text-base md:text-lg leading-relaxed px-4 py-2 rounded-md backdrop-blur-sm bg-black/30 shadow-md shadow-black">
          {pageInfo?.aboutMe}
        </p>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">What I like?</h3>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 items-center justify-center">
            {[
              {
                title: "Coding",
                url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=690:388",
              },
              {
                title: "Naruto",
                url: "https://cdn140.picsart.com/355182439052201.jpg?to=crop&type=webp&r=310x310&q=75",
                link: "https://naruto.fandom.com/wiki/Naruto_Uzumaki",
              },
              {
                title: "One Piece",
                url: "https://i.pinimg.com/736x/81/b8/1b/81b81b38c72e148ce4ddfcae172733f0.jpg",
                link: "https://en.wikipedia.org/wiki/One_Piece",
              },
              {
                title: "Gaming",
                url: "https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?w=2000",
              },
              {
                title: "Waterfalls",
                url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
              },
              {
                title: "Bike Riding",
                url: "https://www.carmycar.com/wp-content/uploads/2021/04/Bike-Riding.jpg",
              },
            ].map(({ title, url, link }, idx) => (
              <div key={idx} className="relative group transition-transform duration-300 hover:scale-105">
                <a href={link || "#"} target="_blank" rel="noopener noreferrer">
                  <img
                    title={title}
                    className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400 grayscale hover:grayscale-0 shadow-md"
                    src={url}
                    alt={title}
                  />
                  <p className="text-xs text-yellow-300 text-center mt-1 font-anime">{title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
