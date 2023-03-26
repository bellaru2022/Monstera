import { Link, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/Login';
import { RegisterPage } from './pages/RegisterPage/Register';
import React from 'react';
import { useEffect } from 'react';
import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { Diagnosis } from './pages/Diagnosis/Diagnosis';
import { Cart } from './pages/Cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
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
