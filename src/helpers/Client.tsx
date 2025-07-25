import { Experience, PageInfo, ProjectType, Skill, Social } from "../../types.ds";

export const fetchSkill = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_API_URL']}/api/getSkills`
  );
  const data = await response.json();
  const skills: Skill[] = data.skills;
  return skills;
};

export const fetchSocial = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_API_URL']}/api/getSocials`
  );
  const data = await response.json();
  const socials: Social[] = data.socials;
  return socials;
};

export const fetchPageInfo = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_API_URL']}/api/getPageInfo`
  );
  const data = await response.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_API_URL']}/api/getProjects`
  );
  const data = await response.json();
  const projects: ProjectType[] = data.projects;
  return projects;
};

export const fetchExperience = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getExperience`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch experiences');
    }

    const data = await response.json();
    const experiences: Experience[] = data.experiences;
     experiences.sort((a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime());
   return experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error; 
  }
};
