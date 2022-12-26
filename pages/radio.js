import React from "react";
import Albums from "../components/Radio/Albums";
import Player from "../components/Radio/Player";
import Recently from "../components/Radio/Recently";
import TopSongs from "../components/Radio/TopSongs";
import Suggest from "../components/Radio/Suggest";
import Head from "next/head";
function radio() {
  return (
    <>
      <Head>
        <title>Wice - Radio</title>
      </Head>
      <div className="radio">
        <div className="radio_inner">
          <div className="radio_title">
            Radio
            <a
              target="blank"
              href="https://open.spotify.com/user/3340oe5y77i8f37bveki1610w"
            >
              <img src="/icons/spotify.svg" alt="" />
              Spotify
            </a>
          </div>
          <div className="radio_row">
            <Player />
            <Recently />
          </div>
          <Albums />
          <div className="radio_row">
            <TopSongs />
            <Suggest />
          </div>
        </div>
      </div>
    </>
  );
}

export default radio;
