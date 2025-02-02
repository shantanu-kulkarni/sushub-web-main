import React from 'react'
import WelcomeTitles from './WelcomeTitles'
import WelcomeButtons from './WelcomeButtons'

const Welcome = () => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-8xl py-8 px-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative isolate overflow-hidden bg-black px-6 pt-0 shadow-2xl rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-d text-center lg:mx-0 lg:flex-auto py-16 lg:py-16 lg:text-left">
              <WelcomeTitles />
              <WelcomeButtons />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Welcome

  