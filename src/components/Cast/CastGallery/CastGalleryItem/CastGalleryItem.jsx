const CastGalleryItem = ({
  actor: { name, w300imgUrl, w500imgUrl, character },
}) => {
  return (
    <li>
      <img
        srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
        sizes={'(max-width: 767px) 300px, (min-width: 768px) 500px'}
        src={w500imgUrl}
        alt={name}
        loading="lazy"
      />
      <div>
        <p> {name}</p>
        <p>{character}</p>
      </div>
    </li>
  );
};

export default CastGalleryItem;
