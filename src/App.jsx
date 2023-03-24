import { Link, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { LoginPage } from './pages/LoginPage/Login';
import React from 'react';
import { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// // firebase
// import { db } from './firebase-config';
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   getFirestore,
//   doc,
//   getDoc,
// } from 'firebase/firestore';

// import { initializeApp } from 'firebase/app';
// import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';

// console.log('hidd');
// const docRef = doc(db, 'items', '1');
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log('Document data:', docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log('No such document!');
// }

// const itemsCollectionRef = collection(db, 'items');

// getDocs(itemsCollectionRef)
//   .then((querySnapshot) => {
//     const items = [];
//     querySnapshot.forEach((doc) => {
//       items.push(doc.data());
//     });
//     console.log(items);
//   })
//   .catch((error) => {
//     console.log('Error getting documents: ', error);
//   });

function App() {
  return (
    <div>
      <nav>
        <Link to="/home ">Home</Link> | <Link to="/login">Login</Link> |{' '}
        <Link to="/sign_up">회원가입</Link> |{' '}
        <Link to="/planet_hospital">식물병원</Link> |{' '}
        <Link to="/planet_market">식물마켓</Link> |{' '}
        <Link to="/cart">장바구니</Link> |{' '}
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route path="/sign_up" element={<Sign_up />}></Route>
        <Route path="/planet_hospital" element={<Planet_hospital />}></Route>
        <Route path="/Planet_market" element={<Planet_market />}></Route>
        <Route path="/cart" element={<Cart />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
