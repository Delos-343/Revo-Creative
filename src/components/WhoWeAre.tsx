import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="relative my-10 px-3 py-2 h-[80vh] font-neutralFace">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex justify-between w-full text-xs py-2">
            <div>
              Who We Are
            </div>
            <div>
              What We Do
            </div>
            <div>
              Why We Serve
            </div>
        </div>
        <div className="my-28">
            <div className="text-sm md:text-xl">
              (REVO CREATIVE)
            </div>
            <div className="text-3xl md:text-5xl font-bold leading-snug indent-[30vw] my-2">
              AN INDEPENDENT IT AGENCY HELPING BRANDS TELL POWERFUL, AUTHENTIC
              STORIES WITH CODE.
              <br /> <br />
              WORKING CLOSELY WITH OUR CLIENTS AND OUR CURATED GLOBAL NETWORK OF FREELACERS,
              WE BRAINSTORM, DESIGN, AND CREATE THE BEST APPS.
          </div>
        </div>
    </div>
  )
}

export default WhoWeAre