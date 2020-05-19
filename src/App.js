import React from 'react';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './style.css'


function App() {
  return (
    <div className="flex-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
