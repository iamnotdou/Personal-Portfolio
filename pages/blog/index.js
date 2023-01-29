import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
function blog({ blog }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Wice - Blog</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div id="blog">
        <div id="blog_inner">
          <div id="blog_title">Blog</div>
          <div className="blog_posts">
            {blog.pages.map((page) => {
              return (
                <div
                  className="post"
                  onClick={() => {
                    router.push("/blog/" + page.id);
                  }}
                  key={page.id}
                >
                  <div
                    className="post_title"
                    style={{ textDecorationColor: page.color }}
                  >
                    {page.title}
                  </div>
                  <div className="post_description">{page.description}</div>
                  <div className="post_bottom">
                    <div className="post_tag">
                      <div
                        className="post_tag_background"
                        style={{
                          backgroundColor: page.color,
                        }}
                      ></div>
                      <div
                        className="post_tag_text"
                        style={{
                          color: page.color,
                        }}
                      >
                        {page.tag}
                      </div>
                    </div>
                    <div className="post_date">
                      {" "}
                      {new Date(page.date).toLocaleString("tr-TR", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default blog;
export async function getServerSideProps() {
  const { data: blog } = await axios.get(`${process.env.BASE_URL}/api/notion`);
  return {
    props: {
      blog,
    },
  };
}
