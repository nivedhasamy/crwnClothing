import React from 'react';
import SHOP_DATA from './shot.data.js';
import CollectionPreview from '../../components/previewCollection/previewCollection.component';


class ShopPage extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			collections : SHOP_DATA,
		}

	}
	render () {
		const {collections} = this.state;
		return (
			<div className="shopPage">{
				collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview key={id} {...otherCollectionProps}/>
					))
			}</div>)
	}
}

export default ShopPage;