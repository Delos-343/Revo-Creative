/** @format */

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import imageSlider1 from 'public/images/imageSlider1.png'
import imageSlider2 from 'public/images/imageSlider2.png'
import imageSlider3 from 'public/images/imageSlider3.jpg'
import imageSlider4 from 'public/images/imageSlider4.jpg'
import imageSlider5 from 'public/images/imageSlider5.png'
import imageSlider6 from 'public/images/imageSlider6.jpg'
import Image from 'next/image'

const SwiperSliderComponent = () => {

  const [slides, setSlides] = useState(0)

  useEffect(() => {
    let w = window.innerWidth
    w < 768 ? setSlides(1.5) : setSlides(1.7)
  }, [])

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[65vh] relative mt-[40vh] md:mt-[33vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-blue-400 tracking-wider">
                  Welcome
                </span>
                <br /> 904
              </p>
              <p>
                (01)
              </p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              R E V O
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider2}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">
                  Log 01 ~ A
                </span>
                <br /> 901
              </p>
              <p>
                (02)
              </p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl leading-none">
              CREATIVE
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">
                  Log 01 ~ B
                </span>
                <br /> 343
              </p>
              <p>
                (03)
              </p>
            </div>
            <div className="text-5xl font-bold md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none">
              HELLO
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider4}
              className="w-full md:w-[60%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">
                  Log 01 ~ C
                </span>
                <br /> 117
              </p>
              <p>
                (04)
              </p>
            </div>
            <div className="text-5xl font-bold md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none">
              WORLD
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">
                  Log 1 ~ D
                </span>
                <br /> 904
              </p>
              <p>
                (05)
              </p>
            </div>
            <div className="text-5xl 2xl:text-[12rem] font-bold md:text-7xl lg:text-9xl leading-none">
              ANNYA
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider6}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">
                  Honey Bear
                </span>
                <br /> 007
              </p>
              <p>
                (06)
              </p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              DELOS
            </div>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSliderComponent
