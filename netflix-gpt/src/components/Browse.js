import { useEffect } from "react";
import Header from "./Header";
import { movieApiCall } from "../utils/api";

const Browse = () => {
  useEffect(() => {
    movieApiCall();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
