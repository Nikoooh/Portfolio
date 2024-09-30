import colorClasses from "../styles/colorClasses";
import Project from "./component/Project";
import Link from "next/link";
import { pokedex, pokedexTech, bloglist, bloglistTech, pathfinder, pathfinderTech, spacewar, spacewarTech, accountingAppTech } from "../data/data";

const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col pb-8">
      <div className="flex flex-col md:flex-row justify-center gap-10 p-8 bg-cover bg-top bg-hero-image min-h-[72vh] shadow-2xl">
        <div className="py-32 px-20 md:w-1/3 text-white">
          <p className="text-6xl mb-4">Projects</p>
          <p className="text-2xl">Some apps i have made</p>
        </div>
        <div className="sm:py-20 md:w-1/3">
          <img src={'/images/moon_developer-2.png'} width='400px' height="auto" alt="vector art of an programmer" />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-4 pb-10 text-black align-center">    
        <div className="p-12 text-center">
          <p className="text-4xl">Some apps i have made</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-12 p-8">    
          <Project app={pokedex} tech={pokedexTech} imgSrc="/AppImages/pokedex.png" /> 
          <Project app={bloglist} tech={bloglistTech} imgSrc="/AppImages/bloglist.png"  />   
          <Project app={pathfinder} tech={pathfinderTech} imgSrc="/AppImages/pathfinder.png"/>  
          <Project app={spacewar} tech={spacewarTech} imgSrc="/AppImages/SpaceWar.png" />          
        </div>     
      </div>
      
      <div className="text-center p-12 mb-6">
        <p className="text-4xl">More can be found on my personal <span className="underline text-blue-800"><Link href="https://github.com/Nikoooh" target="_">GitHub</Link></span></p>  
      </div>

      <div className="flex flex-row justify-center gap-12">
        <div className="p-12 w-1/3">
          <p className="text-2xl">What i&apos;m currently working on</p>
        </div>
        <div className="flex flex-col p-12 w-2/5">
          <div className="mb-5">
            <p className="text-xl">Accounting App</p>
          </div>
          <div className="flex justify-center ring mb-3 shadow-xl ">
            <img src="/AppImages/noimage.png" alt="no image available picture" width='full' height='auto'/>
          </div>
          <div className="flex flex-row flex-wrap gap-2 mb-8">         
            {accountingAppTech.map((skill, idx) => {
              const colorClass = colorClasses[skill.color];
              return (
                <div key={idx} className={`outline outline-2 ${colorClass} bg-opacity-30 px-2 py-1 rounded-xl italic h-fit`}>
                  <p className="text-sm">
                    <span className="inline-block pr-3 align-middle">
                      <img src={skill.logoSrc} width={13} height={13} alt={`${skill.name} logo`} />
                    </span>
                    {skill.name}
                  </p>
                </div>
              );
            })}              
          </div>
          <div>
            <p className="text-md">
              As my thesis project for school, i am working on a accounting application to be used by family homes in Finland.
            </p>
            <p className="text-md mt-3">
              I have only recently started to work on this so no picture yet. Will be added later.
            </p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default ProjectsPage