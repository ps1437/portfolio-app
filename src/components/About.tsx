"use client";

import { motion } from "framer-motion";
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
    title: "Dragon Ball",
    url: "https://banner2.kisspng.net/kb4/hrn/mbiaotgzn1j0.webp",
    link: "https://en.wikipedia.org/wiki/Dragon_Ball_Z",
  },
  {
    title: "One Piece",
    url: "https://i.pinimg.com/736x/81/b8/1b/81b81b38c72e148ce4ddfcae172733f0.jpg",
    link: "https://en.wikipedia.org/wiki/One_Piece",
  },
];

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {

  return (
    <section
      id="about"
      className="relative pt-10 overflow-hidden dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16"
    >
      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="relative hidden md:flex justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="absolute bottom-0 -mb-36 mr-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />
            <motion.div
              className="relative z-10 w-full max-w-lg mt-8 mr-6 overflow-hidden rounded-3xl shadow-2xl"
            >
              <motion.img
                src="/self.png"
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>
          </motion.div>

          <div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 tracking-[5px] font-mono"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About me
            </motion.h2>

            <motion.p
              className="max-w-lg mt-3 font-mono text-md leading-relaxed text-white dark:text-gray-300 md:mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {pageInfo?.aboutMe ||
                "I’m a passionate developer who loves turning ideas into real experiences — while drawing inspiration from anime, gaming, nature, and tech!"}
            </motion.p>

            <motion.p
              className="mt-4 text-xl text-white dark:text-gray-300 md:mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900 opacity-30"></span>
                <span className="relative text-yellow-400 font-semibold">
                  Things I Like
                </span>
              </span>
            </motion.p>

            <motion.div
              className="grid grid-cols-5 sm:grid-cols-4 gap-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {interests.map(({ title, url, link }, idx) => {
                let motionProps = {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, ease: "easeOut" },
                };

                let hoverProps = {};

                switch (title) {
                  case "Naruto":
                    hoverProps = {
                      whileHover: {
                        rotate: [0, -8, 8, -8, 0],
                        scale: 1.1,
                        transition: { duration: 0.6 },
                      },
                    };
                    break;
                  case "One Piece":
                    hoverProps = {
                      whileHover: {
                        scale: 1.25,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 200 },
                      },
                    };
                    break;
                  case "Dragon Ball":
                    hoverProps = {
                      whileHover: {
                        scale: 1.25,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 200 },
                      },
                    };
                    break;
                  case "Coding":
                    hoverProps = {
                      whileHover: {
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      },
                    };
                    break;
                }

                return (
                  <motion.a
                    key={idx}
                    href={link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center transition-transform duration-300"
                    {...motionProps}
                    {...hoverProps}
                  >
                    <img
                      src={url}
                      alt={title}
                      title={title}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 grayscale group-hover:grayscale-0 shadow-md"
                    />
                    <p className="text-xs font-mono text-yellow-300 text-center mt-2">
                      {title}
                    </p>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
