import React, { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import axios from "axios";

function Albums({ albums }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/getAlbums`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="albums">
      <div className="title">Favorite Albums</div>
      <div className="albums_content">
        {data ? (
          data.map((album) => {
            return (
              <div
                key={album.uri}
                onClick={() => {
                  window.open(album.uri, "_blank");
                }}
                className="album"
                style={{ backgroundImage: `url(${album.cover})` }}
              >
                {album.cover ? "" : <Skeleton />}
              </div>
            );
          })
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}

export default Albums;
