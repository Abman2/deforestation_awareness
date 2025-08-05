import React from 'react'
import { VisionAndMission } from '../components/About/VisionAndMission'
import { HeroSection } from '../components/Home/HeroSection'

export const AboutUs = () => {
  return (
    <div>
        <HeroSection heading={"About Us"} bg={"bg-hero_bg"} details={"We are a passionate group of environmental advocates, educators, and storytellers committed to raising awareness about deforestation and its impact on our planet. Our mission is to spark conversations, empower communities, and inspire action to protect the world’s remaining forests before it’s too late."} button={"Learn More"}/>
      <VisionAndMission/>
    </div>
  )
}
