import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Gallery from 'components/Gallery/Gallery';
import { getMoviesInfo, getPopularMovie } from 'services/getMovies';
import Button from 'components/LoadMoreBtn/LoadMoreBtn';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [totalPages, settTotalPages] = useState(0);
  const homeLocation = useLocation();
  useEffect(() => {
    setIsloading(true);

    getPopularMovie(page)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        settTotalPages(response.data.total_pages);

        setMovies(prevState => [
          ...prevState,
          ...getMoviesInfo(response.data.results),
        ]);
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <h1>Trending today</h1>

          {movies.length && (
            <>
              <Gallery movies={movies} location={homeLocation} />
              {page < totalPages && <Button onLoadMore={onLoadMore} />}
            </>
          )}
        </div>
      )}
    </>
  );
};
export default HomePage;
