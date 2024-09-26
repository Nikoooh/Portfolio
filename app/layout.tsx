import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({weight: "400", subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
  title: "Niko Toivanen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegreya.className} antialiased text-black`}>
        <div>
          <nav className="bg-blue-200 ring-1 border-red-500 shadow-2xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="self-center text-3xl whitespace-nowrap">Portfolio * Niko Toivanen</span>
              </a>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex gap-4">
                  <Link href={'/'}>
                    <li className="hover:animate-pulse cursor-pointer text-xl">
                      Home
                    </li>
                  </Link>

                  <Link href={'/skills'}>
                    <li className="hover:animate-pulse cursor-pointer text-xl">
                      Skills
                    </li>
                  </Link>

                  <Link href={'/projects'}>
                    <li className="hover:animate-pulse cursor-pointer text-xl">
                      Projects
                    </li>
                  </Link> 

                  <Link href={'/contact'}>
                    <li className="hover:animate-pulse cursor-pointer text-xl">
                      Contact
                    </li>
                  </Link>              
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {children}
               
      </body>
    </html>
  );
}
