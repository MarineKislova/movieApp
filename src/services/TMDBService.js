import { getResource } from "./service";

const API_KEY_themoviedb =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTI3Mjc0YjBiZTBkODIzMGM1YjBmODA3ZTc4ZWEzNiIsIm5iZiI6MTc2MDYwMzMyOS42NTI5OTk5LCJzdWIiOiI2OGYwYWNjMTRhNTAxOWVlY2FhZDdjOTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.I-sWZTS6NdTYCUtgFHJMRtzDIwYmgMq-MmCawOSqpsM";
const BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY_themoviedb}`,
    "User-Agent": "StudentProject/1.0 (contact: marinekislova@gmail.com)",
  },
};

class Trending {

  getResource = async (url, option) => {
    let response = await fetch(url, option);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
     return data;
  };

  getAllTrending = (page) => {
    return this.getResource(
      `${BASE_URL}trending/all/week?week?language=en-USpage=${page}`,
      options
    );
  };

  getMoviesTrending = (page) => {
    return this.getResource(
      `${BASE_URL}trending/movie/week?week?language=en-USpage=${page}`,
      options
    );
  };

  getTvShowsTrending = (page) => {
    return this.getResource(
      `${BASE_URL}trending/tv/week?week?language=en-USpage=${page}`,
      options
    );
  };
}

export default Trending;
