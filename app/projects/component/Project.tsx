import colorClasses from "../../styles/colorClasses"
import Link from "next/link"
import { AppInfo } from "@/types/types"

interface Tech {
  name: string
  logoSrc: string
  color: string
}

interface Props {
  app: AppInfo
  tech: Tech[]
  imgSrc: string,
}

const Project: React.FC<Props> = ({app, tech, imgSrc}): JSX.Element => {
  return (
    <div className="flex flex-col p-2 sm:w-1/2 md:w-1/3">
      <div className="mb-5">
        <p className="text-2xl underline"><Link href={app.githubUrl} target="_">{app.appName}</Link></p>
      </div>
      <div className="mb-4 shadow-xl outline outline-3 outline-zinc-200 flex justify-center">
        <img src={imgSrc} alt="screenshot of pokedex app" width={app.img?.width ? `${app.img.width}` : 'auto'} height={app.img?.height ? `${app.img.height}` : 'auto'} />
      </div>
      <div className="flex flex-row flex-wrap gap-2 mb-8">         
        {tech.map((skill, idx) => {
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
          {app.paragraphOne}
        </p>
        <p className="text-md mt-3">
          {app.paragraphTwo}
        </p>
      </div>
    </div>
  )
}



export default Project