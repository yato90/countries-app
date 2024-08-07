import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../api';
import { Alert, Spinner, ListGroup } from 'react-bootstrap';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <ListGroup>
      {countries.map((country) => (
        <ListGroup.Item key={country.cca3}>
          <Link to={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CountryList;
