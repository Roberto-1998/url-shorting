import React from 'react';
import Banner from './components/Banner/Banner';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
