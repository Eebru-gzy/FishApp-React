import React, {useEffect, useState} from 'react';
import './App.css';
import Showcase from './components/Showcase';
import Cards from './components/Cards';

function App() {
  const [fishes, setFishes] = useState([]); 

  useEffect(()=> {
    const getData = async ()=> {
      const res = await fetch('http://localhost:2900/fishes');
      const data = await res.json();
      setFishes(data);
    }
    getData();
  }, []);
  return (
    <>
      <Showcase />
      <Cards data={fishes} />
    </>
  );
}

export default App;
