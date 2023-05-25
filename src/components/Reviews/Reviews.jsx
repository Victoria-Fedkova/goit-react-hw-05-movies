import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  return <div>Reviews: {movieId}</div>;
};
export default Reviews;
