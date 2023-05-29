import PropTypes from 'prop-types';

const ReviewsListItem = ({
  review: { avatar_path, name, username, content },
}) => {
  console.log(avatar_path);
  return (
    <li>
      <div>
        <img src={avatar_path} alt="avatar" />
        <h4>
          {name}
          <br />
          <span>@{username}</span>
        </h4>
      </div>
      <p>{content}</p>
    </li>
  );
};
ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    avatar_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsListItem;
