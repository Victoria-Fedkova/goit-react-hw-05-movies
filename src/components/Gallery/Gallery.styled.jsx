import styled from '@emotion/styled';

export const GalleryGrid = styled.ul`
  max-width: 1280px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;

  display: grid;
  grid-template-columns: repeat(1, minmax(210, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(210, 1fr));
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(336px, 1fr));

    grid-template-rows: repeat(auto-fit, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 302px);
    grid-template-rows: repeat(auto-fit, 204px);
    grid-template-rows: auto;

    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;
