import styled from '@emotion/styled';
export const HeadingWraper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  & h1 {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #1e96c8;

  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 30px;

  padding: 0 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.35s ease;
  & :focus,
  &:hover,
  &:not(:placeholder-shown) {
    color: #1e96c8;
  }
  &:hover::placeholder {
    color: #1e96c8;
  }
`;

export const SearchBtn = styled.button`
  float: right;
  width: 48px;
  height: 48px;
  top: 0px;
  right: 0px;
  border: none;
  background-color: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.2);
    outline: none;
  }
`;
