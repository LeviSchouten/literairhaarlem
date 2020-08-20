import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import Home from './pages/home/home.page.jsx';
import Over from './pages/over/over.page.jsx';
import Agenda from './pages/agenda/agenda.page.jsx';

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch className="linked-content">
            <Route exact path="/" component={Home} />
            <Route path="/over" component={Over} />
            <Route path="/agenda" component={Agenda} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
