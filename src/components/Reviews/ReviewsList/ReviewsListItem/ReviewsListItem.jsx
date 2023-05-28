const ReviewsListItem = ({ review: { author, content } }) => {
  return (
    <li>
      <h2> {author}</h2>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsListItem;
