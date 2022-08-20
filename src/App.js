import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ModifyPage from './pages/ModifyPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';
import RouteChangeTracker from './RouteChangeTracker';

let isLogin = localStorage.getItem('token');
function App() {
  RouteChangeTracker();
  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <Navigate replace to="/todo" /> : <LoginPage />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/todo"
        element={isLogin ? <TodoPage /> : <Navigate replace to="/" />}
      />
      <Route path="/todo/modify/:id" element={<ModifyPage />} />
    </Routes>
  );
}

export default App;
