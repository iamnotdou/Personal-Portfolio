import Skeleton from "../Skeleton";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Recently() {
  const [data, setData] = useState(Array(25).fill(2));
  useEffect(() => {
    axios.get(`/api/getRecents`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="recents">
      <div className="title">Recently Played</div>
      <div className="recents_inner">
        <div className="recents_content">
          {data &&
            data.map((recent) => (
              <div
                key={recent.uri}
                className="track"
                onClick={() => {
                  window.open(recent.uri);
                }}
              >
                <div
                  className="track_cover"
                  style={{
                    backgroundImage: `url(${recent.cover})`,
                  }}
                >
                  {recent.cover ? "" : <Skeleton />}
                </div>
                <div className="track_content">
                  {recent ? (
                    <>
                      <div className="track_name">{recent.name}</div>
                      <div className="track_artists">{recent.artists}</div>
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

export default Recently;
