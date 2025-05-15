import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getTrendingMovies } from "../api/tmdb-api";
import { BaseMovieProps } from "../types/interfaces";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TrendingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
    />
  );
};

export default TrendingMoviesPage;
