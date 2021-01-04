import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Header } from './app/index';
import { Loading } from './components';
import AppRoutes from './routes/App.routes';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Loading />
      <Switch>
        <Route path="*" component={AppRoutes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
