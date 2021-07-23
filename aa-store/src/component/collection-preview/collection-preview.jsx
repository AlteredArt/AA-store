import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.jsx';

const CollectionPreview = ({ title, items }) => (
 <div className="preview-collection">
     <h1 className="preview-title">{title.toUpperCase()}</h1>
     <div className="preview">
            {items.filter((item, idx) => idx < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
     </div>
 </div>
);

export default CollectionPreview;