import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  width: 100%;
  height: 70px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 30px; */
  background-image: linear-gradient(#0dccea, #1e96c8);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  margin-bottom: 12px;
`;
export const NavLinks = styled(NavLink)`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
  margin-right: 10px;
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &.active {
    border-bottom: 2px solid #efefef;
    font-weight: 500;
  }
`;