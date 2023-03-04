import { Experience, PageInfo, Project, Skill, Social } from "../../types.ds";

export const fetchSkill = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_SANITY_URL']}/api/getSkills`
  );
  const data = await response.json();
  const skills: Skill[] = data.skills;
  return skills;
};

export const fetchSocial = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_SANITY_URL']}/api/getSocials`
  );
  const data = await response.json();
  const socials: Social[] = data.socials;
  return socials;
};

export const fetchPageInfo = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_SANITY_URL']}/api/getPageInfo`
  );
  const data = await response.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_SANITY_URL']}/api/getProjects`
  );
  const data = await response.json();
  const projects: Project[] = data.projects;
  return projects;
};

export const fetchExperience = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_SANITY_URL']}/api/getExperience`
  );
  const data = await response.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
