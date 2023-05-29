import styled from '@emotion/styled';

export const CastGalleryGrid = styled.ul`
  max-width: 1280px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;

  display: grid;
  grid-template-columns: repeat(1, minmax(290px, 1fr));
  grid-template-rows: repeat(auto-fit);
  grid-row-gap: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(6, minmax(196px, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-rows: auto;

    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;
