/** @format */

import Image from 'next/image'
import React from 'react'
import portfolio from 'public/images/portfolio.png'

const Portfolio = () => {
  return (
    <div className="relative font-neutralFace">
      <div className="px-3">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex text-xl md:text-4xl my-3 font-bold justify-between mb-36 w-full">
          <div>
            MEET OUR TEAM
          </div>
          <div>
            SERVICES
          </div>
          <div>
            OUR WORK
          </div>
        </div>
      </div>
      <div className="bg-[#e7e7e7] pb-[20vh]">
        <div className="h-[100vh] w-full flex flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center flex-col px-3 text-black w-full md:w-[50%]">
            <div className="h-[90%] flex items-center justify-center flex-col">
              <div className="text-lg"> (CE.008 - 23) </div>
              <h1 className="text-4xl my-6 font-bold text-center">
                UNCOMPROMISED CREATIVITY
              </h1>
              <p className="underline">
                VIEW OUR PORTFOLIO
              </p>
            </div>
            <div className="h-[10%] flex w-full justify-center items-center flex-col">
              <div className="w-full h-[2px] bg-black"></div>
              <div className="text-4xl my-3 font-bold text-center">
                TODAY AND FOREVERMORE
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center bg-[#e7e7e7] md:bg-black h-full">
            <Image alt="" src={portfolio} className="w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
