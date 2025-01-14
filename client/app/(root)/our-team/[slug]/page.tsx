import { getTeamMemberDetails } from '@/app/api/strapi';
import { BlockRenderer, TeamPageBlock } from '@/components/blocks';

const TeamMember = async ({ params }: {params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug

  if(!slug) return <p>No member found</p>
  const teamMember = await getTeamMemberDetails(slug)
  console.log(teamMember)

  return (
      <div>
        {teamMember.blocks.map((block: TeamPageBlock) => (
          <BlockRenderer key={block.__component} block={block}/>
        ))}
      </div>
  )
}

export default TeamMember