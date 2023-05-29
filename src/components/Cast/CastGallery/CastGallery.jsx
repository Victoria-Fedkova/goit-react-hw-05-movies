import { CastGalleryGrid } from '../CastGallery.styled';
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
export default CastGallery;
