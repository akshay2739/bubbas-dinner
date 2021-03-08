import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Salads extends Component {
	salads = [
		{
			name: 'Garden Variety',
			price: '7',
			desc: 'Mixed greens, baby spinach, tomato, red onion and cucumber',
		},
		{
			name: 'All Hail Caesar',
			price: '8',
			desc:
				'Crisp romaine lettuce mixed with bacon bits, croutons and served with our creamy Caesar dressing',
		},
		{
			name: 'Greek-Style',
			price: '10',
			desc:
				'Garden fresh tomatoes, red onions, mixed peppers, baby spinach and cucumbers, topped with kalamata olives, feta cheese and our house herb dressing',
		},
	]

	// drinks = [
	// 	{
	// 		name: 'Bottle Juice',
	// 		price: '2.5',
	// 		desc: 'Apple, Orange, Lemonade & Fruit Punch',
	// 	},
	// 	{
	// 		name: 'Pop can',
	// 		price: '1.5',
	// 	},
	// 	{
	// 		name: 'Smoothies',
	// 		price: '5.5',
	// 		desc: 'Mango & Pineapple or Strawberry & Banana',
	// 	},
	// 	{
	// 		name: 'Coffee / Tea',
	// 		price: '1.8',
	// 	},
	// ]

	render() {
		const Salads = this.salads.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		// const Drinks = this.drinks.map((item) => {
		// 	return <FoodItem key={item.id} item={item} />
		// })

		return (
			<div>
				<div className='menu-name'>
					<p>Classic Salads</p>
					<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
						Dinner sized salads served with your choice of dressings
					</h6>
					<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
						Add chicken to any salad 3
					</h6>
				</div>
				<div className='menu-wrapper'>{Salads}</div>

				{/* <div className='menu-name'>
					<p>Drinks</p>
				</div>
				<div className='menu-wrapper'>{Drinks}</div> */}
			</div>
		)
	}
}
