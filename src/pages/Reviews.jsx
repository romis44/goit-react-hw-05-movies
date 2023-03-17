import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';

import Review from 'components/Review';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(result => {
        setReviews(result);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);

  return <>{reviews && <Review reviews={reviews} />}</>;
}
