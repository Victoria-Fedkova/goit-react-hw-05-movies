import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews, getReviewsInfo } from 'services/getMovies';
import ReviewsList from './ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    // const fn = async () => {
    //   const response = await getPopularMovie();
    //   // console.log('response', response);
    //   setMovies(response);
    // };
    // fn();
    getReviews(movieId)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        // // перезапис значень, що використовуються для пагінації
        // if (pageNumber) {
        //   setCurrentPage(pageNumber);
        // }
        // setTotalMovies(response.data.total_results);
        // settTotalPages(response.data.total_pages);

        //обробка результату функцією getMoviesInfo прокидання отриманого обʼєкту в функцію обробник щоб витягнути необхідні поля
        console.log(response.data.results);
        setReviews(getReviewsInfo(response.data.results));
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [movieId]);
  return (
    <div>
      Reviews: {movieId}
      <ReviewsList reviews={reviews} />
    </div>
  );
};
export default Reviews;
