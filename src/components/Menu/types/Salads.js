import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Salads extends Component {
	salads = [
		{
			name: 'Garden Salad',
			price: '$ 5.99',
			desc: 'Description',
		},
		{
			name: 'Greek Salad',
			price: '$ 6.99',
			desc: 'Description',
		},
		{
			name: 'Cesar Salad',
			price: '$ 5.49',
			desc: 'Description',
		},
	]

	drinks = [
		{
			name: 'Bottle Juice',
			price: '$ 2.29',
			desc: 'Apple, Orange, Lemonade & Fruit Punch',
		},
		{
			name: 'Pop can',
			price: '$ 1.49',
			desc: 'Description',
		},
		{
			name: 'Smoothies',
			price: '$ 5.49',
			desc: 'Mango & Pineapple or Strawberry & Banana',
		},
		{
			name: 'Coffee / Tea',
			price: '$ 1.79',
			desc: 'Description',
		},
	]

	render() {
		const Salads = this.salads.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		const Drinks = this.drinks.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Salads</p>
				</div>
				<div className='menu-wrapper'>{Salads}</div>

				<div className='menu-name'>
					<p>Drinks</p>
				</div>
				<div className='menu-wrapper'>{Drinks}</div>
			</div>
		)
	}
}
