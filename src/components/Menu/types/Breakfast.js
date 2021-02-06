import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Breakfast extends Component {
	FoodItems = [
		{
			name: 'Full Breakfast',
			price: '7',
			desc: 'Two eggs done any way you like, home fries and toast',
		},
		{
			name: 'The Bubba',
			price: '14',
			desc:
				'Three strips of bacon, two sausages, and a slice of ham. Two pancakes, two eggs, home fries and toast. Add substitute peameal for 1 protein 2',
		},
		{
			name: 'Carnivore',
			price: '9',
			desc:
				'Your choice of bacon, ham or sausage. Two eggs, home fries and toast',
		},
		{
			name: 'Smoothies',
			price: '5.5',
			desc:
				'On the run? Try one of our fresh smoothies. Your choice of Mango/Pineapple or Strawberry/Banana. Add protein 1',
		},
		{
			name: 'Cakes or Toast',
			price: '8',
			desc:
				'Your choice of a three-stack of fluffy pancakes or our delicious French toast. Served with a side of homefries',
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
