import { useState, useEffect } from 'react';
// import { FaAngleUp } from 'react-icons/fa';
import { Btn, Icon } from './GoToTopBtn.styled';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Btn className="top-to-btm">
      {' '}
      {showTopBtn && (
        <Icon className="icon-position icon-style" onClick={goToTop} />
      )}{' '}
    </Btn>
  );
};
export default ScrollToTop;
