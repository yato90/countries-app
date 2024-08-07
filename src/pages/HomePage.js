import React from 'react';
import CountryList from '../components/CountryList';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Countries</h1>
      <CountryList />
    </div>
  );
};

export default HomePage;
