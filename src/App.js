import React from 'react';
import Advanced from './components/Advanced/Advanced';
import Banner from './components/Banner/Banner';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Advanced />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
