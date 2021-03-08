import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Omelettes extends Component {
	FoodItems = [
		{
			name: 'Diced Bacon',
		},
		{
			name: 'Sausage',
		},
		{
			name: 'Peameal',
		},
		{
			name: 'Extra Cheese',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Bubba’s Famous Omelettes</p>
				</div>
				<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
					<strong>
						We start with three large Canadian Eggs, add a pile of shredded
						cheddar cheese served with home fries and toast 9
					</strong>
				</h6>
				<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
					Choose any three your fresh toppings :
					<strong style={{ textTransform: 'uppercase' }}>
						Tomato, onion, green/red pepper, baby spinach
					</strong>
				</h6>
				<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
					<strong>Add any of the following for 2 each</strong>
				</h6>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
