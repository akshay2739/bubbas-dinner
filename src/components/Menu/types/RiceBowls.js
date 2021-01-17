import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class RiceBowls extends Component {
	riceBowls = [
		{
			name: 'Butter Chicken ',
			price: '14',
			desc:
				'Marinated boneless grilled Chicken simmered in tomato gravy, finished with dried fenugreek, cream and honey',
		},
		{
			name: 'Chilli Chicken',
			price: '14',
			desc:
				'Battered Boneless chicken with Spicy blend of Chillis, onion, garlic and ginger',
		},
		{
			name: 'Malai Paneer',
			price: '12',
			desc:
				'Soft pieces of cottage cheese in creamy tomato sauce with Indian Spices',
		},
		{
			name: 'Chilli Paneer ',
			price: '12',
			desc:
				'Battered cottage cheese tossed with chili, ginger and spring onion',
		},
	]

	// wraps = [
	// 	{
	// 		name: 'Shawarma',
	// 		price: '$ 7.99',
	// 		desc: 'Description',
	// 	},
	// 	{
	// 		name: 'Souvlaki',
	// 		price: '$ 7.99',
	// 		desc: 'Description',
	// 	},
	// 	{
	// 		name: 'Veggie',
	// 		price: '$ 6.99',
	// 		desc: 'Description',
	// 	},
	// ]

	render() {
		const RiceBowls = this.riceBowls.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		// const Wraps = this.wraps.map((item) => {
		// 	return <FoodItem key={item.id} item={item} />
		// })

		return (
			<div>
				<div className='menu-name'>
					<p>Rice Bowls</p>
				</div>
				<div className='menu-wrapper'>{RiceBowls}</div>

				{/* <div className='menu-name'>
					<p>Wraps</p>
				</div>
				<div className='menu-wrapper'>{Wraps}</div> */}
			</div>
		)
	}
}
