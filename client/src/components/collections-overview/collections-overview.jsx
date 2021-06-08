import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { createStructuredSelector} from 'reselect';
import  CollectionPreview  from '../preview-collection/collection-preview.component';

import './collections-overview.stylee.scss';

const CollectionsOverview = ({collections}) =>(
    <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps}) =>( 
        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);