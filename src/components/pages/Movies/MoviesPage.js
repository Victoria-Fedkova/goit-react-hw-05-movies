import { useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';
import { getMovieByQuery, getMoviesInfo } from 'services/getMovies';
import Gallery from 'components/Gallery/Gallery';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  Form,
  SearchInput,
  SearchBtn,
  HeadingWraper,
} from './MoviesPage.styled';
import Button from 'components/LoadMoreBtn/LoadMoreBtn';
// import PlaceholderSerch from '../NotFound/Placeholder';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [totalPages, settTotalPages] = useState(0);
  const [isFound, setIsFound] = useState(true);

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
        settTotalPages(response.data.total_pages);

        //обробка результату функцією getMoviesInfo прокидання отриманого обʼєкту в функцію обробник щоб витягнути необхідні поля
        setMovies(prevState => [
          ...prevState,
          ...getMoviesInfo(response.data.results),
        ]);

        setIsFound(response.data.results.length > 0);
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
      {isFound && query && !isLoading && (
        <>
          <Gallery movies={movies} location={location} />
          {page < totalPages && <Button onLoadMore={onLoadMore} />}
        </>
        // ) : (
        // <PlaceholderSerch />
      )}
    </>
  );
};
export default MoviesPage;
