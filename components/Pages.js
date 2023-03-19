import React from "react";
import Page from "../components/Page";
import {
  BlogIcon,
  BranchIcon,
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
    des: "Check out my blog posts written in Turkish!",
    warn: {
      text: "soon",
      color: "red",
    },
  },
  {
    name: "Repositories",
    icon: <BranchIcon />,
    des: "Check out my repositories on GitHub!",
    warn: {
      text: "soon",
    },
  },
  {
    name: "Projects",
    icon: <ProjectsIcon />,
    warn: {
      text: "soon",
      color: "red",
    },
    des: "Its coming soon!",
  },
];
function Pages() {
  const router = useRouter();
  return (
    <div id="pages" className="flex flex-col gap-4">
      <div className="font-medium flex text-xl items-center  text-white">
        <PagesIcon className="mr-1 h-5" /> Pages
      </div>
      <div id="pages_content" className="grid xl:grid-cols-2 gap-4 grid-cols-1">
        {pages.map(({ name, icon, link, des, warn }) => (
          <div
            id="page"
            className="flex flex-col justify-between p-4 gap-2 rounded-md cursor-pointer transition-all border border-white/10 relative hover:bg-white/5"
            onClick={() => {
              link && router.push("/" + link);
            }}
          >
            <div className="w-6">{icon}</div>
            <div id="page_content" className="flex flex-col gap-1">
              {warn && (
                <div
                  id="page_content_warn"
                  className="text-red-500 bg-red-500/20 absolute right-4 top-4 py-1.5 px-2.5 rounded-full"
                >
                  {warn.text}
                </div>
              )}
              <div className="text-foreground text-lg">{name}</div>
              <div id="page_content_des" className="text-foreground/50">
                {des}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
