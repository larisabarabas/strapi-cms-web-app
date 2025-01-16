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
      <div>
        {teamMember.blocks.map((block: TeamPageBlock) => (
          <BlockRenderer key={block.__component} block={block}/>
        ))}
      </div>
  )
}

export default TeamMember