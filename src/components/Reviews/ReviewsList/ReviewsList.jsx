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
export default ReviewsList;
