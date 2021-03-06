import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Sandwiches extends Component {
	FoodItems = [
		{
			name: 'BLT Wrap',
			price: '2',
			desc: 'Thick sliced bacon, crispy lettuce and sliced tomato',
		},
		{
			name: 'Western Sandwich/Wrap',
			price: '8',
			desc: 'Two eggs, diced ham, sautéed onion & cheddar cheese',
		},
		{
			name: 'The ABC',
			price: '10',
			desc:
				'Sure to be a fan favourite… sliced apple, thick cut bacon and cheddar cheese grilled to a golden perfection. This is how Bubba does a grilled cheese!',
		},
		{
			name: 'Chicken Souvlaki',
			price: '12',
			desc:
				'Bubba will have you saying OPA! With this one. Marinated chicken, feta cheese, diced tomatoes & onion and our creamy tzatziki sauce',
		},
		{
			name: 'Shawarma',
			price: '12',
			desc:
				"Shredded chicken seasoned with inhouse spices. Served with fresh veggies and pickles. But don't forget our famous garlic sauce!",
		},
		{
			name: 'Basic Burger',
			price: '10',
			desc:
				'We start with one of our fresh chuck patties and add lettuce, tomato, onion and pickle. Nothing fancy, but oh so good!',
		},
		{
			name: 'Veggie Wrap',
			price: '10',
			desc:
				'Grilled vegetables and your choice of sauce take this veggie treat to the next level',
		},
		{
			name: 'Bubba Burger',
			price: '14',
			desc:
				'Put on your comfy pants for this guy... two chuck patties, thick cut bacon, sautéed mushrooms & cheddar cheese',
		},
	]
	render() {
		const foodItems = this.FoodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})
		return (
			<div>
				<div className='menu-name'>
					<p>Sandwiches Burgers &amp; Wraps</p>
				</div>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					<strong>
						Served all day long! Come with your choice of home fries or French
						fries or side garden salad.
					</strong>
				</h6>
				<h6 style={{ fontSize: 14, textAlign: 'center' }}>
					Substitute Caesar or Greek salad for 1
				</h6>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}
