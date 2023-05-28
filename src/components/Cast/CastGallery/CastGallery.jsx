import CastGalleryItem from './CastGalleryItem/CastGalleryItem';

const CastGallery = ({ cast }) => {
  console.log('cast', cast);
  return (
    <ul>
      {cast &&
        cast.map(actor => <CastGalleryItem key={actor.id} actor={actor} />)}
    </ul>
  );
};
export default CastGallery;
