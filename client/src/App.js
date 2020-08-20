import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import Home from './pages/home/home.page.jsx';
import Over from './pages/over/over.page.jsx';

import './App.scss';
import axios from 'axios';

axios.get('api/events').then(console.log);

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/over" component={Over} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
