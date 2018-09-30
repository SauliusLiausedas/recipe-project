import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddRecipe from './pages/add.js'
import Home from './pages/home.js'
import AllRecipes from './pages/all.js'
import Header from './pages/header.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header />
                  <Switch>
                      <Route path="/" component={ Home } exact/>
                      <Route path="/all" component={ AllRecipes } />
                      <Route path="/add" component={ AddRecipe } />
                      <Route component={ Error } />
                  </Switch>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
