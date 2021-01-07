import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class RiceBowls extends Component {
	riceBowls = [
		{
			name: 'Butter Chicken ',
			price: '$ 12.99',
			desc: 'Description',
		},
		{
			name: 'Chilli Chicken',
			price: '$ 11.99',
			desc: 'Description',
		},
		{
			name: 'Malai Paneer',
			price: '$ 10.49',
			desc: 'Description',
		},
		{
			name: 'Chilli Paneer ',
			price: '$ 10.99',
			desc: 'Description',
		},
	]

	wraps = [
		{
			name: 'Shawarma',
			price: '$ 7.99',
			desc: 'Description',
		},
		{
			name: 'Souvlaki',
			price: '$ 7.99',
			desc: 'Description',
		},
		{
			name: 'Veggie',
			price: '$ 6.99',
			desc: 'Description',
		},
	]

	render() {
		const RiceBowls = this.riceBowls.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		const Wraps = this.wraps.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Rice Bowls</p>
				</div>
				<div className='menu-wrapper'>{RiceBowls}</div>

				<div className='menu-name'>
					<p>Wraps</p>
				</div>
				<div className='menu-wrapper'>{Wraps}</div>
			</div>
		)
	}
}
