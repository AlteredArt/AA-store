import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop';
import Header from './component/header/header';
import EntryPage from './page/entry/entry';
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './page/checkout/checkout';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';

const ExampleCSS = styled.div`
  color: red;
  font-size: 2rem;
  border: ${({isActive}) => isActive ? '1xp solid black' : '3px dotted green'}
`;

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionsAndDocuments('collections', collectionsArray);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className="App">
      <Header/>
      <h1 className="title">Altered Art</h1>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/checkout" component={CheckoutPage}/>

        <Route 
          exact 
          path="/signin" 
          render={() => this.props.currentUser ? 
            (<Redirect to ='/' />)
            :
            (<EntryPage/>)
          }/>

      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview

});  

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps )(App);
