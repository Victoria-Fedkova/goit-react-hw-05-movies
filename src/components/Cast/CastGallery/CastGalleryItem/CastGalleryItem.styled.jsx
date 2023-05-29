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
    height: 80%;
    object-fit: cover;
  }
  & div {
    padding: 5px;
  }
  & h4 {
    margin: 0;
    padding: 0;
  }
`;
