import ProjectDetail from '@/components/pages/project/project-detail/ProjectDetail'
import React from 'react'

export default function Page({params}) {
  return <ProjectDetail projectId={params.id}/>;
}



