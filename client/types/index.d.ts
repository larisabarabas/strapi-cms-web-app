declare type TeamMemberProps = {
    id: number;
    documentId: string;
    name: string;
    description: string
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    photo: {
        id: number,
        documentId: string;
        alternativeText: string;
        name: string,
        url: string
    }
}