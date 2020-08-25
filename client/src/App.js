import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import Home from './pages/home/home.page.jsx';
import Over from './pages/over/over.page.jsx';
import Agenda from './pages/agenda/agenda.page.jsx';

import './App.scss';
import Evenement from './pages/evenement/evenement.page.jsx';
import Informatie from './pages/informatie/informatie.page.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch className="linked-content">
            <Route exact path="/" component={Home} />
            <Route path="/over" component={Over} />
            <Route exact path="/agenda" component={Agenda} />
            <Route path="/agenda/:id" component={Evenement} />
            <Route
              exact
              path="/haarlemsemuren/informatie"
              component={Informatie}
            />
            <Route exact path="/haarlemsemuren/muren">
              muren
            </Route>
            <Route exact path="/haarlemsemuren/insturen">
              insturen
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
