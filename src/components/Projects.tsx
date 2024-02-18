import { Project } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <div
      className="h-screen  flex flex-col relative overflow-hidden  
         text-left
         md:flex-row
         max-w-full
         justify-evenly
         mx-auto
         items-center
        "
    >
      <h3 className="absolute header-title">
        Projects
      </h3>

      <div className="relative scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-secondary flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">


        {projects.map((project, index) => (

          <div
            key={project?._id}
            className="w-screen  flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-2 md:p-44 h-screen"
          >


            <div className="relative w-full  md:w-3/4">
              <img

                src={urlFor(project?.image).url()} />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-90">
                <h3 className="text-xl text-white font-bold">
                  {project?.title} </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {project?.summary}</p>
              </div>
            </div>

            <span className=" text-sm decoration-[#F7ab01]/50">
              Project {index + 1} of {projects.length}
            </span>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[500px] 
      -skew-y-12
      "
      ></div>
    </div>
  );
}
