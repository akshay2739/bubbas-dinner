import React, { Component } from 'react'
import './FoodItem.css'

export default class FoodItem extends Component {
	render() {
		const item = this.props.item
		return (
			<div className='food-card'>
				<div className='food-card-header'>
					<h1 className='item-name'>{item.name} </h1>
					{item.desc && item.desc ? (
						''
					) : (
						<h1 className='item-price'>{item.price}</h1>
					)}
				</div>
				{item.desc ? (
					<div className='description'>
						{item.desc}
						<span style={{ marginLeft: 12 }}>
							{item.desc && item.desc ? item.price : ''}
						</span>
					</div>
				) : null}
			</div>
		)
	}
}
