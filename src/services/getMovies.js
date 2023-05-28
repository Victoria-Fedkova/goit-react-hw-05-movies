import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ae38d5c8baf36c9c4ca14e9456f3c0fd';
//зображення що завантажиться при відсутності постеру
const DEFAULT_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

//запит до серверу, що отримує дані популярних фільмів
export const getPopularMovie = async pageNumber => {
  const data = await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${
      pageNumber ? pageNumber : 1
    }`
  );
  return data;
};

//запит на сервер, пошук фільмів за ключовими словами
export const getMovieByQuery = async (query, pageNumber) => {
  const data = await axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
      pageNumber ? pageNumber : 1
    }`
  );
  return data;
};

// функція обробник повернення масиву об"єктів даних про фільми
export const getMoviesInfo = moviesArr => {
  return moviesArr.map(movie => {
    const movieInfo = {
      title: movie.title ? movie.title : movie.name, //назва
      w300imgUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : DEFAULT_IMG, // постер, або дефолтна картинка за відсутності постера
      w500imgUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : DEFAULT_IMG, // постер, або дефолтна картинка за відсутності постера
      year: movie.release_date
        ? movie.release_date.slice(0, 4)
        : movie?.first_air_date?.slice(0, 4) || '', //рік
      id: movie.id,
    };
    return movieInfo;
  });
};

//запит, що отримує інформацію про фільм за ID
export const getMovieById = async id => {
  const data = await axios(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

//запит на акторський склад
export const getCastInfo = async id => {
  const data = await axios(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const getCastInfoObj = castArr => {
  return castArr.map(actor => {
    const castInfo = {
      name: actor.name ? actor.name : actor.original_name,
      w300imgUrl: actor.poster_path
        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
        : DEFAULT_IMG,
      w500imgUrl: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : DEFAULT_IMG,
      character: actor.character,
      id: actor.id,
    };
    return castInfo;
  });
};

export const getReviews = async id => {
  console.log(id);
  const data = await axios(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data;
};
export const getReviewsInfo = reviewsArr => {
  return reviewsArr.map(review => {
    const reviewInfo = {
      author: review.author,
      content: review.content,
      id: review.id,
    };
    return reviewInfo;
  });
};

// функція обробник повертає об"єкт з детальною інформацією по фільму, в інших файлах не використовується
export const getMoviesDetails = movie => {
  let genres = movie.genres.map(elem => elem.name);
  let cutGenres;
  if (genres.length === 0) {
    cutGenres = 'Other';
  } else if (genres.length <= 2) {
    cutGenres = genres.join(', ');
  } else {
    cutGenres = `${genres.slice(0, 2).join(', ')}, Other`;
  }
  return {
    title: movie.title ? movie.title : movie.name, //назва
    titleOriginal: movie.original_title, // оригінальна назва
    popularity: movie.popularity, //популярність
    vote: movie.vote_average, // середній рейтинг
    votes: movie.vote_count, // кількість голосів
    w300imgUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : DEFAULT_IMG, // постер, або дефолтна картинка за відсутності постера
    w500imgUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : DEFAULT_IMG, // постер, або дефолтна картинка за відсутності постера
    genres: cutGenres, // жанри
    about: movie.overview,
    year: movie.release_date
      ? movie.release_date.slice(0, 4)
      : movie?.first_air_date?.slice(0, 4) || '',
  };
};
