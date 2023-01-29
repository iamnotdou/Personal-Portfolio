const axios = require("axios");
const NodeCache = require("node-cache");
export default async function handler(req, res) {
  const myCache = new NodeCache({ stdTTL: 86400, checkperiod: 86400 });

  const { data: access_token } = await axios.get(
    `${process.env.BASE_URL}/api/getAccessToken`
  );
  axios.defaults.baseURL = "https://api.spotify.com";
  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  const albumdIds = [
    "6oPPKtAwNNlkW4wwHfQDfM",
    "4PWBTB6NYSKQwfo79I3prg",
    "3IO8IPjwXuzPJnoaqkwYrj",
    "0MV1yCXcNNQBfwApqAVkH0",
    "79ONNoS4M9tfIA1mYLBYVX",
  ].join(",");

  if (myCache.has("albums")) {
    res.send(myCache.get("albums"));
  } else {
    var { data: albums } = await axios.get(`/v1/albums?ids=${albumdIds}`);
    myCache.set(
      "albums",
      albums.albums.map((album) => {
        return {
          name: album.name,
          cover: album.images[0].url,
          uri: album.uri,
          date: album.release_date,
          tracks: album.total_tracks,
          artists: album.artists.map((artist) => {
            return artist.name;
          }),
        };
      })
    );
    res.send(
      albums.albums.map((album) => {
        return {
          name: album.name,
          cover: album.images[0].url,
          uri: album.uri,
          date: album.release_date,
          tracks: album.total_tracks,
          artists: album.artists.map((artist) => {
            return artist.name;
          }),
        };
      })
    );
  }
}
