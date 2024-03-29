import Image from "next/image";
import portfolioimage from "@/public/portfolioimage.jpg"
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio | DevVibe Studio',
    description: 'Portfolio of websites we have built for our clients.',
    alternates: {
      canonical: 'https://www.devvibestudio.com/portfolio',
      }
    }

const PortfolioPage = () => {
  return (
    <div className="w-full h-full">
         <div className="bg-gray-50 h-full">
           <div className="relative bg-cover bg-center w-screen h-[50vh] flex justify-center items-center">
           <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />
            <Image 
                src={portfolioimage}
                layout="fill"
                alt="website development image"
                objectFit="cover"
                objectPosition="center"
                className="absolute inset-0 z-1"
                priority 
            />
            <div className="pt-2 sm:pt-0 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 z-[10]">
            Our Portfolio
          </h1>
          <p className="text-center text-2xl text-white font-medium z-[10]">
            Check out some of our work
          </p>
        </div>
           </div>
           <Projects />
         </div>
    </div>
  )
}

export default PortfolioPage;