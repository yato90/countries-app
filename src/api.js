import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching countries');
  }
};

export const fetchCountryByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    return response.data[0];
  } catch (error) {
    throw new Error('Error fetching country details');
  }
};
