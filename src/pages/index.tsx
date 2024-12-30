import Cube from "@/components/3dCube";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkill,
  fetchSocial,
} from "@/helpers/Client";
import Head from "next/head";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const getRandomPosition = () => {
  if (typeof window !== "undefined") {
    const top = Math.floor(Math.random() * window.innerHeight);
    const left = Math.floor(Math.random() * window.innerWidth);
    return { top: `${top}px`, left: `${left}px` };
  }
  return { top: "0px", left: "0px" };
};

const getRandomSize = () => {
  return Math.floor(Math.random() * (60 - 15 + 1)) + 15; // Random size between 15 and 60
};



export default function home({
  pageInfo,
  projects,
  skills,
  socials,
  experiences,
}: Props) {
  
  return (
    
    <div
      className="bg-[rgb(36,36,40)] text-white h-screen snap-y snap-mandatory
     overflow-scroll overflow-x-hidden z-0 
     scrollbar-track-gray-400/20 scrollbar-thumb-secondary "
    >
      <Head> Personal portfolio</Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="exp" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Project */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* contact */}
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-10 w-full cursor-pointer">
          <div className=" flex justify-end items-end px-16">
            <img
              alt="my pic"
              className="rounded-full w-10 h-10 filter grayscale hover:grayscale-0 animate-bounce"
              src={urlFor(pageInfo?.scrollUp).url()}
            />
          </div>
     
      
    
        </footer>
      </Link>
     

    </div>
  );
}
export async function getServerSideProps() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkill();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }
  };
}
