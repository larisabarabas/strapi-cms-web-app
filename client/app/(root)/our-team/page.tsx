import { getTeamMembers } from '@/app/api/strapi';
import TeamMemberCard from '@/components/team-member-card';
import React from 'react'

const Team = async () => {
  const teamMembers = await getTeamMembers()
  if (!teamMembers) return <p>No team members found.</p>;
  return (
    <div className='bg-[#4820591a] container mx-auto w-full rounded-xl py-7 px-8 m-6'>
      <h1 className='text-2xl font-semibold mb-4'>Our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {teamMembers.map((member: TeamMember) => (
          <TeamMemberCard key={member.documentId} {...member}/>
        ))}
      </div>
    </div>
  )
}

export default Team