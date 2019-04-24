import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Character from './components/Character'
import Planet from './components/Planet'

function App() {
  return (
    <>
    <div style={{
      backgroundImage: "url(https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif)", 
      width: "100%", 
      height: "1250px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
      }} >
     
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
     
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/character/:name" component={Character}/>
            <Route exact path="/planet/:name" component={Planet}/>
        </Switch>

    </div>

    </>
  );
}

export default App;
