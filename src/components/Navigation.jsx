import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 800;
  &.active {
    color: #ed9e0a;
  }
`;

export default function Navigation() {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies" style={{ marginLeft: '10px' }}>
          Movies
        </StyledLink>
      </nav>
    </>
  );
}
