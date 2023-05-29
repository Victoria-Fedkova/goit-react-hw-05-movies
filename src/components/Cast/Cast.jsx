import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo, getCastInfoObj } from 'services/getMovies';
import CastGallery from './CastGallery/CastGallery';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    getCastInfo(movieId)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error in request: ${response.status}`);
        }
        setCastInfo(getCastInfoObj(response.data.cast));
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {castInfo.length ? (
        <CastGallery cast={castInfo} />
      ) : (
        <h3>Oops! There is no info here...</h3>
      )}
    </div>
  );
};
export default Cast;
