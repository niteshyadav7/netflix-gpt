import { API_OPTIONS } from "./constants";

export const movieApiCall = async function () {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    API_OPTIONS
  );
  const  {results}= await data.json();

  console.log(results);
  return results;
};