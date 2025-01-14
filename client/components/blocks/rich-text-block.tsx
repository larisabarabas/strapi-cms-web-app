"use client";
import { RichTextRenderer, type RichTextBlockRenderer } from "@webiny/react-rich-text-renderer";
import Image from "next/image";

export interface RichTextBlock {
  __component: "blocks.rich-text";
  id: number;
  content: RichTextBlockRenderer;
}


export function RichTextBlock({ block }: { block: RichTextBlock }) {
    console.log(block)
    const content = [
        {
            type: "paragraph",
            data: {
                text: "A well written paragraph of text can bring so much joy!",
                textAlign: "left",
                className: ""
            }
        }
    ];
  return (
    <div className="richtext">
        <RichTextRenderer data={content}/>
    </div>
  );
}