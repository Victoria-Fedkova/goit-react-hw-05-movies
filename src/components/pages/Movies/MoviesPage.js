import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([
    { id: 1, name: 'movie-1' },
    { id: 2, name: 'movie-2' },
    { id: 3, name: 'movie-3' },
  ]);
  useEffect(() => {
    // http get
  }, []);

  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default MoviesPage;
