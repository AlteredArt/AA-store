import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop';
import Header from './component/header/header';
import EntryPage from './page/entry/entry';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <h1 className="title">Altered Art</h1>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={EntryPage}/>

      </Switch>
    </div>
  );
}
}

export default App;
