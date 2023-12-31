import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);
  useEffect(() => {
    let access = localStorage.getItem('access_token');
    if (access) {
      let decoded = jwtDecode(access);
      console.log('jashshs', decoded);
      let userObj = {
        id: decoded.user_id,
        userName: decoded.username,
        avatar: decoded.avatar,
      };
      console.log(userObj);
      setUser(userObj);
      setTokens(access);
    } else {
      setUser(false);
    }
  }, [tokens]);

  return (
    <AuthContext.Provider value={{ user, setUser, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
