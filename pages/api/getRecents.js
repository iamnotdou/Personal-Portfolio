import axios from "axios";

export default async function handler(req, res) {
  const { data: access_token } = await axios.get(
    `${process.env.BASE_URL}/api/getAccessToken`
  );

  axios.defaults.baseURL = "https://api.spotify.com";
  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

  const { data: recents } = await axios.get(
    "/v1/me/player/recently-played?limit=20"
  );
  const recently = recents.items
    .map(({ track }) => {
      return {
        name: track.name,
        cover: track.album.images[2].url,
        artists: track.artists.map((artist) => {
          return artist.name;
        }),
        uri: track.uri,
      };
    })
    .reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o);
      }
      return unique;
    }, []);

  res.send(recently);
}
