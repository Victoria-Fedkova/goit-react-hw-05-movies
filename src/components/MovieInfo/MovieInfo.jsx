import { InfoWrapper, Wrapper } from './MovieInfo.styled';
import PropTypes from 'prop-types';

const MovieInfo = ({
  movie: {
    title,
    titleOriginal,
    popularity,
    vote,
    votes,
    // w300imgUrl,
    w500imgUrl,
    genres,
    about,
  },
}) => {
  return (
    <Wrapper w500imgUrl={w500imgUrl}>
      {/* <img
        srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
        sizes="(max-width: 767px) 300px, (min-width: 768px) 500px"
        src={w500imgUrl}
        alt={title}
        loading="lazy"
      /> */}

      <InfoWrapper>
        <h1>{title}</h1>
        <h2>Original Title: {titleOriginal}</h2>

        <ul>
          <li>
            <h3> Votes</h3>
            <p>
              <span>{vote}</span>/<span>{votes}</span>
            </p>
          </li>
          <li>
            <h3>Popularity</h3>
            <p>{popularity}</p>
          </li>
          <li>
            <h3>Genre</h3>
            <p>{genres}</p>
          </li>
        </ul>
        <p>About</p>
        <p>{about}</p>
      </InfoWrapper>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleOriginal: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    // w300imgUrl,
    w500imgUrl: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;
