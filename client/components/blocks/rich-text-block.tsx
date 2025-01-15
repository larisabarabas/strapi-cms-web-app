"use client";

import RichTextRenderer, {RichTextNode} from "../rich-text-renderer";



export interface RichTextBlock {
  __component: "blocks.rich-text";
  id: number;
  content: RichTextNode[];
}


export function RichTextBlock({ block }: { block: RichTextBlock }) {
    console.log(block)
  return (
    <div className="richtext">
        <RichTextRenderer content={block.content}/>
    </div>
  );
}