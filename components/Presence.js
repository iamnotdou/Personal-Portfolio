import React, { useEffect, useRef, useState } from "react";
import IsOnline from "./IsOnline";
import Skeleton from "./Skeleton";
import Spotify from "./Spotify";
function Presence() {
  const [data, setData] = useState(null);
  const fetchPresence = () => {
    fetch("https://api.lanyard.rest/v1/users/902131196912345118")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((err) => {
        setData(err);
      });
  };
  useEffect(() => {
    fetchPresence();
    setInterval(() => {
      fetchPresence();
    }, 5000);
  }, []);

  return (
    <>
      {data ? (
        data.active_on_discord_desktop ? (
          <div id="presence">
            {data.listening_to_spotify ? (
              <Spotify data={data} />
            ) : (
              <IsOnline online={true} />
            )}
          </div>
        ) : (
          <IsOnline online={false} />
        )
      ) : (
        <Skeleton />
      )}
    </>
  );
}

export default Presence;
