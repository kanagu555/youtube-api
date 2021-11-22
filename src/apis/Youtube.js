import axios from "axios";

const KEY = "AIzaSyA4mNA5J6W7t25oXlSJXrmiTMpaE88DOIw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
