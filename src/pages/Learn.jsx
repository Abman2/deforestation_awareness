import React from 'react'
import { Deforestation } from '../components/Learn/Deforestation'
import { TypesOfDeforestation } from '../components/Learn/TypeOfDeforestation'
import { CausesOfDeforestation } from '../components/Learn/CausesOfDeforestation'
import { ImpactOfDeforestation } from '../components/Learn/ImpactOfDeforestation'
import { DeforestationSolutions } from '../components/Learn/DeforestationSolution'
import { LearnTakeAction } from '../components/Learn/LearnTakeAction'

export const Learn = () => {
  return (
   <>
    <Deforestation/>
    <TypesOfDeforestation/>
    <CausesOfDeforestation/>
    <ImpactOfDeforestation/>
    <DeforestationSolutions/>
    <LearnTakeAction/>
    </>
    
  )
}
