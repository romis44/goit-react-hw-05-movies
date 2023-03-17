import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieDetails } from 'services/api';

import MovieDetails from 'components/MovieDetails';
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
  const from = location.state.from;

  return (
    <main>
      {loading && <Loader />}
      <MovieDetails movie={movie} />

      <h2 style={{ textAlign: 'center' }}>Additional information</h2>

      <ul>
        <li>
          <Link state={{ from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
