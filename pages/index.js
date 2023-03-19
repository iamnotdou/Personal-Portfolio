import Head from "next/head";
import React from "react";
import Skills from "../components/Skillset";
import Pages from "../components/Pages";
import Me from "../components/Me";
import Presence from "../components/Presence";
function index() {
  return (
    <>
      <Head>
        <title>Wice - Me</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div id="app">
        <div id="app_inner">
          <Me />
          <Pages />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default index;
