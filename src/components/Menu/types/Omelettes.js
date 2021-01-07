import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Omelettes extends Component {
	FoodItems = [
		{
			name: 'Deluxe ',
			price: '$ 11.99',
			desc: 'Ham, Tomatoes, Onion, Green Peppers, Mushroom & Cheese',
		},
		{
			name: 'Denver  ',
			price: '$ 10.99',
			desc: 'Ham, Onion, Green Pepper & Cheese',
		},
		{
			name: 'Eastern ',
			price: '$ 9.99',
			desc: 'Ham & Cheese',
		},
		{
			name: 'Western  ',
			price: '$ 9.99',
			desc: 'Ham, Onion & Cheese',
		},
		{
			name: 'Veggie',
			price: '$ 10.99',
			desc: 'Tomatoes, Onion, Green Peppers, Mushroom & Cheese',
		},
	]

	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Omelettes (Takeout only)</p>
				</div>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					<strong>Takeout only</strong>
				</h6>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					(With Coffee, Tea, Toast &amp; Homefries)
				</h6>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
