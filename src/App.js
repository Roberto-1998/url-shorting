import React from 'react';
import Advanced from './components/Advanced/Advanced';
import Banner from './components/Banner/Banner';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LinkProvider from './context/LinkContext';

const App = () => {
  return (
    <LinkProvider>
      <Navbar />
      <Banner />
      <Advanced />
      <Boost />
      <Footer />
    </LinkProvider>
  );
};

export default App;
