import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/api';

import Actors from 'components/Actors';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Actors cast={cast} />
    </>
  );
}
