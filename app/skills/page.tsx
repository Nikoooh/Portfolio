/* eslint-disable @next/next/no-img-element */

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-center gap-10 p-8">
        <div className="py-32 px-20 md:w-1/3">
          <p className="text-6xl mb-4">Skillset</p>
          <p className="text-2xl">What can <span className="text-red-600 underline">I</span> do?</p>
        </div>
        <div className="sm:py-20 md:w-1/3">
          <img src={'/skills_page.png'} width='400px' height="auto" alt="vector art of an programmer" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2  p-8 pb-10 text-black align-center">
        <div className="p-16 w-full">
          <p className="text-center text-4xl">Languages, Frameworks and Libraries i have experience with</p>
        </div>
        <div className="py-16 px-60 w-full justify-center flex flex-row flex-wrap gap-6">     
          {skills.map((skill, idx) => {
            const colorClass = colorClasses[skill.color];
            return (
              <div key={idx} className={`outline outline-2 ${colorClass} bg-opacity-30 px-10 py-6 rounded-xl italic h-fit`}>
                <p className="text-xl">
                  <span className="inline-block pr-3 align-middle">
                    <img src={skill.logoSrc} width={30} height={30} alt={`${skill.name} logo`} />
                  </span>
                  {skill.name}
                </p>
              </div>
            );
          })}      
        </div>
        <div className="p-16 w-full">
          <p className="text-center text-4xl">Tools</p>
        </div>
        <div className="py-16 px-60 w-full justify-center flex flex-row flex-wrap gap-6">     
        {tools.map((tool, idx) => {
            const colorClass = colorClasses[tool.color];
            return (
              <div key={idx} className={`outline outline-2 ${colorClass} bg-opacity-30 px-10 py-6 rounded-xl italic h-fit`}>
                <p className="text-xl">
                  <span className="inline-block pr-3 align-middle">
                    <img src={tool.logoSrc} width={30} height={30} alt={`${tool.name} logo`} />
                  </span>
                  {tool.name}
                </p>
              </div>
            );
          })}  
        </div>
      </div>     
    </div>
  )
}

const colorClasses: {[key: string]: string} = {
  'jsColor': 'bg-amber-200 outline-amber-200',
  'tsColor': 'bg-sky-400 outline-sky-400',
  'nextColor': 'bg-zinc-600 outline-zinc-400',
  'reactColor': 'bg-cyan-300 outline-cyan-300',
  'expressColor': 'bg-zinc-600 outline-zinc-400',
  'graphColor': 'bg-pink-500 outline-pink-500',
  'tailwindColor': 'bg-cyan-400 outline-cyan-400',
  'chatgptColor': 'bg-teal-400 outline-teal-400',
  'postmanColor': 'bg-orange-500 outline-orange-500'
};

const skills = [
    {name: 'JavaScript', color: 'jsColor', logoSrc: '/techLogos/jslogo.webp'}, 
    {name: 'TypeScript', color: 'tsColor', logoSrc: '/techLogos/tslogo.png'},
    {name: 'NextJS', color: 'nextColor', logoSrc: '/techLogos/nextjslogo.png'},
    {name: 'React', color: 'reactColor', logoSrc: '/techLogos/reactlogo.png'},
    {name: 'Express', color: 'expressColor', logoSrc: '/techLogos/expresslogo.png'},   
    {name: 'GraphQL', color: 'graphColor', logoSrc: '/techLogos/graphlogo.png'},
    {name: 'Material UI', color: 'tsColor', logoSrc: '/techLogos/muilogo.png'},
    {name: 'Tailwind', color: 'tailwindColor', logoSrc: '/techLogos/tailwindlogo.png'}
  ]

const tools = [
  {name: 'VS Code', color: 'tailwindColor', logoSrc: '/techLogos/vscode.png'},
  {name: 'ChatGPT', color: 'chatgptColor', logoSrc: '/techLogos/chatgptlogo.png'},
  {name: 'Postman', color: 'postmanColor', logoSrc: '/techLogos/postmanlogo.png'},
  {name: 'Github', color: 'nextColor', logoSrc: '/techlogos/githublogo.png'}
]

export default AboutPage