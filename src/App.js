import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import TechStack from './components/TechStack';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <TechStack />
      <Wishlist />
      <Footer />
    </div>
  );
}

export default App;