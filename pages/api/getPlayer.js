import axios from "axios";

export default async function handler(req, res) {
  const { data: access_token } = await axios.get(
    `${process.env.BASE_URL}/api/getAccessToken`
  );
  axios.defaults.baseURL = "https://api.spotify.com";
  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

  const playerData = await axios
    .get("/v1/me/player/currently-playing")
    .then(async (res) => {
      if (res.status !== 200) {
        return await axios.get("/v1/me/player/recently-played").then((res) => {
          return res.data;
        });
      }
      return res.data;
    });

  var player = playerData.items
    ? {
        name: playerData?.items[0]?.track?.name,
        cover: playerData?.items[0]?.track?.album.images[0].url,
        artists: playerData?.items[0]?.track?.album.artists

          .map((artist) => {
            return artist.name;
          })
          .join(", "),
        uri: playerData?.items[0]?.track?.uri,
        isPlaying: playerData?.items[0]?.is_playing,
      }
    : {
        name: playerData?.item?.name,
        cover: playerData?.item?.album.images[0].url,
        artists: playerData?.item?.album.artists
          .map((artist) => {
            return artist.name;
          })
          .join(", "),
        uri: playerData?.context?.uri,
        isPlaying: playerData?.is_playing,
      };
  res.send(player);
}
