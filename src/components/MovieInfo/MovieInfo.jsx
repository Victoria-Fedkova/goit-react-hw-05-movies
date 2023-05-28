const MovieInfo = ({
  movie: {
    title,
    titleOriginal,
    popularity,
    vote,
    votes,
    w300imgUrl,
    w500imgUrl,
    genres,
    about,
  },
}) => {
  return (
    <div>
      <img
        srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
        sizes="(max-width: 767px) 300px, (min-width: 768px) 500px"
        src={w500imgUrl}
        alt={title}
        loading="lazy"
      />

      <div>
        <strong>{title}</strong>
        <ul>
          <li>
            <p>Vote / Votes</p>
            <p>
              <span>{vote}</span>
              <span> / </span>
              <span>{votes}</span>
            </p>
          </li>
          <li>
            <p>Popularity</p>
            <p>{popularity}</p>
          </li>
          <li>
            <p>Original Title</p>
            <p>{titleOriginal}</p>
          </li>
          <li>
            <p>Genre</p>
            <p>{genres}</p>
          </li>
        </ul>
        <p>About</p>
        <p>{about}</p>
      </div>
    </div>
  );
};
export default MovieInfo;
