import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Omelettes extends Component {
	FoodItems = [
		{
			name: 'Tomato',
			price: '1',
		},
		{
			name: 'Onion',
			price: '1',
		},
		{
			name: 'Green pepper',
			price: '1',
		},
		{
			name: 'Mushroom',
			price: '1',
		},
		{
			name: 'Kalamata olive',
			price: '1',
		},
		{
			name: 'Baby spinach',
			price: '1',
		},
		{
			name: 'Extra cheese',
			price: '2',
		},
		{
			name: 'Feta cheese',
			price: '2',
		},
		{
			name: 'Diced ham',
			price: '2',
		},
		{
			name: 'Diced bacon',
			price: '2',
		},
		{
			name: 'Diced sausage',
			price: '2',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Omelettes</p>
				</div>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					We start with three large Canadian Eggs, add a pile of shredded
					cheddar cheese served with home fries and toast at 8.5
				</h6>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					<strong>Add-ons</strong>
				</h6>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
