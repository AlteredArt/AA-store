import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop';
import Header from './component/header/header';
import EntryPage from './page/entry/entry';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="title">Altered Art</h1>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/entry" component={EntryPage}/>

      </Switch>
    </div>
  );
}

export default App;
