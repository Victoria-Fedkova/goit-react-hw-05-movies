import { GalleryGrid } from './Gallery.styled';
import GalleryItem from './GalleryItem/GalleryItem';
import PropTypes from 'prop-types';

const Gallery = ({ movies }) => {
  return (
    <GalleryGrid>
      {movies &&
        movies.map(movie => <GalleryItem key={movie.id} movie={movie} />)}
    </GalleryGrid>
  );
};

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      w300imgUrl: PropTypes.string.isRequired,
      w500imgUrl: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Gallery;
