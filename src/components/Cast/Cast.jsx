import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo, getCastInfoObj } from 'services/getMovies';
import CastGallery from './CastGallery/CastGallery';

const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    // const fn = async () => {
    //   const response = await getPopularMovie();
    //   // console.log('response', response);
    //   setMovies(response);
    // };
    // fn();
    getCastInfo(movieId)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        // // перезапис значень, що використовуються для пагінації
        // if (pageNumber) {
        //   setCurrentPage(pageNumber);
        // }
        // setTotalMovies(response.data.total_results);
        // settTotalPages(response.data.total_pages);

        //обробка результату функцією getMoviesInfo прокидання отриманого обʼєкту в функцію обробник щоб витягнути необхідні поля
        // console.log(response.data.cast);
        setCastInfo(getCastInfoObj(response.data.cast));
        // console.log(castInfo);
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [movieId]);

  return (
    <div>
      Cast: {movieId}
      <CastGallery cast={castInfo} />
    </div>
  );
};
export default Cast;
