import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryItemCard = styled.li`
  cursor: pointer;
  transition: all 250ms linear;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  position: relative;
  height: 100%;
  overflow: hidden;

  &:hover div {
    transform: translateY(0);
  }
`;
export const GalleryCardInfo = styled.div`
  background-color: #20141491;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  transform: translateY(100%);
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
export const GalleryLink = styled(Link)`
  text-decoration: none;
  color: #0dccea;
`;

export const GalleryImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
