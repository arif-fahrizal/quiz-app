import { useFetch } from "../services/useFetch";

function TestPage() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data[0])


  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestPage;
