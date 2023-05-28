import PropTypes from 'prop-types';
const { Link, useLocation } = require('react-router-dom');

const GalleryItem = ({
  movie: { title, w300imgUrl, w500imgUrl, year, id },
}) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
          sizes={'(max-width: 767px) 300px, (min-width: 768px) 500px'}
          src={w500imgUrl}
          alt={title}
          loading="lazy"
        />
        <div>
          <p> {title}</p>
          <p>{year}</p>
        </div>
      </Link>
    </li>
  );
};

GalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    w300imgUrl: PropTypes.string.isRequired,
    w500imgUrl: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default GalleryItem;
