import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Addons extends Component {
	FoodItems = [
		{
			name: 'Bacon',
			price: '3',
		},
		{
			name: 'Toast',
			price: '2.5',
		},
		{
			name: 'French Fries',
			price: '3',
		},
		{
			name: 'Sausage',
			price: '3',
		},
		{
			name: 'Muffin',
			price: '2.5',
		},
		{
			name: 'Home Fries',
			price: '3',
		},
		{
			name: 'Peameal',
			price: '4',
		},
		{
			name: 'Egg',
			price: '1.5',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.name} item={item} />
		})
		return (
			<div>
				<div className='menu-name'>
					<p>Add-ons and Extras</p>
				</div>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
