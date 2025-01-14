import  TestimonialBlock, {TestimonialBlockInterface} from "./testimonial-block";
import SpoilerBlock, {SpoilerBlockInterface} from "./spoiler-block";
import { RichTextBlock } from "./rich-text-block";

type TeamPageBlock = SpoilerBlockInterface | TestimonialBlockInterface | RichTextBlock  ;

const blocks: Record<
  TeamPageBlock["__component"],
  React.ComponentType<{ block: TeamPageBlock }>
> = {
    "blocks.spoiler": ({ block }: { block: TeamPageBlock }) => (
        <SpoilerBlock block={block as SpoilerBlockInterface} />
    ),
    "blocks.testimonial": ({ block }: { block: TeamPageBlock }) => (
        <TestimonialBlock block={block as TestimonialBlockInterface} />
    ),
    "blocks.rich-text": ({ block }: { block: TeamPageBlock }) => (
        <RichTextBlock block={block as RichTextBlock} />
    ),
};

function BlockRenderer({ block }: { block: TeamPageBlock }) {
  const BlockComponent = blocks[block.__component];
  return BlockComponent ? <BlockComponent block={block} /> : null;
}

export { BlockRenderer };
export type { TeamPageBlock };