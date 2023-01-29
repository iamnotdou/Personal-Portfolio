import Head from "next/head";
import React from "react";
import Repos from "../components/Repos";
import Skills from "../components/Skillset";
import Pages from "../components/Pages";
import Me from "../components/Me";
import { motion } from "framer-motion";
function index() {
  return (
    <>
      <Head>
        <title>Wice - Me</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <motion.div
        id="app"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <div id="app_inner">
          <Me />
          <div id="box">
            <Pages />
            <Repos />
          </div>
          <Skills />
        </div>
      </motion.div>
    </>
  );
}

export default index;
