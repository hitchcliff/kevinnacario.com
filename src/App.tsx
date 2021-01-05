import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Header } from './app/index';
import AppRoutes from './routes/App.routes';
import './styles/main.css';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

function App() {
  gsap.registerPlugin(CSSPlugin);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="*" component={AppRoutes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
