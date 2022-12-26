const refresh_token = process.env.REFRESH_TOKEN;
const encoded = process.env.CLIENT_ENCODED;
import axios from "axios";

const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 3600 });

const getAccessToken = async () => {
  const { data: access_token } = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      refresh_token,
      grant_type: "refresh_token",
    }),
    {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    }
  );
  return access_token.access_token;
};

export default async function handler(req, res) {
  if (myCache.has("access_token")) {
    res.send(myCache.get("access_token"));
  } else {
    const access_token = await getAccessToken();
    myCache.set("access_token", access_token);
    res.send(access_token);
  }
}
