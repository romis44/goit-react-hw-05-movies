import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'services/api';

import SearchBar from 'components/SearchBar';
import List from 'components/List';
import Loader from 'components/Loader';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const search = searchParams.get('search');

  useEffect(() => {
    setLoading(true);

    if (search?.trim() === '') {
      alert('Please insert correct data!');
    }

    getSearchMovie(search)
      .then(setMovies)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {search && <List movies={movies} />}
    </>
  );
}
