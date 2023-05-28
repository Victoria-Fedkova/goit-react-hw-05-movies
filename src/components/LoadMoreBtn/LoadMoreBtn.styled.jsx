import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: inline-block;
  margin: auto;
  margin-bottom: 30px;
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
