import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render (){
        const {collections} = this.state;
        return(
            <div>
                {collections.map(({id, ...otherColletionProps}) => (
                <CollectionPreview key={id} {...otherColletionProps} /> ) )}
            </div>
        )
    }
}

export default ShopPage;