const axios = require("axios");
 
const JELLYFIN_URL =
  "http://localhost:8096";
 
const API_KEY =
  process.env.JELLYFIN_API_KEY;
 
async function refresh() {
 
  await axios.post(
    `${JELLYFIN_URL}/Library/Refresh`,
    {},
    {
      headers: {
        "X-Emby-Token": API_KEY
      }
    }
  );
 
  return true;
}
 
module.exports = {
  refresh
};
