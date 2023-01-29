import { Client } from "@notionhq/client";
import colors from "./colors.json";
export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DB_KEY,

    filter: {
      property: "Status",
      status: {
        equals: "Done",
      },
    },
  });

  const pages = database.results;
  res.send({
    pages: pages.map((page) => {
      const { Description, Date, Title, Tag, Read } = page.properties;
      if (Read.number === null) {
        notion.pages.update({
          page_id: page.id,
          properties: {
            Read: {
              number: 3,
            },
          },
        });
      }
      return {
        id: page.id,
        read: Read.number,
        color: colors[Tag[Tag.type].name.toLowerCase()],
        title: Title.title[0]?.text?.content,
        tag: Tag[Tag.type].name,
        date: Date[Date.type].start,
        cover: page.cover?.type ? page.cover[page.cover.type].url : "",
        description: Description?.rich_text
          .map(({ plain_text }) => {
            return plain_text;
          })
          .join(""),
      };
    }),
  });
}
