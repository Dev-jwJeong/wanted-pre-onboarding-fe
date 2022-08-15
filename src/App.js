import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

let isLogin = localStorage.getItem('token');
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <Navigate replace to="/todo" /> : <LoginPage />}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
