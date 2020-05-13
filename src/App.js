import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import Showcase from './components/Showcase';
import Form from './components/Form';

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
    <Switch>
      <Route path="/home" component={(props)=> <Showcase {...props} fish={fishes}/>} />
      <Route path="/form" exact component={Form} />
      <Redirect from="/" to="/home" />
    </Switch>
    </>
  );
}

export default withRouter(App);
