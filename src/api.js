import axios from "axios";

const ACCESS_KEY = "nRPPCM2WJi75dfXvowZTw-bAhLJdwKZZAGLv-oNKUls";
const SEARCH_URL = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  try {
    const res = await axios.get(SEARCH_URL, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query: term,
      },
    });

    return res.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default searchImages;
