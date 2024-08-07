import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/countries-app/" element={<HomePage />} />
        <Route path="/countries-app/country/:name" element={<CountryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
