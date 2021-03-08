import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class RiceBowls extends Component {
	riceBowls = [
		{
			name: 'Butter Chicken ',
			price: '14',
			desc:
				'Marinated boneless grilled Chicken simmered in tomato gravy, finished with dried fenugreek, cream and honey. (Served with Naan bread and house salad)',
		},
		{
			name: 'Paneer Delight',
			price: '14',
			desc:
				'Soft pieces of cottage cheese in creamy tomato sauce with Indian Spices. (Served with Naan bread and house salad)',
		},
		{
			name: 'Chilli Chicken',
			price: '14',
			desc:
				'Battered Boneless chicken with Spicy blend of chillis, onion, garlic and ginger',
		},
		{
			name: 'Chilli Paneer ',
			price: '14',
			desc:
				'Battered cottage cheese tossed with chilli, ginger and spring onions',
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

				<div className='menu-name'>
					<p>I Sea, You Sea, We All Sea Fish And Chips</p>
					<h6
						className='description'
						style={{
							textAlign: 'center',
						}}
					>
						Juicy from the inside, gold &amp; crispy from the outside.
					</h6>
					<h6
						className='description'
						style={{
							textAlign: 'center',
						}}
					>
						Try our battered Haddock fish &amp; golden chips along with our
						creamy coleslaw salad &amp; tartar sauce 15
					</h6>
				</div>
				{/* <div className='menu-name'>
					<p>Wraps</p>
				</div>
				<div className='menu-wrapper'>{Wraps}</div> */}
			</div>
		)
	}
}
