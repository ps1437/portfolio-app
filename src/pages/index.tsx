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
import BackToTop from "@/components/BackToTop";

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
      className="h-screen snap-y snap-mandatory
     overflow-scroll overflow-x-hidden z-0   bg-gray-900 text-white bg-cover bg-center
     scrollbar-track-gray-400/20 scrollbar-thumb-secondary transition-transform duration-700 ease-in-out"
    >
      <Head> Personal portfolio</Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center transition-transform duration-700 ease-in-out">
        <About pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="exp" className="snap-center transition-transform duration-700 ease-in-out">
        <WorkExperience experiences={experiences} />
      </section>

      {/* skills */}
      <section id="skills" className="snap-center transition-transform duration-700 ease-in-out">
        <Skills skills={skills} />
      </section>

      {/* Project */}
      <section id="projects" className="snap-center transition-transform duration-700 ease-in-out">
        <Projects projects={projects} />
      </section>

      {/* contact */}
      <section id="contact" className="snap-center transition-transform duration-700 ease-in-out">
        <Contact pageInfo={pageInfo} />
      </section>
    
      <BackToTop/>
    
     

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
