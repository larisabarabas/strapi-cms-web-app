import React from 'react'

const TeamMember = async ({ params }: {params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  return (
      <div>TeamMember: {slug}</div>
  )
}

export default TeamMember