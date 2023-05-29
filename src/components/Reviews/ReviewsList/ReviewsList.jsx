import PropTypes from 'prop-types';

import ReviewsListItem from './ReviewsListItem/ReviewsListItem';
import { ReviewList } from './ReviewList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews &&
        reviews.map(review => (
          <ReviewsListItem key={review.id} review={review} />
        ))}
    </ReviewList>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
