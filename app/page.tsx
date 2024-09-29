'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage: React.FC = (): JSX.Element => {

  const [className, setClassName] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName('finished')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-hero-image bg-cover bg-top min-h-[100vh] shadow-2xl">

        <div className="flex flex-col justify-center items-center w-fit">     
          <div className="p-16 w-fit text-white bg-zinc-800 bg-opacity-30 rounded-full shadow-2xl">
            <p className="text-6xl">Niko Toivanen</p>
            <div className="text-typing">
              <div><p className={`typing ${className} pr-1`}>Fullstack Developer</p></div>              
            </div>         
          </div>     
        </div>
        <div className="sm:w-1/3" />
      </div>

      <div className="flex md:flex-row flex-col justify-center p-8 pb-10 text-black">
        <div className="p-14 sm:w-1/3">
          <Image src={'/vectors/noimage.webp'} width={270} height={270} alt="Picture of Me" className="rounded-full"/>
          <p>Image to be added</p>
        </div>
        <div className="py-14 sm:w-1/3">
          <p className="text-4xl mb-4">Who am <a className="text-red-500 italic">I?</a></p>
          <div className="text-lg p-5">
            <p className="mb-3">I am 23-year old currently studying software development at South-Eastern Finland University of Applied Sciences (XAMK).</p>
            <p>Things i Enjoy:</p>
            <ul className="list-disc">
              <li className="ml-8">Programming</li>
              <li className="ml-8">Gaming</li>
              <li className="ml-8">Running</li>
            </ul>
            <p className="mt-3">I am aspiring to become a fullstack developer, currently i am fluent with 
              <span className="rounded-full ml-1 mr-1 py-0.5 px-3 bg-yellow-200 outline outline-1 outline-yellow-300 bg-opacity-60 italic">Java-</span> 
              and
              <span className="rounded-full ml-1 px-3 py-0.5 bg-blue-200 outline  outline-1 outline-sky-500 bg-opacity-60 italic">Typescript</span>.
              I also have some Python skills, but i would not call myself proficent with it.
            </p>
            <p className="mt-3">I prefer to develope applications with modern Javascript frameworks like React and Next.js.</p>
          </div>       
        </div>
      </div>     
    </div>
  );
}

export default HomePage
