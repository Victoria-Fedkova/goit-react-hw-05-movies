import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin-right: 0;
  margin-left: 0;

  & li {
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    @media (min-width: 768px) {
    }
    @media (min-width: 1280px) {
    }

    & img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      object-fit: cover;
      object-position: center;
    }
    & div {
      display: flex;
    }
    & h4 {
      color: #1e96c8;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
    }
    & span {
      color: #979797;
      font-size: 0.8rem;
    }
    & p {
      font-size: 0.9rem;
      color: #4b4b4b;
    }
  }
`;
