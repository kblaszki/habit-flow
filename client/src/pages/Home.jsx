import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #45a049;
  }
`;

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>HabitFlow</Title>
        <Subtitle>Manage your habits effective</Subtitle>
        <Button>Start</Button>
      </Container>
    </>
  );
};

export default HomePage;