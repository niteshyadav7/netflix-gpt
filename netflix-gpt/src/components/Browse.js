import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
