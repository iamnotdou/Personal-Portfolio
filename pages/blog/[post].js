import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Components from "../../components/Blog/blocks";
function post({ post }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{post.title} - wice</title>
      </Head>
      <div id="post">
        <div id="post_inner">
          <div id="post_info">
            <div
              id="post_link"
              onClick={() => {
                router.push("/blog");
              }}
            >
              Blog posts
            </div>
            <div id="post_title">{post.title}</div>
            <div id="post_description">{post.description}</div>
            <div id="post_bottom">
              <div id="post_tag">
                <div
                  id="post_tag_background"
                  style={{
                    backgroundColor: post.color,
                  }}
                ></div>
                <div
                  id="post_tag_text"
                  style={{
                    color: post.color,
                  }}
                >
                  {post.tag}
                </div>
              </div>
              <div id="post_date">
                {new Date(post.date).toLocaleString("tr-TR", {
                  day: "numeric",
                  month: "short",
                })}
              </div>
              <div id="post_min">{post.reading_time} min</div>
            </div>
          </div>
          {post.cover && <img id="post_cover" src={post.cover} alt="" />}
          <div id="post_dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div id="post_content">
            {post.blocks.map((block) => {
              const Component = Components[block.type];
              return <Component block={block} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default post;
export async function getServerSideProps({ params }) {
  const { data: post } = await axios.get(
    `${process.env.BASE_URL}/api/${params.post}`
  );
  return {
    props: {
      post,
    },
  };
}
