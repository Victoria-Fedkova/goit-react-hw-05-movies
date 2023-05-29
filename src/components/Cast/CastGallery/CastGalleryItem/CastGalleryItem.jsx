import { CastGalleryItemCard } from './CastGalleryItem.styled';

const CastGalleryItem = ({
  actor: { name, w300imgUrl, w500imgUrl, character },
}) => {
  return (
    <CastGalleryItemCard>
      <img
        srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
        sizes={'(max-width: 767px) 300px, (min-width: 768px) 500px'}
        src={w500imgUrl}
        alt={name}
        loading="lazy"
      />
      <div>
        <h4> {name}</h4>
        <p>{character}</p>
      </div>
    </CastGalleryItemCard>
  );
};

export default CastGalleryItem;
