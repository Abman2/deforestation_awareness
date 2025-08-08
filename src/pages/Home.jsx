import React from 'react';
import { HeroSection } from '../components/Home/HeroSection';
import { Deforestation } from '../components/Home/Deforestation';
import { ChallengesSection } from '../components/Home/ChallengesSection';
import { WhyAwarenessMatters } from '../components/Home/WhyAwarenessMatters';
import { ReadyToTest } from '../components/static components/ReadyToTest';
import image_src from '../../src/assets/Home/heroSection2.png'

export const Home = () => {
     return (
          <>
               <HeroSection
                    heading={'Time For Trees'}
                    bg={'bg-hero_bg'}
                    details={
                         ' Forests are vital to life on Earth — they clean our air, filter our water, and provide habitat to countless species. Every tree lost to deforestation is a step backward for climate and biodiversity. Let’s take action now.'
                    }
                    image_src={image_src}
                    button={'Learn more'}
               />
               <Deforestation />
               <ChallengesSection />
               <WhyAwarenessMatters />
               <ReadyToTest />
          </>
     );
};
