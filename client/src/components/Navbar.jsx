import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background-color: #4CAF50;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding: 10px 20px;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;

const NavLinks = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>HabitFlow</Logo>
      <NavLinks>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
