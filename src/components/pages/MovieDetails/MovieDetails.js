import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, getMoviesDetails } from 'services/getMovies';
import { AddWrapper, GoBackBtn, PageWraper } from './MoviesDetails.styled';
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
    <PageWraper>
      {isLoading && <Loader />}
      <GoBackBtn to={backLinkHref}>go Back</GoBackBtn>

      {MovieDetails && !isLoading && (
        <>
          <MovieInfo movie={MovieDetails} />
          <AddWrapper>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ ...location.state }}>
                  <p>Cast</p>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ ...location.state }}>
                  <p>Reviews</p>
                </Link>
              </li>
            </ul>
          </AddWrapper>
          <Outlet />
        </>
      )}
      {!MovieDetails && !isLoading && <PlaceholderSerch />}
    </PageWraper>
  );
};

export default MovieDetails;
