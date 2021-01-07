import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Poutine extends Component {
	Poutine = [
		{
			name: 'Butter Chicken',
			price: '$ 7.49',
			desc: 'Description',
		},
		{
			name: 'Shawarma',
			price: '$ 7.49',
			desc: 'Description',
		},
		{
			name: 'Classic ',
			price: '$ 6.99',
			desc: 'Description',
		},
	]

	chikenWings = [
		{
			name: '8 Wings',
			price: '$ 10.99',
			desc: 'Description',
		},
		{
			name: '16 Wings',
			price: '$ 20.99',
			desc: 'Description',
		},
		{
			name: '24 Wings',
			price: '$ 29.99',
			desc: 'Description',
		},
	]

	render() {
		const poutine = this.Poutine.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		const ChikenWings = this.chikenWings.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Poutine</p>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						(Add Chicken for $2)
					</h6>
				</div>
				<div className='menu-wrapper'>{poutine}</div>

				<div className='menu-name'>
					<p>Chicken Wings</p>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						(Hot, BBQ or Honey Garlic)
					</h6>
				</div>
				<div className='menu-wrapper'>{ChikenWings}</div>
			</div>
		)
	}
}
