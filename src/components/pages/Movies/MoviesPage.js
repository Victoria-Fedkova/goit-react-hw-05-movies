import { useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';
import { getMovieByQuery, getMoviesInfo } from 'services/getMovies';
import Gallery from 'components/Gallery/Gallery';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  Form,
  SearchInput,
  SearchBtn,
  HeadingWraper,
} from './MoviesPage.styled';
import Button from 'components/LoadMoreBtn/LoadMoreBtn';
import PlaceholderSerch from '../NotFound/Placeholder';
import ScrollToTop from 'components/Cast/GoToTopBtn/GoToTopBtn';
// import PlaceholderSerch from '../NotFound/Placeholder';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  const [totalPages, settTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(false);

  const { query, page } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.query;
    if (!value.trim()) {
      Notiflix.Notify.failure('Sorry, incorect query. Please try again.');
      return;
    }
    setSearchParams({ query: value, page: 1 });
    // e.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) return;
    setIsloading(true);

    getMovieByQuery(query, page)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }

        if (!response.data.results.length) {
          setError(true);
          console.log('oops res', response.data.total_results);
          setIsloading(false);
          return console.log(
            'There is no movies with this request. Please, try again'
          );
        }
        setError(false);
        settTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);
        // console.log(response.data.total_results);
        // console.log(response.data.total_pages);

        setMovies(prevState => [
          ...prevState,
          ...getMoviesInfo(response.data.results),
        ]);
        // setIsFound(response.data.results.length > 0);
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [query, page, searchParams]);

  const onLoadMore = () => {
    const prevPage = searchParams.get('page') ?? 1;
    const query = searchParams.get('query');
    setSearchParams({ query, page: Number(prevPage) + 1 });
  };

  // console.log('---------------');
  // console.log('movies.length === 0', movies.length === 0);
  // console.log('query', query);
  // console.log('!isLoading', !isLoading);
  // console.log('---------------');
  return (
    <>
      <HeadingWraper>
        <h1>Searching movies</h1>
        <Form onSubmit={handleSubmit}>
          <SearchInput type="text" name="query" autoComplete="off" autoFocus />
          <SearchBtn type="submit">
            <FaSearch />
          </SearchBtn>
        </Form>
      </HeadingWraper>
      {isLoading && <Loader />}
      {!error && query && totalResults && (
        <>
          <Gallery movies={movies} />
          {page < totalPages && <Button onLoadMore={onLoadMore} />}
        </>
      )}
      {error && query && !isLoading && <PlaceholderSerch />}
      <ScrollToTop />
    </>
  );
};
export default MoviesPage;
