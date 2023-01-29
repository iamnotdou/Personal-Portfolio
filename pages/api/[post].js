const { Client } = require("@notionhq/client");
import colors from "./colors.json";
export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const pageId = req.query.post;
  const response = await notion.pages.retrieve({ page_id: pageId });
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  const { Title, Description, Status, Tag, Date } = response.properties;
  const data = {
    id: response.id,
    cover: response.cover ? response.cover[response.cover.type].url : "",
    reading_time: Math.ceil(
      blocks.results
        .filter((block) => {
          return block.type == "paragraph";
        })
        .map((paragraph) => {
          return paragraph.paragraph.rich_text
            .map((text) => {
              return text?.text?.content;
            })
            .join("");
        })
        .join("")
        .split(" ").length / 200
    ),
    title: Title[Title.type]
      .map((text) => {
        return text.text.content;
      })
      .join(""),
    color: colors[Tag[Tag.type].name.toLowerCase()],
    date: Date[Date.type].start,
    description: Description?.rich_text[0]?.text.content || "",
    tag: Tag[Tag.type].name,
    blocks: blocks.results.map((block) => {
      const type = block.type;
      switch (type) {
        case "paragraph":
          return {
            type,
            content: block[type].rich_text.map((text) => {
              return {
                link: text.text.link?.url || "",
                content: text?.text?.content,
                styles: Object.keys(text.annotations)
                  .filter((key) => {
                    return text.annotations[key] === true;
                  })
                  .join(" "),
              };
            }),
          };
        case "heading_2":
          return {
            type,
            content: block[type].rich_text.map((text) => {
              return {
                content: text.text.content,
                styles: Object.keys(text.annotations)
                  .filter((key) => {
                    return text.annotations[key] === true;
                  })
                  .join(" "),
              };
            }),
          };
        case "heading_3":
          return {
            type,
            content: block[type].rich_text.map((text) => {
              return {
                content: text.text.content,
                styles: Object.keys(text.annotations)
                  .filter((key) => {
                    return text.annotations[key] === true;
                  })
                  .join(" "),
              };
            }),
          };
        case "quote":
          return {
            type,
            color: block[type].color,
            content: block[type].rich_text.map((text) => {
              return {
                link: text.text.link?.url || "",
                content: text.text.content,
                styles: Object.keys(text.annotations)
                  .filter((key) => {
                    return text.annotations[key] === true;
                  })
                  .join(" "),
              };
            }),
          };
        case "image":
          return {
            type,
            caption: block[type].caption[0]?.text?.content || "",
            url: block[type][block[type].type].url,
          };
        case "divider": {
          return { type };
        }
        case "video": {
          return {
            type,
            url: block[type][block[type].type].url,
          };
        }
        case "code": {
          return {
            type,
            lang: block[type].language,
            title: block[type].caption
              .map((text) => {
                return text.plain_text;
              })
              .join(""),
            content: block[type].rich_text
              .map((code) => {
                return code.text.content;
              })
              .join(""),
          };
        }
        default:
          break;
      }
    }),
  };
  res.send(data);
}
