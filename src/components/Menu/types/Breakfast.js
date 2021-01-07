import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Breakfast extends Component {
	FoodItems = [
		{
			name: 'Quick Breakfast',
			price: '$ 2.99',
			desc: 'Bagel, 2 toasts, muffin or croissant',
		},
		{
			name: 'Full Breakfast',
			price: '$ 6.99',
			desc: '2 eggs, toast, homefries',
		},
		{
			name: 'Sweet Breakfast ',
			price: '$ 7.49',
			desc: 'Pancake or French toast, homefries',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.name} item={item} />
		})
		return (
			<div>
				<div className='menu-name'>
					<p>Breakfast</p>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						<strong>Takeout</strong> (With Coffee/tea)
					</h6>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						Add Bacon or Ham or Sausage for $1.99
					</h6>
				</div>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
