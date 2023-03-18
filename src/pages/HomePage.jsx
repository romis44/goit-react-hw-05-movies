import { useState, useEffect } from 'react';
import { TitleName } from './HomePage.styled';

import { getTrendingMovie } from 'services/api';
import List from 'components/List';
import Loader from 'components/Loader';

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovie()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <TitleName>Trending Movies</TitleName>
      {<List movies={movies} />}
    </main>
  );
}
