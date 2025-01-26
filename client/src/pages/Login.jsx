import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007BFF;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      localStorage.setItem('token', response.data.token);

      alert('Login successful!');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
