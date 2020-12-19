import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarList = styled.li`
  margin: 0 auto;
  width: 40%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const NavbarLink = styled(NavLink)`
  display: inline-block;
  width: 30px;
  height: 30px;
  color: #888;
  &:hover {
    color: #000;
  }
`;