import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../../components/Title/Title';
import { PlantList } from '../../containers/PlantList/PlantList';
import { Header } from '../../containers/Header/Header';
import { Footer } from '../../containers/Footer/Footer';
import { Carousel } from '../../components/Carousel/Carousel';

import './home.css';
import { Input } from '../../components/Input/Input';

export const HomePage = () => {
  return (
    <section className="home_container">
      <Header />
      <Carousel />
      <PlantList />
      <Footer />
    </section>
  );
};
