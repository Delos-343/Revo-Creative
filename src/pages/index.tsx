/** @format */
import React from 'react'
import { Awards, Concepts, Footer, Header, Office, Publications, SwiperSliderComponent, WhoWeAre,  } from '@/components'

export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
      <Footer />
    </div>
  )
}
