import React from 'react';

export const VisionAndMission = () => {
     return (
          <div className='max-w-7xl mx-auto px-4 py-16'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    {/* Mission Section */}
                    <section className='flex flex-col space-y-6'>
                         <div>
                              <h3 className='text-3xl font-semibold text-gray-800 mb-2'>Our Mission</h3>
                              <p className='text-gray-700 leading-relaxed text-base sm:text-lg'>
                                   To raise awareness about the alarming rate of deforestation, which causes the loss of over
                                   <b className='text-green-700'> 10 million hectares of forest every year globally</b>, and contributes up
                                   to
                                   <b className='text-green-700'> 20% of global carbon emissions</b>. This project aims to educate and
                                   inspire individuals—especially youths—on the importance of forest conservation through data-driven
                                   storytelling, visual media, and sustainable action campaigns.
                              </p>
                         </div>
                         <div>
                              <img
                                   src='/../../src/assets/About/OurMission2.png'
                                   alt='Our mission'
                                   className='w-full rounded-lg shadow-md object-cover aspect-video'
                              />
                         </div>
                    </section>

                    {/* Vision Section */}
                    <section className='flex flex-col-reverse md:flex-col space-y-6 md:space-y-6'>
                         <div>
                              <img
                                   src='/../../src/assets/About/OurVision.png'
                                   alt='Our vision'
                                   className='w-full rounded-lg shadow-md object-cover aspect-video'
                              />
                         </div>
                         <div>
                              <h3 className='text-3xl font-semibold text-gray-800 mb-2'>Our Vision</h3>
                              <p className='text-gray-700 leading-relaxed text-base sm:text-lg'>
                                   A future where individuals, communities, and governments recognize the value of forests and take
                                   collective action to protect and restore them—ensuring a sustainable and greener planet for generations
                                   to come.
                              </p>
                         </div>
                    </section>
               </div>

               {/* Who Are We Section */}
               <div className='mt-20'>
                    <h3 className='text-3xl font-semibold text-gray-800 mb-4'>Who Are We</h3>
                    <p className='text-gray-700 leading-relaxed text-base sm:text-lg mb-6 text-justify'>
                         We’re a passionate group of people who care deeply about forests and the life they sustain. From scientists and
                         educators to volunteers and local communities, we come together with one goal: to protect our forests and help them
                         thrive. We believe that every tree matters—because forests aren’t just trees, they’re homes, they’re lungs for the
                         Earth, and they’re hope for the future. Our work is rooted in science, but powered by compassion, collaboration,
                         and the belief that together, we can make a lasting difference for our planet and future generations.
                    </p>
                    <img
                         src='../src/assets/About/whoareweabout.png'
                         alt='Who Are We'
                         className=' mx-auto rounded-md object-contain w-full'
                    />
               </div>
          </div>
     );
};
