import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "../Skeleton";
import Wave from "./Wave";
function Player() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/getPlayer`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="player">
      <div className="title">Current</div>
      <div className="player_inner">
        {/* {data. && <Wave />} */}
        <div
          className="player_cover"
          style={{
            backgroundImage: `url(${data?.cover})`,
          }}
        >
          {data ? "" : <Skeleton />}
        </div>
        <div className="player_content">
          <div className="player_status">
            {data ? (
              data.isPlaying ? (
                "Now Playing"
              ) : (
                "Recently Played"
              )
            ) : (
              <Skeleton />
            )}
          </div>
          <div className="player_name">{data ? data.name : <Skeleton />}</div>
          <div className="player_artists">
            {data ? data.artists : <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
