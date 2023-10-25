/** @format */

import Image from 'next/image'
import React from 'react'

import concept1 from 'public/images/concept1.png'
import concept2 from 'public/images/concept2.png'

const Concepts = () => {
  return (
    <div className="relative font-neutralFace px-3 w-full h-fit">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="my-32">
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          THE
          <br className="hidden sm:block" /> WEB
        </p>
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          IS MORE
        </p>
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] indent-[10vw] font-light leading-none">
          THAN
        </p>

        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          CODES
        </p>
      </div>
      <div className="w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh]"></div>
      <div className="absolute top-[30%] md:top-0 right-0 flex items-center justify-center flex-col w-[60vw] mt-[30vh]">
        <div className="hidden md:block mb-20">
          <p className="text-xl">
            (CONCEPTS)
          </p>
          <p className="text-xl py-6">
            (IDEAS)
          </p>
          <p className="text-xl">
            (MOTIVES)
          </p>
        </div>
        <Image alt="" src={concept1} className="-z-10 my-10 w-[50%]" />
        <Image alt="" src={concept2} className="my-10" />
      </div>
    </div>
  )
}

export default Concepts
