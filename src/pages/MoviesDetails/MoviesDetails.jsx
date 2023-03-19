import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { TitleStyle, CastStyle } from './MoviesDetails.styled';

import { getMovieDetails } from 'services/api';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader';

export default function MoviesDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [movieId]);

  const location = useLocation();
  // const from = location?.state?.from;

  return (
    <main>
      {loading && <Loader />}
      <MovieDetails movie={movie} />

      <TitleStyle>Additional information</TitleStyle>

      <ul>
        <CastStyle>
          <Link state={{ from: location }} to="cast">
            Cast
          </Link>
        </CastStyle>
        <CastStyle>
          <Link state={{ from: location }} to="reviews">
            Reviews
          </Link>
        </CastStyle>
      </ul>
      <Outlet />
    </main>
  );
}
