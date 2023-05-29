import styled from '@emotion/styled';

export const CastGalleryItemCard = styled.li`
  cursor: pointer;
  transition: all 250ms linear;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  height: 100%;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    height: 90%;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 80%;
    }
  }
  & div {
    padding: 10px;
  }
  & h4,
  & p {
    margin-bottom: 0;
    margin-top: 5px;
    padding: 0;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;
