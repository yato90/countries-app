import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryByName } from '../api';
import { Alert, Spinner, Card } from 'react-bootstrap';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountryByName(name);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [name]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!country) return <Alert variant="warning">Country not found</Alert>;

  return (
    <Card>
      <Card.Img variant="top" src={country.flags.png} alt={`Flag of ${country.name.common}`} height={380}/>
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>Capital: {country.capital}</Card.Text>
        <Card.Text>Flag: {country.flag}</Card.Text>
        <Card.Text>Population: {country.population}</Card.Text>
        <Card.Text>Capital: {country.capital}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryDetail;
