import React from 'react';
import CollectionOverview from '../../component/collections-overview/collection-overview';
import {Route} from 'react-router-dom';

const ShopPage = ({match}) => (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
    </div>
);


export default ShopPage;