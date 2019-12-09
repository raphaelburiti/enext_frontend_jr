import React from 'react';
import './App.css';

import Header from '../src/components/Header'
import Menu from '../src/components/Menu'
import Products from '../src/components/Products'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
