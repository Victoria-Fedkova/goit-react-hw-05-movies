import PropTypes from 'prop-types';
import { CastGalleryGrid } from './/CastGallery.styled';
import CastGalleryItem from './CastGalleryItem/CastGalleryItem';

const CastGallery = ({ cast }) => {
  return (
    <CastGalleryGrid>
      {cast &&
        cast
          ?.slice(0, 12)
          ?.map(actor => <CastGalleryItem key={actor.id} actor={actor} />)}
    </CastGalleryGrid>
  );
};
CastGallery.propTypes = {
  imagcastes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      w300imgUrl: PropTypes.string.isRequired,
      w500imgUrl: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CastGallery;
