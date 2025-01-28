import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  
    useEffect(() => {``
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
  
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
    }, []);
  
    const login = (userData, jwtToken) => {
      setUser(userData);
      setToken(jwtToken);
  
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', jwtToken);
    };
  
    const logout = () => {
      setUser(null);
      setToken(null);
  
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    };
  
    return (
      <AuthContext.Provider value={{ user, token, login, logout }}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;