import React from "react";
import Page from "../components/Page";
import {
  BlogIcon,
  PagesIcon,
  ProjectsIcon,
  RadioIcon,
} from "../components/Icons";
import { useRouter } from "next/router";
const pages = [
  {
    name: "Radio",
    icon: <RadioIcon />,
    des: "Check out my weekly top songs and favorite albums",
    link: "radio",
  },
  {
    name: "Blog",
    icon: <BlogIcon />,
    des: " It's going to be ready soon!",
    warn: {
      text: "soon",
      color: "red",
    },
  },
  {
    name: "Projects",
    icon: <ProjectsIcon />,
    warn: {
      text: "soon",
      color: "red",
    },
    des: "Check out my project that i currently work on",
  },
];
function Pages() {
  const router = useRouter();
  return (
    <div id="pages">
      <div id="pages_title">
        <PagesIcon /> Pages
      </div>
      <div id="pages_content">
        {pages.map((page) => (
          <Page
            key={page.name}
            link={page.link}
            name={page.name}
            des={page.des}
            icon={page.icon}
            warn={page.warn}
          />
        ))}
      </div>
    </div>
  );
}

export default Pages;
