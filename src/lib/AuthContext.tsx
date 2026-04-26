import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'couple' | 'planner' | 'family' | 'friends' | null;

interface User {
  username: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('wedding_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username: string, role: UserRole) => {
    const newUser = { username, role };
    setUser(newUser);
    localStorage.setItem('wedding_user', JSON.stringify(newUser));
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('wedding_user');
    localStorage.removeItem('isLoggedIn');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
