import NoInternet from '@/components/pages/no-internet/NoInternet'
import React from 'react'

export const metadata = {
  title: 'No Internet Connection',
  description: 'The internet connection seems to be interrupted. Please check your internet connection and try again.',
}

const NoInternetConnection = () => {
  return (
    <NoInternet />
  )
}

export default NoInternetConnection