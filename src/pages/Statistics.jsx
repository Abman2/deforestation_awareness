import React from 'react'
import { HeroSection } from '../components/Home/HeroSection'
import { Begin } from '../components/Statistics/Begin'
import { ForestIntro } from '../components/Statistics/StatisticsIntro'
import { CountryCount } from '../components/Statistics/CountryDeforestationCount'
import { DeforestationCount } from '../components/Statistics/YearlyDeforestationCount'
import DeforestationStats from '../components/Statistics/DeforestationStats'
import { Link } from 'react-router'
import { ReadyToTest } from '../components/static components/ReadyToTest'

export const Statistics = () => {
  return (
    <div className=''>
             
        <HeroSection heading={"Deforestation Statistics"} bg={"bg-statistics_bg"}  button={"Learn"} details={"Numbers reveal the true scale of forest loss that photos alone cannot show. Statistics help us understand trends, identify hotspots, and measure the effectiveness of conservation efforts."}/>
           {/* <DeforestationStats/> */}
        <ForestIntro/>
        <CountryCount/>
        <DeforestationCount/>
        <ReadyToTest/>

    </div>
  )
}
