import React from 'react';
import './collection.scss';
import collectionItem from '../../component/collection-item/collection-item';
import {connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({match}) => {
    console.log(collection);    
    return(
    <div className="collection">
        <h2>Collection Page</h2>
    </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);