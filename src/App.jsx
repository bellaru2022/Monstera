import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { LoginPage } from './pages/LoginPage/Login';
import { RegisterPage } from './pages/RegisterPage/Register';
import { useEffect } from 'react';
import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { Diagnosis } from './pages/Diagnosis/Diagnosis';
import { Cart } from './pages/Cart/Cart';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/diagnosis" element={<Diagnosis />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
