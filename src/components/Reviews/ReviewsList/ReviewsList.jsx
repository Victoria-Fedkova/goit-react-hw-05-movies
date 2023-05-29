import PropTypes from 'prop-types';

import ReviewsListItem from './ReviewsListItem/ReviewsListItem';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <ReviewsListItem key={review.id} review={review} />
        ))}
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
