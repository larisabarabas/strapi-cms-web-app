"use client";

import RichTextRenderer from "../rich-text-renderer";



export function RichTextBlock({ block }: { block: RichTextBlock }) {
  return (
    <div className="richtext">
        <RichTextRenderer content={block.content}/>
    </div>
  );
}