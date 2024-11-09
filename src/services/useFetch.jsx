import axios from 'axios'
import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      localStorage.getItem('questions') ? (setData(JSON.parse(localStorage.getItem('questions'))), setLoading(false)) :
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return { data, loading, error };
}
