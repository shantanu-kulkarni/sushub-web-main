import NewOrganizerForm from '@/components/pages/people/new-organizer/NewOrganizerForm'
import React from 'react'

export const metadata = {
  title: 'Organizer Registration',
  description: 'Allows user to register as an organizer on the Sustainability Hub portal.',
}
const NewOrganizerPage = () => {
  return (
    <NewOrganizerForm />
  )
}

export default NewOrganizerPage