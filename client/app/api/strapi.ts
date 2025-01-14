import qs from 'qs'

export async function getTeamMembers(){
    const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"
    const path = "/api/team-members"

    const url = new URL(path, baseURL)
    url.search = qs.stringify({
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
                //   'blocks.rich-text': {
                //     populate: true
                //   }
                }
              }
            }
    })

    const response = await fetch(url)

    if(!response.ok) throw new Error("Failed to fetch team members")

    const data = await response.json()
    return data
}

export async function getTeamMemberDetails(slug:string){
    const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"
    const path = "/api/team-members"

    const url = new URL(path, baseURL)
    url.search = qs.stringify({
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

    const response = await fetch(url)

    if(!response.ok) throw new Error("Failed to fetch team member details")

    const data = await response.json()
    const teamMember = data?.data[0]
    return teamMember
}