import { getTeamMembers } from '@/app/api/strapi';
import TeamMemberCard from '@/components/team-member-card';
import React from 'react'

const Team = async () => {
  const teamMembers = await getTeamMembers()

  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>Our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {teamMembers.data.map((member: TeamMemberProps) => (
          <TeamMemberCard key={member.documentId} {...member}/>
        ))}
      </div>
    </div>
  )
}

export default Team