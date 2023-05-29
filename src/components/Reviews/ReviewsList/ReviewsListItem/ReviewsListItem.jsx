import PropTypes from 'prop-types';

const ReviewsListItem = ({ review: { author, content } }) => {
  return (
    <li>
      <h2> {author}</h2>
      <p>{content}</p>
    </li>
  );
};
ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsListItem;
