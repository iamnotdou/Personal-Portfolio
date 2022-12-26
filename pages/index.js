import Head from "next/head";
import React from "react";
import Repos from "../components/Repos";
import Skills from "../components/Skillset";
import Pages from "../components/Pages";
import Me from "../components/Me";

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
          <div id="box">
            <Pages />
            <Repos />
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default index;
