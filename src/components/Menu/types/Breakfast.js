import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Breakfast extends Component {
	FoodItems = [
		{
			name: 'Quick Breakfast',
			price: '7',
			desc: 'Two eggs done any way you like, home fries and toast',
		},
		{
			name: 'The Bubba',
			price: '15',
			desc:
				'Three strips of thick bacon, two sausages, and a slice of our thick cut peameal, two pancakes, two eggs, home fries and toast',
		},
		{
			name: 'The Carnivore',
			price: '10',
			desc:
				'Your choice of bacon, peameal or sausage, two eggs, home fries and toast',
		},
		{
			name: 'Smoothies',
			price: '5.5',
			desc:
				'On the run? Try one of our fresh smoothies. Your choice of Mango/Pineapple or Strawberry/Banana.',
		},
		{
			name: 'Cakes or Toast',
			price: '8',
			desc:
				'Your choice of a three-stack of fluffy pancakes or 2 of our delicious French toast. Served with a side of home fries',
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
						Breakfast served daily from 8 AM until 11 AM
					</h6>
					{/* <h6 style={{ fontSize: 14, textAlign: 'center' }}>
						Add Bacon or Ham or Sausage for $1.99
					</h6> */}
				</div>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
