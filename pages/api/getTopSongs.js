const axios = require("axios");
export default async function handler(req, res) {
  const limit = 50;
  const offset = 0;
  const { data: access_token } = await axios.get(
    `${process.env.BASE_URL}/api/getAccessToken`
  );
  axios.defaults.baseURL = "https://api.spotify.com";
  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

  const { data: topSongs } = await axios.get(
    `/v1/me/top/tracks?time_range=short_term&limit=${limit}&offset=${offset}`
  );
  res.send(
    topSongs.items.map((track) => {
      return {
        id: track.id,
        name: track.name,
        uri: track.uri,
        artists: track.artists
          .map((artist) => {
            return artist.name;
          })
          .join(" ,"),
        cover: track.album.images[2].url,
      };
    })
  );
}
