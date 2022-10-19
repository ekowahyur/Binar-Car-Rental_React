import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route /> */}
        {/* <Route /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
