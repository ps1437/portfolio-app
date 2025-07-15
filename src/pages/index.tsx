"use client";

import About from "../portfolio/components/About";
import BackToTop from "../portfolio/components/BackToTop";
import Contact from "../portfolio/components/Contact";
import Header from "../portfolio/components/Header";
import Hero from "../portfolio/components/Hero";
import Projects from "../portfolio/components/Projects";
import Skills from "../portfolio/components/Skills";
import WorkExperience from "../portfolio/components/WorkExperience";

import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkill,
  fetchSocial,
} from "@/portfolio/helpers/Client";

import Head from "next/head";
import { Experience, PageInfo, ProjectType, Skill, Social } from "types.ds";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: ProjectType[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  projects,
  skills,
  socials,
  experiences,
}: Props) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden
     bg-gray-900 text-white scrollbar-track-gray-400/20 scrollbar-thumb-secondary transition-transform duration-700 ease-in-out">

      <Head>
        <title>Praveen | Portfolio</title>
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#111827" },
          fpsLimit: 60,
          particles: {
            color: { value: "#facc15" },
            links: {
              color: "#facc15",
              distance: 100,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: { value: 50 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <main className="relative z-10">

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

        {/* Experience */}
        <section id="experience" className="snap-center transition-transform duration-700 ease-in-out">
          <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-center transition-transform duration-700 ease-in-out">
          <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-center transition-transform duration-700 ease-in-out">
          <Projects projects={projects} />
        </section>

        {/* Contact */}
        <section id="contact" className="snap-center transition-transform duration-700 ease-in-out">
          <Contact pageInfo={pageInfo} />
        </section>

        {/* Back to Top Button */}
        <BackToTop />
        
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkill();
  const projects: ProjectType[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
}
