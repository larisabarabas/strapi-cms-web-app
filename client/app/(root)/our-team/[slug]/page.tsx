import { getTeamMemberDetails, getTeamMembers } from '@/app/api/strapi';
import { BlockRenderer, TeamPageBlock } from '@/components/blocks';

export const generateStaticParamas = async () => {
    const teamMembers = await getTeamMembers()
    return teamMembers.data.map((item:TeamMemberProps) => ({ slug: item.slug }))
}

const TeamMember = async ({ params }: {params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  if(!slug) return <p>No member found</p>
  const teamMember = await getTeamMemberDetails(slug)

  return (
      <div className='bg-gray-200 container mx-auto w-full rounded-xl py-7 px-8 m-6'>
        {teamMember.blocks.map((block: TeamPageBlock) => (
          <BlockRenderer key={block.__component} block={block}/>
        ))}
      </div>
  )
}

export default TeamMember