import React, { useEffect } from "react";
import data from "../assets/data.json";
import { SkillsetIcon } from "./Icons";
function Skills() {
  useEffect(() => {
    document.querySelectorAll(".tiles").forEach((el) => {
      el.onmousemove = (e) => {
        for (const tile of document.getElementsByClassName("tile")) {
          const rect = tile.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          tile.style.setProperty("--mouse-x", `${x}px`);
          tile.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    });
  }, []);
  return (
    <div id="skills">
      <div id="skills_inner" className="inner">
        <div id="skills_title">
          <SkillsetIcon />
          Skillset
        </div>
        <div id="skills_subs">
          {Object.keys(data.data).map((el) => {
            return (
              <div id="skills_sub" key={el + ""}>
                <div id="skills_subs_title">{el}</div>
                <div className="tiles">
                  {data.data[el].map((a, i) => {
                    return (
                      <div className="tile" key={a + i}>
                        <div className="tile_content">
                          <img
                            className="img"
                            src={`../icons/${a}.svg`}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
