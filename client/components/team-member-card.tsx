import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"

  import Image from 'next/image';
import Link from 'next/link';


const TeamMemberCard = ({name, description, photo, slug}: Readonly<TeamMember>) => {
    const imageURL = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337'}${photo.url}`
    return (
    <Link href={`/our-team/${slug}`}>
        <Card>
            <CardHeader className='grid justify-center'>
            <Image className='rounded-full w-[200px]' src={imageURL} alt={photo.alternativeText || name} width={300} height={300}/>
            </CardHeader>
            <CardContent>
                <p className='font-semibold truncate'>{name}</p>
                <p className='mb-2 mt-2  font-light'>{description}</p>
            </CardContent>
        </Card>
    </Link>

  )
}

export default TeamMemberCard