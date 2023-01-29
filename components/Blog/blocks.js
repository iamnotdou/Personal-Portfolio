import React, { useEffect } from "react";
import prismjs from "prismjs";
import uniqid from "uniqid";
export function Divider() {
  return <hr className="block_divider block" />;
}

export function Code({ block }) {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);
  return (
    <pre className={"language-" + block.lang}>
      <div
        id="copy"
        onClick={() => {
          navigator.clipboard.writeText(block.content);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
            d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32"
          />
          <rect
            width="160"
            height="64"
            x="176"
            y="32"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
            rx="26.13"
            ry="26.13"
          />
        </svg>
      </div>
      <div id="language_name">{block.lang}</div>
      <code>{block.content}</code>
    </pre>
  );
}
export function Quote({ block }) {
  return (
    <div className={"block_quote block " + block.color}>
      {block.content.map((item) => {
        return (
          <span key={String(uniqid).split(0, 8)} className={item.styles}>
            {item.link ? <a href={item.link}>{item.content}</a> : item.content}
          </span>
        );
      })}
    </div>
  );
}

export function Paragraph({ block }) {
  return (
    <p className="block_paragraph block">
      {block.content.map((item, index) => {
        return (
          <span className={item.styles} key={item.id}>
            {item.link ? <a href={item.link}>{item.content}</a> : item.content}
          </span>
        );
      })}
    </p>
  );
}
export function Image({ block }) {
  return (
    <div className="block_image block" src={block.url} alt="">
      <img src={block.url} alt="" />
      {block.caption && (
        <div className="block_image_content">{block.caption}</div>
      )}
    </div>
  );
}
export function Heading1({ block }) {
  return (
    <h2 className="block_heading_3 block">
      {block.content.map((item) => {
        return <span key={uniqid()}>{item.content}</span>;
      })}
    </h2>
  );
}
export function Heading2({ block }) {
  return (
    <h2 className="block_heading_3 block">
      {block.content.map((item) => {
        return <span key={uniqid()}>{item.content}</span>;
      })}
    </h2>
  );
}
export function Heading3({ block }) {
  return (
    <h2 className="block_heading_3 block">
      {block.content.map((item) => {
        return <span key={uniqid()}>{item.content}</span>;
      })}
    </h2>
  );
}

export function Video({ block }) {
  return (
    <iframe
      title={block.url}
      className="block block_video"
      frameBorder={0}
      src={block.url.replace("watch?v=", "embed/")}
    ></iframe>
  );
}
export default {
  paragraph: Paragraph,
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  image: Image,
  video: Video,
  quote: Quote,
  code: Code,
  divider: Divider,
};
