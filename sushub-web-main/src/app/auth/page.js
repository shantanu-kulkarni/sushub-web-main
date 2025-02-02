import UserOnboardingFlow from '@/components/pages/onboarding/UserOnboardingFlow'
import React from 'react'

export const metadata = {
  title: 'Log In',
  description: 'Allows user to login or sign-up on the Sustainability Hub portal.',
}
const AuthPage = () => {
  return (
    <UserOnboardingFlow />
  )
}

export default AuthPage;