import React from 'react'
import { NavLink  } from 'react-router'

export const ReadyToTest = () => {
  return (
     <div className="mt-16 bg-green-700 text-white rounded-xl px-6 py-10 text-center max-w-7xl mx-auto my-10">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to test your knowledge?</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Take our interactive quiz and see how much you’ve learned about deforestation, its causes, and how to protect our forests.
        </p>
        <NavLink
          to="/quiz"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Take the Quiz
        </NavLink>
      </div>
  )
}
