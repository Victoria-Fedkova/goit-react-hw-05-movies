import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, getMoviesDetails } from 'services/getMovies';
import { GoBackBtn } from './MoviesDetails.styled';
import Loader from 'components/Loader/Loader';
import PlaceholderSerch from '../NotFound/Placeholder';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [MovieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsloading(true);

    getMovieById(movieId)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        setMovieDetails(getMoviesDetails(response.data));
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [movieId]);

  return (
    <div>
      <h2>Movie Details : {movieId}</h2>
      {isLoading && <Loader />}
      <GoBackBtn to={backLinkHref}>go Back</GoBackBtn>

      {MovieDetails && !isLoading && (
        <>
          <MovieInfo movie={MovieDetails} />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
      {!MovieDetails && !isLoading && <PlaceholderSerch />}
    </div>
  );
};

export default MovieDetails;
