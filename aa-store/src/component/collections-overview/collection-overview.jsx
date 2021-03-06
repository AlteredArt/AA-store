import React from 'react';
import './collection-overview.scss';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);