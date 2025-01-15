import React, {JSX} from "react";

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

export type RichTextNode = TextNode | HeadingNode | ParagraphNode | LinkNode | ListNode | ListItemNode;

export interface RichTextRendererProps {
  content: RichTextNode[];
  customRenderers?: Partial<Record<RichTextNode["type"], (node: RichTextNode) => React.ReactNode>>;
  defaultClassName?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  content,
  customRenderers = {},
  defaultClassName = "",
}) => {
  const renderChildren = (children: RichTextNode[], parentKey: string) => (
    <>
      {children.map((child, index) => (
        <React.Fragment key={`${parentKey}-${index}`}>{renderNode(child, `${parentKey}-${index}`)}</React.Fragment>
      ))}
    </>
  );

  const renderNode = (node: RichTextNode, key: string): React.ReactNode => {
    // Check for a custom renderer first
    if (customRenderers[node.type]) {
      return customRenderers[node.type]!(node);
    }

    // Default renderers
    switch (node.type) {
      case "text":
        return <span className={defaultClassName}>{node.text}</span>;

      case "heading":
        const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag className={defaultClassName} key={key}>
            {renderChildren(node.children, key)}
          </HeadingTag>
        );

      case "paragraph":
        return (
          <p className={defaultClassName} key={key}>
            {renderChildren(node.children, key)}
          </p>
        );

      case "link":
        return (
          <a href={node.url} className={defaultClassName} key={key}>
            {renderChildren(node.children, key)}
          </a>
        );

      case "list":
        const ListTag = node.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag className={defaultClassName} key={key}>
            {node.children.map((item, index) => (
              <li key={`${key}-${index}`} className={defaultClassName}>
                {renderChildren(item.children, `${key}-${index}`)}
              </li>
            ))}
          </ListTag>
        );

      default:
        return (
          <div className={defaultClassName} key={key}>
            Unsupported node type: <code>{JSON.stringify(node)}</code>
          </div>
        );
    }
  };

  return (
    <>
      {content.map((node, index) => (
        <React.Fragment key={`root-${index}`}>{renderNode(node, `root-${index}`)}</React.Fragment>
      ))}
    </>
  );
};

export default RichTextRenderer;
