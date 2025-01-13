import qs from 'qs'

export async function getTeamMembers(){
    const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"
    const path = "/api/team-members"

    const url = new URL(path, baseURL)
    url.search = qs.stringify({
        populate: {
            photo:{
                fields:['alternativeText', 'name', 'url']
            }
        }
    })

    const response = await fetch(url)

    if(!response.ok) throw new Error("Failed to fetch team members")

    const data = await response.json()
    return data
}