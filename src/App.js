import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './navBar';
import CarouselComp from './carousel';
import Cards from './cards';
import Footer from './footer';


function App() {
  return (
    <div>
      <NavBar />
      <CarouselComp />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
