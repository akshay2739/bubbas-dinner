import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Poutine extends Component {
	Poutine = [
		{
			name: 'Classic ',
			price: '8',
			desc:
				'A Canadian favorite golden fries smothered in Cheese Curds and gravy',
		},
		{
			name: 'Shawarma',
			price: '11',
			desc:
				'Our golden fries topped with cheese, seasoned shredded chicken and our inhouse Shawarma sauce that will make you go mmm…',
		},
		{
			name: 'Butter Chicken',
			price: '12',
			desc:
				'Crispy fries topped with cheese and butter chicken that will make you come back again and again',
		},
		{
			name: 'Greek',
			price: '9',
			desc:
				'Our golden fries topped with creamy tzatziki sauce, diced tomatoes, cucumber & onion and finished off with feta cheese',
		},
	]

	chikenWings = [
		{
			name: '8 Wings',
			price: '11',
		},
		{
			name: '16 Wings',
			price: '21',
		},
		{
			name: '24 Wings',
			price: '30',
		},
		{
			name: '8 Butter Chicken Wings',
			price: '15',
			desc:
				'Chicken wings sautéed in creamy butter chicken gravy (Additional 8 Wings for 10)',
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
					<p>Bubba's Famous Jumbo Wings</p>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						Your choice of mild, medium, hot, honey garlic, or BBQ
					</h6>
					<h6 style={{ fontSize: 14, textAlign: 'center' }}>
						Add a side of fries 3
					</h6>
				</div>
				<div className='menu-wrapper'>{ChikenWings}</div>
			</div>
		)
	}
}
