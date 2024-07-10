import { useState } from 'react'
import DisplayComponent from './DisplayComponent'
import useFetchData from './useDataFetch';
import LoginScreen from './LoginScreen';
function App() {

  return (
      <LoginScreen></LoginScreen>  
  );
}

export default App

//import MapComponent from './MapComponent'


/*

  const { data, loading, error } = useFetchData('http://127.0.0.1:5000/api/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex justify-center items-center h-screen bg-slate-100 p-5'>
      {data.slice(0, 3).map((locationData, index) => (
        <DisplayComponent key={index} data={locationData} />
      ))}
    </div>
  );





*/
