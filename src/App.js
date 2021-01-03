import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    	<Header />
    	<BrowserRouter>
        <main className="page-wrapper">
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Redirect from='*' to='/'/>
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
