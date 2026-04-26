import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './screens/Home';
import { Camera } from './screens/Camera';
import { Info } from './screens/Info';
import { Feed } from './screens/Feed';
import { Profile } from './screens/Profile';
import { Login } from './screens/Login';
import { EssentialsHub } from './screens/EssentialsHub';
import { MeetThePeople } from './screens/MeetThePeople';
import { Gallery } from './screens/Gallery';
import { Gifts } from './screens/Gifts';
import { Games } from './screens/Games';
import { ReelIdeas } from './screens/ReelIdeas';
import { AuthProvider, useAuth } from './lib/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedRoles && user && !allowedRoles.includes(user.role || '')) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const HomeRedirect = () => {
  return <Home />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomeRedirect />} />
            <Route 
              path="camera" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Camera />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="info" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Info />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="feed" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Feed />
                </ProtectedRoute>
              } 
            />
            <Route path="profile" element={<Profile />} />
            <Route 
              path="essentials" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <EssentialsHub />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="people" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <MeetThePeople />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="gallery" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Gallery />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="gifts" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Gifts />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="games" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <Games />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="reel-ideas" 
              element={
                <ProtectedRoute allowedRoles={['couple', 'family', 'friends']}>
                  <ReelIdeas />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
