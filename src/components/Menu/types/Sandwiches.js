import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Sandwiches extends Component {
	FoodItems = [
		{
			name: 'Grilled Cheese',
			price: '$ 4.99',
			desc: 'Grilled Cheese',
		},
		{
			name: 'BLT',
			price: '$ 5.99',
			desc: 'Bacon, Lettuce and Tomato',
		},
		{
			name: 'BLT-A ',
			price: '$ 6.99',
			desc: 'Bacon, Lettuce, Tomato & Avocado ',
		},
		{
			name: 'Eastern',
			price: '$ 6.99',
			desc: 'Ham & Cheese',
		},
		{
			name: 'Western',
			price: '$ 7.49',
			desc: 'Ham, Onion & Cheese',
		},
		{
			name: 'Denver',
			price: '$ 7.99',
			desc: 'Ham, Onion, Green Pepper & Cheese',
		},
		{
			name: 'Veggie',
			price: '$ 7.49',
			desc: 'Tomatoes, Onions, Green Peppers, Mushrooms & Cheese',
		},
		{
			name: 'Deluxe',
			price: '$ 8.49',
			desc: 'Ham, Tomatoes, Onion, Green Peppers, Mushroom & Cheese',
		},
	]
	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})
		return (
			<div>
				<div className='menu-name'>
					<p>Sandwiches &amp; Wraps (Takeout only)</p>
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
