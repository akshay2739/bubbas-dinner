import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Addons extends Component {
	FoodItems = [
		{
			name: 'Bacon, Ham or Sausage',
			price: '3',
		},
		{
			name: 'Toast, muffin or croissant',
			price: '2.5',
		},
		{
			name: 'Ege',
			price: '1.5',
		},
		{
			name: 'Peameal',
			price: '4',
		},
		{
			name: 'Home fries',
			price: '3',
		},
		{
			name: 'Side fries',
			price: '3',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.name} item={item} />
		})
		return (
			<div>
				<div className='menu-name'>
					<p>Addons</p>
				</div>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
