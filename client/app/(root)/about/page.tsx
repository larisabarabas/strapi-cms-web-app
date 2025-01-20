import { getAboutContent } from '@/app/api/strapi';
import Image from 'next/image';
import React from 'react';

const About = async () => {
  const aboutContent = await getAboutContent();
  const { title, description, image } = aboutContent.data;
  const imageURL = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337'}${image.url}`;

  return (
    <div className="bg-gray-200 container rounded-xl py-7 px-8 m-6 max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <Image
          src={imageURL}
          alt={title}
          width={500}
          height={500}
          className="rounded-md shadow-lg mb-4"
        />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <p className="text-lg font-medium text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default About;