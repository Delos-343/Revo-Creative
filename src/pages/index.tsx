/** @format */
import React from 'react'
import { Awards, Concepts, Footer, Header, Office, Portfolio, SwiperSliderComponent, WhoWeAre,  } from '@/components'

export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Portfolio />
      <Awards />
      <Office />
      <Footer />
    </div>
  )
}
