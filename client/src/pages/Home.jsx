import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: #007BFF;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-child(2) {
    background-color: #4caf50;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const HomePage = () => {
  return (
    <><Navbar />
    <HomeContainer>
      <Title>Welcome to HabitFlow</Title>
      <Subtitle>Your journey to better habits starts here.</Subtitle>
      <ButtonGroup>
        <Button to="/login">Login</Button>
        <Button to="/register">Register</Button>
      </ButtonGroup>
    </HomeContainer>
    </>
  );
};

export default HomePage;
