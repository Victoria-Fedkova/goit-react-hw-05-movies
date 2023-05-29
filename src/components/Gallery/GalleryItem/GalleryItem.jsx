import PropTypes from 'prop-types';
import {
  GalleryCardInfo,
  GalleryImg,
  GalleryItemCard,
  GalleryLink,
} from './GalleryItem.styled';
const { useLocation } = require('react-router-dom');

const GalleryItem = ({
  movie: { title, w300imgUrl, w500imgUrl, year, id },
}) => {
  const location = useLocation();
  return (
    <GalleryItemCard>
      <GalleryLink to={`/movies/${id}`} state={{ from: location }}>
        <GalleryImg
          srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
          sizes={'(max-width: 767px) 300px, (min-width: 768px) 500px'}
          src={w500imgUrl}
          alt={title}
          loading="lazy"
        />
        <GalleryCardInfo>
          <h3>{title}</h3>
          <p>{year}</p>
        </GalleryCardInfo>
      </GalleryLink>
    </GalleryItemCard>
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
