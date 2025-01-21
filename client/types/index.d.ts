interface TeamMember {
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
    },
    blocks?: TeamPageBlock[]
}

type TeamMembers = TeamMember[]

interface GlobalContent  {
    id: number,
    siteName: string,
    siteDescription: string,
    metaAuthor: string,
    metaAuthorURL:string,
    metaDescription: string,
    metaTitle: string,
    documentId: number,
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface AboutContent {
    id:number,
    title: string,
    description: string,
    image: {
        id: number,
        documentId: string;
        alternativeText: string;
        name: string,
        url: string
    },
    documentId: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
}

interface HomeContent {
    id:number,
    documentId: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    headline: string,
    description:string,
    blocks: AnnouncementBannerBlock[]
}

interface AnnouncementBannerBlock {
    id: number,
    linkTitle: string,
    linkURL:string,
    title: string,
    __component: "block.announcement-banner"
}


interface NavLinkProps {
    href:string,
    children: React.ReactNode
}


interface RichTextRendererProps {
    content: RichTextNode[];
    customRenderers?: Partial<Record<RichTextNode["type"], (node: RichTextNode) => React.ReactNode>>;
    defaultClassName?: string;
  }
  
interface RichTextBlock {
    __component: "blocks.rich-text";
    id: number;
    content: RichTextNode[];
}

interface TestimonialBlockInterface {
  __component: "blocks.testimonial";
  id: number;
  authorName: string;
  quote: string;
  photo: {
    id: number;
    documentId: string;
    alternativeText: string | null;
    name: string;
    url: string;
  };
}

interface SpoilerBlockInterface {
    __component: "blocks.spoiler",
    id: number,
    title: string,
    content: string
}

type TeamPageBlock = SpoilerBlockInterface | TestimonialBlockInterface | RichTextBlock 

type TextNode = {
  text: string;
  type: "text";
};

type HeadingNode = {
  type: "heading";
  level: number;
  children: RichTextNode[];
};

type ParagraphNode = {
  type: "paragraph";
  children: RichTextNode[];
};

type LinkNode = {
  type: "link";
  url: string;
  children: RichTextNode[];
};

type ListItemNode = {
  type: "list-item";
  children: RichTextNode[];
};

type ListNode = {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemNode[];
};


type RichTextNode = TextNode | HeadingNode | ParagraphNode | LinkNode | ListNode | ListItemNode;
