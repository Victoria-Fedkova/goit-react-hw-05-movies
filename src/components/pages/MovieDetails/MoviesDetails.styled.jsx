import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageWraper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const AddWrapper = styled.div`
  border-top: 1px solid #1e96c8;
  border-bottom: 1px solid #1e96c8;

  & ul {
    list-style-type: none;
    padding: 0 0 0 40px;
    margin: 10px 0 0 0;
    display: flex;
    gap: 10px;
    margin-bottom: 40px;

    & li {
      display: inline;
      color: #1e96c8;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 18px;
      padding: 0 40px 0 0;
      transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
      & a {
        text-decoration: none;
      }
    }
  }
  & p,
  & h3 {
    color: #1e96c8;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    /* padding: 0 40px 0 40px; */
    /* letter-spacing: 1px; */
    /* margin: 10px 0 10px 0; */
    /* line-height: 20px; */
  }
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;

  width: 120px;
  margin-right: auto;
  margin-bottom: 10px;
  background-image: linear-gradient(-180deg, #0dccea 0%, #1e96c8 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: all 350ms linear;

  &:hover,
  &:focus {
    background-image: linear-gradient(-90deg, #1e96c8 0%, #0dccea 100%);
  }
`;
