import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews, getReviewsInfo } from 'services/getMovies';
import ReviewsList from './ReviewsList/ReviewsList';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    getReviews(movieId)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        setReviews(getReviewsInfo(response.data.results));
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}

      {reviews.length ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <h3>There is no reviews on this movie yet...</h3>
      )}
    </div>
  );
};
export default Reviews;
