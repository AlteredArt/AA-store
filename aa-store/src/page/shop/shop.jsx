import React from 'react';
import CollectionOverview from '../../component/collections-overview/collection-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import {firestore} from '../../firebase/firebase.utils'

class ShopPage extends React.component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot =>)
  }

  render() {

    const {match} = this.props;

    return ( 
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
  }
}




export default ShopPage;