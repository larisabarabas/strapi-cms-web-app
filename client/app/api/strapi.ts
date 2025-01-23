import qs from 'qs'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const constructUrl = (endpoint: string, params: QueryParams) => {
  const url = new URL(endpoint, API_URL)
  url.search = qs.stringify({populate: params.populate, filters:params.filters})

  return url
}

const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`)
  }
  const data = await response.json()

  return data;
};

export async function getGlobalInfo(){
  const url = constructUrl('/api/global', {})
 try {
  const response = await fetch(url)
  const data = await handleApiResponse(response)
  const globalInfo = data.data as GlobalContent  

  return globalInfo
 } catch (error) {
  console.error(error)
  return null
 }
}

export async function getAboutContent(){
  const url = constructUrl('/api/about', {
      populate: {
        image: {
          fields: ['alternativeText', 'name', 'url']
        },
      }
  })

  try {
    const response = await fetch(url)
    const data = await handleApiResponse(response)
    const aboutContent = data.data as AboutContent

    return aboutContent
  } catch (error) {
    console.error(error)
    return null
  }
}


export async function getHomeContent(){
  const url = constructUrl('/api/home', {
    populate: {
      blocks: {
        on: {
          'blocks.announcement-banner':{
            populate: true
          }
        }
      }
    }
  })

  try {
    const response = await fetch(url)
    const data = await handleApiResponse(response)
    const homeContent = data.data as HomeContent

    return homeContent
  } catch (error) {
    console.error(error)
    return null
  }
}


export async function getTeamMembers(){
  const url = constructUrl('/api/team-members',{
    populate: {
      photo: {
        fields: ['alternativeText', 'name', 'url']
      },
      blocks: {
        on: {
          'blocks.testimonial': {
            populate: {
              photo: {
                fields: ['alternativeText', 'name', 'url']
              }
            }
          },
          'blocks.spoiler':{
            populate: true
          },
        }
      }
    }
})

try {
  const response = await fetch(url)
  const data = await handleApiResponse(response)
  const teamMembers = data.data as TeamMembers

  return teamMembers
} catch (error) {
  console.error(error)
  return null
}
  
}

export async function getTeamMemberDetails(slug:string){
  const url = constructUrl('/api/team-members',{
    populate: {
      photo: {
        fields: ['alternativeText', 'name', 'url']
      },
      blocks: {
        on: {
          'blocks.testimonial': {
            populate: {
              photo: {
                fields: ['alternativeText', 'name', 'url']
              }
            }
          },
          'blocks.spoiler':{
            populate: true
          },
          'blocks.rich-text': {
            populate: true
          }
        }
      }
    },
    filters: {
        slug: {
            $eq: slug
        }
    }
  })

  try {
    const response = await fetch(url)
    const data = await handleApiResponse(response)
    const teamMember = data?.data[0] as TeamMember
    
    return teamMember 
    
  } catch (error) {
    console.error(error)
    return null
  }


}