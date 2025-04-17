"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './componants/Header'; 
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Script from 'next/script';

const Page = () => {
  return (
    <div className=' text-xl h-full'>
      <Header />
      <motion.div
        className='hidden md:block h-auto absolute top-48 right-10 z-[1]'
        transition={{ duration: 0.4 }}
        whileHover={{ y: -10, rotate: 90 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Image
          src="/images/ball-1.svg"
          alt="Top"
          width={200}
          height={300}
        />
      </motion.div>
      <motion.div
        className='hidden md:block h-auto absolute bottom-10 left-10 z-[1]'
        transition={{ duration: 0.4 }}
        whileHover={{ y: -10, rotate: 90 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Image
          src="/images/ball-2.svg"
          alt="Top"
          width={200}
          height={300}
        />
      </motion.div>

      <main className='w-full h-full'>
        <section className='h-full max-w-5xl mx-auto pt-16 md:pt-8'>
          <div className='flex flex-col items-center justify-center md:items-start'>
            <h4 className='text-lg text-black-500  !dark:text-white'>
              <span className='text-2xl font-normal '>
                Hello,  
              </span>
              I'am 
            </h4>
            <h1 className='mt-5 text-xl font-extrabold tracking-normal text-black-500 uppercase md:text-4xl !dark:text-white'>
              Arzu GÜL
            </h1>
            {/* TypeAnimation sadece client tarafında render edilsin */}
            {typeof window !== 'undefined' && (
              <TypeAnimation 
                className='mt-5 text-pink-600 '
                sequence={['Frontend Developer', 1000, 'React Developer', 1000]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "1.2em", display: 'inline-block' }}
                repeat={Infinity}
              />
            )}
            <div className='flex gap-5 relative z-10'>
              <div className='hover:bg-pink-600 mt-4 rounded-full transition-all'>
                <FaFacebook className='text-2xl hover:scale-110 transition-transform' />
              </div>
              <div className='hover:bg-pink-600 mt-4 rounded-full transition-all'>
                <FaTwitter className='text-2xl hover:scale-110 transition-transform' />
              </div>
              <div className='hover:bg-pink-600 mt-4 rounded-full transition-all'>
                <FaGithub className='text-2xl hover:scale-110 transition-transform' />
              </div>
            </div>
          </div>
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark relative z-0">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>
                  <div className="flex items-center space-x-4 mt-5">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4E03AQHi9LO_Fun5vQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722587774204?e=1750291200&v=beta&t=5dYJ0xyhZeL0EzE8_cy0s40-vuG0I3n5841uPryefqU"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb<span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb<span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8 mt-7">
                    <Link href="/projects" className="transition duration-300">Projects</Link>
                    <span className="transition duration-300">Youtube</span>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>

      <div>
        <Script
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="arzugul"
          data-color="#BD5FFF"
          data-emoji=""
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#ffffff"
          data-coffee-color="#FFDD00"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
};

export default Page;
