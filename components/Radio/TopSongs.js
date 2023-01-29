import Skeleton from "../Skeleton";
import React, { useState, useEffect } from "react";
import axios from "axios";
function TopSongs() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/getTopSongs`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="topSongs">
      <div className="title">Top Songs (This Week)</div>
      <div className="topSongs_inner">
        <div className="topSongs_content">
          {data &&
            data.map((track) => (
              <div
                key={track.id}
                className="track"
                onClick={() => {
                  track && window.open(track.uri);
                }}
              >
                <div
                  className="track_cover"
                  style={{
                    backgroundImage: `url(${track.cover})`,
                  }}
                >
                  {track.cover ? "" : <Skeleton />}
                </div>
                <div className="track_content">
                  {track ? (
                    <>
                      <div className="track_name">{track.name}</div>
                      <div className="track_artists">{track.artists}</div>
                    </>
                  ) : (
                    <Skeleton />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopSongs;
