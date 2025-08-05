import React from 'react'
import { VisionAndMission } from '../components/About/VisionAndMission'
import { HeroSection } from '../components/Home/HeroSection'

export const AboutUs = () => {
  return (
    <div>
        <HeroSection heading={"About Us"} details={"Forests are vital to life on Earth — they clean our air, filter our water, and provide habitat to countless species. Every tree lost to deforestation is a step backward for climate and biodiversity. Let’s take action now."} button={"Learn More"}/>
      <VisionAndMission/>
    </div>
  )
}
