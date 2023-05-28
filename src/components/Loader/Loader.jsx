import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0dccea"
        ariaLabel="three-dots-loading"

        // wrapperStyle
        // wrapperClass
      />
    </Wrapper>
  );
};
export default Loader;
